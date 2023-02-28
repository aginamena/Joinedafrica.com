import React, { useState, useContext } from "react";
import { Button, Box, Menu, MenuItem, Avatar } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { deepPurple } from "@mui/material/colors";
import { Link } from "react-router-dom";
import { InternetIdentityAuthentication } from "../../util/auth";
import { AppContext } from "../../context";

export default function MyProfileMenu() {
  const { setAuthenticatedUser, userProfile } = useContext(AppContext);
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
        {/* converting the uint8array back to an image */}
        <Avatar
          src={URL.createObjectURL(
            new Blob([userProfile.profilePicture], { type: "image/png" })
          )}
        />
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
        <MenuItem>
          <Link
            to="/home/myaccount"
            style={{ color: "white", textDecoration: "none" }}
          >
            My Account
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>Log Out</MenuItem>
      </Menu>
    </Box>
  );
}
