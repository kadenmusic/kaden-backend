import { useEffect, useState } from "react";

import { MusicProviderType } from "../../config/enums";
import { useAuthRequest } from "expo-auth-session";

export const useMusicAppAuth = (provider: MusicProviderType) => {
  let discovery: any;
  let redirectUri: string;
  let clientId: string;
  let scopes: string[];

  switch (provider) {
    case MusicProviderType.Spotify:
      discovery = {
        authorizationEndpoint: "https://accounts.spotify.com/authorize",
        tokenEndpoint: "https://accounts.spotify.com/api/token",
      };
      clientId = "4410784367c941de899fa9285967971b";
      redirectUri = "exp://localhost:8081/--/spotify-auth-callback";
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
