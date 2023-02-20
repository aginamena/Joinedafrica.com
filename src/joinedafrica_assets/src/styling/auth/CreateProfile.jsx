import { Box, Button } from "@mui/material";
import { styled } from "@mui/material/styles";

export const ImageContainer = styled(Box)({
  width: "100px",
  height: "100px",
  borderRadius: "50px",
  border: "1px solid white",
});

export const Image = styled("img")({
  width: "100px",
  height: "100px",
  borderRadius: "50px",
});

export const IdentitySetup = styled(Button)({
  display: "flex",
  alignItems: "center",
  padding: "0",
  margin: "30px 0",
});
