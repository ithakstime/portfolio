import React from "react";
import { Switch, Route } from "react-router-dom";

import Product from "./products";
import Gallery from "./gallery";
import Contact from "./contact";
import Home from "./home";
import Post from "./post";

const Main = () => (
  <Switch>
    <Route exact path="/public/" component={Home} />
    <Route path="/public/products" component={Product} />
    <Route path="/public/gallery" component={Gallery} />
    <Route path="/public/contact" component={Contact} />
    <Route path="/public/post" component={Post} />
  </Switch>
);

export default Main;
