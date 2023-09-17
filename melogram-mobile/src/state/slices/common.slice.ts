import { StateCreator } from "zustand";
import { AuthSlice } from "./auth.slice";
import { AppState } from "../app-store";

export interface CommonSlice {
  test: boolean;
}
export const createCommonSlice: StateCreator<
  AppState & CommonSlice & AuthSlice,
  [],
  [],
  CommonSlice
> = (set) => ({
  test: false,
});
