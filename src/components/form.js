import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";
const Form = require("../routes/form");

class Forms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {},
      errors: {},
    };
    this.handleChange = this.handleChange.bind(this);
    this.submituserInquiryForm = this.submituserInquiryForm.bind(this);
  }

  handleChange(e) {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields,
    });
  }
  submituserInquiryForm(e) {
    console.log(this.validateForm());
    e.preventDefault();
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
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
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
      <div id="main-inquiry-container">
        <div id="inquire">
          <MDBContainer className="mt-4">
            <MDBRow>
              <MDBCol md="12">
                <form
                  method="post"
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
                    value={this.state.fields.username}
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
                  <input
                    type="text"
                    name="inquiry"
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
                  </div>
                </form>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>
      </div>
    );
  }
}
export default Forms;
