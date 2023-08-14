import { create } from "zustand";

export const useAuthStore = create((set) => ({
  user: null,
  authToken: null,
  setAuthToken: (token: string) => set({ authToken: token }),
  setUser: (user: any) => set({ user: user }),
}));
