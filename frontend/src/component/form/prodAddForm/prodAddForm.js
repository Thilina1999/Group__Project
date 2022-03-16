import React from 'react';

import './prodAddForm.css';
import { app } from "../../../firebase"
import { Button, Form, FormControl } from "react-bootstrap";

export default function ProdAddForm() {

    const onAddProduct = (e) => {
      let photos="";
      const file = e.target.files[0];
      const storageRef = app.storage().ref("photos");
      const fileRef = storageRef.child(file.name);
      fileRef.put(file).then(() => {
        console.log("Uploaded file", file.name);
        photos = fileRef.getDownloadURL(fileRef.ref).then((url) => {
        //   setaddGem({ ...addGem, photos: url });
          console.log(url);
          
        });
      });
      
    };




    return (
        <Form.Group controlId="formFile" className="mb-3">
    <Form.Label>Default file input example</Form.Label>
    <Form.Control type="file" onChange={onAddProduct} />
    </Form.Group>
        // <form id="survey-form" className="form">
        //     <div className="container">
        //         <div id="form-group">
        //             <h2 className="h2">Submit a Product</h2>
        //             <hr></hr>
        //             <br />
        //             <br />
        //             <label className="label">Product Name</label>
        //             <input className="form-control" type="text" id="name" name="name" placeholder="Enter Product Name" required /><br /> <br />

        //             <div id="form-group">
        //                 <label className="label">Product Category</label>
        //                 <select id="status" name="status" className="form-contro">
        //                     <option disabled selected value>Product Category</option>
        //                     <option value="Cosmetic And Beauty">Cosmetic And Beauty</option>
        //                     <option value="Music">Music</option>
        //                     <option value="Games">Games</option>
        //                     <option value="Electroni">Electronics</option>
        //                     <option value="Games">Health</option>
        //                     <option value="Electroni">Travel</option>
        //                     <option value="other">Other</option>
        //                 </select></div> <br />

        //             <div id="form-group">
        //                 <label className="label">Product Freshness</label> <br />
        //                 <input type="radio" id="options" name="options" className="input-radio" />
        //                 <label htmlFor options>Brand New</label><br />
        //                 <input type="radio" id="maybe" name="options" className="input-radio" />
        //                 <label htmlFor maybe>Second Hand</label><br />
        //                 <input type="radio" id="notsure" name="options" className="input-radio" />
        //                 <label htmlFor notsure>Refurbished</label> </div><br />
        //             <label className="label">Image Of Product</label><br />
        //             <input className="form-control" type="file" id="file" name="file" /> <br /> <br />
        //         </div>


        //         <div id="form-group">
        //             <label className="label">Additional Description</label><br />
        //             <textarea className="form-control" type="text" id="additional" name="description" required /><br /> <br />

        //             <label className="label">Product Price</label><br />
        //             <input className="form-control" type="number" id="price" name="price" placeholder="Ex: 5$" required /><br /> <br />

        //             <label className="label">Comments</label><br />
        //             <textarea className="form-control" type="text" id="additional" name="comments" required /><br /> <br />

        //         </div>

        //         <div id="form-group">
        //             <Button variant="outline-primary">Submit</Button>
        //         </div>
        //     </div>
        // </form>
    );
}
