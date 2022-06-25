import React, {  useState, useEffect,useContext } from "react";
import axios from "axios";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { AiOutlinePlusCircle, AiFillEdit, AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./productView.css";
import {AutheContext} from "../../../context/auth-context/authContext"
import Header from "../../../sidebarNew/sidebarNew";
import Footer1 from "../../../footerNew/footerNew";

import Announcement from "../../../Announcement/announcement";
import Navbar1 from "../../../navbarNew/navbarNew";

const Productview = () => {
  const userId = localStorage.getItem("id");
  const token = localStorage.getItem("auth-token");
  // const { jwt, userId}= useContext(AutheContext)
   const [products, setProducts] = useState([]);
   useEffect(() => {
     axios
       .get(`http://localhost:8080/getProductByUserId/${userId}`, {
         headers: { Authorization: `Bearer ${token}` },
       })
       .then((response) => {
         setProducts(response.data);
         console.log(response.data);
       })
       .catch((error) => {
         console.log(error);
       });
   }, []);
  const OnDelete = (id) => {
    axios.delete(`http://localhost:8080/deleteProduct/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    window.location.reload(true);
  };

  return (
    <>
      <Announcement />
      <Navbar1 />
      <br />
      <br />
      <br />
      <div className="head">
        <div className="header_view">
          <h2 className="font_view_product">Product</h2>
          <Link to="/addProduct">
            <IconButton className="icon_button" size="large">
              <AddCircleIcon className="view_icon_product" />
            </IconButton>
          </Link>
        </div>
        <div className="wrapper_view_product">
          {products.map((product) => {
            return (
              <React.Fragment key={product.id}>
                <div>
                  <Card className="card_product_view">
                    <CardHeader
                      titleTypographyProps={{
                        color: "#000",
                        fontSize: 27,
                        fontFamily: "Montserrat;",
                      }}
                      subheaderTypographyProps={{
                        color: "#000",
                        fontSize: 15,
                        fontFamily: "Montserrat",
                      }}
                      title={product.producttitle}
                      subheader={product.productsubtitle}
                    />
                    <div>
                      <CardMedia
                        className="card__media_view_pro"
                        component="img"
                        height="300"
                        image={product.imageurl}
                        alt="Kid Cloths"
                      />
                    </div>

                    <CardContent>
                      <Typography
                        style={{
                          fontFamily: "Montserrat;",
                          color: "#000",
                          fontSize: 20,
                        }}
                      >
                        Rs.{product.productprice}.00
                      </Typography>
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
      <Footer1/>
    </>
  );
};

export default Productview;
