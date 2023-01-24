import React from "react";
import { CssBaseline } from "@mui/material";
import Body from "./components/Body";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import ViewCategory from "./components/views/ViewCategory";
import MyAccount from "./components/views/MyAccount";

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
          <Route
            exact
            path="/home/view/:categoryName"
            element={<ViewCategory />}
          />
          <Route exact path = "/home/myaccount/:tabName" element= {<MyAccount />}/>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
