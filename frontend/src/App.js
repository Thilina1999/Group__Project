import { Route, BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

import NavBar from './component/navBar/navBar';
import Signin from './component/form/signin/form.signin';
import Home from './component/Home/home';
import Signup from './component/form/signup/form.signup';
import Footer from './component/footer/footer';

import CheckMail from './component/form/forgotPass/checkMail';
import ResetPass from './component/form/forgotPass/resetPass';
import Products from './component/user/shopping/products';
import Product from './component/user/shopping/product';

import ProdAddForm from './component/seller/product/prodAddForm/prodAddForm';
import AddCategory from './component/admin/category/addCategory/addcategory';
import ViewCategory from './component/admin/category/viewCategory/viewCategory';
import UpdateCategory from './component/admin/category/updateCategory/updateCategory'
import SideBar from './component/navBar/sideBar';












function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <SideBar/>
        <Routes>
          <Route path="/" element={<Home />} exact></Route>
          <Route path="/signin" element={<Signin />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/sell" element={<Products />} exact></Route>
          <Route path="/signin/checkmail" element={<CheckMail />}></Route>
          <Route
            path="/signin/checkmail/resetpass"
            element={<ResetPass />}
          ></Route>
          <Route path="/productDetail/:id" element={<Product />} exact></Route>

          <Route path="/sell" element={<Products />} exact></Route>

          <Route path="/addcategory" element={<AddCategory />} exact></Route>
          <Route path="/viewCategory" element={<ViewCategory />} exact></Route>
          <Route
            path="/editCategory"
            element={<UpdateCategory />}
            exact
          ></Route>
          <Route path="/addProduct" element={<ProdAddForm />} exact></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
