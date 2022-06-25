import React from "react";
import { Button } from "react-bootstrap";

const CartHeader = ({ itemCount, total, clearCart }) => {
  return (
    <div className="">
      <div className="">
        <p>Total Items: {itemCount}</p>
        <p>{`Total: Rs.${total}.00`}</p>
      </div>
      <div className="checkout">
        <Button className="button is-black">CHECKOUT</Button>
        {/* <Button className="button is-white" onClick={() => clearCart()}>
          CLEAR
        </Button> */}
      </div>
    </div>
  );
};

export default CartHeader;
