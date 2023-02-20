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
    setAuthenticatedUser(authenticatedUser);
  } else {
    await authClient.login({
      identityProvider:
        process.env.NODE_ENV === "production"
          ? "https://identity.ic0.app/#authorize"
          : "http://127.0.0.1:8000/?canisterId=rwlgt-iiaaa-aaaaa-aaaaa-cai",
      onSuccess: async () => {
        const identity = await authClient.getIdentity();
        const authenticatedUser = createActor(canisterId, {
          agentOptions: {
            identity,
          },
        });
        setAuthenticatedUser(authenticatedUser);
      },
    });
  }
}

export async function saveUserProfile() {}
