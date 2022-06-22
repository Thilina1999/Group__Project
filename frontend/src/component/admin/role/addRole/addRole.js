import React, { useContext, useState } from "react";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import axios from "axios";
import "./addRole.css";
import { useNavigate, Link } from "react-router-dom";
import { AutheContext } from "../../../context/auth-context/authContext";
// import { ToastContainer,toast } from "react-toastify";
// import {ToastProperties} from "./../../toast"
// import "react-toastify/dist/ReactToastify.css";

const AddRole = () => {
  const {jwt, userId }= useContext(AutheContext)
  let [rolename, setRolename] = useState("");

  // const handleClick=()=>{
  //   toast.success("added")
  // }
  // const notify=()=>toast("added");
  
  const SendData = (e) => {
    e.preventDefault();

    var addRoleData = {
      rolename,
    };
    
    axios
       .post(`http://localhost:8080/createRole`, addRoleData ,{
        headers: { Authorization: `Bearer ${jwt}` },
      })
      .then((res) => {
        console.log(res);

        if (res.status === 201) {
          alert("Role Add");
        } else {
          Promise.reject();
        }
        e.target.reset();
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
    <div className="addrole-rectangle"><br/>
        <Form >
          <h1 className="addrole-topic"><b>Add New Role</b></h1><br/>
          <Form.Group className="mb-4" controlId="ControlInput2" name="rolename">
            <Form.Control
              className="addrole-formcontrol"
              type="text"
              placeholder="Enter the Role Name"
              onChange={(e) => {
                setRolename(e.target.value);
              }}
            />
          </Form.Group>
          
          <div className="addrole-btnGrp">
          <Link to="/viewRole">
            <Button className="addrole-cancelBtn" variant="primary" type="cancel">
              Cancel
            </Button>
          </Link>
          <Link
            to="/viewRole"
            onClick={(e) => DelayRedirect(e, "/viewRole")}
          >
            <Button
              className="addrole-savebtn" variant="primary" type="submit"
              onClick={SendData}
            >
              Create
            </Button>
          </Link>
          </div><br/><br/>
        </Form>
    </div>
  );
};
export default AddRole;

