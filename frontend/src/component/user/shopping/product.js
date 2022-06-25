import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import StarIcon from "@mui/icons-material/Star";
import { Button } from "react-bootstrap";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import "./product.css";
import { IsInCart } from "../shoppingcart/carthelper";
import { CartContext } from "../../context/cart/cart-context";
import { AutheContext } from "../../context/auth-context/authContext";
import Navbar1 from "../../navbarNew/navbarNew";
import Announcement from "../../Announcement/announcement";
import Footer1 from "../../footerNew/footerNew";


const Products = () => {
  const { jwt, userId } = useContext(AutheContext);
  //  const jwt = localStorage.getItem("auth-token");
  const { addProduct, cartItem, inCrease } = useContext(CartContext);
  
  const params = useParams();
  const [product, setProduct] = useState([]);
  const {  producttitle,
    productsubtitle,
    imageurl,
    productprice,
    quantity,
    id,} = product;
    const productCart = {
      producttitle,
      productsubtitle,
      imageurl,
      productprice,
      quantity,
      productid:id,
    }; 
  useEffect(() => {
    axios
      .get(`http://localhost:8080/getProductByid/${params.id}`, {
        headers: { Authorization: `Bearer ${jwt}` },
      })
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },[]);
  
 const totalStars = 5;
 const activeStars = 4;
 const itemInCart = IsInCart(productCart, cartItem);
  return (
    <>
      <Announcement />
      <Navbar1 />
      <br />
      <br />
      <br />
      <br />
      <div className="product-detail-container">
        <div>
          <div className="image-container">
            <img src={product.imageurl} className="product-detail-image" />
          </div>
        </div>

        <div className="product-detail-desc">
          <h1 className="h-product">{product.producttitle}</h1>
          <h4
            style={{
              textAlign: "left",
            }}
          >
            {product.productsubtitle}
          </h4>
          <div className="reviews">
            <div
              style={{
                textAlign: "left",
              }}
            >
              {[...new Array(totalStars)].map((arr, index) => {
                return index < activeStars ? (
                  <StarIcon className="start_icon" />
                ) : (
                  <StarBorderIcon className="start_icon" />
                );
              })}
            </div>
          </div>
          <h4>Details: </h4>
          <p className="p-product">{product.description}</p>
          <p className="price">Rs.{product.productprice}.00</p>

          <div className="buttons">
            {!itemInCart && (
              <Button
                type="button"
                className="add-to-cart"
                onClick={() => addProduct(productCart)}
              >
                Add to Cart
              </Button>
            )}
            {itemInCart && (
              <Button
                type="button"
                className="add-to-cart"
                disabled={true}
              >
                Already in Cart
              </Button>
            )}
          </div>
        </div>
      </div>
      <Footer1/>
    </>
  );
};

export default Products;
