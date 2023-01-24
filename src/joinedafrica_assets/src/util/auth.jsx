import React from "react";
import { AuthClient } from "@dfinity/auth-client";

export async function LoginUser() {
  // Your application's name (URI encoded)
  const APPLICATION_NAME = "Joined Africa";

  // URL to 37x37px logo of your application (URI encoded)
  const APPLICATION_LOGO_URL = "https://nfid.one/icons/favicon-96x96.png";

  const AUTH_PATH =
    "/authenticate/?applicationName=" +
    APPLICATION_NAME +
    "&applicationLogo=" +
    APPLICATION_LOGO_URL +
    "#authorize";

  // Replace https://identity.ic0.app with NFID_AUTH_URL
  // as the identityProvider for authClient.login({})
  const NFID_AUTH_URL = "https://nfid.one" + AUTH_PATH;
  const authClient = await AuthClient.create();
  if (await authClient.isAuthenticated()) {
    ReactDOM.render(<App />, document.getElementById("root"));
  } else {
    await authClient.login({
      //   identityProvider: "https://identity.ic0.app/#authorize",
      identityProvider: NFID_AUTH_URL,
      onSuccess: () => {
        //after the user has logged in, through internet identity, we render the App component
        ReactDOM.render(<App />, document.getElementById("root"));
      },
    });
  }
}
