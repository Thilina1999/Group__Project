import React, {  useEffect, useState , useContext} from "react";

import axios from "axios";

import "./viewCategory.css";
import { AiOutlinePlusCircle, AiFillEdit, AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";

import IconButton from "@mui/material/IconButton";
import {AutheContext} from "../../../context/auth-context/authContext"
import Navbar1 from "../../../navbarNew/navbarNew";
import Announcement from "../../../Announcement/announcement"
import Footer1 from "../../../footerNew/footerNew"
import Notification from "../../../notification/notification";
import MortionPage from "../../../motion/motionPage"


const ViewCategory = (props) => {
  // const { jwt , userId }= useContext(AutheContext)
  
   const jwt = localStorage.getItem("auth-token");
  const [notify, setNotify] = useState({ Open: false, message: "", type: "" });
  const [categories, setCategories] = useState([]);
    useEffect(() => {
      GetCatData();
    }, []);
    const GetCatData=()=>{
         axios
           .get(`http://localhost:8080/getCategory`, {
             headers: { Authorization: `Bearer ${jwt}` },
           })
           .then((response) => {
             setCategories(response.data.data);
             console.log(response.data);
           })
           .catch((err) => {
             console.log(err);
           });
    }
 

 
  const OnDelete = (id) => {
    axios.delete(`http://localhost:8080/deleteCategory/${id}`, {
      headers: { Authorization: `Bearer ${jwt}` },
    }).then((res) => {
        GetCatData();
        if (res.data.status === 200) {
          setNotify({
            Open: true,
            message: res.data.message,
            type: res.data.type,
          });
        } else if (res.data.status === 404) {
          setNotify({
            Open: true,
            message: res.data.message,
            type: res.data.type,
          });
        }
    }).catch((err) => {
      console.log(err); 
    })
    
  }

  return (
    <>
      <MortionPage>
        <Announcement />
        <Navbar1 />
        <br />
        <br />
        <br />
        <br />
        <div className="container2-category">
          <div className="container-category">
            <span className="font-category">
              Category
              <Link to="/addcategory">
                <IconButton className="plusicon-category">
                  <AiOutlinePlusCircle className="icon1-category" />
                </IconButton>
              </Link>
            </span>
            <br />
            <br />
            <table className="table-category">
              {categories.map((category) => {
                return (
                  <React.Fragment key={category.id}>
                    <tbody className="tablebody-category">
                      <tr className="tablebody-category">
                        <td className="td1-category">
                          {category.categoryname}
                        </td>
                        <td className="td2-category">
                          <Link
                            to={`/editCategory/${category.id}`}
                            style={{ textDecoration: "none" }}
                          >
                            <IconButton variant="outline-dark">
                              <AiFillEdit className="icon-category" />
                            </IconButton>
                          </Link>
                        </td>
                        <td className="td2-category">
                          <IconButton
                            variant="outline-dark"
                            onClick={() => OnDelete(category.id)}
                          >
                            <AiFillDelete className="icon-category" />
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

        <Footer1 />
        <Notification notify={notify} setNotify={setNotify} />
      </MortionPage>
    </>
  );
 };

export default ViewCategory;
