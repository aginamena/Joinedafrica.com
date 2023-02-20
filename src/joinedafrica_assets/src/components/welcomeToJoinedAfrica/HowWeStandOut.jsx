import React from "react";
import { Box, Typography } from "@mui/material";
import {
  ImageCmp,
  HowWeStandOutContainer,
} from "../../styling/welcomeToJoinedAfrica/HowWeStandOut";

export default function HowWeStandOut({ title, content, imagePath }) {
  return (
    <HowWeStandOutContainer>
      <Box>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography sx={{ width: "500px" }}>{content}</Typography>
      </Box>
      <ImageCmp component="img" src={imagePath} />
    </HowWeStandOutContainer>
  );
}
