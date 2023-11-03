import React from "react";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "../components/NavBar";
import WishListItem from "../components/WishListItem";
import { useEffect } from "react";
import { FetchWishlist } from "../Redux/WishlistRedux";
const Wishlist = () => {
  const wishlistItems = useSelector((state) => state.wishlist.wishlist);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(FetchWishlist());
  }, [dispatch]);
  return (
    <>
      <NavBar></NavBar>
      <div>
        <ul className="flex  justify-center gap-4 mt-12">
          {wishlistItems?.map((val) => (
            <WishListItem data={val} key={val._id}></WishListItem>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Wishlist;
