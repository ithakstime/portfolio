import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";
import axios from "axios";

class Forms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        name: "",
        emailid: "",
        country: "",
        mobileno: "",
        company: "",
        inquiry: "",
      },
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

    axios
      .post("/hakstime", {
        name: this.state.fields.name,
        emailid: this.state.fields.emailid,
        country: this.state.fields.country,
        mobileno: this.state.fields.mobileno,
        company: this.state.fields.company,
        inquiry: this.state.fields.inquiry,
      })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error.response);
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
    console.log("State:", this.state.fields);
    return (
      <div id="main-inquiry-container">
        <div id="inquire">
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
        </div>
      </div>
    );
  }
}

export default Forms;
