import { Route, BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

// import NavBar from './component/navBar/navBar';
import Announcement from './component/Announcement/announcement';
import NavBarNew from './component/navbarNew/navbarNew';
import Signin from './component/form/signin/form.signin';
import Home from './component/home';
import Signup from './component/form/signup/form.signup';

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

import Productview from './component/seller/product/productView/productView';
import ProductUpdateForm from "./component/seller/product/productupdate/productUpdateForm";
import AddProfileDetails from "./component/seller/merchant/addProfileDetails/addProfileDetails";
import Profileview from "./component/seller/merchant/profileView/profileView";
import UpdateProfileDetails from "./component/seller/merchant/updateProfileDetails/updateProfileDetail";


export const UserContext = createContext()

function App() {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  })

  useEffect(() => {
    const isLoggedIn = async () => {
      let token = localStorage.getItem("auth-token")
      if (token == null){
        localStorage.setItem("auth-token", "")
        token = ""
      }

      const tokenResponse = await axios.post(
        '/api/tokenIsValid', 
        null, 
        {headers: {"auth-token": token}}
      )

      console.log(tokenResponse.data)
      if(tokenResponse.data){
        setUserData({
          token: token,
        })
      }
    }
    isLoggedIn()
  }, [])


  return (
    
    <div className="App">
      <UserContext.Provider value={{ userData, setUserData }}>
      <BrowserRouter>
         {/* <NavBar /> */}
        {/*<Home/> */}
        {/* <Sidebar/> */}
          <AdminNavbar/>  
         <AdminSidebar>
        <Announcement/>
         <NavBarNew/> 
         <br/>
         <br/>
         <br/>

        <Routes>
          <Route path="/" element={<Home />} exact></Route>
          <Route path="/signin" element={<Signin />} ></Route>
          <Route path="/signup" element={<Signup />} ></Route>
          <Route path="/company" element={<Company />} ></Route>

          <Route path="/home" element={<Home />}></Route>

          

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

       
        {/* <Footer /> */}
        <br/>
        {/* <Footer1/> */}
      </BrowserRouter>
      </UserContext.Provider>
    </div>
    
  );
}

export default App;
