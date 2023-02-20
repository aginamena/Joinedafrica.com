import React, { useContext, useEffect } from "react";
import { Stack } from "@mui/material";
import LeftBar from "./LeftBar";
import Feed from "./Feed";
import Header from "./Header";
import { AppContext } from "../../context";
export default function Body() {
  const { authenticatedUser } = useContext(AppContext);
  // once the user visits the home page, we try to get the users profile information from the backend if the user is authenticated
  useEffect(() => {
    async function getUserProfile() {
      if (authenticatedUser) {
        await authenticatedUser.getUserProfile();
      }
    }
    getUserProfile();
  }, []);
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
