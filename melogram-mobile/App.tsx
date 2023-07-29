import React, { useCallback } from "react";
import { NativeBaseProvider, Center, Text, View } from "native-base";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { CUSTOM_FONTS } from "./src/config/constants";

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
    <NativeBaseProvider>
      <View flex={1} justifyContent="center" alignItems="center">
        <Text
          style={{ fontFamily: "PlusJakartaSans-ExtraBold", fontSize: 36 }}
          fontSize={48}
        >
          melogram
        </Text>
      </View>
    </NativeBaseProvider>
  );
}
