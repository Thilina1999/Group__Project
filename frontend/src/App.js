import { Route, BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import React from 'react';

import NavBar1 from './component/navBar/navBar1';
import Signin from './component/form/signin/form.signin';
import Home from './component/Home/home';
import Signup from './component/form/signup/form.signup';
import Footer from './component/footer/footer';
import Sell from './component/sell/sell';
import CheckMail from './component/form/forgotPass/checkMail';

<<<<<<< HEAD
=======
import ProdAddForm from './component/form/prodAddForm/prodAddForm';
import AddCategory from './component/admin/category/addCategory/addcategory';
import ViewCategory from './component/admin/category/viewCategory/viewCategory';
import UpdateCategory from './component/admin/category/updateCategory/updateCategory'





>>>>>>> 8690f6470663bdb1dea90c257cf7f4495dcebf17




function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar1 />
<<<<<<< HEAD
=======
        <NavBar2 />
        
>>>>>>> 8690f6470663bdb1dea90c257cf7f4495dcebf17
        <Routes>
          <Route path="/" element={<Home />} exact></Route>
          <Route path="/signin" element={<Signin />} ></Route>
          <Route path="/signup" element={<Signup />} ></Route>
          <Route path="/sell" element={<Sell />} ></Route>
<<<<<<< HEAD
          <Route path="/signin/checkmail" element={<CheckMail />} ></Route>
          {/* <Route path="/" element={<Home />} exact></Route>
=======
          
>>>>>>> 8690f6470663bdb1dea90c257cf7f4495dcebf17
          <Route path="/signin" element={<Signin />} exact></Route>
          <Route path="/signin/signup" element={<Signup />} exact></Route>
          <Route path="/sell" element={<Sell />} exact></Route>
          <Route path="/addcategory" element={<AddCategory/>} exact></Route>
          <Route path="/viewCategory" element={<ViewCategory/>} exact></Route>
          <Route path="/editCategory" element={<UpdateCategory/>} exact></Route>
          <Route path="/addProduct" element={<ProdAddForm/>} exact></Route>
        
        </Routes>
<<<<<<< HEAD
=======

        
       
        

>>>>>>> 8690f6470663bdb1dea90c257cf7f4495dcebf17
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
