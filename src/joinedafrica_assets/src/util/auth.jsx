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

/**
 *
 * in order to upload image files locally to asset canister, we have to be authorised first. We can use this test principal
 *
 * dfx canister call photo-storage authorize '(principal "535yc-uxytb-gfk7h-tny7p-vjkoe-i4krp-3qmcl-uqfgr-cpgej-yqtjq-rqe")'
 * dfx canister call photo-storage authorize '(principal "4rizg-kxwye-vasna-7zbia-3oxn4-uway2-bfpof-xe2lw-zy6l5-aqeee-tqe")'
 *
 *
 */

export async function uploadImageToAssetCanister(imageFile, identity) {
  const agent = new HttpAgent({
    host: process.env.INTERNET_IDENTITY_URL,
    identity,
  });
  const isLocal = process.env.NODE_ENV === "development";
  if (isLocal) {
    agent.fetchRootKey();
  }
  console.log(isLocal);
  const assetManager = new AssetManager({
    canisterId: assetCanisterId,
    agent,
  });
  console.log(assetManager);
  console.log(identity._principal.toText());
  const imagePath = await assetManager.store(imageFile);
  console.log(imagePath);

  return imagePath;
}
