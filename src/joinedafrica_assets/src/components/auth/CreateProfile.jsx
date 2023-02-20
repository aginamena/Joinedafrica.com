import React, { useContext, useState } from "react";
import { Container, TextField, Box, Typography, Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import {
  InternetIdentityAuthentication,
  saveUserProfile,
} from "../../util/auth";
import { Loading } from "../../util/reuseableComponents/Loading";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../context";
import {
  Image,
  IdentitySetup,
  ImageContainer,
} from "../../styling/auth/CreateProfile";

export default function CreateProfile() {
  const [image, setImage] = useState(null);
  const [userName, setUserName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [actor, setActor] = useState(null);
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
    await saveUserProfile(image, userName, emailAddress, actor);
    setIsLoading(false);
    setAuthenticatedUser(actor);
    navigate("/home");
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
            {image && (
              <Image
                src={URL.createObjectURL(image)}
                alt="User selected profile"
              />
            )}
          </ImageContainer>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            required
          />
          <Typography>Choose profile image</Typography>
        </Box>
        <TextField
          fullWidth
          label="Enter your username"
          variant="outlined"
          style={{ margin: "30px 0" }}
          required
          onChange={(e) => setUserName(e.target.value)}
        />
        <TextField
          label="Enter your email address"
          fullWidth
          type="email"
          variant="outlined"
          required
          onChange={(e) => setEmailAddress(e.target.value)}
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
      {isLoading && Loading(isLoading)}
    </>
  );
}
