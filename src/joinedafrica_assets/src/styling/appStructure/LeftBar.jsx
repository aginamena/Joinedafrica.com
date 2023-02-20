import { styled } from "@mui/material/styles";
import { Drawer, Typography } from "@mui/material";

export const DrawerContainer = styled(Drawer)({
  "& .MuiDrawer-paper": {
    width: "300px",
    boxSizing: "border-box",
  },
});
export const TypographyCmp = styled(Typography)({
  marginTop: "50px",
  marginBottom: "20px",
  textAlign: "center",
});
