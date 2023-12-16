import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchCategory } from "../Redux/ProductCategorySlice";
import {
  setCategory,
  setRating,
  setSort,
  setAllClear,
  setRange,
} from "../Redux/FilterSlice";
const Filters = ({ show }) => {
  const dispatch = useDispatch();
  const categoriesList = useSelector((state) => state.prodCate.category);
  const filtersList = useSelector((state) => state.filter);
  useEffect(() => {
    dispatch(FetchCategory());
  }, [dispatch]);
  return (
    <div
      className={`font-nunito border-r-2 border-blue-950 h-100%  p-4 max-sm:${
        show === true ? "inline" : "hidden"
      } space-y-4 `}
      style={{ display: show ? "block" : "none" }}
    >
      <div className="flex gap-16">
        <p className="text-xl">Filters</p>
        <button
          className="text-xl font-normal text-blue-500"
          onClick={() => dispatch(setAllClear())}
        >
          Clear
        </button>
      </div>
      <hr></hr>
      <div className="space-y-2">
        <p>Price Range</p>
        <div className="space-x-10">
          <span>0</span>
          <span>1900k</span>
          <span>3800k</span>
        </div>
        <input
          id="large-range"
          type="range"
          min="0"
          max="3800001"
          onChange={(e) => dispatch(setRange(e.target.value))}
          class="w-full h-1 bg-stone-500  rounded-lg appearance-none cursor-pointer range-lg "
        />
      </div>
      <hr></hr>
      <div className="p-3 space-y-1">
        <p className="text-lg">Category By</p>
        {categoriesList?.map((cate) => (
          <label key={cate.categoryName} className="space-x-2 flex">
            <input
              type="checkbox"
              onClick={() => dispatch(setCategory(cate.categoryName))}
              checked={filtersList.CategoryFilter.includes(cate.categoryName)}
            />
            <span>{cate.categoryName}</span>
          </label>
        ))}
      </div>
      <hr></hr>
      <ul className="p-3 w-max space-y-2">
        <p className="text-lg">Rating </p>
        {Array.from({ length: 5 }, (_, i) => (
          <li key={i} className="space-x-2 flex items-center">
            <input
              id="default-radio-1"
              type="radio"
              value={i + 1}
              className="w-4 h-4"
              onClick={() => dispatch(setRating(i + 1))}
              checked={i + 1 === filtersList.Rating}
            />
            <label>{i + 1} Stars and Above</label>
          </li>
        ))}
      </ul>
      <hr></hr>
      <div className="flex flex-col p-3 space-y-1">
        <p className="text-lg">Sorty By</p>
        <label className="space-x-2">
          <input
            type="radio"
            checked={filtersList.SortBy == "l2h"}
            onClick={() => dispatch(setSort("l2h"))}
          ></input>
          <span>Low to High</span>
        </label>

        <label className="space-x-2">
          <input
            type="radio"
            checked={filtersList.SortBy == "h2l"}
            onClick={() => dispatch(setSort("h2l"))}
          ></input>
          <span>High to Low</span>
        </label>
      </div>
    </div>
  );
};

export default Filters;
