import { Route, BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import React from 'react';

import NavBar1 from './component/navBar/navBar1';
import NavBar2 from './component/navBar/navBar2';
import Signin from './component/form/signin/form.signin';
import Home from './component/Home/home';
import Signup from './component/form/signup/form.signup';
import Footer from './component/footer/footer';
import Sell from './component/sell/sell';
<<<<<<< HEAD
=======
import ProdAddForm from './component/form/prodAddForm/prodAddForm';
import AddCategory from './component/admin/category/addcategory';
>>>>>>> 56f3410c7b90ca1700abdb26183db82961811c9d



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar1 />
        <NavBar2 />
<<<<<<< HEAD



        <Routes>
          <Route path="/" element={<Home />} exact></Route>
          <Route path="/signin" element={<Signin />} ></Route>
          <Route path="/signup" element={<Signup />} ></Route>
          <Route path="/sell" element={<Sell />} ></Route>
=======






        <Routes>
          {/* <Route path="/" element={<Home />} exact></Route>
          <Route path="/signin" element={<Signin />} exact></Route>
          <Route path="/signin/signup" element={<Signup />} exact></Route>
          <Route path="/sell" element={<Sell />} exact></Route> */}
>>>>>>> 56f3410c7b90ca1700abdb26183db82961811c9d
        </Routes>
      
        <AddCategory />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
