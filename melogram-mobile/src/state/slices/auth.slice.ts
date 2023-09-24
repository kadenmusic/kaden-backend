import { StateCreator } from "zustand";
import {
  MusicProviderType,
  SpotifyLoginResponseType,
} from "../../config/enums";
import { CommonSlice, createCommonSlice } from "./common.slice";
import { AppState } from "../app-store";
import { MusicProviderManager } from "../../managers/music-provider/music-provider.manager";
import { AuthRequest, useAuthRequest } from "expo-auth-session";

import { showErrorToast } from "../../services/toast/toast.service";
import {
  getSecureStoreAccessTokenDataForProvider,
  getSecureStoreLoginCodeKeyForProvider,
} from "../../helpers/helpers";
import { setItemAsync } from "../../services/secure-store/secure-store.service";
import { SpotifyAccessTokenData } from "../../types/spotify.types";
import { secondsToMilliseconds } from "../../util/date";

export interface AuthSlice {
  user: any;
  setUser: (user: any) => void;

  initiateProviderLogin: (provider: MusicProviderType) => void;

  provider: MusicProviderType | null;
  setProvider: (provider: MusicProviderType) => void;

  spotifyAccessTokenData: SpotifyAccessTokenData | null;
  setSpotifyAccessTokenData: (data: SpotifyAccessTokenData) => void;

  spotifyAccessTokenExpirationDate: number | null;
}

export const createAuthSlice: StateCreator<
  AppState & CommonSlice & AuthSlice,
  [],
  [],
  AuthSlice
> = (set) => ({
  user: null,
  provider: null,
  spotifyAccessTokenExpirationDate: null,
  setUser: (user: any) => set((state) => ({ user: user })),

  setProvider: (provider: MusicProviderType) =>
    set((state) => ({ provider: provider })),

  initiateProviderLogin: async (provider: MusicProviderType) => {
    set({ loading: true, provider: provider });
    const providerManager = new MusicProviderManager(provider);
    const providerLoginCodeKey =
      getSecureStoreLoginCodeKeyForProvider(provider);
    const providerAccessTokenDataKey =
      getSecureStoreAccessTokenDataForProvider(provider);

    try {
      const request = new AuthRequest(providerManager.getOauthRequestConfig());
      const response = await request.promptAsync(
        providerManager.getOauthRequestDiscovery(),
      );

      // TODO: Differentiate Spotify from other providers; they are different.
      if (!!response) {
        if (response.type === SpotifyLoginResponseType.Success) {
          const { code, state } = response.params;
          const accessTokenData = await providerManager
            .getService()
            .requestAccessToken<SpotifyAccessTokenData>(code);

          await setItemAsync(providerLoginCodeKey, code);
          await setItemAsync(
            providerAccessTokenDataKey,
            JSON.stringify(accessTokenData),
          );

          const accessTokenExpiry =
            Date.now() + secondsToMilliseconds(accessTokenData.expires_in);

          // Make internal API call

          set({
            spotifyAccessTokenData: accessTokenData,
            spotifyAccessTokenExpirationDate: accessTokenExpiry,
          });
        } else {
          throw new Error(JSON.stringify(response));
        }
      }
    } catch (error: any) {
      showErrorToast(error);
    } finally {
      set({ loading: false });
    }
  },

  spotifyAccessTokenData: null,
  setSpotifyAccessTokenData: (data: SpotifyAccessTokenData) =>
    set((state) => ({ spotifyAccessTokenData: data })),
});
