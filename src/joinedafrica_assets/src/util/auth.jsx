import React from "react";
import { AuthClient } from "@dfinity/auth-client";
import {
  canisterId,
  createActor,
} from "../../../declarations/joinedafrica/index";

//log the user in through the internet identity and saves the authenticated actor, which is the user
export async function LoginUser(setAuthenticatedUser) {
  const authClient = await AuthClient.create();
  if (await authClient.isAuthenticated()) {
    const identity = await authClient.getIdentity();
    const authenticatedUser = createActor(canisterId, {
      agentOptions: {
        identity,
      },
    });
    setAuthenticatedUser(authenticatedUser);
  } else {
    await authClient.login({
      identityProvider: "https://identity.ic0.app/#authorize",
      onSuccess: async () => {
        const identity = await authClient.getIdentity();
        const authenticatedUser = createActor(canisterId, {
          agentOptions: {
            identity,
          },
        });
        // const userId = authClient._identity._principal.toText();
        setAuthenticatedUser(authenticatedUser);
      },
    });
  }
}
