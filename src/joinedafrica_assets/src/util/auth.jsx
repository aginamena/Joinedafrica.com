import React from "react";
import { AuthClient } from "@dfinity/auth-client";
import {
  canisterId,
  createActor,
} from "../../../declarations/joinedafrica/index";

//Authenticate using internet identity and saves the authenticated actor, which is the user
export async function InternetIdentityAuthentication(setAuthenticatedUser) {
  const authClient = await AuthClient.create();
  if (await authClient.isAuthenticated()) {
    const identity = await authClient.getIdentity();
    const authenticatedUser = createActor(canisterId, {
      agentOptions: {
        identity,
      },
    });
    // setAuthenticatedUser(authenticatedUser);
    return authenticatedUser;
  } else {
    await authClient.login({
      identityProvider: process.env.INTERNET_IDENTITY_URL,
      onSuccess: async () => {
        const identity = await authClient.getIdentity();
        const authenticatedUser = createActor(canisterId, {
          agentOptions: {
            identity,
          },
        });
        // setAuthenticatedUser(authenticatedUser);
        return authenticatedUser;
      },
    });
  }
}
