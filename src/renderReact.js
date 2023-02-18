const React = require('react');
const ReactDOMServer = require('react-dom/server');
const { createMemoryHistory } = require('history');
const { Router } = require('react-router');
const { renderRoutes } = require('react-router-config');

const routes = require('./routes');

module.exports = function (app) {
  app.get('/', (req, res) => {
    const history = createMemoryHistory({
      initialEntries: [req.url],
    });

    const branch = renderRoutes(routes, req.path);

    const promises = branch.map(({ route, match }) => {
      if (route.loadData) {
        return route.loadData(match);
      }
      return Promise.resolve(null);
    });

    Promise.all(promises).then((data) => {
      const context = { data };
      const html = ReactDOMServer.renderToString(
        <Router history={history}>
          {renderRoutes(routes)}
        </Router>
      );
      res.send(renderFullPage(html, context));
    });
  });
};

function renderFullPage(html, context) {
  return `
    <!doctype html>
    <html>
      <head>
        <title>React SSR Example</title>
      </head>
      <body>
        <div id="app">${html}</div>
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(context.data).replace(
            /</g,
            '\\u003c'
          )}
        </script>
        <script src="/bundle.js"></script>
      </body>
    </html>
  `;
}