import React, { Component } from "react";
import { TwitterTimelineEmbed } from "react-twitter-embed";

class Post extends Component {
  render() {
    return (
      <div>
        <div class="container-fluid px-0">
          <img
            className="header-img img-responsive img-fluid"
            src={process.env.PUBLIC_URL + "/img/update.jpg"}
            alt="products of haksinternationallancing"
          />
        </div>
        <div className="row">
          <div className="col-md-2">
            <div className="sticky-top" style={{ top: "30%" }}>
              <div className="container-fluid" id="fixed">
                <a
                  href="http://g.page/haksinterlance"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i
                    className="fa fa-2x fa-google"
                    style={{ color: "#de5246" }}
                    aria-hidden="true"
                  />
                </a>
                <br />
                <a
                  href="https://www.facebook.com/haksinterlance/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i
                    className="fa fa-2x fa-facebook-square"
                    style={{ color: "#4867AA" }}
                    aria-hidden="true"
                  />
                </a>
                <br />
                <a
                  href="https://twitter.com/haksinterlance"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i
                    className="fa fa-2x fa-twitter-square"
                    style={{ color: "#1DA1F2" }}
                    aria-hidden="true"
                  />
                </a>
                <br />
                <a
                  href="https://www.linkedin.com/company/14462820/admin/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i
                    className="fa fa-2x fa-linkedin-square "
                    style={{ color: "#1976D2" }}
                    aria-hidden="true"
                  />
                </a>
                <br />
                <a
                  href="https://t.me/haksinterlance"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i
                    className="fa fa-2x fa-telegram"
                    style={{ color: "#813db4" }}
                    aria-hidden="true"
                  />
                </a>
                <br />
                <a
                  href="https://www.instagram.com/haksinterlance/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i
                    className="fa fa-2x fa-instagram "
                    style={{ color: "#de5246" }}
                    aria-hidden="true"
                  />
                </a>
                <br />
              </div>
            </div>
          </div>
          <div className="col-md-7">
            <TwitterTimelineEmbed
              sourceType="profile"
              screenName="haksinterlance"
            />
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
      </div>
    );
  }
}

export default Post;
