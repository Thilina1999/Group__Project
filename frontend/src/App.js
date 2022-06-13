import { Route, BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

// import NavBar from './component/navBar/navBar';
import Signin from './component/form/signin/form.signin';
// import Home from './component/home';
import Signup from './component/form/signup/form.signup';
import Footer from './component/footer/footer';
import Buyer from './component/BuyerProtection/Buyer';

import CheckMail from './component/form/forgotPass/checkMail';
import ResetPass from './component/form/forgotPass/resetPass';
import Products from './component/user/shopping/products';
import Product from './component/user/shopping/product';

import ProdAddForm from './component/seller/product/prodAddForm/prodAddForm';
import AddCategory from './component/admin/category/addCategory/addcategory';
import ViewCategory from './component/admin/category/viewCategory/viewCategory';
import UpdateCategory from './component/admin/category/updateCategory/updateCategory'
import Sidebar from './component/sidebar/sidebar'
import ProductView from './component/seller/product/productView'

import Dashboard from './component/admin/dashboard/dashboard';
import Profile from './component/admin/profile/profile';
import ViewRole from './component/admin/role/viewRole/viewRole';
import AddRole from './component/admin/role/addRole/addRole';
import EditRole from './component/admin/role/editRole/editRole';
import ViewUser from './component/admin/user/viewUser/veiwUser';
import EditUser from './component/admin/user/editUser/editUser'
import AdminNavbar from './component/admin/adminNavbar/adminNavbar';
import AdminSidebar from './component/admin/adminSidebar/adminSidebar'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
         {/* <NavBar /> */}
        {/*<Home/> */}
        {/* <Sidebar/> */}
          <AdminNavbar/>  
         <AdminSidebar>
        <Routes>
          <Route path="/signin" element={<Signin />} ></Route>
          <Route path="/signup" element={<Signup />} ></Route>
          <Route path="/Buyer" element={<Buyer />} ></Route>
          {/* <Route path="/" element={<Home />} exact></Route>
          <Route path="/signin" element={<Signin />} exact></Route>
          <Route path="/signin/signup" element={<Signup />} exact></Route>
          <Route path="/sell" element={<Sell />} exact></Route> */}
          <Route path="/signin" element={<Signin />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
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
          <Route path="/productView" element={<ProductView />} exact></Route>
          <Route path="/addProduct" element={<ProdAddForm />} exact></Route>
          
          
          <Route path="/dashboard" element={<Dashboard />} exact></Route>
          <Route path="/profile" element={<Profile />} exact></Route>
          <Route path="/viewrole" element={<ViewRole />} exact></Route>
          <Route path="/addrole" element={<AddRole />} exact></Route>
          <Route path="/editrole" element={<EditRole />} exact></Route>
          <Route path="/viewuser" element={<ViewUser/>} exact></Route>
          <Route path="/edituser" element={<EditUser/>} exact></Route>
          <Route path="/adminnavbar" element={<AdminNavbar/>} exact></Route>
          {/* <Route path="/adminsidebar" element={<AdminSidebar/>} exact></Route> */}
        </Routes>
        {/* <Footer /> */}
        </AdminSidebar>
      </BrowserRouter>
    </div>
  );
}

export default App;
