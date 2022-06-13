import React, {  useEffect, useState } from "react";

import axios from "axios";

import "./viewCategory.css";
import { AiOutlinePlusCircle, AiFillEdit, AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import Photo1 from "../../../assets/d9936da5d49e8c2564a284d13db34f70_ccexpress 1.png";
import IconButton from "@mui/material/IconButton";


const ViewCategory = () => {
  const [categories, setCategories] = useState([]);
    useEffect(() => {
      axios
        .get(`http://localhost:8080/getCategory`)
        .then((response) => {
          setCategories(response.data);
          console.log(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);
 

 
  const OnDelete = (id) => {
    axios.delete(`http://localhost:8080/deleteCategory/${id}`);
    window.location.reload(true);
  }

  return (
    <div className="container2-category">
      <img src={Photo1} className="image1-category" />
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
                    <td className="td1-category">{category.categoryname}</td>
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
  );
 };

export default ViewCategory;
