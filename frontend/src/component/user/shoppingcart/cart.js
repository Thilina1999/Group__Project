import React, { useContext } from 'react'
import { CartContext } from '../../context/cart/cart-context'
import CartItem from './cart-item'
import './cart.css'
import CartHeader from './cart-header'

const Cart = () => {
const { cartItem, itemCount, total, inCrease, deCrease, removeProduct,clearCart } =
  useContext(CartContext);
const funcs = { inCrease, deCrease, removeProduct }; 
  return (
    <div>
      <>
        <h1 className="Cart-header">Shopping cart</h1>
        {cartItem.length === 0 ? (
          <div className="Cart-empty">Your cart empty </div>
        ) : (
          <>
            <div>
              <div>
                <CartHeader itemCount={itemCount} total={total} clearCart={clearCart} />
              </div>
              <div>
                {cartItem.map((item) => (
                  <CartItem {...item} key={item.id} {...funcs} />
                ))}
              </div>
            </div>
          </>
        )}
      </>
    </div>
  );
}

export default Cart;