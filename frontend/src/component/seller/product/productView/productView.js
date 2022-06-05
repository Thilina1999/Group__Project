import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { AiOutlinePlusCircle, AiFillEdit, AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./productView.css";


const Productview = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/getProducts")
      .then((response) => {
        setProducts(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
const OnDelete = (id)=>{
    axios.delete(`http://localhost:8080/deleteProduct/${id}`);
    window.location.reload(true);
}

  return (
    <div className="head">
      <div className="header_view">
        <h2 className="font_view">Product</h2>
        <Link to="/addProduct">
          <IconButton className="icon_button" size="large" >
            <AiOutlinePlusCircle className="view_icon" />
          </IconButton>
        </Link>
      </div>
      <div className="wrapper_view">
        {products.map((product) => {
          return (
            <React.Fragment key={product.id}>
              <div>
                <Card className="card_product_view">
                  <CardHeader
                    title={product.producttitle}
                    subheader={product.productsubtitle}
                  />
                  <div>
                    <CardMedia
                      className="card__media_view"
                      component="img"
                      height="300"
                      image={product.imageurl}
                      alt="Kid Cloths"
                    />
                  </div>

                  <CardContent>
                    <Typography>Rs.{product.productprice}.00</Typography>
                  </CardContent>

                  <CardActions disableSpacing>
                    <Link
                      to={`/editProduct/${product.id}`}
                      style={{ textDecoration: "none" }}
                    >
                      <IconButton className="icon_button_second" size="large">
                        <AiFillEdit className="view_icon" />
                      </IconButton>
                    </Link>
                    <IconButton className="icon_button_second" size="large">
                      <AiFillDelete
                        className="view_icon"
                        onClick={() => OnDelete(product.id)}
                      />
                    </IconButton>
                  </CardActions>
                </Card>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default Productview;
