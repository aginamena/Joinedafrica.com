import React, { useMemo, useState } from "react";
import { CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ViewCategory from "./components/views/ViewCategory";
import MyAccount from "./components/MyAccount/MyAccount";
import { AppContext } from "./context";
import Body from "./components/appStructure/Body";
import WelcomePage from "./components/welcomeToJoinedAfrica/WelcomePage";
import CreateProfile from "./components/auth/CreateProfile";
import ViewPost from "./components/views/ViewPost";

export default function App() {
  const [authenticatedUser, setAuthenticatedUser] = useState(null);
  const [userProfile, setUserProfile] = useState({
    profilePicture: null,
    firstName: "",
    lastName: "",
    email: "",
  });

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  const stateValues = {
    authenticatedUser,
    setAuthenticatedUser,
    userProfile,
    setUserProfile,
  };

  return (
    <AppContext.Provider value={stateValues}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<WelcomePage />}></Route>
            <Route exact path="/home" element={<Body />}></Route>
            <Route exact path="/my-account" element={<MyAccount />} />
            <Route
              exact
              path="/my-account/view/:postId"
              element={<ViewPost />}
            />
            <Route exact path="/create-profile" element={<CreateProfile />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </AppContext.Provider>
  );
}
