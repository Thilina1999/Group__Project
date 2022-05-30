import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiFillStar,
  AiOutlineStar,
} from "react-icons/ai";
import StarIcon from "@mui/icons-material/Star";

import StarBorderIcon from "@mui/icons-material/StarBorder";
import "./product.css";

const Product = () => {
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
  return (
    <div className="">
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
          <p>{product.description}</p>
          <p className="price">${product.productprice}</p>
          <div className="quantity">
            <h3>Quantity:</h3>
            <p className="quantity-desc">
              <span className="minus">
                <AiOutlineMinus />
              </span>
              <span className="num">{product.productquantity}</span>
              <span className="plus">
                <AiOutlinePlus />
              </span>
            </p>
          </div>
          <div className="buttons">
            <button type="button" className="add-to-cart">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
