import React, { useEffect, useState } from "react";
import axios from "axios";
import "../showPrivilege/showPrivilege.css";
import { AiOutlinePlusCircle, AiFillEdit, AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";

const Viewprivilege = () => {
    const [privilege, setPrivilege] = useState([]);
    useEffect(() => {
      axios
        .get(`http://localhost:8080/getPrivilegeByid/${""}`)
        .then((response) => {
          setPrivilege(response.data);
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);
  const OnDelete = (id)=>{
      axios.delete(`http://localhost:8080/deletePrivilege`);
      window.location.reload(true);
  }
     
    return (
      <div className="container2">
        <div className="container">
          <span className="font">Privilege</span>
          <span>
            <Link to="/addprivilege">
              <IconButton className="plusicon">
                <AiOutlinePlusCircle className="iconone" />
              </IconButton>
            </Link>
          </span>
          <br />
          <br />
          <table className="headtable">
            {privilege.map((privilege) => {
              return (
                <React.Fragment key={privilege.id}>
                  <tbody className="tablebody">
                    <tr className="tablebody">
                      <td className="td1">{privilege.privilegename}</td>
                      <td className="td2">
                        <Link to="/addprivilege">
                          <IconButton
                            variant="outline-dark"  
                            // onClick={() =>
                            //   SetData(privilege.id, privilege.privilegename)
                            // }
                          >
                            <AiFillEdit className="icon" />
                          </IconButton>
                        </Link>
                      </td>
                      <td className="td2">
                        <IconButton
                          variant="outline-dark"
                          onClick={() => OnDelete(privilege.id)}
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

export default Viewprivilege;