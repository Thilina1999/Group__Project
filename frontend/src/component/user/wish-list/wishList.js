import React, { useContext } from "react";
import { WishListContext } from "../../context/wish-list/wishlist-context"
import WishListItem from "./wishList-item"
import "./wish.css";


const WishList =()=>{
    const { listItems, removeProductList } =
      useContext(WishListContext);
    return (
      <div>
        <>
          <h1 className="WishList-header">Wish List</h1>
          <br></br>
          {listItems.length === 0 ? (
            <div className="Cart-empty">Your cart empty </div>
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