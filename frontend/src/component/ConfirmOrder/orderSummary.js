import React, {useContext} from 'react'
import { CartContext } from '../context/cart/cart-context';
import ConfirmOrder from './confirmOrder';
import OrderProduct from './orderProduct';


export default function OrderSummery() {
    const { cartItem, total } = useContext(CartContext)
  return (
    <div>
      <ConfirmOrder total={total} />
      {
        cartItem.map((item)=>(
          <OrderProduct {...item} key={item.id} />
        ))
      }
     
    </div>
  );
}
