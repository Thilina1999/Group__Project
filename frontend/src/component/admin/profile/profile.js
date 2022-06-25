import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { Button,Form,Row,Col } from "react-bootstrap";
import { useNavigate, Link, useParams } from "react-router-dom";
import {app} from "../../../firebase"
import "./profile.css";
import {AutheContext} from "../../context/auth-context/authContext"
import Sidebar from "../adminSidebar/adminSidebar"

function Profile(){
  const { jwt , userId }= useContext(AutheContext)
  const params = useParams();
  const adname = localStorage.getItem('name')
  const ademail = localStorage.getItem("email")
  
   console.log("adada",adname,ademail)
  const [id,setid] = useState(userId);
  const [adminname,setadminname] = useState("");
  const [adminemail,setadminemail] = useState("");
  const [telephone,settelno] = useState("");
  const [gender, setgender] = useState("");
  const [profileimgeurl,setprofileimgurl] = useState("");
  const [admin, setadmin] = useState([]);
  // id=userId;
  console.log(id);
  useEffect(() =>{
    axios.get(`http://localhost:8080/getadmin`, {
      headers: { Authorization: `Bearer ${jwt}` },
    })
    .then((res) => {
      console.log(res.data)
      setadmin(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
  },[]);
  // console.log(adminemail)
  const UpdateProfile = () =>{
    var adddata = {
      id,
      adminname,
      adminemail,
      telephone,
      gender,
      profileimgeurl,
    };
    console.log(adddata.adminname)
    axios.put(`http://localhost:8080/updatedetail/${params.id}`,{
      adminname:adname,
      adminemail:ademail,
      telno:adddata.telephone,
      gender:adddata.gender,
      profileimgeurl:adddata.profileimgeurl,
    },{
      headers: { Authorization: `Bearer ${jwt}` },
    }).then((response) => {
      if (response.status === 200) {
          alert("Profile Update");
        } else {
          alert("Profile Update Failed");
        }
     }).catch((err) => {
       console.log(err);
     });
  }
  console.log(profileimgeurl)
  const Profileimage = async(e) => {
    let profileimg = "";
    const file = e.target.files[0];
    const storereference = app.storage().ref("profileimage");
    const filereference = storereference.child(file.name);
    filereference.put(file).then(() =>{
      console.log("Uploaded image",file.name);
      profileimg = filereference.getDownloadURL(filereference.ref).then((url) =>{
        setprofileimgurl(url);
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
      <div>
        <Sidebar>
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
            <Form.Control type="email" placeholder={ademail} disabled
            onChange={(e) => {
              setadminname(e.target.value);
            }} />
          </Form.Group>
          
          <Form.Group className="mb-4">
          <Form.Label className="admin-profile-txt-email">Name</Form.Label>
            <Form.Control type="text" placeholder={adname} disabled
            onChange={(e) => {
              setadminemail(e.target.value);
            }}/>
          </Form.Group>

          <Form.Group className="mb-4">
          <Form.Label className="admin-profile-txt-tel">Telephone Number</Form.Label>
            <Form.Control 
              type="text" 
              placeholder={admin.telephone}
              onChange={(e) => {
                settelno(e.target.value);
              }}/>
          </Form.Group>

          <Form.Group className="mb-4" controlId="formBasicCheckbox">
            <Row>
              {/* <Col>
              <Form.Label className="admin-profile-txt-dob">Date of Birth</Form.Label>
                <Form.Control placeholder={dob.} />
              </Col> */}
              <Col>
                <Form.Group as={Col} controlId="formGridState">
                <Form.Label className="admin-profile-txt-dob">Gender</Form.Label>
                <Form.Control placeholder={admin.gender}
                onChange={(e) => {
                  setgender(e.target.value);
                }} />
                </Form.Group>
              </Col>
            </Row>
          </Form.Group >

          <Form.Group className="admin-profilr-form-btnGrp">
          <Link to="/dashboard"
          onClick={(e) => {
            DelayRedirect(e, "/dashboard");
          }}
          >
            <Button 
            className="admin-profile-form-cancelBtn" 
            variant="primary" 
            type="cancel">
              Cancel
            </Button>
            </Link>

            <Link to="/dashboard">
            <Button 
            className="admin-profile-form-savebtn" 
            variant="primary" 
            type="set" 
            onClick={UpdateProfile}>
              Submit
            </Button>
            </Link>
          </Form.Group>  
        </Form>
        
      </div>
      </Sidebar>
      </div>
    )
}
export default Profile