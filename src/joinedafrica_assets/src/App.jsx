import React from "react";
import { Box, CssBaseline } from "@mui/material";
import Header from "./components/Header";
import Body from "./components/Body";
import { ThemeProvider, createTheme } from "@mui/material/styles";

export default function App() {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Header />
      <Body />
    </ThemeProvider>
  );
}
