import React, { useEffect, useState } from "react";
import axios from "axios";
import "./viewRole.css"
import { AiOutlinePlusCircle, AiFillEdit, AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
// import {Alert,Button} from "react-bootstrap"

const ViewRole = () => {
    const [role, setRole] = useState([]);
    // const [show,setShow] = useState(true);
    const GetRole = () => {
        useEffect(() => {
          axios
            .get(`http://localhost:8080/getRole`)
            .then((res) => {
              setRole(res.data);
            })
            .catch((err) => {
              console.log(err);
            });
        }, []);
      };
      GetRole();
      const SetData = (data1, data2) => {
        localStorage.setItem("RoleId", data1);
        localStorage.setItem("RoleName", data2);
      };
  const OnDelete = (id) => {
    axios.delete(`http://localhost:8080/deleteRole/${id}`);
    window.location.reload(true);
  };

    return ( 
        <div className="viewrole-rectangle"><br/>
            <div className="container1">
                <h1 className="viewrole-topic"><b>Role</b></h1>
                <span>
                    <Link to="/addRole">
                        <IconButton className="viewrole-plusicon">
                        <AiOutlinePlusCircle className="viewrole-icon" />
                        </IconButton>
                    </Link>
                </span>
            </div>
            <div className="viewrole-container">
                <table>
                    {role.map((role) => {
                    return (
                        <React.Fragment key={role.id}>
                            <tbody className="viewrole-table">
                            <tr className="tablebody">
                                {/* <td className="td0">{role.id}</td> */}
                                <td className="viewrole-td1">{role.rolename}</td>
                                <td className="viewrole-td2">
                                    <Link to="/editRole">
                                    <IconButton
                                        variant="outline-dark"
                                        onClick={() =>
                                            SetData(role.id, role.rolename)
                                         }
                                    >
                                    <AiFillEdit className="viewrole-icon" />
                                    </IconButton>
                                    </Link>
                                </td>
                                <td className="viewrole-td2">
                                    <IconButton
                                        variant="outline-dark"
                                        onClick={() => OnDelete(role.id)}
                                        
                                    >
                                    <AiFillDelete className="viewrole-icon" />
                                    </IconButton>
                                    <script>
                                         alert("sucess");
                                         </script>
                                        {/* <script>
                                            function OnDelete() {
                                                alert("Your file is being uploaded!")
                                            }
                                        </script> */}
                                </td>
                            </tr>
                            </tbody>
                        </React.Fragment>
                    );
                })} 
                </table> 
            </div>
      </div>
  );
};

export default ViewRole;