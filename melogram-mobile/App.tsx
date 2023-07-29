import React, { useCallback } from "react";
import { NativeBaseProvider, Center, Text, View } from "native-base";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { CUSTOM_FONTS } from "./src/config/constants";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { theme } from "./src/styles/theme";
import LoginScreen from "./src/screens/login/login.screen";
import FeedScreen from "./src/screens/feed/feed.screen";

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

  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  const dummyToken = false;

  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
        {dummyToken ? (
          <Stack.Navigator>
            <Stack.Screen name="Login" component={LoginScreen} />
          </Stack.Navigator>
        ) : (
          <Tab.Navigator>
            <Tab.Screen name="Home" component={FeedScreen} />
          </Tab.Navigator>
        )}
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
