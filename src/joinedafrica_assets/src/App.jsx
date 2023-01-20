import React from "react";
import { CssBaseline } from "@mui/material";
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
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<WelcomePage />}></Route>
          <Route exact path="/home" element={<Body />}></Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
