import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { FetchCategory } from "../Redux/ProductCategorySlice";

import HomeListItems from "../components/HomeListItems";
import NavBar from "../components/NavBar";
const Home = () => {
  const categories = useSelector((state) => state.prodCate);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(FetchCategory());
  }, []);
  return (
    <div className="font-nunito">
      <NavBar></NavBar>
      <hr className="bg-blue-500"></hr>
      <div>
        <img
          src="/heroImage.jpg"
          className="h-[40rem] w-full object-cover max-md:h-96 max-sm:h-72"
          alt="hero"
        ></img>
        <h1 className="text-4xl text-center p-4 transition duration-1000 ease-in-out max-sm:text-xl">
          The CC850 Automotive Marvel
        </h1>
        <hr></hr>
      </div>
      <div className="relative mt-36">
        <h1 className="text-4xl text-center p-4 max-sm:text-xl">
          Our Latest Car
        </h1>
        <img
          src="hero2.jpg"
          alt="hero2"
          className="h-[40rem] rounded-lg  m-auto object-contain max-md:h-96 max-sm:h-72"
        ></img>
        <p className="absolute bottom-24 text-3xl text-white left-32  max-sm:left-8 max-sm:bottom-16 max-sm:text-lg">
          The Forwardism BMW 7 Series
        </p>
      </div>

      <div className="my-28">
        <h1 className="text-4xl text-center max-sm:text-xl p-4">Categories</h1>
        <ul className="grid grid-cols-2 place-items-center  mt-10 gap-7 max-md:flex flex-col">
          {categories?.category.map((val) => (
            <HomeListItems key={val._id} data={val}></HomeListItems>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
