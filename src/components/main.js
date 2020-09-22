import React from "react";
import { Switch, Route } from "react-router-dom";

import Product from "./products";
import Gallery from "./gallery";
import Contact from "./contact";
import Home from "./home";
import Post from "./post";

const Main = () => (
  <Switch>
    <Route exact path="/portfolio/" component={Home} />
    <Route path="/portfolio/products" component={Product} />
    <Route path="/portfolio/gallery" component={Gallery} />
    <Route path="/portfolio/contact" component={Contact} />
    <Route path="/portfolio/post" component={Post} />
  </Switch>
);

export default Main;
