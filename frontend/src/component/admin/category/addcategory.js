import React,{useState} from "react";
import './addcategory.css'
import { Button } from "react-bootstrap";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";
import axios from "axios";



const AddCategory=()=>{
    const[categoryid,setID]=useState("");
    const[categoryname,setCategoryName]=useState("");

    const sendData=(e)=>{
        e.preventDefault();

        var addcategoryData = {
            categoryid,
            categoryname
        }
        axios.post(``,addcategoryData).then((res)=>{
            if(res.status === 200){
                alert("Category Add")
            }else{
                Promise.reject()
            }
            e.target.reset();
        })
        
    }




   return (
     <form id="survey-form" className="form">
       <div className="container">
         <div id="form-group">
           <h2 className="h2">Add Category</h2>
           <hr></hr>
           <br />
           <label className="label">Category ID</label>
           <input
             className="form-control"
             type="number"
             id="name"
             name="categoryname"
             placeholder="Enter Product ID"
             required
           />
           <br /> <br />
           <label className="label">Category Name</label>
           <input
             className="form-control"
             type="text"
             id="name"
             name="name"
             placeholder="Enter Category"
             required
           />
         </div>
         <div id="form-group">
           <br />
           <br />
           <Button variant="outline-primary" className="button btn btn-light">
             Cancel
           </Button>
           <Button variant="outline-primary" className="button1 btn btn-light">
             Create
           </Button>
         </div>
       </div>
     </form>
   );

}


export default AddCategory;