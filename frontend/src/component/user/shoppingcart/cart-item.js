import React from "react";
import './cart.css'
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import IconButton from "@mui/material/IconButton";

const CartItem = (props) => {
  const {
    producttitle,
    productsubtitle,
    imageurl,
    productprice,
    quantity,
    id,
    inCrease,
    deCrease,
    removeProduct,
  } = props;
  const product = {
    producttitle,
    productsubtitle,
    imageurl,
    productprice,
    quantity,
    id,
   
  };

  return (
    <div className="cart-item">
      <div className="border-cart">
        <div className="item-div-image">
          <img src={imageurl} alt="product" className="item-image" />
        </div>
        <div className="item-description">
          <h4 className="h4-cart">{producttitle}</h4>

          <p>{productsubtitle}</p>

          <p className="p-cart">Rs.{productprice}.00</p>

          <p className="p-cart-q">{`Quantity: ${quantity}`}</p>
          <IconButton
            onClick={() => inCrease(product)}
            edge="end"
            className="icon-button-cart"
          >
            <AddIcon className="btn-increase" />
          </IconButton>
          {quantity > 1 && (
            <IconButton
              className="icon-button-cart"
              onClick={() => deCrease(product)}
              edge="end"
            >
              <RemoveCircleIcon className="btn-decrease" />
            </IconButton>
          )}

          {quantity === 1 && (
            <IconButton
              className="icon-button-cart"
              onClick={() => removeProduct(product)}
            >
              <DeleteIcon className="btn-trash" />
            </IconButton>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartItem;
