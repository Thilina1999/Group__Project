import React, { useState } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import './company.css';
import Img1 from '../assets/miniBell logo_ccexpress 1.png';
import Img2 from '../assets/71WIPjpp3aL 1.png';

export default function Signup() {

  const [companyname, setCompanyName] = useState("");
  const [companyid, setCompanyID] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [isError, setIsError] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    await axios.post(`http://localhost:8080/signup`, {
      companyname,
      companyid,
      email,
      password
    })
      .then((res) => {
        alert("User added..");
      })
      .catch((err) => {
        console.log(err);
      })
    setRedirect(true);
  }

  if (redirect) {
    return <Navigate to="/signin" />;
  }

  const validation = (a) => {
    const uppercaseRegExp = /(?=.*?[A-Z])/;
    const lowercaseRegExp = /(?=.*?[a-z])/;
    const digitsRegExp = /(?=.*?[0-9])/;
    const specialCharRegExp = /(?=.*?[#?!@$%^&*-])/;

    if (password !== a) {
      setIsError("Password and confirm password don't match");
    }
    else if (password.length < 8 || password.length > 15) {
      console.log(password.length);
      setIsError("Password length should be 8 between 15 characters")
    }
    else if (!(uppercaseRegExp.test(password))) {
      setIsError("Password should have uppercase letter")
    }
    else if (!(lowercaseRegExp.test(password))) {
      setIsError("Password should have a lowercase letter")
    }
    else if (!(digitsRegExp.test(password))) {
      setIsError("Password should have a number");
    }
    else if (!(specialCharRegExp.test(password))) {
      setIsError("Password should have a special character");
    }
    else {
      setIsError("");
    }
  }
  return (
    <div className="body">
      
      <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,300,700" rel="stylesheet" type="text/css" />
      <img src={Img2} className="img2" alt=""/>
      <img src={Img1} className="img1" alt=""/>
      <div className="container1">
        <div className="frame1">
          <div className="nav">
            <ul className="links">
              <br /><br />
              <li className="signin-active">Create Company Account</li>
            </ul>
            <br />
          </div>
          <div ng-app ng-init="checked = false">
            <form className="form-signup" action method="post" name="form">

<div className="div1">
              <input className="form-styling1" type="text" name="fullname" placeholder="Company Name" required onChange={(e) => {
                setCompanyName(e.target.value);
              }} />

              <input className="form-styling1" type="text" name="fullname" placeholder="Company ID" required onChange={(e) => {
                setCompanyID(e.target.value);
              }} />
              </div>

              <input className="form-styling2" type="email" name="email" placeholder="Email" required onChange={(e) => {
                setEmail(e.target.value);
              }} />

              <input className="form-styling2" type="Password" name="password" placeholder="Password" required onChange={(e) => {
                setPassword(e.target.value);
              }} />

              <input className="form-styling2" type="password" name="confirmpassword" placeholder="Confirm Password" required onChange={(e) => {
                const a = e.target.value;
                validation(a);
              }} />

              <span style={{ color: "red", fontSize: "13px" }}>{isError}</span>
              <br />
              <div className="btn-animate1">
              <button className="btn-signup" type="button" onClick={submit}
                disabled={!companyname || !companyid || !email || !password || isError}
              >Create</button>
              </div>

            </form>
          </div>
        </div>
      </div>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><hr></hr>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <h7>© Photo, Inc. 2019. We love our users!</h7>
    </div>
  );
}