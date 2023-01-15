import React from "react";
import { Box, CssBaseline } from "@mui/material";
import Header from "./components/Header";
import Body from "./components/Body";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WelcomePage from "./components/WelcomePage";

export default function App() {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      {/* <Header />
      <Body /> */}
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<WelcomePage />}></Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
