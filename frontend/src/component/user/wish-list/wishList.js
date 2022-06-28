import React, { useContext } from "react";
import { WishListContext } from "../../context/wish-list/wishlist-context"
import WishListItem from "./wishList-item"
import "./wish.css";
import ImageList from "../../assets/empty-box.png";
import Navbar1 from "../../navbarNew/navbarNew";
import Announcement from "../../Announcement/announcement";
import Footer1 from "../../footerNew/footerNew";
import MotionPage from "../../motion/motionPage";

const WishList =()=>{
    const { listItems, removeProductList } =
      useContext(WishListContext);
    return (
      <>
        <MotionPage>
          <Announcement />
          <Navbar1 />
          <br />
          <br />
          <br />
          <br />
          <h1 className="WishList-header">Wish List</h1>
          <br></br>
          {listItems.length === 0 ? (
            <div>
              <h2 className="List-empty">Your Wish List in empty </h2>
              <img
                src={ImageList}
                alt="empty list"
                style={{
                  width: "700px",
                }}
              />
            </div>
          ) : (
            <div>
              {listItems.map((item) => (
                <WishListItem
                  {...item}
                  key={item.id}
                  removeProductList={removeProductList}
                />
              ))}
            </div>
          )}
          <br />
          <br />
          <Footer1 />
        </MotionPage>
      </>
    );
}

export default WishList;