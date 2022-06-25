import React from "react";
import "./wish.css";

import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";

const WishListItem = (props) => {
  const {
    producttitle,
    productsubtitle,
    imageurl,
    productprice,
    quantity,
    id,
    removeProductList,
  } = props;
  const productList = {
    producttitle,
    productsubtitle,
    imageurl,
    productprice,
    quantity,
    id,
  };

  return (
    <div className="list-item">
      <div className="border-list">
        <Link
          to={`/productDetail/${productList.id}`}
          style={{ textDecoration: "none" }}
        >
          <div className="item-div-image-list">
            <img src={imageurl} alt="product" className="item-image-list" />
          </div>
        </Link>
        <div className="item-description-list">
          <h4 className="h4-list">{producttitle}</h4>

          <p>{productsubtitle}</p>

          <p className="p-list">Rs.{productprice}.00</p>
          <IconButton
            className="icon-button-list"
            onClick={() => {
              removeProductList(productList);
            }}
          >
            <DeleteIcon className="btn-trash-list" />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default WishListItem;
