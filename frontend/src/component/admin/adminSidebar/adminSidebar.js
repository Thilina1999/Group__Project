import React,{Children, useState} from "react";
import {
    FaTh,
    FaUsers,//users
    FaUser,//roles
    FaKey,//privilages
    FaMailBulk,//mail
    FaBars
}from "react-icons/fa";
import {MdCategory} from "react-icons/md"
import { NavLink } from "react-router-dom";
import "./adminSidebar.css";

const Sidebar=({children})=>{
    const[isOpen,setIsOpen]=useState(false);
    const toggle=()=>setIsOpen(!isOpen);
    const menuItem=[
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
        }
        
    ]
    return(
        <div className="container">
            <div style={{width:isOpen ? "200px" : "50px"}} className="sidebar">
                <div className="top_selection">
                    <h1 style={{display:isOpen ? "block" : "none"}} className="logo">Logo</h1>
                    <div style={{marginLeft:isOpen ? "50px" : "0px"}} className="bar">
                            <FaBars onClick={toggle}/>
                    </div>
                </div>
                {
                    menuItem.map((item,index)=>(
                        <NavLink to={item.path} key={index} className="link" activeclassName="active">
                            <div className="icon">{item.icon}</div>
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