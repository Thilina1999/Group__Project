import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const CartHeader = ({ itemCount, total, clearCart }) => {
  return (
    <div className="">
      <div className="">
        <p>Total Items: {itemCount}</p>
        <p>{`Total: $${total}`}</p>
      </div>
      <div className="checkout">
        <Link to="/address" >
        
        <Button className="button is-black">CHECKOUT</Button>
        </Link>
        
      </div>
    </div>
  );
};

export default CartHeader;
