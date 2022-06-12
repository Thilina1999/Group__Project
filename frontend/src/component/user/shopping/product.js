import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import StarIcon from "@mui/icons-material/Star";
import { Button } from "react-bootstrap";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import "./product.css";
import { IsInCart } from "../shoppingcart/carthelper";
import { CartContext } from "../../context/cart/cart-context";

const Products = () => {
  const { addProduct, cartItem, inCrease } = useContext(CartContext);
  
  const params = useParams();
  const [product, setProduct] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:8080/getProductByid/${params.id}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },[]);
  
 const totalStars = 5;
 const activeStars = 3;
 const itemInCart = IsInCart(product, cartItem);
  return (
    <div className="product-detail-container">
      <div>
        <div className="image-container">
          <img src={product.imageurl} className="product-detail-image" />
        </div>
      </div>

      <div className="product-detail-desc">
        <h1>{product.producttitle}</h1>
        <h4>{product.productsubtitle}</h4>
        <div className="reviews">
          <div>
            {[...new Array(totalStars)].map(( arr,index) => {
              return index < activeStars ? (
                <StarIcon className="start_icon" />
              ) : (
                <StarBorderIcon className="start_icon" />
              );
            })}
          </div>
        </div>
        <h4>Details: </h4>
        <p>{product.description}</p>
        <p className="price">Rs.{product.productprice}.00</p>

        <div className="buttons">
          {!itemInCart && (
            <Button
              type="button"
              className="add-to-cart"
              onClick={() => addProduct(product)}
            >
              Add to Cart
            </Button>
          )}
          {itemInCart && (
            <button
              type="button"
              className="add-to-cart"
              onClick={() => inCrease(product)}
            >
              Add More
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
