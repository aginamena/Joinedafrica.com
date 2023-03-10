import React from "react";
import { Stack } from "@mui/material";
import LeftBar from "./LeftBar";
import Feed from "./Feed";
import Header from "./Header";

export default function Body() {
  return (
    <>
      <Header />
      <Stack direction="row" sx={{ justifyContent: "center" }}>
        <LeftBar />
        <Feed />
      </Stack>
    </>
  );
}
