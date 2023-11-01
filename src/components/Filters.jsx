import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchCategory } from "../Redux/ProductCategorySlice";
import {
  setCategory,
  setRating,
  setSort,
  setAllClear,
} from "../Redux/FilterSlice";
const Filters = () => {
  const dispatch = useDispatch();
  const categoriesList = useSelector((state) => state.prodCate.category);
  const filtersList = useSelector((state) => state.filter);
  useEffect(() => {
    dispatch(FetchCategory());
  }, [dispatch]);
  return (
    <div>
      <div className="flex gap-16">
        <p>Filters</p>
        <button onClick={() => dispatch(setAllClear())}>Clear</button>
      </div>
      <hr></hr>
      <p>Category By</p>
      {categoriesList?.map((cate) => (
        <div key={cate.categoryName} className="space-x-2">
          <label>
            <input
              type="checkbox"
              onClick={() => dispatch(setCategory(cate.categoryName))}
              checked={filtersList.CategoryFilter.includes(cate.categoryName)}
            />
            {cate.categoryName}
          </label>
        </div>
      ))}
      <p>Rating </p>
      {Array.from({ length: 5 }, (_, i) => (
        <div key={i} className="space-x-2 flex items-center">
          <input
            id="default-radio-1"
            type="radio"
            value={i + 1}
            name="default-radio"
            className="w-4 h-4"
            onClick={() => dispatch(setRating(i + 1))}
          />
          <label>{i + 1} Stars and Above</label>
        </div>
      ))}
      <p>Sorty By</p>
      <div className="flex flex-col">
        <label>
          <input type="radio" onClick={() => dispatch(setSort("l2h"))}></input>
          Low to High
        </label>

        <label>
          <input type="radio" onClick={() => dispatch(setSort("h2l"))}></input>
          High to Low
        </label>
      </div>
    </div>
  );
};

export default Filters;
