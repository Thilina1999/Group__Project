import React from "react";
import { Button } from "react-bootstrap";

const CartHeader = ({ itemCount, total }) => {
  return (
    <div className="">
      <div className="">
        <p>Total Items: {itemCount}</p>
        <p>{`Total: $${total}`}</p>
      </div>
      <div className="checkout">
        <Button className="button is-black">CHECKOUT</Button>
        <Button className="button is-white" >
          CLEAR
        </Button>
      </div>
    </div>
  );
};

export default CartHeader;
