import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setAllClear, setCategory } from "../Redux/FilterSlice";
const HomeListItems = ({ data }) => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  function selectCategory(category) {
    dispatch(setAllClear());
    dispatch(setCategory(category));

    nav("/Products");
  }
  return (
    <li className="flex flex-col items-center gap-2 font-nunito">
      <img
        className="h-52 rounded-lg object-cover max-sm:h-56"
        src={data.src}
        alt="car"
        onClick={() => selectCategory(data.categoryName)}
      ></img>
      <p className="text-xl ">{data.categoryName}</p>
    </li>
  );
};

export default HomeListItems;
