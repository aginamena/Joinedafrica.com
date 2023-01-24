import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Input,
  Stack,
  Badge,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MyProfileMenu from "./MyprofileMenu";

export default function Header() {
  const InputContainer = styled("div")({
    color: "white",
    backgroundColor: "white",
    display: "flex",
    alignItems: "center",
    borderRadius: "10px",
    width: "500px",
  });

  return (
    <AppBar position="fixed" sx={{ zIndex: "1201" }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography variant="h6" component="div">
          Joined Africa
        </Typography>
        <InputContainer>
          <SearchIcon
            sx={{ color: "black", marginRight: "10px", marginLeft: "10px" }}
          />
          <Input
            placeholder="search..."
            sx={{ width: "100%", color: "black" }}
            // sx={{ }}
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
