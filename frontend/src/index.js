import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';


import CartContextProvide from './component/context/cart/cart-context';
import  WishListContextProvider from './component/context/wish-list/wishlist-context';
import AutheContextProvider from './component/context/auth-context/authContext';
import SerachContextProvider from './component/context/search-context/search-context'


ReactDOM.render(
  <React.StrictMode>
    <AutheContextProvider>
    <CartContextProvide>
      <WishListContextProvider>
        <SerachContextProvider>
        <App />
        </SerachContextProvider>
      </WishListContextProvider>
    </CartContextProvide>
    </AutheContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
