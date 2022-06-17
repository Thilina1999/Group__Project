import React, { useState } from 'react';
import '../signin/form.css';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import Imge from '../../assets/kimono-baby-sweater-crochet-pattern_ccexpress 2.png';

export default function Signup() {

  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [isError, setIsError] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    await axios.post(`http://localhost:8080/api/register`, {
      firstname,
      lastname,
      email,
      password
    })
      .then((res) => {
        console.log(res)
        alert("User added..");
        setRedirect(true);
      })
      .catch((err) => {
        alert("");
        setRedirect(false);
        console.log(err);
        
      })
    
  }

  if (redirect) {
    return <Navigate to="/signin" />;
  }

  const validation = (a) => {
    const uppercaseRegExp = /(?=.*?[A-Z])/;
    const lowercaseRegExp = /(?=.*?[a-z])/;
    const digitsRegExp = /(?=.*?[0-9])/;
    const specialCharRegExp = /(?=.*?[#?!@$%^&*-])/;
    const emailVAlidation = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

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
    else if(!(emailVAlidation.test(email))){
      setIsError("Email validation failed")
    }
    else {
      setIsError("");
    }
  }
  return (
    <div className="body">
      <img src={Imge} className="imge" alt=""/>
      <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,300,700" rel="stylesheet" type="text/css" />
      <div className="container1">
        <div className="frame1">
          <div className="nav">
            <ul className="links">
              <br /><br />
              <li className="signin-active">Sign-Up</li>
            </ul>
            <br />
          </div>
          <div ng-app ng-init="checked = false">
            <form className="form-signup" action method="post" name="form">

<div className="div1">
              <input className="form-styling1" type="text" name="fullname" placeholder="First Name" required onChange={(e) => {
                setFirstName(e.target.value);
              }} />

              <input className="form-styling1" type="text" name="fullname" placeholder="Last Name" required onChange={(e) => {
                setLastName(e.target.value);
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
                disabled={!firstname || !lastname || !email || !password || isError }
              >Sign Up</button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
