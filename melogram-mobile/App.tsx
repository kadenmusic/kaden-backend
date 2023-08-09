import React, { useCallback } from "react";
import { NativeBaseProvider, Center, Text, View, StatusBar } from "native-base";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { CUSTOM_FONTS } from "./src/config/constants";
import { theme } from "./src/styles/theme";
import AppNavigatorComponent from "./src/components/navigation/app-navigator.component";

export default function App() {
  const [fontsLoaded] = useFonts(CUSTOM_FONTS);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NativeBaseProvider theme={theme}>
      <AppNavigatorComponent />
    </NativeBaseProvider>
  );
}
