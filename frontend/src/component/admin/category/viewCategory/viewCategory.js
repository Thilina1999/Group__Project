import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import axios from "axios";

import "./viewCategory.css"
import { AiOutlinePlusCircle, AiFillEdit, AiFillDelete } from "react-icons/ai";
import { useNavigate, Navigate, Link } from "react-router-dom";



const ViewCategory = () => {
  const [categories, setCategories] = useState([]);
  const GetCat = () => {
    useEffect(() => {
      axios
        .get(`http://localhost:8090/get`)
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
        console.log(data1, data2);

        localStorage.setItem("CategoryId", data1);
        localStorage.setItem("CategoriesName", data2);
      };
  const OnDelete = (id) => {
    axios.delete(`http://localhost:8090/delete/${id}`);
    window.location.reload(true);
  }
   const navigate = useNavigate();
   function delayRedirect(e, path) {
     e.preventDefault();

     // Do something..

     setTimeout(() => navigate(path), 300);
   }
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
                    <Link to="/editCategory">
                      <Button
                        variant="outline-dark"
                        onClick={() =>
                          SetData(categories.id, categories.category)
                        }
                      >
                        <AiFillEdit />
                      </Button>
                    </Link>
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
