import { useEffect, useState } from "react";

import { MusicProviderType } from "../../config/enums";
import { useAuthRequest, makeRedirectUri } from "expo-auth-session";

export const useMusicAppAuth = (provider: MusicProviderType) => {
  let discovery: any;
  let redirectUri: string;
  let clientId: string;
  let scopes: string[];

  switch (provider) {
    case MusicProviderType.Spotify:
      discovery = {
        authorizationEndpoint:
          process.env.EXPO_PUBLIC_SPOTIFY_AUTHORIZATION_ENDPOINT!,
        tokenEndpoint: process.env.EXPO_PUBLIC_SPOTIFY_TOKEN_ENDPOINT!,
      };
      clientId = process.env.EXPO_PUBLIC_SPOTIFY_CLIENT_ID!;
      redirectUri =
        process.env.NODE_ENV === "development"
          ? process.env.EXPO_PUBLIC_SPOTIFY_REDIRECT_URI!
          : makeRedirectUri({
              path: "redirect",
            });
      redirectUri = process.env.EXPO_PUBLIC_SPOTIFY_REDIRECT_URI!;
      scopes = ["user-read-email", "playlist-modify-public"];
      break;
    case MusicProviderType.AppleMusic:
      discovery = {
        authorizationEndpoint: "<apple_url>",
        tokenEndpoint: "<apple_url>",
      };
      clientId = "???";
      redirectUri = "???";
      scopes = [];
      break;
    default:
      throw new Error("Invalid music app type");
  }

  const [request, response, promptAsync] = useAuthRequest(
    {
      clientId: clientId,
      scopes: scopes,
      usePKCE: false,
      redirectUri: redirectUri,
    },
    discovery,
  );

  useEffect(() => {
    if (response?.type === "success") {
      const { code } = response.params;
      console.log(response);
      // You can add more logic here, like handling the authorization code.
    }
  }, [response]);

  return { promptAsync };
};
