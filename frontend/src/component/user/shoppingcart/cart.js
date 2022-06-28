import React, { useContext } from 'react'
import { CartContext } from '../../context/cart/cart-context'
import CartItem from './cart-item'
import './cart.css'
import CartHeader from './cart-header'
import CartImage from "../../assets/empty-cart.png";
import Announcement from "../../Announcement/announcement"
import Navbar1 from "../../navbarNew/navbarNew"
import Footer1 from "../../footerNew/footerNew"
import MotionPage from '../../motion/motionPage'

const Cart = () => {
  const jwt = localStorage.getItem("auth-token");
const { cartItem, itemCount, total, inCrease, deCrease, removeProduct,clearCart } =
  useContext(CartContext);
const funcs = { inCrease, deCrease, removeProduct }; 
  return (
    <>
      <MotionPage>
        <Announcement />
        <Navbar1 />
        <br />
        <br />
        <br />
        <br />
        <div>
          <h1 className="Cart-header">Shopping cart</h1>
          <br />
          {cartItem.length === 0 ? (
            <div>
              <h2 className="Cart-empty">Your Cart in empty</h2>
              <br />
              <br />
              <img
                src={CartImage}
                style={{
                  width: "700px",
                }}
                alt="empty list"
              />
            </div>
          ) : (
            <>
              <div>
                <div>
                  <CartHeader
                    itemCount={itemCount}
                    total={total}
                    clearCart={clearCart}
                  />
                </div>
                <div>
                  {cartItem.map((item) => (
                    <CartItem {...item} key={item.id} {...funcs} />
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
        <br />
        <br />
        <Footer1 />
      </MotionPage>
    </>
  );
}

export default Cart;