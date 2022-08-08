import React, { useState } from "react";
import "./address.css";
import validate from "validate.js";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ReactCountryFlag from "react-country-flag";
import Select from "react-select";
import countryList from "react-select-country-list";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Button from "react-bootstrap/Button";
import axios from 'axios';
import { Navigate } from 'react-router-dom';

export default class Address extends React.Component {


    constructor(props) {
    super(props);
    this.options = countryList().getData();
    this.state = {
      startDate: new Date(),
      country: "",
      region: "",
      options: this.options,
      countryVal: null,
      phone: "",
      complete: "",
      displayComplete: "none",
      name: "",
      address: ""
    };

    this.flagsRef = React.createRef();
    this.handleChangeDate = this.handleChangeDate.bind(this);
    this.handleValidateName = this.handleValidateName.bind(this);
    this.handleValidateLastName = this.handleValidateLastName.bind(this);
    this.handlerValidateEmail = this.handlerValidateEmail.bind(this);
    this.handlerValidateAddress = this.handlerValidateAddress.bind(this);
    this.handlerComplete = this.handlerComplete.bind(this);
    this.handlerReset = this.handlerReset.bind(this);
    this.completeForm = this.completeForm.bind(this);
  }

  changeHandler = countryVal => {
    this.setState({ countryVal });
  };

  handleChangeDate = date => {
    this.setState({
      startDate: date
    });
  };
  handleValidateName(e) {
    this.setState({ name: e.target.value });
    !e.target.value.match(/ñ/) === false || !e.target.value.match(/[\W0-9]/)
      ? (this.nameCircle.className = "circleValidate")
      : (this.nameCircle.className = "circleInvalidate");

    if (e.target.value === "") this.nameCircle.className = "";
  }
  handleValidateLastName(e) {
    this.setState({ lastName: e.target.value });
    !e.target.value.match(/ñ/) === false || !e.target.value.match(/[\W0-9]/)
      ? (this.lastNameCircle.className = "circleValidate")
      : (this.lastNameCircle.className = "circleInvalidate");

    if (e.target.value === "") this.lastNameCircle.className = "";
  }
  handlerValidateEmail(e) {
    this.setState({
      email: e.target.value
    });
    console.log(validate.validators.email.PATTERN);
    validate.validators.email.PATTERN.test(e.target.value)
      ? (this.emailCircle.className = "circleValidate")
      : (this.emailCircle.className = "circleInvalidate");
    if (e.target.value === "") this.emailCircle.className = "";
  }

  handlerValidateAddress(e) {
    this.setState({ address: e.target.value });
    e.target.value.match(/[*-+]/)
      ? (this.addressCircle.className = "circleInvalidate")
      : (this.addressCircle.className = "circleValidate");

    if (e.target.value === "") this.addressCircle.className = "";
  }
  handlerComplete(e) {
    const token = localStorage.getItem("auth-token");
    if (
      this.state.countryVal !== null &&
      this.state.complete === true &&
      this.state.phone !== ""
    ) {
      this.setState({
        displayComplete: "flex"
      });
      window.scroll({
        top: this.complete.offsetTop,
        left: 0,
        behavior: "smooth"
      });
      console.log("ada",this.state.startDate)
      axios.post('http://localhost:8080/setAddress', {
        receivername:this.state.name,
        country:this.state.countryVal.label,
        phonenumber:this.state.phone,
        streetline:this.state.address,
        deliveryDate: this.state.startDate

      },{headers: { Authorization: `Bearer ${token}`} })
      .then((res)=>{
          console.log(res)
      })
      .catch((err)=>{
          console.log(err)
      })
    } else {
      alert("You have not yet completed the form");
    }
  }
  handlerReset() {
    this.setState({
      startDate: new Date(),
      country: "",
      region: "",
      options: this.options,
      countryVal: null,
      phone: "",
      complete: "",
      displayComplete: "none",
      name: "",
      address: ""
    });
    this.nameCircle.className = "";
    this.addressCircle.className = "";
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }
  completeForm() {
    if (
      this.nameCircle.className === "circleValidate" &&
      (this.addressCircle.className === "circleValidate")
    ) {
      this.setState({
        complete: true
      });
    } else {
      this.setState({
        complete: false
      });
    }
  }
  render() {
    return (
      <div className="App" onChange={this.completeForm}>
        <div
          id="complete"
          style={{ display: this.state.displayComplete }}
          ref={div => (this.complete = div)}
        >
          <div>
            <p className="whiteLetter">
              Shipping Details have been successfully completed
            </p>
          </div>
          <button className="buttons" onClick={this.handlerReset}>
            Proceed
          </button>
        </div>
        <h1 id="title" className="blackLetter">
          Shipping Details
        </h1>
        <p id="description" className="blackLetter">
          Accurately place receiver's data
        </p>
        <div className="perfectCentered">
          <div id="survey-form">
            <label id="name-label" htmlFor="name">
            Recipient's Name
            </label>
            <div
              className="widthContainerInput marginBottom"
              onChange={this.handleValidateName}
            >
              <div id="nameCircle" ref={div => (this.nameCircle = div)} />
              <input
                id="receivername"
                maxLength="50"
                placeholder="write your name"
                pattern="[A-Za-z]"
                title="tiene que ser solo letras"
                className="styleInput"
                value={this.state.name}
                required
              />
            </div>
           
            <label id="lastName-label" htmlFor="Address">
            Recipient's Address
            </label>
            <div
              className="widthContainerInput marginBottom"
              onChange={this.handlerValidateAddress}
            >
              <div id="addressCircle" ref={div => (this.addressCircle = div)} />
              <input
                id="receiveraddress"
                maxLength="90"
                placeholder="Write your address"
                value={this.state.address}
                className="styleInput"
                required
              />
            </div>
            <div className="marginBottom">
              <label id="number-label" htmlFor="number">
                Receiver's Phone Number
              </label>
              <PhoneInput
                id="receiverphone"
                country={"us"}
                className="marginBottom"
                value={this.state.phone}
                onChange={phone => this.setState({ phone })}
              />
            </div>
            <label id="lastName-label" htmlFor="country">
              Country
            </label>
            <div
              id="receivercountry"
              className="marginBottom"
              style={{ display: "flex", alignItems: "center", width: "70%" }}
            >
              <ReactCountryFlag
                countryCode={
                  this.state.countryVal ? this.state.countryVal.value : ""
                }
                svg
                cdnUrl="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/"
                cdnSuffix="svg"
                title={this.state.countryVal ? this.state.countryVal.value : ""}
              />
              <div
                style={{ marginLeft: "10px", color: "black", width: "100%" }}
              >
                <Select
                  isSearchable={true}
                  options={this.state.options}
                  value={this.state.value}
                  onChange={this.changeHandler}
                />
              </div>
            </div>
            <div className="marginBottom">
              <label id="Dateofbirth-label" htmlFor="Date of birth">
              Delivery Date
              </label>
              <DatePicker
              id="deliverydate"
                selected={this.state.startDate}
                onChange={this.handleChangeDate}
              />
            </div>
            <div>
              <p>Special Delivery Instructions</p>
              <textarea
                id="textarea"
                rows="10"
                className="marginBottom"
                placeholder="Write something here"
              />
            </div>
            <div className="perfectCentered">
              <button className="buttons" onClick={this.handlerComplete}>
                Submit{" "}
              </button>
            </div>
          </div>
        </div>
        <div id="footer" className="perfectCentered">
          
          <div id="contact">
            <div id="contenedorIconosContacto">
                <i className="fa fa-facebook-square" />
            </div>
          </div>
          <div id="madeBy">
          </div>
        </div>
      </div>
    );
  }
}