import { Route, BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import React from 'react';

import NavBar1 from './component/navBar/navBar1';
import NavBar2 from './component/navBar/navBar2';
import Signin from './component/form/signin/form.signin';
import Home from './component/Home/home';
import Signup from './component/form/signup/form.signup';
import Footer from './component/footer/footer';
import ProdAddForm from './component/form/prodAddForm/prodAddForm';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar1 />
        <NavBar2 />
        <ProdAddForm />
        <Routes>
          <Route path="/home" element={<Home />} exact></Route>
          <Route path="/form" element={<Signin />} exact></Route>
          <Route path="/form/signup" element={<Signup />} exact></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
