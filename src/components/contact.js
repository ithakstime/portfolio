import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";
import axios from "axios";
import Swal from "sweetalert2";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {},
      errors: {},
    };
    this.name = React.createRef();
    this.emailid = React.createRef();
    this.country = React.createRef();
    this.mobileno = React.createRef();
    this.company = React.createRef();
    this.inquiry = React.createRef();

    this.handleChange = this.handleChange.bind(this);
    this.submituserInquiryForm = this.submituserInquiryForm.bind(this);
  }

  handleFocusButtonClickName = (event) => {
    this.name.current.focus();
  };
  handleFocusButtonClickEmail = (event) => {
    this.emailid.current.focus();
  };
  handleFocusButtonClickCountry = (event) => {
    this.country.current.focus();
  };
  handleFocusButtonClickMobile = (event) => {
    this.mobileno.current.focus();
  };
  handleFocusButtonClickCompany = (event) => {
    this.company.current.focus();
  };
  handleFocusButtonClickInquiry = (event) => {
    this.inquiry.current.focus();
  };
  handleClearButtonClick = (event) => {
    this.setState({
      fields: " ",
    });
  };

  //componentDidMount() {
  //  this.inputname.current.focus();
  //}

  handleChange = (event) => {
    var fields = this.state.fields;
    fields[event.target.name] = event.target.value;

    this.setState({
      fields,
    });
  };

  submituserInquiryForm(e) {
    this.validateForm();

    e.preventDefault();
    const data = this.state.fields;
    console.log(this.name.current.value);
    console.log(this.emailid.current.value);
    console.log(this.country.current.value);
    console.log(this.mobileno.current.value);
    console.log(this.company.current.value);
    console.log(this.inquiry.current.value);
    console.log("Final data is", data);

    var formData = {
      name: this.state.fields.name,
      emailid: this.state.fields.emailid,
      country: this.state.fields.country,
      mobileno: this.state.fields.mobileno,
      company: this.state.fields.company,
      inquiry: this.state.fields.inquiry,
    };

    axios
      .post("/hakstime", formData)
      .then(function() {
        Swal.fire("Inquiry sent successfully!");
        window.location.reload();
      })
      .catch(function(error) {
        Swal.fire("Invalid form! Check your form");
        this.submituserInquiryForm();
      });
  }

  validateForm() {
    var fields = this.state.fields;
    var errors = {};
    var formIsValid = true;

    if (!fields["name"]) {
      formIsValid = false;
      errors["name"] = "*Please enter your name.";
      this.handleClearButtonClick();
      this.handleFocusButtonClickName();
    }
    if (typeof fields["name"] !== "undefined") {
      if (!fields["name"].match(/^[a-zA-Z]*$/)) {
        formIsValid = false;
        errors["name"] = "*Please enter alphabet characters only.";
        this.handleClearButtonClick();
        this.handleFocusButtonClickName();
      }
    }
    if (!fields["emailid"]) {
      formIsValid = false;
      errors["emailid"] = "*Please enter your email-ID.";
      this.handleClearButtonClick();
      this.handleFocusButtonClickEmail();
    }
    if (typeof fields["emailid"] !== "undefined") {
      var pattern = new RegExp(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/
      );
      if (!pattern.test(fields["emailid"])) {
        formIsValid = false;
        errors["emailid"] = "*Please enter valid email-ID.";
        this.handleClearButtonClick();
        this.handleFocusButtonClickEmail();
      }
    }

    if (!fields["country"]) {
      formIsValid = false;
      errors["country"] = "*Please enter your country.";
      this.handleClearButtonClick();
      this.handleFocusButtonClickCountry();
    }
    if (!fields["mobileno"]) {
      formIsValid = false;
      errors["mobileno"] = "*Please enter your mobile no.";
      this.handleClearButtonClick();
      this.handleFocusButtonClickCountry();
    }
    if (fields["mobileno"] !== null) {
      if (!fields["mobileno"].match(/^[0-9]/)) {
        formIsValid = false;
        errors["mobileno"] = "*Please enter valid mobile no.";
        this.handleClearButtonClick();
        this.handleFocusButtonClickMobile();
      }
    }
    if (!fields["company"]) {
      formIsValid = false;
      errors["company"] = "*Please enter your company.";
      this.handleClearButtonClick();
      this.handleFocusButtonClickCompany();
    }

    if (!fields["inquiry"]) {
      formIsValid = false;
      errors["inquiry"] = "*Please enter your inquiry.";
      this.handleClearButtonClick();
      this.handleFocusButtonClickInquiry();
    }

    this.setState({
      errors: errors,
    });
    return formIsValid;
  }
  render() {
    return (
      <div>
        <div class="container-fluid px-0">
          <img
            className="header-img img-fluid"
            src={process.env.PUBLIC_URL + "/img/phone.jpg"}
            alt="commodity traders in chennai"
          />
        </div>
        <div className="container padding">
          <div className="row welcome text-center">
            <div className="col-md-12">
              <h1 className="display-4">Contact</h1>
            </div>
          </div>
        </div>
        <hr class="my-0" />
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <h2 class="text-center">Inquire Now</h2>
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
                        name="name"
                        id="defaultFormRegisterNameEx"
                        value={this.state.fields.name}
                        onChange={this.handleChange}
                        ref={this.name}
                        className="form-control"
                      />
                      <div className="errorMsg">
                        {this.state.errors.username}
                      </div>
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
                        ref={this.emailid}
                        className="form-control"
                      />
                      <div className="errorMsg">
                        {this.state.errors.emailid}
                      </div>
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
                        ref={this.country}
                      />
                      <div className="errorMsg">
                        {this.state.errors.country}
                      </div>
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
                        ref={this.mobileno}
                        className="form-control"
                      />
                      <div className="errorMsg">
                        {this.state.errors.mobileno}
                      </div>
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
                        ref={this.company}
                        className="form-control"
                      />
                      <div className="errorMsg">
                        {this.state.errors.company}
                      </div>
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
                        ref={this.inquiry}
                        className="form-control"
                      />
                      <div className="errorMsg">
                        {this.state.errors.inquiry}
                      </div>
                      <div className="text-center">
                        <MDBBtn
                          color="secondary"
                          cols="5"
                          type="submit"
                          onClick={this.submituserInquiryForm}
                        >
                          SEND
                        </MDBBtn>
                      </div>
                    </form>
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
            </div>
            <div className="col-md-6 text-center">
              <h4>HAKS INTERNATIONAL LANCING</h4>
              <img
                src={process.env.PUBLIC_URL + "/img/haks.jpg"}
                class="img-fluid"
                alt="Haks international lancing"
              />
              <div className="col-md-6 wrapper">
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
        <hr className="my-0" />

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

export default Contact;
