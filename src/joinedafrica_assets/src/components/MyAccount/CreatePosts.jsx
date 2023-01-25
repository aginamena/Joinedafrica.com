import React from "react";
import { Box, Typography } from "@mui/material";

export default function CreatePost() {
  return (
    <Box>
      <Typography variant="h5"> Create Post</Typography>
      <Box component="form">
        <Box>
          <Typography>Product category</Typography>
        </Box>
      </Box>
    </Box>
  );
}
