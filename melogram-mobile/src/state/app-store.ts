import { create } from "zustand";
import { CommonSlice, createCommonSlice } from "./slices/common.slice";
import { AuthSlice, createAuthSlice } from "./slices/auth.slice";

export interface AppState {
  loading: boolean;
}

const useAppStore = create<AppState & CommonSlice & AuthSlice>()((...a) => ({
  loading: false,
  // setLoading: (loading: boolean) => a[0]((state) => ({ loading: loading })),
  ...createCommonSlice(...a),
  ...createAuthSlice(...a),
}));

export { useAppStore };
