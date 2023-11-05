import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Filters from "../components/Filters";
import { useDispatch, useSelector } from "react-redux";
import { FetchProducts } from "../Redux/ProductCategorySlice";
import ProductsListItems from "../components/ProductsListItems";
import { FetchCart } from "../Redux/CartSlice";
import { FetchWishlist } from "../Redux/WishlistRedux";
import { ApplyFilters } from "../services/HelperFunctions";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Product = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(FetchProducts());
  }, [dispatch]);
  const productsArr = useSelector((state) => state.prodCate.products);
  const productsList = ApplyFilters(productsArr);
  const filtersPage = useSelector((state) => state.filter);
  const [showFilter, setFilter] = useState(false);
  return (
    <>
      <NavBar></NavBar>
      <FontAwesomeIcon
        className="hidden max-sm:inline"
        onClick={() => setFilter((s) => !s)}
        icon={faBars}
      />
      <section className="flex ">
        <Filters show={showFilter}></Filters>
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
