import React, { Component } from "react";
import "./App.css";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import Main from "./components/main";
import { Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          <Header className="color" title="HAKStime" scroll>
            <Navigation>
              <Link to="/portfolio/">Home</Link>
              <Link to="/portfolio/products">Products</Link>
              <Link to="/portfolio/contact">Contact</Link>
              <Link to="/portfolio/post">Posts</Link>
            </Navigation>
          </Header>
          <Drawer title="HAKStime">
            <Navigation>
              <Link to="/portfolio/">Home</Link>
              <Link to="/portfolio/products">Products</Link>
              <Link to="/portfolio/contact">Contact</Link>
              <Link to="/portfolio/post">Posts</Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Main />
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
