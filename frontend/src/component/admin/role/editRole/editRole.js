import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { Button, Form} from "react-bootstrap";
import "./editRole.css";

const EditRole = () => {
  const [id, setID] = useState("");
  const [rolename, setRole] = useState("");

  const data1 = Number(localStorage.getItem("RoleId"));

  useEffect(() => {
    setID(data1);
    setRole(localStorage.getItem("RoleName"));
  }, []);

  const UpdateRole = () => {
    const updateData = {
      rolename,
    };

    axios
      .put(`http://localhost:8080/updateRole/${id}`, updateData)
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
    <div className="edit-rectangle"><br/>
        <Form>
        <h1 className="editroletopic"><b>Update Role</b></h1><br/>
          <Form.Group
            className="mb-3"
            controlId="ControlInput3"
            name="role"
          >
            <div className="roleName">
            <Form.Label >Role Name</Form.Label>
            </div>
            <Form.Control
              type="text"
              placeholder={rolename}
              onChange={(e) => {
                setRole(e.target.value);
              }}
            />
            </Form.Group>

            <div className="BtnGrp">
              <Link to="/viewRole">
            <Button className="CancelBtn" variant="primary" type="cancel">
              Cancel
            </Button>
          </Link>
          <Link
            to="/viewRole"
            onClick={(e) => {
              DelayRedirect(e, "/viewRole");
            }}
          >
            
              <Button
                className="Savebtn" variant="primary" type="submit"
                onClick={UpdateRole}
              >
                Submit
              </Button>
              
            
          </Link> 
          </div><br/><br/>
        </Form>
    </div>
  );
};

export default EditRole;

