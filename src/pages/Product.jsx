import React, { useEffect } from "react";
import NavBar from "../components/NavBar";
import Filters from "../components/Filters";
import { useDispatch, useSelector } from "react-redux";
import { FetchProducts } from "../Redux/ProductCategorySlice";
import ProductsListItems from "../components/ProductsListItems";
import { FetchCart } from "../Redux/CartSlice";
import { FetchWishlist } from "../Redux/WishlistRedux";
import { ApplyFilters } from "../services/HelperFunctions";
const Product = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(FetchProducts());
    dispatch(FetchCart());
    dispatch(FetchWishlist());
  }, []);
  const productsArr = useSelector((state) => state.prodCate.products);

  const cartList = useSelector((state) => state.cart);
  const productsList = ApplyFilters(productsArr);
  const WishListItems = useSelector((state) => state.wishlist);
  const filtersPage = useSelector((state) => state.filter);
  console.log("project page reload");
  return (
    <>
      <NavBar></NavBar>

      <section className="flex ">
        <Filters></Filters>
        <ul className="flex flex-wrap flex-1 gap-5 items-center justify-center mt-7">
          {productsList?.map((val) => (
            <ProductsListItems key={val._id} data={val}></ProductsListItems>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Product;
