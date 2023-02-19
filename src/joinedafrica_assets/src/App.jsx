import React, { useState } from "react";
import { CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ViewCategory from "./components/views/ViewCategory";
import MyAccount from "./components/MyAccount/MyAccount";
import { AppContext } from "./context";
import Body from "./components/appStructure/Body";
import WelcomePage from "./components/welcomeToJoinedAfrica/WelcomePage";

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
