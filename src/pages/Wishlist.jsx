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
      {wishlistItems.length < 1 ? (
        <h1 className="text-2xl mt-10 text-center">Wishlist is Empty</h1>
      ) : (
        <div>
          <ul className="flex  justify-center gap-4 mt-12 max-md:flex max-md:flex-col max-md:w-fit max-md:mx-auto">
            {wishlistItems?.map((val) => (
              <WishListItem data={val} key={val._id}></WishListItem>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Wishlist;
