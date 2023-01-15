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
  },
  {
    name: "Electronics",
    icon: <CableIcon />,
  },
  {
    name: "Health & Beauty",
    icon: <FavoriteBorderIcon />,
  },
  {
    name: "Mobile phones & Tablets",
    icon: <PhoneAndroidIcon />,
  },
  {
    name: "Property",
    icon: <HomeIcon />,
  },

  {
    name: "Fashion",
    icon: <CheckroomIcon />,
  },
];
