import React, { Component } from "react";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import { MDBContainer, MDBFooter } from "mdbreact";

class Post extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <div className="sticky-top" style={{ top: "30%" }}>
              <div className="container-fluid" id="fixed">
                <a
                  href="http://g.page/haksinterlance"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fa fa-2x fa-google" aria-hidden="true" />
                </a>
                <br />
                <a
                  href="https://www.facebook.com/haksinterlance/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fa fa-2x fa-facebook-square" aria-hidden="true" />
                </a>
                <br />
                <a
                  href="https://twitter.com/haksinterlance"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fa fa-2x fa-twitter-square" aria-hidden="true" />
                </a>
                <br />
                <a
                  href="https://www.linkedin.com/company/14462820/admin/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fa fa-2x fa-linkedin-square " aria-hidden="true" />
                </a>
                <br />
                <a
                  href="https://t.me/haksinterlance"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fa fa-2x fa-telegram" aria-hidden="true" />
                </a>
                <br />
                <a
                  href="https://www.instagram.com/haksinterlance/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fa fa-2x fa-instagram " aria-hidden="true" />
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
          <MDBFooter color="blue" className="font-small pt-4 mt-4">
            <div className="footer-copyright text-center py-3">
              <MDBContainer fluid>
                &copy; {new Date().getFullYear()} Copyright:{" "}
                <a href="/"> hakstime.com </a>
              </MDBContainer>
            </div>
          </MDBFooter>
        </div>
      </div>
    );
  }
}

export default Post;
