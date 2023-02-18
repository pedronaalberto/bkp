const React = require('react');
const ReactDOMServer = require('react-dom/server');
const { Router, createMemoryHistory } = require('react-router');
const { renderRoutes } = require('react-router-config');
const routes = require('./routes');

module.exports = function(app) {
  app.get('/', (req, res) => {
    const history = createMemoryHistory({
      initialEntries: [req.url],
    });
    const html = ReactDOMServer.renderToString(
      <Router history={history}>
        {renderRoutes(routes)}
      </Router>
    );
    res.send(html);
  });
};