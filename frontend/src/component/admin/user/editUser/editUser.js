import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button, Form} from "react-bootstrap";
import { AiOutlinePlusCircle} from "react-icons/ai";
import "./editUser.css";
import IconButton from "@mui/material/IconButton";

const EditUser = () => {
  const [id, setID] = useState("");
  const [userfirstname, setfirstName] = useState("");
  const [userlastname, setlastName] = useState("");

  const data1 = Number(localStorage.getItem("UserId"));

  useEffect(() => {
    setID(data1);
    setfirstName(localStorage.getItem("UserName"));
     setlastName(localStorage.getItem("UserName"));
  }, []);

  const UpdateUser = () => {//*
    const updateData = {
      userfirstname,
       userlastname,
    };

    axios
      .put(`http://localhost:8080/updateSeller/${id}`, updateData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const navigate = useNavigate();

  function DelayRedirect(e, path) {
    e.preventDefault();
    setTimeout(() => navigate(path), 300);
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
              placeholder={userfirstname}
              onChange={(e) => {
                setfirstName(e.target.value);
              }}
            />
            <div className="edituser-userName">
            <Form.Label >User Last Name</Form.Label>
            </div>
            <Form.Control
              type="text"
              placeholder={userlastname}
              onChange={(e) => {
                setfirstName(e.target.value);
              }}
            /> 
            </Form.Group>
                    <h1 className="edituser-userRole">Roles</h1>
                <span>
                    <Link to="">
                        <IconButton className="edituser-plusicon">
                        <AiOutlinePlusCircle className="edituser-icon" />
                        </IconButton>
                    </Link>
                </span>
              


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

