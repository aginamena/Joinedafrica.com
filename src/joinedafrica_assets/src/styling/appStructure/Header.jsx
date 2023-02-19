import { styled } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";

export const InputContainer = styled("div")({
  color: "white",
  backgroundColor: "white",
  display: "flex",
  alignItems: "center",
  borderRadius: "10px",
  width: "500px",
});

export const SearchIconCmp = styled(SearchIcon)({
  color: "black",
  marginRight: "10px",
  marginLeft: "10px",
});
