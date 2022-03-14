import React, { useState } from 'react';
import '../signin/form.css';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

export default function Signup() {

  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [isError, setIsError] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    await axios.post(`http://localhost:8080/signup`, {
      firstname,
      lastname,
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
    <div>
      <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,300,700" rel="stylesheet" type="text/css" />
      <div className="container">
        <div className="frameup">
          <div className="nav">
            <ul className="links">
              <li className="signin-active"><a className="btn" href>Sign Up</a></li>
            </ul>
          </div>
          <div ng-app ng-init="checked = false">
            <form className="form-signin" action method="post" name="form">

              <input className="form-styling" type="text" name="fullname" placeholder="First Name" required onChange={(e) => {
                setFirstName(e.target.value);
              }} />

              <input className="form-styling" type="text" name="fullname" placeholder="Last Name" required onChange={(e) => {
                setLastName(e.target.value);
              }} />

              <input className="form-styling" type="email" name="email" placeholder="Email" required onChange={(e) => {
                setEmail(e.target.value);
              }} />

              <input className="form-styling" type="Password" name="password" placeholder="Password" required onChange={(e) => {
                setPassword(e.target.value);
              }} />

              <input className="form-styling" type="password" name="confirmpassword" placeholder="Confirm Password" required onChange={(e) => {
                const a = e.target.value;
                validation(a);
              }} />

              <span style={{ color: "red", fontSize: "13px" }}>{isError}</span>

              <Button className="btn-signup" type="button" onClick={submit}
                disabled={!firstname || !lastname || !email || !password || isError}
              >Sign Up</Button>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
