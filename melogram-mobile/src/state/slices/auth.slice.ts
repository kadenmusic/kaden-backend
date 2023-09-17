// import { StateCreator, create } from "zustand";
// import { MusicProviderType } from "../../config/enums";
// import { MusicProviderManager } from "../../managers/music-provider/music-provider.manager";
// import { useAuthRequest } from "expo-auth-session";
// import { CommonSlice } from "./common.slice";

// const musicProviderManger = new MusicProviderManager();

// interface AuthSlice {
//   user: any;
//   authToken: any;
//   spotifyLoginCode: any;
//   appleMusicLoginCode: any;
//   initiateLoginWithProvider: (provider: MusicProviderType) => void;
//   setUser: (user: any) => void;
//   setAuthToken: (token: string) => void;
// }

// const createAuthSlice: StateCreator<any, [], [], AuthSlice> = create((set) => ({
//   user: null,
//   authToken: null,
//   spotifyLoginCode: null,
//   appleMusicLoginCode: null,

//   initiateLoginWithProvider: async (provider: MusicProviderType) => {
//     // const [request, response, promptAsync] = useAuthRequest(
//     //   musicProviderManger.getOauthRequestConfig(provider),
//     //   musicProviderManger.getOauthRequestDiscovery(provider),
//     // );
//   },

//   // setProviderLoginCode: (code: string, provider: MusicProviderType) => {
//   //   switch (provider) {
//   //     case MusicProviderType.Spotify:
//   //       set({ spotifyLoginCode: code });
//   //       break;
//   //     case MusicProviderType.AppleMusic:
//   //       set({ appleMusicLoginCode: code });
//   //       break;
//   //     default:
//   //       throw new Error("Invalid music app type");
//   //   }
//   // },

//   setAuthToken: (token: string) => set({ authToken: token }),
//   setUser: (user: any) => set({ user: user }),
//   // addBear: () => set((state) => ({ bears: state.bears + 1 })),
// }));

// export { createAuthSlice, AuthSlice };
