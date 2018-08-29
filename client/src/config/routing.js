import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import withHelmet from "./withHelmet";
import loadable from "./loadable";

// react overdrive : anmations between pages if element exists on both pages. Like an image moving up.

const Test = loadable({
  loader: () => import("../pages/Test")
});

const routing = [
  {
    id: 1,
    path: "/",
    exact: true,
    component: Test,
    meta: { title: "TITLE HERE", description: "DESCRIPTION HERE", image: "" }
  },
  {
    id: 2,
    path: "/test",
    component: Test,
    meta: { title: "TITLE HERE", description: "DESCRIPTION HERE", image: "" }
  }
];

export default () => (
  <BrowserRouter>
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
  </BrowserRouter>
);
