import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import CableIcon from "@mui/icons-material/Cable";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import HomeIcon from "@mui/icons-material/Home";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import React from "react";

export const categories = [
  {
    name: "Vehicles",
    icon: <DirectionsCarIcon />,
    subcategory: ["cars", "boats", "trucks", "trailers", "motocycles"],
  },
  {
    name: "Electronics",
    icon: <CableIcon />,
    subcategory: [
      "computer-&-laptops",

      "video-games",

      "camera",

      "radio-&-home-audio",

      "other-electronic-gadgets",
    ],
  },
  {
    name: "Health & Beauty",
    icon: <FavoriteBorderIcon />,
    subcategory: [
      "skin-care",

      "hair-products",

      "bath-&-body",

      "fragrance",

      "vitamins-&-supplements",
    ],
  },
  {
    name: "Mobile phones & Tablets",
    icon: <PhoneAndroidIcon />,
    subcategory: [
      "phones",

      "tablets",

      "wrist-watches",

      "accessories-for-mobile-phones-&-tablets",
    ],
  },
  {
    name: "Property",
    icon: <HomeIcon />,
    subcategory: [
      "houses-&-apartments-for-rent",

      "houses-&-apartments-for-sale",

      "land-&-plots-for-rent",

      "commercial-property-for-sale",

      "short-let-property",
    ],
  },

  {
    name: "Fashion",
    icon: <CheckroomIcon />,
    subcategory: [
      "bags",

      "clothing-&-clothing-accessories",

      "jewelry",

      "shoes",
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
