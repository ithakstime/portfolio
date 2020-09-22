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
              <Link to="/ithakstime/portfolio/tree/01-setup/public">Home</Link>
              <Link to="/ithakstime/portfolio/tree/01-setup/public/products">
                Products
              </Link>
              <Link to="/ithakstime/portfolio/tree/01-setup/public/contact">
                Contact
              </Link>
              <Link to="/ithakstime/portfolio/tree/01-setup/public/post">
                Posts
              </Link>
            </Navigation>
          </Header>
          <Drawer title="HAKStime">
            <Navigation>
              <Link to="/">Home</Link>
              <Link to="/products">Products</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/post">Posts</Link>
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
