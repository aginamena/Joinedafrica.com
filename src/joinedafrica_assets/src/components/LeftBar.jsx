import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
} from "@mui/material";
import { styled } from "@mui/material/styles";

export default function LeftBar() {
  const DrawerContainer = styled(Drawer)({
    "& .MuiDrawer-paper": {
      width: "240px",
      boxSizing: "border-box",
    },
    zIndex: "-1",
  });
  return (
    <DrawerContainer variant="permanent" anchor="left">
      <Toolbar />
      <List>
        {[
          "Homepage",
          "Pages",
          "Groups",
          "Marketplace",
          "Friend",
          "Settings",
          "Profile",
        ].map((text, index) => (
          <ListItem key={index}>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </DrawerContainer>
  );
}
