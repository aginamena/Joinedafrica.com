import React, { useContext, useEffect } from "react";
import { Stack } from "@mui/material";
import LeftBar from "./LeftBar";
import Feed from "./Feed";
import Header from "./Header";
import { AppContext } from "../../context";

export default function Body() {
  const { setUserProfile, authenticatedUser } = useContext(AppContext);

  useEffect(() => {
    async function getUserProfile() {
      //if the user has be authenticated by internet identity, then we set the profile of the user
      if (authenticatedUser) {
        const userProfile = await authenticatedUser.getUserProfile();
        const profile = { ...userProfile.ok };
        {
          /* converting the uint8array back to an image */
        }
        // profile.profilePicture = URL.createObjectURL(
        //   new Blob([userProfile.profilePicture], { type: "image/png" })
        // );
        setUserProfile({ ...profile });
      }
    }
    getUserProfile();
  }, [authenticatedUser]);
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
