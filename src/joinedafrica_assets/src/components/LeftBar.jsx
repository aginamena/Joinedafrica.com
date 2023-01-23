import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  ListItemIcon,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
// import DirectionsCarIcon from "@smui/icons-material/DirectionsCar";
import { categories } from "../util/ListOfCategories";
import { Link } from "react-router-dom";

export default function LeftBar() {
  const DrawerContainer = styled(Drawer)({
    "& .MuiDrawer-paper": {
      width: "300px",
      boxSizing: "border-box",
    },
  });

  return (
    <DrawerContainer variant="permanent" anchor="left">
      <Toolbar />
      <Typography
        variant="h5"
        sx={{ marginTop: "50px", marginBottom: "20px", textAlign: "center" }}
      >
        All categories
      </Typography>
      <List>
        {categories.map((category, index) => (
          <ListItem key={index} disablePadding>
            <Link
              style={{ color: "white", textDecoration: "none" }}
              // replacing every space with '-" and turns the category name to lowercase
              to={`view/${category.name.replace(/\s+/g, "-").toLowerCase()}`}
            >
              <ListItemButton>
                <ListItemIcon>{category.icon}</ListItemIcon>
                <ListItemText primary={category.name} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </DrawerContainer>
  );
}
