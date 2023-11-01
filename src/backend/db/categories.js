import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Trucks",
    description: "Heavy duty and Torquy engines good for work.",
    src: "https://raw.githubusercontent.com/Nithin3008/wheels_of_fortune/main/public/Images/Category/truck.webp",
  },
  {
    _id: uuid(),
    categoryName: "Super Cars",
    description: "Gaz guzzlers,High performance cars fun to drive.",
    src: "https://raw.githubusercontent.com/Nithin3008/wheels_of_fortune/main/public/Images/Category/car.webp",
  },
  {
    _id: uuid(),
    categoryName: "Suv",
    description: "Good family cars and best for offroading.",
    src: "https://raw.githubusercontent.com/Nithin3008/wheels_of_fortune/main/public/Images/Category/suv.webp",
  },

  {
    _id: uuid(),
    categoryName: "EV",
    description: "EVs are much more efficient than ICE vehicles.",
    src: "https://raw.githubusercontent.com/Nithin3008/wheels_of_fortune/main/public/Images/Category/ev.webp",
  },
];
