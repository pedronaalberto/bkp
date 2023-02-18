import React from 'react';
import { Route } from 'react-router-dom';
import Layout from './layout/Layout.jsx';

const routes = (
  <div>
    <Route exact path="/" component={Layout} />
  </div>
);

export default routes;




