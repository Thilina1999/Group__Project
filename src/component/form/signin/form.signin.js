import React from 'react';
import './form.css';

export default function Signin() {

  return (
    <div>
      <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,300,700" rel="stylesheet" type="text/css" />
      <div className="container">
        <div className="frame">
          <div className="nav">
            <ul className="links">
              <li className="signin-active"><a className="btn" href>Signn in</a></li>
            </ul>
          </div>
          <div ng-app ng-init="checked = false">
            <form className="form-signin" action method="post" name="form">
              <label htmlFor="username">Username</label>
              <input className="form-styling" type="text" name="username" placeholder="Username" />
              <label htmlFor="password">Password</label>
              <input className="form-styling" type="text" name="password" placeholder="Password" />
              <div className="btn-animate">
                <a className="btn-signin" href>Sign in</a>
              </div>
              <div className="btn-animate">
                <a className="btn-signin" href="/form/signup">Create A New Account</a>
              </div>
            </form>
          </div>
          <div className="forgot">
            <a href>Forgot your password?</a>
          </div>

        </div>
      </div>
    </div>
  );
}
