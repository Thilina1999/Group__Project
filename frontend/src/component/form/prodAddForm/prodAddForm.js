import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import './prodAddForm.css';

export default function ProdAddForm() {
    return (
        <form id="survey-form" className="form">
            <div className="container">
                <div id="form-group">
                    <h2>Submit a Product</h2>
                    <hr></hr>
                    <br />
                    <br />
                    <label className="label">Product Name</label>
                    <input className="form-control" type="text" id="name" name="name" placeholder="Enter Product Name" required /><br /> <br />

                    <div id="form-group">
                        <label className="label">Product Category</label>
                        <select id="status" name="status" className="form-contro">
                            <option disabled selected value>Product Category</option>
                            <option value="Cosmetic And Beauty">Cosmetic And Beauty</option>
                            <option value="Music">Music</option>
                            <option value="Games">Games</option>
                            <option value="Electroni">Electronics</option>
                            <option value="Games">Health</option>
                            <option value="Electroni">Travel</option>
                            <option value="other">Other</option>
                        </select></div> <br />

                    <div id="form-group">
                        <p className="form-para">Product Freshness</p> 
                        <input type="radio" id="options" name="options" className="input-radio" />
                        <label htmlFor options>Brand New</label>
                        <br />
                        <input type="radio" id="maybe" name="options" className="input-radio" />
                        <label htmlFor maybe>Second Hand</label>
                        <br />
                        <input type="radio" id="notsure" name="options" className="input-radio" />
                        <label htmlFor notsure>Refurbished</label> </div><br />
                    <label>Email</label><br />
                    <input className="form-control" type="email" id="email" name="email" placeholder="Enter your email" /> <br /> <br />
                    <label htmlFor name>Age <span className="clue">(Optional)</span></label><br />
                    <input className="form-control" type="number" id="age" name="age" placeholder="Age" min={10} max={85} /><br /> <br />
                </div>


                <div id="form-group">
                    <p className="form-para">Would you recommend freeCodeCamp to a friend? </p>
                    <input type="radio" id="options" name="options" className="input-radio" />
                    <label htmlFor options>Definitely</label>
                    <br />
                    <input type="radio" id="maybe" name="options" className="input-radio" />
                    <label htmlFor maybe>Maybe</label>
                    <br />
                    <input type="radio" id="notsure" name="options" className="input-radio" />
                    <label htmlFor notsure>Not sure</label> </div><br />
                <div id="form-group">
                    <p className="form-para">What is your favorite feature of freeCodeCamp?</p>
                    <select id="features" name="features" className="form-contro">
                        <option value="Challenges">Challenges</option>
                        <option value="Projects">Projects</option>
                        <option value="community">Community</option>
                        <option value="open">Open Source</option>
                    </select>
                </div>
                <br />
                <div id="form-group">
                    <p className="form-para">What would you like to see improved? <span className="clue">(Check all that apply) </span> </p>
                    <input className="input-checkbox" type="checkbox" name="frontend" defaultValue="A" /> Frontend Projects <br />
                    <input className="input-checkbox" type="checkbox" name="backend" defaultValue="B" /> Backend Projects<br />
                    <input className="input-checkbox" type="checkbox" name="data" defaultValue="C" /> Data Visualization<br />
                    <input className="input-checkbox" type="checkbox" name="challenges" defaultValue="D" /> Challenges<br />
                    <input className="input-checkbox" type="checkbox" name="open" defaultValue="E" /> Open Source Community<br />
                    <input className="input-checkbox" type="checkbox" name="Gitter" defaultValue="F" /> Gitter Help Rooms<br />
                    <input className="input-checkbox" type="checkbox" name="videos" defaultValue="G" /> Videos <br />
                    <input className="input-checkbox" type="checkbox" name="meetups" defaultValue="H" /> City meetups <br />
                    <input className="input-checkbox" type="checkbox" name="wiki" defaultValue="I" /> Wiki <br />
                    <input className="input-checkbox" type="checkbox" name="forum" defaultValue="J" /> Forum <br />
                    <input className="input-checkbox" type="checkbox" name="extras" defaultValue="K" />
                    <label htmlFor="extras"> Additional Courses</label> </div> <br />
                <div id="form-group">
                    <p className="form-para">Any Comments or Suggestions?</p>
                    <input className="comment" type="textarea" name="comments" id="comments" />
                </div> <br />

                <div id="form-group">
                    <button type="submit" id="submit" className="submit-button">
                        Submit
                    </button> </div>
            </div>
        </form>
    );
}
