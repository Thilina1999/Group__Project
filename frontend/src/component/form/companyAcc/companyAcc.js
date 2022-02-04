import React from 'react';
import '../signin/form.css';

export default function CompanyAcc() {
    return (
        <div>
            <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,300,700" rel="stylesheet" type="text/css" />
            <div className="container">
                <div className="framecom">
                    <div className="nav">
                        <ul className="links">
                            <li className="signin-active"><a className="btn" href>Create Company Account</a></li>
                        </ul>
                    </div>
                    <div ng-app ng-init="checked = false">
                        <form className="form-signin" action method="post" name="form">
                            <label htmlFor="username">Company Name</label>
                            <input className="form-styling" type="text" name="username" placeholder="Company Name" />
                            <label htmlFor="username">Company Id</label>
                            <input className="form-styling" type="text" name="username" placeholder="Company Id" />
                            <label htmlFor="password">Password</label>
                            <input className="form-styling" type="password" name="password" placeholder="Password" />
                            <label htmlFor="confirmpassword">Confirm password</label>
                            <input className="form-styling" type="password" name="confirmpassword" placeholder="Confirm Password" />
                            <div className="btn-animate">
                                <a className="btn-signin" href="/form/signup">Create</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
