import React, { useCallback, useEffect } from "react";
import { NativeBaseProvider, Center, Text, View, StatusBar } from "native-base";
import { useFonts } from "expo-font";
import { Provider } from "react-redux";
import * as SplashScreen from "expo-splash-screen";
import { CUSTOM_FONTS } from "./src/config/constants";
import * as Font from "expo-font";
import { theme } from "./src/styles/theme";
import AppNavigatorComponent from "./src/components/navigation/app-navigator.component";

export default function App() {
  const [appReady, setAppReady] = React.useState(false);

  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync(CUSTOM_FONTS);
    };

    loadFonts()
      .then(() => {
        setAppReady(true);
      })
      .catch((error) => {});
  }, []);

  useCallback(async () => {
    if (appReady) {
      await SplashScreen.hideAsync();
    }
  }, [appReady]);

  if (!appReady) {
    return null;
  }

  return (
    <NativeBaseProvider theme={theme}>
      <AppNavigatorComponent />
    </NativeBaseProvider>
  );
}
