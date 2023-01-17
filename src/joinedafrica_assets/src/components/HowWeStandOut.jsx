import React from "react";
import { Box, Typography } from "@mui/material";

export default function HowWeStandOut({ title, content, imagePath }) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <Box>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography sx={{ width: "500px" }}>{content}</Typography>
      </Box>
      <Box
        component="img"
        src={imagePath}
        sx={{ width: "500px", height: "400px", objectFit: "contain" }}
      />
    </Box>
  );
}
