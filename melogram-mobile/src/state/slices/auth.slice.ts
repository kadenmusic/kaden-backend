import { StateCreator } from "zustand";
import { MusicProviderType } from "../../config/enums";
import { CommonSlice, createCommonSlice } from "./common.slice";
import { AppState } from "../app-store";
import { MusicProviderManager } from "../../managers/music-provider/music-provider.manager";

export interface AuthSlice {
  user: any;
  setUser: (user: any) => void;

  initiateProviderLogin: (provider: MusicProviderType) => void;

  provider: MusicProviderType | null;
  setProvider: (provider: MusicProviderType) => void;

  spotifyToken: any;
  setSpotifyToken: (token: string) => void;
}

export const createAuthSlice: StateCreator<
  AppState & CommonSlice & AuthSlice,
  [],
  [],
  AuthSlice
> = (set) => ({
  user: null,
  setUser: (user: any) => set((state) => ({ user: user })),

  provider: null,
  setProvider: (provider: MusicProviderType) =>
    set((state) => ({ provider: provider })),

  initiateProviderLogin: async (provider: MusicProviderType) => {
    const providerManager = new MusicProviderManager(provider);

    try {
      set({ loading: true });
    } catch (error) {
    } finally {
      set({ loading: false });
    }
  },

  spotifyToken: null,
  setSpotifyToken: (token: string) => set((state) => ({ spotifyToken: token })),
});
