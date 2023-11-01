import React from "react";

const HomeListItems = ({ data }) => {
  return (
    <li className="flex flex-col items-center gap-2 font-nunito">
      <img
        className="h-52 rounded-lg object-cover max-sm:h-56"
        src={data.src}
        alt="car"
      ></img>
      <p className="text-xl ">{data.categoryName}</p>
    </li>
  );
};

export default HomeListItems;
