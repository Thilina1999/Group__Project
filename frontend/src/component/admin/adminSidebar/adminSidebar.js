import React,{Children, useState} from "react";
import {
    FaTh,
    FaUsers,//users
    FaUser,//roles
    FaKey,//privilages
    FaMailBulk,//mail
    FaBars
}from "react-icons/fa";
import {MdHome} from "react-icons/md";
import {MdCategory} from "react-icons/md"
import {BsPersonCircle} from "react-icons/bs"
import { NavLink } from "react-router-dom";
import "./adminSidebar.css";
import Logo from "../../assets/miniBelllogo.png"

const Sidebar=({children})=>{
    const[isOpen,setIsOpen]=useState(false);
    const toggle=()=>setIsOpen(!isOpen);
    const menuItem=[
        {
            path:"/home",
            name:"Home",
            icon:<MdHome/>
        },
        {
            path:"/dashboard",
            name:"Dashboard",
            icon:<FaTh/>
        },
        {
            path:"/viewUser",
            name:"Users",
            icon:<FaUsers/>
        },
        {
            path:"/viewRole",
            name:"Roles",
            icon:<FaUser/>
        },
        {
            path:"/privilage",
            name:"Privilage",
            icon:<FaKey/>
        },
        {
            path:"/emails",
            name:"E-mails",
            icon:<FaMailBulk/>
        },
        {
            path:"/viewCategory",
            name:"Category",
            icon:<MdCategory/>
        },
        {
            path:"/profile",
            name:"Profile",
            icon:<BsPersonCircle/>
        }
        
    ]
    return(
        <div className="container">
            <div style={{width:isOpen ? "200px" : "50px"}} className="sidebar">
                <div className="admin-sidebar-top_selection">
                    {/* <h1 style={{display:isOpen ? "block" : "none"}} className="admin-sidebar-logo">Logo</h1> */}
                    <div style={{display: isOpen ? "block" : "none"}} >
                   <img
                    src={Logo}
                    path="/company"
                    width="100"
                    height="80"
                    className="admin-sidebar-companylogo"
                    alt="Minibel"
                />
                   </div>
                    <div style={{marginLeft:isOpen ? "30px" : "0px"}} className="bar">
                            <FaBars onClick={toggle}/>
                    </div>
                </div>
                {
                    menuItem.map((item,index)=>(
                        <NavLink to={item.path} key={index} className="link" activeclassName="active">
                            <div className="adminicon">{item.icon}</div>
                            <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                        </NavLink>
                    ))
                }
            </div>
            <main>{children}</main>
        </div>
    );
};
export default Sidebar;