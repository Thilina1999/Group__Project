import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";
import "./viewCategory.css"
import { AiOutlinePlusCircle, AiFillEdit, AiFillDelete } from "react-icons/ai";



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
  const OnDelete = (id) => {
    axios.delete(`http://localhost:8080/deleteCategory/${id}`);
    window.location.reload(true);
  };
  return (
    <div className="container">
      {/* <div className="div1"> 
        <h1>Category</h1>
        <AiOutlinePlusCircle className="plusicon" />
      </div> */}
      <span className="font">Category</span>
      <span>
        <Button variant="outline-dark" className="plusicon">
          <Link to="/addcategory">
            <AiOutlinePlusCircle />
          </Link>
        </Button>
      </span>
      <br />
      <br />
      <table>
        {categories.map((categories) => {
          return (
            <React.Fragment key={categories.id}>
              <tbody className="tablebody">
                <tr className="tablebody">
                  <td className="td0">{categories.id}</td>

                  <td className="td1">{categories.category}</td>
                  <td className="td2">
                    <Button variant="outline-dark">
                      <AiFillEdit />
                    </Button>
                  </td>
                  <td className="td2">
                    <Button
                      variant="outline-dark"
                      onClick={() => OnDelete(categories.id)}
                    >
                      <AiFillDelete />
                    </Button>
                  </td>
                </tr>
              </tbody>
            </React.Fragment>
          );
        })}
      </table>
    </div>
  );
};

export default ViewCategory;
