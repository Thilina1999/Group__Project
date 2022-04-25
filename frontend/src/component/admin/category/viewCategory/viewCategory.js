import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import axios from "axios";

import "./viewCategory.css"
import { AiOutlinePlusCircle, AiFillEdit, AiFillDelete } from "react-icons/ai";
import { useNavigate, Navigate, Link } from "react-router-dom";
import Photo1 from "../../../assets/d9936da5d49e8c2564a284d13db34f70_ccexpress 1.png"
import IconButton, { IconButtonProps } from "@mui/material/IconButton";


const ViewCategory = () => {
  const [categories, setCategories] = useState([]);
  const GetCat = () => {
    useEffect(() => {
      axios
        .get(`http://localhost:8080/getCategory`)
        .then((res) => {
          setCategories(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);
  };
  GetCat();
      const SetData = (data1, data2) => {
        

        localStorage.setItem("CategoryId", data1);
        localStorage.setItem("CategoriesName", data2);
      };
  const OnDelete = (id) => {
    axios.delete(`http://localhost:8080/deleteCategory/${id}`);
    window.location.reload(true);
  }
   const navigate = useNavigate();
   function delayRedirect(e, path) {
     e.preventDefault();

     // Do something..

     setTimeout(() => navigate(path), 300);
   }
  return (
    <div className="container2">
      <img src={Photo1} className="image1" />
      <div className="container">
        <span className="font">Category</span>
        <span>
          <Link to="/addcategory">
            <IconButton  className="plusicon">
              <AiOutlinePlusCircle />
            </IconButton>
          </Link>
        </span>
        <br />
        <br />
        <table>
          {categories.map((category) => {
            return (
              <React.Fragment key={category.categoryid}>
                <tbody className="tablebody">
                  <tr className="tablebody">
                    <td className="td0">{category.categoryid}</td>

                    <td className="td1">{category.categoryname}</td>
                    <td className="td2">
                      <Link to="/editCategory">
                        <IconButton
                          variant="outline-dark"
                          onClick={() =>
                            SetData(category.categoryid, category.categoryname)
                          }
                        >
                          <AiFillEdit />
                        </IconButton>
                      </Link>
                    </td>
                    <td className="td2">
                      <IconButton
                        variant="outline-dark"
                        onClick={() => OnDelete(category.categoryid)}
                      >
                        <AiFillDelete />
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
