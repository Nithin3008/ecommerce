import React from "react";
import NavBar from "../components/NavBar";
import Filters from "../components/Filters";

const Product = () => {
  return (
    <>
      <NavBar></NavBar>
      <section className="flex">
        <Filters></Filters>
      </section>
    </>
  );
};

export default Product;
