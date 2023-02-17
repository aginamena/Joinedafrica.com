import React from "react";
import { AuthClient } from "@dfinity/auth-client";

//log the user in through the internet identity and save the principal's id in global state

export async function LoginUser(setUserId) {
  const authClient = await AuthClient.create();
  // const isAuthenticated = await authClient.isAuthenticated();
  // console.log(isAuthenticated);
  // console.log(setUserId);
  // console.log(aut)
  // if (!isAuthenticated) {
  //   await authClient.login({
  //     identityProvider: "https://identity.ic0.app/#authorize",
  //     onSuccess: () => {
  //       console.log("1");
  //       const p = authClient._identity._principal.toText();
  //       console.log("11");
  //       console.log(authClient);
  //       console.log("122");
  //       // setUserId();
  //     },
  //   });
  // }

  if (await authClient.isAuthenticated()) {
    const p = authClient._identity._principal.toText();
    const p1 = authClient;
    console.log(p1);
  } else {
    await authClient.login({
      identityProvider: "https://identity.ic0.app/#authorize",
      onSuccess: () => {
        const p = authClient._identity._principal.toText();
        const p1 = authClient;
        console.log(p1);
        //after the user has logged in, through internet identity, we render the App component
        // ReactDOM.render(<App />, document.getElementById("root"));
      },
    });
  }
}
