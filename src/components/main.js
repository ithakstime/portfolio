import React from "react";
import { Switch, Route } from "react-router-dom";

import Product from "./products";
import Contact from "./contact";
import Home from "./home";
import Post from "./post";

const Main = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/products" component={Product} />
    <Route path="/contact" component={Contact} />
    <Route path="/post" component={Post} />
  </Switch>
);

export default Main;
