import React from "react";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

export default function PopoverCmpDetails({ isPublished, postId }) {
  const navigate = useNavigate();
  return (
    <List>
      <ListItem disablePadding>
        <ListItemButton onClick={() => navigate("view/" + postId)}>
          <ListItemText primary="View created post" />
        </ListItemButton>
      </ListItem>
      {isPublished ? (
        <>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Remove from market place" />
            </ListItemButton>
          </ListItem>
        </>
      ) : (
        <>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Publish post to market place" />
            </ListItemButton>
          </ListItem>
        </>
      )}

      <Divider />
      <ListItem disablePadding>
        <ListItemButton component="a" href="#simple-list">
          <ListItemText primary="Edit post" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemText primary="Delete post" />
        </ListItemButton>
      </ListItem>
    </List>
  );
}
