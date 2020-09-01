import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import ExampleComponent from "react-rounded-image";
import { MDBContainer, MDBFooter } from "mdbreact";

class LandingPage extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <div
              class="landing-grid"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ExampleComponent
                className="avatar-img"
                image="/img/haks-plain.jpeg"
                style={{ alignItems: "center" }}
              />
            </div>
            <div className="banner-text">
              <h1>HAKS INTERNATIONAL LANCING</h1>
              <hr />
              <p>Commodities | Consulting | Sales | Marketing | Agency</p>
              <div className="social-links">
                {/*Google page */}
                <a
                  href="http://g.page/haksinterlance"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fa fa-google" aria-hidden="true" />
                </a>
                {/*FB page */}

                <a
                  href="https://www.facebook.com/haksinterlance/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fa fa-facebook-square" aria-hidden="true" />
                </a>
                {/*Twitter page */}

                <a
                  href="https://twitter.com/haksinterlance"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fa fa-twitter-square" aria-hidden="true" />
                </a>
                {/*LinkedIn page */}

                <a
                  href="https://www.linkedin.com/company/14462820/admin/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fa fa-linkedin-square" aria-hidden="true" />
                </a>
                {/*Instagram page */}

                <a
                  href="https://www.instagram.com/haksinterlance/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fa fa-instagram" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
          <Cell col={12}>
            <div className="container padding">
              <div className="row">
                <div className="col-xs-12 col-sm-6 col-md-4">
                  <h3>Agro</h3>
                  <img
                    src="/img/agro.webp"
                    class="img-responsive"
                    width="100%"
                    alt="haks"
                  />
                </div>
                <div className="col-xs-12 col-sm-6 col-md-4">
                  <h3>Metals</h3>
                  <img
                    src="/img/metals.webp"
                    class="img-responsive"
                    width="100%"
                    alt="haks"
                  />
                </div>
                <div className="col-xs-12 col-sm-6 col-md-4">
                  <h3>Fuel</h3>
                  <img
                    src="/img/fuel.webp"
                    class="img-responsive"
                    width="100%"
                    alt="haks"
                  />
                </div>
                <div className="col-xs-12 col-sm-6 col-md-4">
                  <h3>Digital Marketing IT</h3>
                  <img
                    src="/img/digi.webp"
                    class="img-responsive"
                    width="100%"
                    alt="haks"
                  />
                </div>
                <div className="col-xs-12 col-sm-6 col-md-4">
                  <h3>International Trade</h3>
                  <img
                    src="/img/trade.webp"
                    class="img-responsive"
                    width="100%"
                    alt="haks"
                  />
                </div>
                <div className="col-xs-12 col-sm-6 col-md-4">
                  <h3>Automotive</h3>
                  <img
                    src="/img/automotive.webp"
                    class="img-responsive"
                    width="100%"
                    alt="haks"
                  />
                </div>
              </div>
            </div>
          </Cell>
          <Cell col={12}>
            <MDBFooter color="blue" className="font-small pt-4 mt-4">
              <div className="footer-copyright text-center py-3">
                <MDBContainer fluid>
                  &copy; {new Date().getFullYear()} Copyright:{" "}
                  <a href="/"> hakstime.com </a>
                </MDBContainer>
              </div>
            </MDBFooter>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default LandingPage;
