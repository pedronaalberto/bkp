const React = require('react');
const ReactDOMServer = require('react-dom/server');
const { StaticRouter } = require('react-router-dom');
const { renderRoutes } = require('react-router-config');
const routes = require('./routes');

module.exports = function(app) {
  app.get('*', (req, res) => {
    const context = {};
    const html = ReactDOMServer.renderToString(
      <StaticRouter location={req.url} context={context}>
        {renderRoutes(routes)}
      </StaticRouter>
    );
    if (context.url) {
      res.redirect(301, context.url);
    } else {
      res.send(`
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <title>React App</title>
          </head>
          <body>
            <div id="root">${html}</div>
            <script src="/bundle.js"></script>
          </body>
        </html>
      `);
    }
  });
};