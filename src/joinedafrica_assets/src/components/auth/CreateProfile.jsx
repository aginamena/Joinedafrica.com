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

/**
 * New users are able to create their profile by setting their email, first and last name and profile picture.
 * They also have to set up their identity using internet identity.
 */

export default function CreateProfile() {
  const [actor, setActor] = useState(null);
  const [userProfile, setUserProfile] = useState({
    profilePicture: null,
    firstName: "",
    lastName: "",
    email: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  // after the user authenticates using the internet Identity, we store the authenticated actor in app state
  const { setAuthenticatedUser } = useContext(AppContext);

  // navigation so we can go back to the home page after saving the users profile
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    if (actor == null) {
      alert("You have to set up your identity");
      return;
    }
    setIsLoading(true);

    const imageToBinary = new Uint8Array(
      await userProfile.profilePicture.arrayBuffer()
    );
    const createdProfile = {
      profilePicture: imageToBinary,
      firstName: userProfile.firstName,
      lastName: userProfile.lastName,
      email: userProfile.email,
    };
    const result =
      process.env.NODE_ENV == "development"
        ? await joinedafrica.createUserProfile(createdProfile)
        : await actor.createUserProfile(createdProfile);
    if (result?.err) {
      alert(result.err);
    } else {
      setAuthenticatedUser(actor);
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
              setUserProfile({
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
            setUserProfile({ ...userProfile, firstName: e.target.value })
          }
        />
        <TextField
          fullWidth
          label="Enter your last name"
          variant="outlined"
          style={{ margin: "30px 0" }}
          required
          onChange={(e) =>
            setUserProfile({ ...userProfile, lastName: e.target.value })
          }
        />
        <TextField
          label="Enter your email address"
          fullWidth
          type="email"
          variant="outlined"
          required
          onChange={(e) =>
            setUserProfile({ ...userProfile, email: e.target.value })
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
