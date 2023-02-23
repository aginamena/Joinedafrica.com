import React from "react";
import { AuthClient } from "@dfinity/auth-client";
import {
  canisterId,
  createActor,
} from "../../../declarations/joinedafrica/index";
import { AssetManager } from "@dfinity/assets";
import { HttpAgent } from "@dfinity/agent";
import { canisterId as assetCanisterId } from "../../../declarations/joinedafrica_assets/index";


//Authenticate using internet identity and saves the authenticated actor, which is the user
export async function InternetIdentityAuthentication(
  setAuthenticatedUser,
  setIdentity
) {
  const authClient = await AuthClient.create();
  if (await authClient.isAuthenticated()) {
    const identity = await authClient.getIdentity();
    const authenticatedUser = createActor(canisterId, {
      agentOptions: {
        identity,
      },
    });
    setAuthenticatedUser(authenticatedUser);
    setIdentity(identity);
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
        setAuthenticatedUser(authenticatedUser);
        setIdentity(identity);
      },
    });
  }
}

export async function uploadImageToAssetCanister(
  imageFile,
  identity
) {
  const agent = new HttpAgent({
    host: process.env.INTERNET_IDENTITY_URL,
    identity,
  });
  const assetManager = new AssetManager({
    canisterId: assetCanisterId,
    agent,
  });
  const imagePath = await assetManager.store(imageFile);
  return imagePath;
}
