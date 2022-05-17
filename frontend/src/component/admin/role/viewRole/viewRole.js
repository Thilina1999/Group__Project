import React, { useEffect, useState } from "react";
import axios from "axios";
import "./viewRole.css"
import { AiOutlinePlusCircle, AiFillEdit, AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
// import Photo1 from "../../../assets/d9936da5d49e8c2564a284d13db34f70_ccexpress 1.png"

// import React from 'react'

// export const ViewRole = () => {
//   return (
//     <div>viewRole</div>
//   )
// }

const ViewRole = () => {
    const [role, setRoles] = useState([]);
    const GetRole = () => {
        useEffect(() => {
          axios
            .get(`http://localhost:8080/getCategory`)
            .then((res) => {
              setRoles(res.data);
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
    axios.delete(`http://localhost:8080/deleteCategory/${id}`);
    window.location.reload(true);
  };

    return ( 
        <div className="rectangle">
            <div className="container1">
                <h1 className="roleTopic">Role</h1>
                <span>
                    <Link to="/addRole">
                        <IconButton className="plusicon">
                        <AiOutlinePlusCircle className="icon1" />
                        </IconButton>
                    </Link>
                </span>
            </div>
            <div className="container">
                <table>
                    {role.map((role) => {
                    return (
                        <React.Fragment key={role.id}>
                            <tbody className="tablebody">
                            <tr className="tablebody">
                                <td className="td0">{role.id}</td>
                                <td className="td1">{role.rolename}</td>
                                <td className="td2">
                                    <Link to="/editRole">
                                    <IconButton
                                        variant="outline-dark"
                                        onClick={() =>
                                            SetData(role.id, role.rolename)
                                         }
                                    >
                                    <AiFillEdit className="icon" />
                                    </IconButton>
                                    </Link>
                                </td>
                                <td className="td2">
                                    <IconButton
                                        variant="outline-dark"
                                        onClick={() => OnDelete(role.id)}
                                    >
                                    <AiFillDelete className="icon" />
                                    </IconButton>
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