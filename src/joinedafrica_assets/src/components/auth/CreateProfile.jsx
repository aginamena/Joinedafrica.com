import React, { useContext, useState } from "react";
import { Container, TextField, Box, Typography, Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { InternetIdentityAuthentication } from "../../util/auth";
import { LoadingCmp } from "../../util/reuseableComponents/LoadingCmp";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../context";
import {
  Image,
  IdentitySetup,
  ImageContainer,
} from "../../styling/auth/CreateProfile";
import { joinedafrica } from "../../../../declarations/joinedafrica/index";

export default function CreateProfile() {
  const [actor, setActor] = useState(null);
  const [userProfile, setProfile] = useState({
    profilePicture: null,
    firstName: "",
    lastName: "",
    email: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  // after the user authenticates using the internet Identity, we store the authenticated actor in app state
  const { setAuthenticatedUser, setUserProfile } = useContext(AppContext);

  // navigation so we can go back to the home page after saving the users profile
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    if (actor == null) {
      alert("You have to set up your identity");
      return;
    }
    setIsLoading(true);
    const createdProfile = { ...userProfile };
    createdProfile.profilePicture = new Uint8Array(
      await userProfile.profilePicture.arrayBuffer()
    );
    const result =
      process.env.NODE_ENV == "development"
        ? await joinedafrica.createUserProfile(createdProfile)
        : await actor.createUserProfile(createdProfile);
    if (result?.err) {
      alert(result.err);
    } else {
      setAuthenticatedUser(actor);
      //converting the image array back to url for the home page image
      createdProfile.profilePicture = URL.createObjectURL(
        new Blob([createdProfile.profilePicture], { type: "image/png" })
      );
      setUserProfile(createdProfile);
      navigate("/home");
    }
    setIsLoading(false);
  }

  return (
    <>
      <Container
        component="form"
        style={{ marginTop: "50px" }}
        onSubmit={handleSubmit}
      >
        <Typography variant="h5" gutterBottom style={{ textAlign: "center" }}>
          Create profile
        </Typography>
        <Box>
          <ImageContainer>
            {userProfile.profilePicture && (
              <Image
                src={URL.createObjectURL(userProfile.profilePicture)}
                alt="User selected profile"
              />
            )}
          </ImageContainer>
          <input
            type="file"
            accept="image/*"
            required
            onChange={(e) =>
              setProfile({
                ...userProfile,
                profilePicture: e.target.files[0],
              })
            }
          />
          <Typography>Choose profile image</Typography>
        </Box>
        <TextField
          fullWidth
          label="Enter your first name"
          variant="outlined"
          style={{ marginTop: "30px" }}
          required
          onChange={(e) =>
            setProfile({ ...userProfile, firstName: e.target.value })
          }
        />
        <TextField
          fullWidth
          label="Enter your last name"
          variant="outlined"
          style={{ margin: "30px 0" }}
          required
          onChange={(e) =>
            setProfile({ ...userProfile, lastName: e.target.value })
          }
        />
        <TextField
          label="Enter your email address"
          fullWidth
          type="email"
          variant="outlined"
          required
          onChange={(e) =>
            setProfile({ ...userProfile, email: e.target.value })
          }
        />
        <IdentitySetup onClick={() => InternetIdentityAuthentication(setActor)}>
          <Typography style={{ marginRight: "5px" }}>
            Set up your identity
          </Typography>
          <OpenInNewIcon />
        </IdentitySetup>
        <Box style={{ marginTop: "40px" }}>
          <Button variant="outlined" endIcon={<SendIcon />} type="submit">
            Create Profile
          </Button>
        </Box>
      </Container>
      {isLoading && LoadingCmp(isLoading)}
    </>
  );
}
