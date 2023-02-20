import React from "react";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  ListItemIcon,
} from "@mui/material";
import { Link } from "react-router-dom";
import { categories } from "../../util/ListOfCategories";
import {
  DrawerContainer,
  TypographyCmp,
} from "../../styling/appStructure/LeftBar";

export default function LeftBar() {
  return (
    <DrawerContainer variant="permanent" anchor="left">
      <Toolbar />
      <TypographyCmp variant="h5">All categories</TypographyCmp>
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
