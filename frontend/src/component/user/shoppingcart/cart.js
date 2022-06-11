import React, { useContext } from 'react'
import { CartContext } from '../../context/cart/cart-context'
import CartItem from './cart-item'
import './shoppingcart.css'

const Cart = () => {
const { cartItem , itemCount ,total} =useContext(CartContext)

  return (
    <div>
      <>
        <h1>Cart</h1>
        {cartItem.length === 0 ? <div>Your cart empty </div> : 
        <>
          <div>
            <div>
              {
                cartItem.map(item=> <CartItem {...item} key={item.id}/> )
              }
            </div>
          </div>
        </>}
      </>
    </div>
  );
}

export default Cart;