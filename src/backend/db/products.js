import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "Ford F-150 Raptor",
    manufacturer: "Ford",
    price: 90000,
    categoryName: "Trucks",
    HP: 450,
    Torque: "691 Nm",
    engine: "V6",
    src:"https://raw.githubusercontent.com/Nithin3008/wheels_of_fortune/main/public/Images/products/f150.webp",
    rating:5
  },
  {
    _id: uuid(),
    title: "Tundra",
    manufacturer: "Toyota",
    price: 77000,
    categoryName: "Trucks",
    HP: 437,
    Torque: "790 Nm",
    engine: "V6",
    src:"https://raw.githubusercontent.com/Nithin3008/wheels_of_fortune/main/public/Images/products/tundra.webp",
    rating:4.7
  },
  {
    _id: uuid(),
    title: "Silverado",
    manufacturer: "Chevrolet",
    price: 45500,
    categoryName: "Trucks",
    HP: 420,
    Torque: "625 Nm",
    engine: "V8",
    src:"https://raw.githubusercontent.com/Nithin3008/wheels_of_fortune/main/public/Images/products/silverado.webp",
    rating:4.5
  },
  {
    _id: uuid(),
    title: "Sierra HD 2024",
    manufacturer: "GMC",
    price: 65500,
    categoryName: "Trucks",
    HP: 470,
    Torque: "1300 Nm",
    engine: "V8",
    src:"https://raw.githubusercontent.com/Nithin3008/wheels_of_fortune/main/public/Images/products/sierra.webp",
    rating:3.5

  },
  {
    _id: uuid(),
    title: "1500 TRX",
    manufacturer: "Ram",
    price: 84000,
    categoryName: "Trucks",
    HP: 702,
    Torque: "885 Nm",
    engine: "V8",
    src:"https://raw.githubusercontent.com/Nithin3008/wheels_of_fortune/main/public/Images/products/ram.webp",
    rating:2.8
  },



  {
    _id: uuid(),
    title: "RangeRover SV 2023",
    manufacturer: "LandRover",
    price: 218300,
    categoryName: "Suv",
    HP: 523,
    Torque: "750 Nm",
    engine: "V8",
    src:"https://raw.githubusercontent.com/Nithin3008/wheels_of_fortune/main/public/Images/products/rangerover.webp",
    rating:5.0
  },
  {
    _id: uuid(),
    title: "AMG-G63",
    manufacturer: "Mercdes-Benz",
    price: 349000,
    categoryName: "Suv",
    HP: 577,
    Torque: "760 Nm",
    engine: "V8",
    src:"https://raw.githubusercontent.com/Nithin3008/wheels_of_fortune/main/public/Images/products/g63.webp",
    rating:4.3

  },
  {
    _id: uuid(),
    title: "X7-M50i(2021)",
    manufacturer: "BMW",
    price: 120000,
    categoryName: "Suv",
    HP: 523,
    Torque: "612 Nm",
    engine: "V8",
    src:"https://raw.githubusercontent.com/Nithin3008/wheels_of_fortune/main/public/Images/products/x7.webp",
    rating:3.8
  },

  {
    _id: uuid(),
    title: "DBX707",
    manufacturer: "Aston Martin",
    price: 236000,
    categoryName: "Suv",
    HP: 707,
    Torque: "900 Nm",
    engine: "V8",
    src:"https://raw.githubusercontent.com/Nithin3008/wheels_of_fortune/main/public/Images/products/DBX.webp",
    rating:4.8
  },

  {
    _id: uuid(),
    title: "Escalade-V",
    manufacturer: "Cadillac",
    price: 140000,
    categoryName: "Suv",
    HP: 682,
    Torque: "885 Nm",
    engine: "V8",
    src:"https://github.com/Nithin3008/wheels_of_fortune/blob/main/public/Images/products/Escalade-V.jpg?raw=true",
    rating:3.5
  },




  {
    _id: uuid(),
    title: "M5-CS",
    manufacturer: "BMW",
    price: 142000,
    categoryName: "Super Cars",
    HP: 635,
    Torque: "750 Nm",
    engine: "V8",
    src:"https://raw.githubusercontent.com/Nithin3008/wheels_of_fortune/main/public/Images/products/M5-CS.webp",
    rating:4.8

  },


  {
    _id: uuid(),
    title: "La-Ferrari",
    manufacturer: "Ferrari",
    price: 3126249,
    categoryName: "Super Cars",
    HP: 963,
    Torque: "900 Nm",
    engine: "V8",
    src:"https://raw.githubusercontent.com/Nithin3008/wheels_of_fortune/main/public/Images/products/La-Ferrari.webp",
    rating:4.2
  },


  {
    _id: uuid(),
    title: "Jesko",
    manufacturer: "Koenigsegg",
    price: 2990000,
    categoryName: "Super Cars",
    HP: 1600,
    Torque: "1500 Nm",
    engine: "V8",
    src:"https://raw.githubusercontent.com/Nithin3008/wheels_of_fortune/main/public/Images/products/Jesko.webp",
    rating:5.0
  },



  {
    _id: uuid(),
    title: "Valkyrie AMR Pro",
    manufacturer: "Aston Martin",
    price: 3800000,
    categoryName: "Super Cars",
    HP: 1000,
    Torque: "760 Nm",
    engine: "V12",
    src:"https://raw.githubusercontent.com/Nithin3008/wheels_of_fortune/main/public/Images/products/Valkyrie.webp",
    rating:4.0
  },


  {
    _id: uuid(),
    title: "Huayra",
    manufacturer: "Pagani",
    price: 3618000,
    categoryName: "Super Cars",
    HP: 850,
    Torque: "750 Nm",
    engine: "V12",
    src:"https://github.com/Nithin3008/wheels_of_fortune/blob/main/public/Images/products/Huayra.jpg?raw=true",
    rating:3.5
  },






  {
    _id: uuid(),
    title: "e-tron Gt",
    manufacturer: "Audi",
    price: 99000,
    categoryName: "EV",
    HP: 590,
    Torque: "830 Nm",
    src:"https://raw.githubusercontent.com/Nithin3008/wheels_of_fortune/main/public/Images/products/e-tron%20Gt.webp",
    rating:4.3

  },

  {
    _id: uuid(),
    title: "Hummer",
    manufacturer: "GMC",
    price: 79000,
    categoryName: "EV",
    HP: 830,
    Torque: "1600 Nm",
    src:"https://github.com/Nithin3008/wheels_of_fortune/blob/main/public/Images/products/Hummer.jpg?raw=true",
    rating:4.0

  },


  {
    _id: uuid(),
    title: "Nevara",
    manufacturer: "Rimac",
    price: 2200000,
    categoryName: "EV",
    HP: 1914,
    Torque: "2360 Nm",
    src:"https://raw.githubusercontent.com/Nithin3008/wheels_of_fortune/main/public/Images/products/Nevara.webp",
    rating:4.8
  },



  {
    _id: uuid(),
    title: "Air Sapphire",
    src:"https://raw.githubusercontent.com/Nithin3008/wheels_of_fortune/main/public/Images/products/Air%20Sapphire.webp",
    manufacturer: "Lucid Mototrs",
    price: 250000,
    categoryName: "EV",
    HP: 1200,
    Torque: "1500 Nm",
  },


];
