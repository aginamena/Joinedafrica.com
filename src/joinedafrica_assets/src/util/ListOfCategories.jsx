import React from "react";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import CableIcon from "@mui/icons-material/Cable";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import HomeIcon from "@mui/icons-material/Home";
import CheckroomIcon from "@mui/icons-material/Checkroom";

export const categories = [
  {
    name: "Vehicles",
    icon: <DirectionsCarIcon />,
    subcategory: [
      "Cars",
      "Buses",
      "Trucks_and_trailers",
      "Vehicle_parts_and_assessories",
      "Motocycle_and_bicycles",
    ],
  },
  {
    name: "Electronics",
    icon: <CableIcon />,
    subcategory: [
      "Computers_and_laptops",
      "Electronic_supplies",
      "Audio_and_music_equipments",
      "Computer_accessories",
      "Radio_and_home_audio",
      "Tv_and_dvd_equipment",
    ],
  },
  {
    name: "Health_and_beauty",
    icon: <FavoriteBorderIcon />,
    subcategory: [
      "Skincare",
      "Hair_products",
      "Bath_and_body",
      "Fragrances",
      "Vitamins_and_supplements",
    ],
  },
  {
    name: "Mobile_phones_and_tablets",
    icon: <PhoneAndroidIcon />,
    subcategory: [
      "Phones",
      "Tablets",
      "Accessories_for_mobile_phones_and_tablets",
    ],
  },
  {
    name: "Properties",
    icon: <HomeIcon />,
    subcategory: [
      "Houses_and_apartments_for_rent",
      "Houses_and_apartments_for_sale",
      "Land_and_plots_for_sale",
    ],
  },

  {
    name: "Fashion",
    icon: <CheckroomIcon />,
    subcategory: [
      "Bags",
      "Clothing_and_clothing_accessories",
      "Jewelries",
      "Shoes",
    ],
  },
];
export function getCategoryNames() {
  const result = [];
  categories.forEach((category) => result.push(category.name));
  return result;
}

export function getsubcategory(categoryName) {
  for (let i = 0; i < categories.length; i++) {
    if (categories[i].name === categoryName) return categories[i].subcategory;
  }
}
