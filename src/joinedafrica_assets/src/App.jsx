import React, { useState } from "react";
import { CssBaseline } from "@mui/material";
import Body from "./components/Body";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import ViewCategory from "./components/views/ViewCategory";
import MyAccount from "./components/MyAccount/MyAccount";
import { AppContext } from "./context";

export default function App() {
  const [authenticatedUser, setAuthenticatedUser] = useState(null);
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });
  const stateValues = {
    authenticatedUser,
    setAuthenticatedUser,
  };
  return (
    <AppContext.Provider value={stateValues}>
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
            <Route
              exact
              path="/home/myaccount/:tabName"
              element={<MyAccount />}
            />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </AppContext.Provider>
  );
}
