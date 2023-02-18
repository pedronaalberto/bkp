// src/routes.js

import { renderRoutes } from "react-router-config";
import { Switch } from "react-router-dom";
import routesConfig from "./routesConfig";

const Routes = () => {
  return <Switch>{renderRoutes(routesConfig)}</Switch>;
};

export default Routes;