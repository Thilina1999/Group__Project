import React, { useContext } from "react";
import { WishListContext } from "../../context/wish-list/wishlist-context"
import WishListItem from "./wishList-item"
import "./wish.css";
import ImageList from "../../assets/empty-box.png";

const WishList =()=>{
    const { listItems, removeProductList } =
      useContext(WishListContext);
    return (
      <div>
        <>
          <h1 className="WishList-header">Wish List</h1>
          <br></br>
          {listItems.length === 0 ? (
            <div>
              <h2 className="List-empty">Your Wish List in empty </h2>
              <img src={ImageList} alt="empty list" style={{
              width: '700px'}} />
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
        </>
      </div>
    );
}

export default WishList;