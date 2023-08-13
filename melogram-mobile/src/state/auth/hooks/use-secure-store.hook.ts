import { useState } from "react";
import * as SecureStore from "expo-secure-store";

export const useSecureStore = () => {
  const [value, setValue] = useState<string | null>(null);

  const setItemAsync = async (key: string, value: string) => {
    await SecureStore.setItemAsync(key, value);
    setValue(value);
  };

  const getItemAsync = async (key: string) => {
    const value = await SecureStore.getItemAsync(key);
    setValue(value);
    return value;
  };

  const deleteItemAsync = async (key: string) => {
    await SecureStore.deleteItemAsync(key);
    setValue(null);
  };

  return { value, setItemAsync, getItemAsync, deleteItemAsync };
};
