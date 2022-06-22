import React, { useState } from "react";
import { Button,Form,Row,Col } from "react-bootstrap";
import { useNavigate, Link, useParams } from "react-router-dom";
import {app} from "../../../firebase"
import "./profile.css";

function Profile(){
  const params = useParams();
  const name = localStorage.getItem('name')
  const email = localStorage.getItem("email")
  // console.log("adada",name,email)

  const [telno,settelno] = useState("");
  const [gender, setgender] = useState("");
  const [dob, setdob] = useState("");
  const [profileimgeurl,setprofileimgurl] = useState("");

  const Profileimage = async(e) => {
    let profileimg = "";
    const file = e.target.files[0];
    const storereference = app.storage().ref("profileimage");
    const filereference = storereference.child(file.name);
    filereference.put(file).then(() =>{
      console.log("Uploaded image",file.name);
      profileimg = filereference.getDownloadURL(filereference.ref).then((url) =>{
        profileimgeurl(url);
        console.log(url);
      });
    });

  };
  const navigate = useNavigate();
    function DelayRedirect(e, path) {
    e.preventDefault();
    setTimeout(() => navigate(path), 600);
    }
    return(
      <div className="admin-profile-form-rectangle">
        <Form >
          <h1 className="admin-profile-form-topic"><b>Edit Profile</b></h1><br/>
          {/* <div className="admin-profile-form-img"></div> */}
          <Form.Group className="pf-img">
            <Form.Label className="admin-profile-txt">Profile Image</Form.Label>
            <Form.Group controlId="formFile" className="mb-4" >
              <Form.Control type="file" onChange={Profileimage}/>
            </Form.Group>
          </Form.Group>
          
          <Form.Group  className="mb-4" controlId="formBasicEmail">
            <Form.Label className="admin-profile-txt-email">E-mail</Form.Label>
            <Form.Control type="email" placeholder={email} disabled />
          </Form.Group>
          
          <Form.Group className="mb-4">
          <Form.Label className="admin-profile-txt-email">Name</Form.Label>
            <Form.Control type="text" placeholder={name} disabled/>
          </Form.Group>

          <Form.Group className="mb-4">
          <Form.Label className="admin-profile-txt-tel">Telephone Number</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="" />
          </Form.Group>

          <Form.Group className="mb-4" controlId="formBasicCheckbox">
            <Row>
              <Col>
              <Form.Label className="admin-profile-txt-dob">Date of Birth</Form.Label>
                <Form.Control placeholder="" />
              </Col>
              <Col>
                <Form.Group as={Col} controlId="formGridState">
                <Form.Label className="admin-profile-txt-gen">Gender</Form.Label>
                  <Form.Select defaultValue="Choose...">
                    <option>Female</option>
                    <option>Male</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
          </Form.Group >

          <Form.Group className="admin-profilr-form-btnGrp">
          <Link to="/dashboard">
            <Button className="admin-profile-form-cancelBtn" variant="primary" type="cancel">
              Cancel
            </Button>
            </Link>

            <Link to="/dashboard">
            <Button className="admin-profile-form-savebtn" variant="primary" type="submit">
              Submit
            </Button>
            </Link>
          </Form.Group>  
        </Form>
      </div>
    )
}
export default Profile