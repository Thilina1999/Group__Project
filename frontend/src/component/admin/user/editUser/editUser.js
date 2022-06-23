import React, { useEffect, useState, useContext} from "react";
import axios from "axios";
import { useNavigate, Link, useParams } from "react-router-dom";
import { Button, Form} from "react-bootstrap";
import { AiOutlinePlusCircle} from "react-icons/ai";
import "./editUser.css";
import IconButton from "@mui/material/IconButton";
import {Multiselect} from "multiselect-react-dropdown";
import { AutheContext } from "../../../context/auth-context/authContext";

const EditUser = () => {
  const { jwt , userId }= useContext(AutheContext);
  const params = useParams();
  const [id, SetID] = useState(0);
  const [firstName, SetfirstName] = useState("");
  const [userlastname, SetlastName] = useState("");
  const [role, SetRole]=useState("");
  const [previlage, Setprevilage]= useState("");
  const [user, setUserData]=useState([]);
  console.log(params.id)
  console.log(user)
  useEffect(() => {
    axios
      .get(`http://localhost:8080/getUserId/${params.id}`, {
        headers: { Authorization: `Bearer ${jwt}` },
      })
      .then((res) => {
        console.log(res.data)
        setUserData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const UpdateUser = () => {
    var adduser = {
      id,
      firstName,
      userlastname,
      role,
      previlage,
    };
    console.log(adduser.role);
    axios
     .put(`http://localhost:8080/updateUser/${params.id}`,
     {
      //  id:Number(adduser.id),
      //  firstName:adduser.firstName,
      //  userlastname:adduser.lastName,
      //  role: adduser.role,
       previlage: adduser.previlage,},
        {
      headers: { Authorization: `Bearer ${jwt}` },
    })
    .then((response) => {
      if (response.status === 200) {
        alert("User Update");
      } else {
        alert("User Update Failed");
      }
    })
    .catch((err) => {
      console.log(err);
    });
  }
  
  const navigate=useNavigate();
  function DelayRedirect(e,path){
    e.preventDefault();
    setTimeout(() => navigate(path),300);
  }

  return (
    <div className="edituser-rectangle"><br/>
        <Form>
        <h1 className="edituser-topic"><b>Update User</b></h1><br/>
          <Form.Group
            className="mb-3"
            controlId="ControlInput3"
            name="user"
          >
            <div className="edituser-userName">
            <Form.Label >User First Name</Form.Label>
            </div>
            <Form.Control
              type="text"
              placeholder={user.firstName}
              readOnly
              onChange={(e) => {
                SetfirstName(e.target.value);
              }}
            />
             <div className="edituser-userName">
            <Form.Label >User Last Name</Form.Label>
            </div>
            <Form.Control
              type="text"
              placeholder={user.lastName}
              readOnly
              onChange={(e) => {
                SetlastName(e.target.value);
              }}
            /> 
             <div className="edituser-userrole">
            <Form.Label >Role</Form.Label>
            </div>
            <Form.Control
              type="text"
              placeholder={user.role}
              readOnly
              onChange={(e) => {
                SetRole(e.target.value);
              }}
            /> 
            <div className="edituser-userrole">
            <Form.Label >Previlages</Form.Label>
            </div>
            <Form.Control
              type="text"
              placeholder={user.previlage}
              onChange={(e) => {
                Setprevilage(e.target.value);
              }}
            /> 
            </Form.Group>
            <div className="edituser-btnGrp">
              <Link to="/viewUser">
            <Button className="edituser-cancelBtn" variant="primary" type="cancel">
              Cancel
            </Button>
          </Link>
          <Link
            to="/viewUser"
            onClick={(e) => {
              DelayRedirect(e, "/viewUser");
            }}
          >
            <Button
              className="edituser-savebtn" variant="primary" type="submit"
              onClick={UpdateUser}//*
            >
              Submit
            </Button>
          </Link> 
          </div><br/><br/>
        </Form>
        
    </div>
  );
};

export default EditUser;

