import React from "react";
import { Route, Switch } from "react-router-dom";
import withHelmet from "./withHelmet";
import loadable from "./loadable";
import { authRequired } from "config/authentication";

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
    path: "/",
    exact: true,
    component: Home,
    meta: { title: "TITLE HERE", description: "DESCRIPTION HERE", image: "" }
  },
  {
    path: "/logout",
    component: Logout,
    meta: { title: "TITLE HERE", description: "DESCRIPTION HERE", image: "" }
  },
  {
    path: "/auth",
    component: Auth,
    meta: { title: "TITLE HERE", description: "DESCRIPTION HERE", image: "" }
  },
  {
    path: "/user",
    component: authRequired(User),
    meta: { title: "TITLE HERE", description: "DESCRIPTION HERE", image: "" }
  }
];

export default () => (
  <Switch>
    {routing.map(({ path, exact, component, meta }) => (
      <Route
        key={path}
        path={path}
        exact={exact}
        component={withHelmet(component, meta)}
      />
    ))}
  </Switch>
);
