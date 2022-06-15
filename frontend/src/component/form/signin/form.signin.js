import React, { useState, useContext } from 'react';
import './form.css';
import Img from '../../assets/d9936da5d49e8c2564a284d13db34f70_ccexpress 1.png';
import axios from 'axios';
import { Link, Navigate } from 'react-router-dom';
import { UserContext } from '../../../App';
import jwtDecode from "jwt-decode"
import Auth from './auth';


export default function Signin() {
  const { userData, setUserData } = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  const Signin = async (e) => {
    e.preventDefault();

    try {
      const loginResponse = await axios.post(`http://localhost:8080/api/login`, {
        email,
        password
      }, { withCredentials: true })

      console.log(loginResponse)
      setUserData({
        token: loginResponse.data.data
      })
      if (loginResponse) {
        localStorage.setItem("auth-token", loginResponse.data.data)
        const e = jwtDecode(loginResponse.data.data)
        localStorage.setItem("id", e.Id)
      }
      //setRedirect(true)
      Auth();

    }
    catch (err) {
      console.log(err);
    }

  }

  if (redirect) {
    return <Navigate to="/home" />;
  }

  return (
    <div className="body">
      <img className="img" src={Img} alt="" />
      <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,300,700" rel="stylesheet" type="text/css" />
      <div className="container1">
        <div className="frame">
          <div className="nav">
            <ul className="links">
              <br /><br />
              <li className="signin-active">Sign-In</li>
            </ul>
          </div>
          <div ng-app ng-init="checked = false">
            <form className="form-signin" action method="post" name="form">
              <input className="form-styling" type="text" name="username" placeholder="Email" required onChange={(e) => {
                setEmail(e.target.value);
              }} />

              <input className="form-styling" type="password" name="password" placeholder="Password" required onChange={(e) => {
                setPassword(e.target.value);
              }} />

              <div className="btn-animate">
                <a className="btn-signin" href type="button" onClick={Signin}>Continue</a>
              </div>
            </form>
          </div>
          <br /><br />
          <div className="forgot">
            <Link to="/signin/checkmail" style={{ textDecoration: 'none', color: '#6C757D', fontWeight: '500' }}><a href type="button">Forgot your password?</a></Link>
          </div>
        </div>
      </div>
      <br /><br />
      <div className="span">
        New to miniBell?
      </div>
      <div className="btn1">
        <div className="btn-animate">
          <a className="btn-signin" type="button" href="/signup">Create you miniBell acount</a>
        </div>
      </div>
    </div>
  );
}
