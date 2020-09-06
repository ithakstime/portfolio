import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import { MDBContainer, MDBFooter } from "mdbreact";
import Form from "./form";

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h4>HAKS INTERNATIONAL LANCING</h4>
            <img className="haks" src="/img/haks.jpg" alt="haks" />
            <div className="social">
              {/*Google page */}
              <a
                href="http://g.page/haksinterlance"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-google" aria-hidden="true" />
              </a>
              {/*FB page */}

              <a
                href="https://www.facebook.com/haksinterlance/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-facebook-square" aria-hidden="true" />
              </a>
              {/*Twitter page */}

              <a
                href="https://twitter.com/haksinterlance"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-twitter-square" aria-hidden="true" />
              </a>
              {/*LinkedIn page */}

              <a
                href="https://www.linkedin.com/company/14462820/admin/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-linkedin-square" aria-hidden="true" />
              </a>
              {/*Instagram page */}

              <a
                href="https://www.instagram.com/haksinterlance/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-instagram" aria-hidden="true" />
              </a>
            </div>
          </Cell>
          <Cell col={6}>
            <h3>INQUIRE NOW</h3>
            <hr />
            <Form />
          </Cell>
        </Grid>
        <MDBFooter color="blue" className="font-small pt-4 mt-4">
          <div className="footer-copyright text-center py-3">
            <MDBContainer fluid>
              &copy; {new Date().getFullYear()} Copyright:{" "}
              <a href="/"> hakstime.com </a>
            </MDBContainer>
          </div>
        </MDBFooter>
      </div>
    );
  }
}

export default Contact;
