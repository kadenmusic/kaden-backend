import {
  AuthRequestConfig,
  DiscoveryDocument,
  makeRedirectUri,
} from "expo-auth-session";
import { IMusicProviderService } from "../music-provider/music-provider-service.interface";
import { ENVIRONMENT } from "../../config/constants";
import { makeRequest } from "../http/http.service";
import { HttpMethodType } from "../../config/enums";
import base64 from "react-native-base64";
import { SpotifyAccessTokenData } from "../../types/spotify.types";

class SpotifyService implements IMusicProviderService {
  constructor() {}

  async requestAccessToken<SpotifyAccessTokenData>(
    loginCode: string,
  ): Promise<SpotifyAccessTokenData> {
    const headers = {
      Authorization:
        "Basic " +
        base64.encode(
          process.env.EXPO_PUBLIC_SPOTIFY_CLIENT_ID +
            ":" +
            process.env.EXPO_PUBLIC_SPOTIFY_CLIENT_SECRET,
        ),
      "Content-Type": "application/x-www-form-urlencoded",
    };

    const response = await makeRequest(
      HttpMethodType.Post,
      process.env.EXPO_PUBLIC_SPOTIFY_ACCESS_TOKEN_ENDPOINT!,
      headers,
      {
        code: loginCode,
        redirect_uri: process.env.EXPO_PUBLIC_SPOTIFY_REDIRECT_URI,
        grant_type: "authorization_code",
      },
    );

    return response;
  }

  getOauthRequestConfig(): AuthRequestConfig {
    const redirectUri = makeRedirectUri({
      native: process.env.EXPO_PUBLIC_SPOTIFY_REDIRECT_URI!,
    });

    return {
      clientId: process.env.EXPO_PUBLIC_SPOTIFY_CLIENT_ID!,
      responseType: "code",
      scopes: ["user-read-email", "user-read-private"],
      usePKCE: false,
      redirectUri: redirectUri,
      extraParams: {
        show_dialog:
          process.env.NODE_ENV === ENVIRONMENT.dev ? "false" : "true",
      },
    };
  }
  getOauthRequestDiscovery(): DiscoveryDocument {
    return {
      authorizationEndpoint:
        process.env.EXPO_PUBLIC_SPOTIFY_AUTHORIZATION_ENDPOINT!,
      tokenEndpoint: process.env.EXPO_PUBLIC_SPOTIFY_TOKEN_ENDPOINT!,
    };
  }
}

export { SpotifyService };
