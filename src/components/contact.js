import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import { MDBContainer, MDBFooter, MDBRow, MDBCol, MDBBtn } from "mdbreact";
import Swal from "sweetalert2";
import axios from "axios";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {},
      errors: {},
    };
    this.inputname = React.createRef();
    this.handleChange = this.handleChange.bind(this);
    this.submituserInquiryForm = this.submituserInquiryForm.bind(this);
  }

  handleFocusButtonClick = (event) => {
    this.inputname.current.focus();
  };
  handleClearButtonClick = (event) => {
    this.setState({
      fields: "",
    });
  };

  //componentDidMount() {
  //  this.inputname.current.focus();
  //}

  handleChange(e) {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;

    this.setState({
      fields,
    });
  }

  submituserInquiryForm(e) {
    this.validateForm();

    e.preventDefault();
    const data = this.state.fields;
    console.log(this.inputname.current.value);
    console.log("Final data is", data);

    var formData = {
      name: this.state.fields.name,
      emailid: this.state.fields.emailid,
      country: this.state.fields.country,
      mobileno: this.state.fields.mobileno,
      company: this.state.fields.company,
      inquiry: this.state.fields.inquiry,
    };
    console.log("......formData", formData);

    axios
      .post("/hakstime", formData)
      .then(function(response) {
        Swal.fire("Inquiry sent successfully! ");
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  validateForm() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    if (!fields["name"]) {
      formIsValid = false;
      errors["name"] = "*Please enter your name.";
    }
    if (typeof fields["name"] !== "undefined") {
      if (!fields["name"].match(/^[a-zA-Z]*$/)) {
        formIsValid = false;
        errors["name"] = "*Please enter alphabet characters only.";
      }
    }
    if (!fields["emailid"]) {
      formIsValid = false;
      errors["emailid"] = "*Please enter your email-ID.";
    }
    if (typeof fields["emailid"] !== "undefined") {
      var pattern = new RegExp(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/
      );
      if (!pattern.test(fields["emailid"])) {
        formIsValid = false;
        errors["emailid"] = "*Please enter valid email-ID.";
      }
    }

    if (!fields["country"]) {
      formIsValid = false;
      errors["country"] = "*Please enter your country.";
    }
    if (!fields["mobileno"]) {
      formIsValid = false;
      errors["mobileno"] = "*Please enter your mobile no.";
    }
    if (typeof fields["mobileno"] !== "undefined") {
      if (!fields["mobileno"].match(/^[0-9]/)) {
        formIsValid = false;
        errors["mobileno"] = "*Please enter valid mobile no.";
      }
    }
    if (!fields["company"]) {
      formIsValid = false;
      errors["company"] = "*Please enter your company.";
    }

    if (!fields["inquiry"]) {
      formIsValid = false;
      errors["inquiry"] = "*Please enter your inquiry.";
    }

    this.setState({
      errors: errors,
    });

    return formIsValid;
  }
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
            <MDBContainer className="mt-4">
              <MDBRow>
                <MDBCol md="12">
                  <form
                    name="userInquiryForm"
                    onSubmit={this.submituserInquiryForm}
                  >
                    <label
                      htmlFor="defaultFormRegisterNameEx"
                      className="grey-text"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      ref={this.inputname}
                      name="name"
                      id="defaultFormRegisterNameEx"
                      value={this.state.fields.name}
                      onChange={this.handleChange}
                      className="form-control"
                    />
                    <div className="errorMsg">{this.state.errors.username}</div>
                    <label
                      htmlFor="defaultFormRegisterEmailEx"
                      className="grey-text"
                    >
                      Email ID
                    </label>
                    <input
                      type="text"
                      name="emailid"
                      id="defaultFormRegisterEmailEx"
                      value={this.state.fields.emailid}
                      onChange={this.handleChange}
                      className="form-control"
                    />
                    <div className="errorMsg">{this.state.errors.emailid}</div>
                    <label
                      htmlFor="defaultFormRegisterCountryEx"
                      className="grey-text"
                    >
                      Country
                    </label>
                    <input
                      type="text"
                      name="country"
                      id="defaultFormRegisterCountryEx"
                      value={this.state.fields.country}
                      onChange={this.handleChange}
                      className="form-control"
                    />
                    <div className="errorMsg">{this.state.errors.country}</div>
                    <label
                      htmlFor="defaultFormRegisterMobileNoEx"
                      className="grey-text"
                    >
                      Mobile No
                    </label>
                    <input
                      type="text"
                      name="mobileno"
                      id="defaultFormRegisterMobileNoEx"
                      value={this.state.fields.mobileno}
                      onChange={this.handleChange}
                      className="form-control"
                    />
                    <div className="errorMsg">{this.state.errors.mobileno}</div>
                    <label
                      htmlFor="defaultFormRegisterCompanyEx"
                      className="grey-text"
                    >
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      id="defaultFormRegisterCompanyEx"
                      value={this.state.fields.company}
                      onChange={this.handleChange}
                      className="form-control"
                    />
                    <div className="errorMsg">{this.state.errors.company}</div>
                    <label
                      htmlFor="defaultFormRegisterInquiryEx"
                      className="grey-text"
                    >
                      Inquiry
                    </label>
                    <textarea
                      type="text"
                      name="inquiry"
                      cols="20"
                      rows="10"
                      id="defaultFormRegisterInquiryEx"
                      value={this.state.fields.inquiry}
                      onChange={this.handleChange}
                      className="form-control"
                    />
                    <div className="errorMsg">{this.state.errors.inquiry}</div>
                    <div className="text-center">
                      <MDBBtn color="secondary" cols="5" type="submit">
                        INQUIRE
                      </MDBBtn>
                      <MDBBtn
                        color="secondary"
                        cols="5"
                        type="submit"
                        onClick={this.handleFocusButtonClick}
                      >
                        FOCUS
                      </MDBBtn>
                      <MDBBtn
                        color="secondary"
                        cols="5"
                        type="submit"
                        onClick={this.handleClearButtonClick}
                      >
                        CLEAR
                      </MDBBtn>
                    </div>
                  </form>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
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
