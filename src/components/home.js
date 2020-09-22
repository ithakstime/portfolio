import React, { Component } from "react";
class LandingPage extends Component {
  render() {
    return (
      <div>
        <div class="container-fluid px-0">
          <img
            className="header-img img-responsive img-fluid"
            src={process.env.PUBLIC_URL + "/img/home_milky-way.jpg"}
            alt="commodity traders in chennai"
          />
        </div>
        <div className="container-fluid">
          <div className="row welcome padding text-center">
            <div className="col-md-12">
              <h1 className="display-4">HAKS International Lancing</h1>
              <p className="lead">
                Commodities | Consulting | Sales | Marketing
              </p>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img
                src={process.env.PUBLIC_URL + "/img/time.jpg"}
                class="img-responsive"
                width="100%"
                alt="Auto spares"
              />
            </div>
            <div className="col-md-6">
              <p className="lead mx-auto">Greetings!</p>
              <h1 className="display-4">
                Welcome to HAKS INTERNATIONAL LANCING
              </h1>
              <p className="lead mx-auto">Time waits for none!</p>
              <p>
                <p>
                  <a
                    href="contact"
                    type="button"
                    class="btn btn-dark"
                    rel="noopener noreferrer"
                    aria-hidden="true"
                  >
                    CONTACT
                  </a>
                </p>
              </p>
              <div className="container wrap">
                <a
                  href="http://g.page/haksinterlance"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i
                    class="fa fa-2x fa-google"
                    style={{ color: "#de5246" }}
                    aria-hidden="true"
                  />
                </a>
                <a
                  href="https://www.facebook.com/haksinterlance/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i
                    class="fa fa-2x fa-facebook-square"
                    style={{ color: "#4867AA" }}
                    aria-hidden="true"
                  />
                </a>
                <a
                  href="https://twitter.com/haksinterlance"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i
                    class="fa fa-2x fa-twitter-square"
                    style={{ color: "#1DA1F2" }}
                    aria-hidden="true"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/company/14462820/admin/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i
                    class="fa fa-2x fa-linkedin-square"
                    style={{ color: "#1976D2" }}
                    aria-hidden="true"
                  />
                </a>
                <a
                  href="https://www.instagram.com/haksinterlance/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i
                    class="fa fa-2x fa-instagram"
                    style={{ color: "#813db4" }}
                    aria-hidden="true"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="container padding">
          <div className="row welcome text-center">
            <div className="col-md-12">
              <h1 className="display-4">Products & Services</h1>
            </div>
          </div>
        </div>
        <div className="container padding">
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-4">
              <h3>Agro</h3>
              <img
                src={process.env.PUBLIC_URL + "/img/agro.webp"}
                className="img-responsive"
                width="100%"
                alt="haks"
              />
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4">
              <h3>Metals</h3>
              <img
                src={process.env.PUBLIC_URL + "/img/metals.webp"}
                className="img-responsive"
                width="100%"
                alt="haks"
              />
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4">
              <h3>Fuel</h3>
              <img
                src={process.env.PUBLIC_URL + "/img/fuel.webp"}
                className="img-responsive"
                width="100%"
                alt="haks"
              />
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4">
              <h3>Digital Marketing IT</h3>
              <img
                src={process.env.PUBLIC_URL + "/img/digi.webp"}
                className="img-responsive"
                width="100%"
                alt="haks"
              />
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4">
              <h3>International Trade</h3>
              <img
                src={process.env.PUBLIC_URL + "/img/trade.webp"}
                className="img-responsive"
                width="100%"
                alt="haks"
              />
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4">
              <h3>Automotive</h3>
              <img
                src={process.env.PUBLIC_URL + "/img/automotive.webp"}
                className="img-responsive"
                width="100%"
                alt="haks"
              />
            </div>
          </div>
        </div>
        <footer>
          <div className="container-fluid">
            <div className="row text-center">
              <div className="col-xs-12 col-sm-6 col-md-4">
                &copy;2020 HAKS Internationl Lancing
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4">
                <a
                  href="http://g.page/haksinterlance"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i
                    class="fa fa-2x fa-google"
                    style={{ color: "#de5246" }}
                    aria-hidden="true"
                  />
                </a>
                <a
                  href="https://www.facebook.com/haksinterlance/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i
                    class="fa fa-2x fa-facebook-square"
                    style={{ color: "#4867AA" }}
                    aria-hidden="true"
                  />
                </a>
                <a
                  href="https://twitter.com/haksinterlance"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i
                    class="fa fa-2x fa-twitter-square"
                    style={{ color: "#1DA1F2" }}
                    aria-hidden="true"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/company/14462820/admin/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i
                    class="fa fa-2x fa-linkedin-square"
                    style={{ color: "#1976D2" }}
                    aria-hidden="true"
                  />
                </a>
                <a
                  href="https://www.instagram.com/haksinterlance/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i
                    class="fa fa-2x fa-instagram"
                    style={{ color: "#813db4" }}
                    aria-hidden="true"
                  />
                </a>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4">
                Powered by <u>HAKS-iT</u>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default LandingPage;
