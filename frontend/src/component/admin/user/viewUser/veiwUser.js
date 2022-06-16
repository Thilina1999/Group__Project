import React,{useEffect,useState} from "react";
import axios from "axios";
import "./viewUser.css"
import {AiFillEdit, AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";

const ViewUser=()=>{
    const [user, setUser] = useState([]);
    const GetUser = () => {
        useEffect(() => {
          axios
             .get(`http://localhost:8080/getUser`)
            .then((res) => {
              setUser(res.data);
            console.log(res.data);
            })
            .catch((err) => {
              console.log(err);
            });
        }, []);
      };
      GetUser();
      const SetData = (data1, data2, data3) => {
        localStorage.setItem("UserFirstName", data1);
        localStorage.setItem("UserLastName", data2);
        localStorage.setItem("Userrole", data3);
      };
  const OnDelete = (id) => {
    axios.delete(`http://localhost:8080/deleteUser/${id}`);
    window.location.reload(true);
  };
    return ( 
        <div className="viewuser-rectangle">
            <div className="container1">
                <h1 className="viewuser-roleTopic"><b>Users</b></h1>
            </div>
            <div className="viewuser-container">
                <table>
                    {user.map((user) => {
                    return (
                        <React.Fragment key={user.id}>
                            <tbody className="tablebody">
                            <tr className="tablebody">
                                {/* <td className="td0">{role.id}</td> */}
                                <td className="viewuser-td1">{user.firstName}</td>
                                <td className="viewuser-td2">{user.lastName}</td>
                                <td className="viewuser-td3">{user.role}</td>
                                <td className="viewuser-td4">
                                    <Link to="/editUser">
                                    <IconButton
                                        variant="outline-dark"
                                        onClick={() =>
                                            SetData(user.firstName, user.lastName,user.role)
                                         }
                                    >
                                    <AiFillEdit className="viewuser-icon" />
                                    </IconButton>
                                    </Link>
                                </td>
                                <td className="viewuser-td4">
                                    <IconButton
                                        variant="outline-dark"
                                        onClick={() => OnDelete(user.id)}
                                    >
                                    <AiFillDelete className="viewuser-icon" />
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
}
export default ViewUser;