import { create } from "zustand";
import { MusicProviderType } from "../../config/enums";

export const useAuthStore = create((set) => ({
  user: null,
  authToken: null,
  spotifyLoginCode: null,
  appleMusicLoginCode: null,

  setProviderLoginCode: (code: string, provider: MusicProviderType) => {
    switch (provider) {
      case MusicProviderType.Spotify:
        set({ spotifyLoginCode: code });
        break;
      case MusicProviderType.AppleMusic:
        set({ appleMusicLoginCode: code });
        break;
      default:
        throw new Error("Invalid music app type");
    }
  },

  setAuthToken: (token: string) => set({ authToken: token }),
  setUser: (user: any) => set({ user: user }),
}));
