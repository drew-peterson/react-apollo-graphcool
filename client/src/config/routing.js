import React from "react";
import { Route, Switch } from "react-router-dom";
import withHelmet from "./withHelmet";
import loadable from "./loadable";

// react overdrive : anmations between pages if element exists on both pages. Like an image moving up.

const Home = loadable({
  loader: () => import("pages/Home")
});

const Logout = loadable({
  loader: () => import("pages/Logout")
});

const Auth = loadable({
  loader: () => import("pages/Auth")
});

const User = loadable({
  loader: () => import("pages/User")
});

const routing = [
  {
    id: 1,
    path: "/",
    exact: true,
    component: Home,
    meta: { title: "TITLE HERE", description: "DESCRIPTION HERE", image: "" }
  },
  {
    id: 3,
    path: "/logout",
    component: Logout,
    meta: { title: "TITLE HERE", description: "DESCRIPTION HERE", image: "" }
  },
  {
    id: 4,
    path: "/auth",
    component: Auth,
    meta: { title: "TITLE HERE", description: "DESCRIPTION HERE", image: "" }
  },
  {
    id: 5,
    path: "/user",
    component: User,
    meta: { title: "TITLE HERE", description: "DESCRIPTION HERE", image: "" }
  }
];

export default () => (
  <Switch>
    {routing.map(({ id, path, exact, component, meta }) => (
      <Route
        key={id}
        path={path}
        exact={exact}
        component={withHelmet(component, meta)}
      />
    ))}
  </Switch>
);
