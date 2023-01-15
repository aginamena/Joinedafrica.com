import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Greeting = styled(Box)({
  backgroundColor: "white",
  color: "black",
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
  height: "60px",
});

export const Introduction = styled(Box)({
  display: "flex",
  justifyContent: "space-around",
  height: "700px",
  alignItems: "center",
});
