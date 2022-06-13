import { Route, BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

// import NavBar from './component/navBar/navBar';
import Announcement from './component/Announcement/announcement';
import NavBar1 from './component/navbarNew/navbarNew';
// import Footer1 from './component/footerNew/Footer';
import NavBar from './component/navBar/navBar';
import Signin from './component/form/signin/form.signin';
import Home from './component/home';
import Signup from './component/form/signup/form.signup';
import Footer from './component/footer/footer';
import Company from './component/company/company';

import CheckMail from './component/form/forgotPass/checkMail';
import ResetPass from './component/form/forgotPass/resetPass';
import Products from './component/user/shopping/products';
import Product from './component/user/shopping/product';

import ProdAddForm from './component/seller/product/prodAddForm/prodAddForm';
import AddCategory from './component/admin/category/addCategory/addcategory';
import ViewCategory from './component/admin/category/viewCategory/viewCategory';
import UpdateCategory from './component/admin/category/updateCategory/updateCategory'

import Dashboard from './component/admin/dashboard/dashboard';
import Profile from './component/admin/profile/profile';
import ViewRole from './component/admin/role/viewRole/viewRole';
import AddRole from './component/admin/role/addRole/addRole';
import EditRole from './component/admin/role/editRole/editRole';
import ViewUser from './component/admin/user/viewUser/veiwUser';
import EditUser from './component/admin/user/editUser/editUser'
import AdminNavbar from './component/admin/adminNavbar/adminNavbar';
import AdminSidebar from './component/admin/adminSidebar/adminSidebar'
import Sidebar from './component/sidebar/sidebar'
import Productview from './component/seller/product/productView/productView';
import ProductUpdateForm from "./component/seller/product/productupdate/productUpdateForm";
import AddProfileDetails from "./component/seller/merchant/addProfileDetails/addProfileDetails";
import Profileview from "./component/seller/merchant/profileView/profileView";
import UpdateProfileDetails from "./component/seller/merchant/updateProfileDetails/updateProfileDetail";
import Footer1 from './component/footerNew/footerNew';
import Cart from './component/user/shoppingcart/cart';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
         {/* <NavBar /> */}
        {/*<Home/> */}
        {/* <Sidebar/> */}
          {/* <AdminNavbar/>  
         <AdminSidebar/> */}
        <Announcement/>
         <NavBar1/>
         <br/>
         <br/>
         <br/>
        {/* <NavBar /> */}

        {/* <Sidebar /> */}
        <Routes>
          <Route path="/" element={<Home />} exact></Route>
          <Route path="/signin" element={<Signin />} ></Route>
          <Route path="/signup" element={<Signup />} ></Route>
          <Route path="/company" element={<Company />} ></Route>
          {/* <Route path="/" element={<Home />} exact></Route>
          <Route path="/signin" element={<Signin />} exact></Route>
          <Route path="/signin/signup" element={<Signup />} exact></Route>
          <Route path="/sell" element={<Sell />} exact></Route> */}
          <Route path="/home" element={<Home />}></Route>
          <Route path="/signin" element={<Signin />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          

          <Route path="/signin/checkmail" element={<CheckMail />}></Route>
          <Route
            path="/signin/checkmail/resetpass"
            element={<ResetPass />}
          ></Route>
          <Route path="/productDetail/:id" element={<Product />} exact></Route>

          <Route path="/sell" element={<Products/>} exact></Route>

          <Route path="/addcategory" element={<AddCategory />} exact></Route>
          <Route path="/viewCategory" element={<ViewCategory />} exact></Route>
          <Route
            path="/editCategory/:id"
            element={<UpdateCategory />}
            exact
          ></Route>
          <Route path="/productview" element={<Productview />} exact></Route>
          <Route path="/addprofile" element={<AddProfileDetails/>} exact></Route>
          <Route path="/editprofile/:id" element={<UpdateProfileDetails/>} exact></Route>
          <Route path="/viewprofile" element={<Profileview/>} exact></Route>
          <Route
            path="/editProduct/:id"
            element={<ProductUpdateForm />}
            exact
          ></Route>
          <Route path="/addProduct" element={<ProdAddForm />} exact></Route>
          <Route path="/shoppingCart" element={<Cart/>} exact></Route>

          
          
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
        

       
        {/* <Footer /> */}
        <br/>
        <Footer1/>
      </BrowserRouter>
    </div>
  );
}

export default App;
