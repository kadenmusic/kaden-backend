import { create, StateCreator } from "zustand";
import { MusicProviderType } from "../config/enums";

interface CommonSlice {
  loading: boolean;
  setLoading: (loading: boolean) => void;
}
const createCommonSlice: StateCreator<
  CommonSlice & AuthSlice,
  [],
  [],
  CommonSlice
> = (set) => ({
  loading: false,
  setLoading: (loading: boolean) => set((state) => ({ loading: loading })),
});

interface AuthSlice {
  user: any;
  setUser: (user: any) => void;

  provider: MusicProviderType | null;
  setProvider: (provider: MusicProviderType) => void;

  spotifyToken: any;
  setSpotifyToken: (token: string) => void;
}
const createAuthSlice: StateCreator<
  CommonSlice & AuthSlice,
  [],
  [],
  AuthSlice
> = (set) => ({
  user: null,
  setUser: (user: any) => set((state) => ({ user: user })),

  provider: null,
  setProvider: (provider: MusicProviderType) =>
    set((state) => ({ provider: provider })),

  spotifyToken: null,
  setSpotifyToken: (token: string) => set((state) => ({ spotifyToken: token })),
});

const useAppStore = create<CommonSlice & AuthSlice>()((...a) => ({
  ...createCommonSlice(...a),
  ...createAuthSlice(...a),
}));

export { useAppStore };
