import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";

 
import { FaList, FaRegHeart } from "react-icons/fa";
import { FiHome, FiLogOut, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";

 
import "react-pro-sidebar/dist/css/styles.css";
import "./sidebar.css";


const Header = () => {
    const [menuCollapse, setMenuCollapse] = useState(false)
    const menuIconClick = () => {

    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  return (
    <>
      <div id="header" className="header1">
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
            <div className="logotext">
              <p>{menuCollapse ? "Hi!" : "Dashboard"}</p>
            </div>
            <div className="closemenu" onClick={menuIconClick}>
              {menuCollapse ? <FiArrowRightCircle /> : <FiArrowLeftCircle />}
            </div>
            <br />
            <br />
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
              <MenuItem icon={<FiHome />}>Home</MenuItem>
              <MenuItem icon={<FaList />}>Category</MenuItem>
              <MenuItem icon={<FaRegHeart />}>Favourite</MenuItem>
              <MenuItem icon={<RiPencilLine />}>Author</MenuItem>
              <MenuItem icon={<BiCog />}>Settings</MenuItem>
            </Menu>
          </SidebarContent>
          <SidebarFooter>
            <Menu iconShape="square">
              <Link to="/home">
                <MenuItem icon={<FiLogOut />}>Logout</MenuItem>
              </Link>
            </Menu>
          </SidebarFooter>
        </ProSidebar>
      </div>
    </>
  );
};

export default Header;