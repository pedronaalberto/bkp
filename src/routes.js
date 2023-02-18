// src/routes.js

import { renderRoutes } from "react-router-config";
import { Switch } from "react-router-dom";
import routesConfig from "./routesConfig";

const routes = [
  {
    path: '/api/burns/all',
    exact: true,
    component: BurnsController.getAllBurns
  },
  {
    path: '/api/burns/:id',
    exact: true,
    component: BurnsController.getBurn
  },
  {
    path: '/api/burns/create',
    exact: true,
    component: BurnsController.createBurn
  },
  {
    path: '/api/burns/update/:id',
    exact: true,
    component: BurnsController.updateBurn
  },
  {
    path: '/api/burns/delete/:id',
    exact: true,
    component: BurnsController.deleteBurn
  },
  {
    path: '/',
    component: Layout
  }
];

export default routes;