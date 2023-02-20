import React, { useState, useContext } from "react";
import { Button, Box, Menu, MenuItem, Avatar } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { deepPurple } from "@mui/material/colors";
import { Link } from "react-router-dom";
import { InternetIdentityAuthentication } from "../../util/auth";
import { AppContext } from "../../context";

export default function MyProfileMenu() {
  const { setAuthenticatedUser } = useContext(AppContext);
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
        <MenuItem
          onClick={() => InternetIdentityAuthentication(setAuthenticatedUser)}
        >
          Log in
        </MenuItem>
        <MenuItem onClick={handleClose}>My postings</MenuItem>
        <MenuItem onClick={handleClose}>My messages</MenuItem>
        <MenuItem onClick={handleClose}>Settings</MenuItem>
        <MenuItem>
          <Link
            to="/home/myaccount/create-posts"
            style={{ color: "white", textDecoration: "none" }}
          >
            Create posts
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>Log out</MenuItem>
      </Menu>
    </Box>
  );
}
