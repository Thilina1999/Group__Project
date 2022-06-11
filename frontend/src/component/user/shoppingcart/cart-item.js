import React from "react";

import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

const CartItem = (props) => {
  const {
    producttitle,
    imageurl,
    productprice,
    quantity,
    id,
    description,
    increase,
    decrease,
  } = props;
  const product = {
    producttitle,
    imageurl,
    productprice,
    quantity,
    id,
    description,
  };

  return (
    <div className="cart-item">
      <div className="item-image">
        <img src={imageurl} alt="product" />
      </div>
      <div className="name-price">
        <h4>{producttitle}</h4>
        <p>${productprice}</p>
      </div>
      <div className="quantity">
        <p>{`Quantity: ${quantity}`}</p>
      </div>
      <div className="btns-container">
        <button className="btn-increase" onClick={() => increase(product)}>
          <AddIcon width="20px" />
        </button>
        {quantity === 1 && (
          <button className="btn-trash">
            <DeleteIcon width="20px" />
          </button>
        )}
        {quantity > 1 && (
          <button className="btn-decrease">
            <RemoveCircleIcon width="20px" />
          </button>
        )}
      </div>
    </div>
  );
};

export default CartItem;
