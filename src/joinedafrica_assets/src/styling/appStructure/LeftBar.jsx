import { styled } from "@mui/material/styles";
import { Drawer } from "@mui/material";

export const DrawerContainer = styled(Drawer)({
  "& .MuiDrawer-paper": {
    width: "300px",
    boxSizing: "border-box",
  },
});
