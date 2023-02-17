import React, { useState, useContext } from "react";
import { Button, Box, Menu, MenuItem, Avatar } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { deepPurple } from "@mui/material/colors";
import { LoginUser } from "../util/auth";
import { Link } from "react-router-dom";
import AppContext from "../context/AppContext";

export default function MyProfileMenu() {
  const { setUserId } = useContext(AppContext);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
      >
        <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={() => LoginUser(setUserId)}>Login</MenuItem>
        <MenuItem onClick={handleClose}>My postings</MenuItem>
        <MenuItem onClick={handleClose}>My messages</MenuItem>
        <MenuItem onClick={handleClose}>Settings</MenuItem>
        <MenuItem>
          <Link to="/home/myaccount/create-posts">Create posts</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </Box>
  );
}
