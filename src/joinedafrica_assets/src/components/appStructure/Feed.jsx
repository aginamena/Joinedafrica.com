import React from "react";
import { Box, Toolbar } from "@mui/material";
import Content from "./Content";

export default function Feed() {
  return (
    <Box sx={{ width: "400px" }}>
      <Toolbar />
      <Content />
      <Content />
      <Content />
      <Content />
      <Content />
    </Box>
  );
}
