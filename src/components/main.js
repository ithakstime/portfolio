import React from "react";
import { Switch, Route } from "react-router-dom";

import Product from "./products";
import Gallery from "./gallery";
import Contact from "./contact";
import Home from "./home";
import Post from "./post";

const Main = () => (
  <Switch>
    <Route
      exact
      path="/ithakstime/portfolio/tree/01-setup/public"
      component={Home}
    />
    <Route
      path="/ithakstime/portfolio/tree/01-setup/public/products"
      component={Product}
    />
    <Route
      path="/ithakstime/portfolio/tree/01-setup/public/gallery"
      component={Gallery}
    />
    <Route
      path="/ithakstime/portfolio/tree/01-setup/public/contact"
      component={Contact}
    />
    <Route
      path="/ithakstime/portfolio/tree/01-setup/public/post"
      component={Post}
    />
  </Switch>
);

export default Main;
