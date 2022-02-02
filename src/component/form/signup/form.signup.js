import React from 'react';
import '../signin/form.css';
export default function Signup() {
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
              <label htmlFor="fullname">First Name</label>
              <input className="form-styling" type="text" name="fullname" placeholder="First Name" />
              <label htmlFor="fullname">Last Name</label>
              <input className="form-styling" type="text" name="fullname" placeholder="Last Name" />
              <label htmlFor="email">Email</label>
              <input className="form-styling" type="text" name="email" placeholder="Email" />
              <label htmlFor="password">Password</label>
              <input className="form-styling" type="text" name="password" placeholder="Password" />
              <label htmlFor="confirmpassword">Confirm password</label>
              <input className="form-styling" type="text" name="confirmpassword" placeholder="Confirm Password" />
              <a className="btn-signup" href>Sign Up</a>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
