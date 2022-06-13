import React, { useContext } from 'react'
import { CartContext } from '../../context/cart/cart-context'
import CartItem from './cart-item'
import './cart.css'
import CartHeader from './cart-header'

const Cart = () => {
const { cartItem , itemCount ,total} =useContext(CartContext)

  return (
    <div>
      <>
        <h1 className="Cart-header">Cart</h1>
        {cartItem.length === 0 ? (
          <div className="Cart-empty">Your cart empty </div>
        ) : (
          <>
            <div>
              <div>
                <CartHeader itemCount={itemCount} total={total} />
              </div>
              <div>
                {cartItem.map((item) => (
                  <CartItem {...item} key={item.id} />
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