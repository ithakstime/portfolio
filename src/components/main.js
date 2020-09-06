import React from "react";
import { Switch, Route } from "react-router-dom";

import Product from "./products";
import Contact from "./contact";
import Home from "./home";
import Post from "./post";
import Gallery from "./gallery";

const Main = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/products" component={Product} />
    <Route path="/gallery" component={Gallery} />
    <Route path="/contact" component={Contact} />
    <Route path="/post" component={Post} />
  </Switch>
);

export default Main;
