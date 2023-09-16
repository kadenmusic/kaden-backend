import {
  AuthRequestConfig,
  DiscoveryDocument,
  makeRedirectUri,
} from "expo-auth-session";
import { IMusicProviderService } from "../music-provider/music-provider-service.interface";
import { ENVIRONMENT } from "../../config/constants";

class SpotifyService implements IMusicProviderService {
  constructor() {}

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
