import React from "react";
import { Container, Box, Typography, Button, Stack } from "@mui/material";

import { Greeting, Introduction } from "../styling/WelcomePage";

export default function WelcomePage() {
  // const Greeting = styled(Box)({
  //   backgroundColor: "white",
  //   color: "black",
  //   display: "flex",
  //   justifyContent: "space-evenly",
  //   alignItems: "center",
  //   height: "60px",
  // });
  return (
    <Box>
      <Greeting>
        <Typography variant="h6">Welcome to Joined Africa!</Typography>
        <Button variant="contained">Log in</Button>
      </Greeting>

      <Introduction>
        <Box>
          <Box
            component="img"
            src="./Logo_without_background.png"
            alt="Joined Africa logo"
          />
          <Box>
            <Typography variant="h1" sx={{ fontWeight: "bold" }}>
              Joined Africa
            </Typography>
            <Typography>
              Is a marketplace where Africans can buy and sell to each other
              under a single currency
            </Typography>
          </Box>
        </Box>
        <Box
          component="img"
          src="./Connected_Africa.png"
          alt="Connected Africa"
        />
      </Introduction>
      <Box
        sx={{
          background: "white",
          color: "black",
          paddingTop: "50px",
          paddingBottom: "50px",
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{ textDecoration: "underline", textAlign: "center" }}
        >
          How we stand out
        </Typography>
        <Stack>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <Box>
              <Typography variant="h6" gutterBottom>
                Bitcoin is our form of payment
              </Typography>
              <Typography>
                Bitcoin is a digital currency that allows people to make
                payments <br />
                directly to each other through an online system.
              </Typography>
            </Box>
            <Box component="img" src="./bitcoin.png" />
          </Box>
        </Stack>
      </Box>
    </Box>
  );
}
