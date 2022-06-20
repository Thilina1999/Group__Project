import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link, useParams } from "react-router-dom";
import { Button, Form} from "react-bootstrap";
import { AiOutlinePlusCircle} from "react-icons/ai";
import "./editUser.css";
import IconButton from "@mui/material/IconButton";

const EditUser = () => {
  // const params = useParams();
  const [id, SetID] = useState("");
  const [firstName, SetfirstName] = useState("");
  const [userlastname, SetlastName] = useState("");
  const [role, SetRole]=useState("");

  const data1 = Number(localStorage.getItem("UserId"));
  useEffect(() =>{
    SetID(data1);
    SetfirstName(localStorage.getItem("FirstName"));
  },[]);

  const UpdateUser = () =>{
    const updateData = {
      firstName,
    };

    axios
     .put(`http://localhost:8080/updateUser/${id}`,updateData)
     .then((res) => {
       console.log(res);
     })
     .catch((err) =>{
       console.log(err);
     });
  };
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
              placeholder={firstName}
              onChange={(e) => {
                SetfirstName(e.target.value);
              }}
            />
             <div className="edituser-userName">
            <Form.Label >User Last Name</Form.Label>
            </div>
            <Form.Control
              type="text"
              placeholder={userlastname.lastName}
              onChange={(e) => {
                SetlastName(e.target.value);
              }}
            /> 
             <div className="edituser-userrole">
            <Form.Label >Role</Form.Label>
            </div>
            <Form.Control
              type="text"
              placeholder={role}
              onChange={(e) => {
                SetlastName(e.target.value);
              }}
            /> 
            </Form.Group>
                    {/* <h1 className="edituser-userRole">Roles</h1>
                <span>
                    <Link to="">
                        <IconButton className="edituser-plusicon">
                        <AiOutlinePlusCircle className="edituser-icon" />
                        </IconButton>
                    </Link>
                </span> */}
              


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

