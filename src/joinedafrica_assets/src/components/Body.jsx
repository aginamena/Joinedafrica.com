import React from "react";
import { Stack } from "@mui/material";
import LeftBar from "./LeftBar";
import Feed from "./Feed";

export default function Body() {
  return (
    <Stack direction="row" sx={{ justifyContent: "center" }}>
      <LeftBar />
      <Feed />
    </Stack>
  );
}
