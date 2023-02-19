import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Input,
  Stack,
  Badge,
} from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MyProfileMenu from "../MyAccount/MyprofileMenu";
import {
  InputContainer,
  SearchIconCmp,
} from "../../styling/appStructure/Header";

export default function Header() {
  return (
    <AppBar position="fixed" sx={{ zIndex: "1201" }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography variant="h6" component="div">
          Joined Africa
        </Typography>
        <InputContainer>
          <SearchIconCmp />
          <Input
            placeholder="search..."
            sx={{ width: "100%", color: "black" }}
          />
        </InputContainer>
        <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
          <Badge badgeContent={4} color="primary">
            <MailIcon color="action" />
          </Badge>
          <Badge>
            <NotificationsNoneIcon color="action" />
          </Badge>
          <MyProfileMenu />
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
