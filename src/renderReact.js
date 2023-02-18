import React from 'react';
const reactDomServer = require('react-dom/server');
const { match, RoutingContext } = require('react-router');
const routes = require('./routes'); // Importe suas rotas React aqui

module.exports = function(app) {
    app.get('/', (req, res) => {
      match({ routes: routes, location: req.url }, (err, redirect, props) => {
          const appHtml = reactDomServer.renderToString(React.createElement(RoutingContext, props))
          res.send(renderPage(appHtml))
      })
    })
  }