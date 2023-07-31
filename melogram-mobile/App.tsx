import React, { useCallback } from "react";
import { NativeBaseProvider, Center, Text, View, StatusBar } from "native-base";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { CUSTOM_FONTS } from "./src/config/constants";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { colors, darkModeBackgroundColor, theme } from "./src/styles/theme";
import LoginScreen from "./src/screens/login/login.screen";
import FeedScreen from "./src/screens/feed/feed.screen";
import { getIcon } from "./src/util/util";

import ChartsScreen from "./src/screens/charts/charts.screen";
import SettingsScreen from "./src/screens/settings/settings.screen";
import ProfileScreen from "./src/screens/profile/profile.screen";

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

  function Home() {
    return (
      <Tab.Navigator
        initialRouteName="Feed"
        screenOptions={({ route }) => ({
          tabBarStyle: {
            backgroundColor: darkModeBackgroundColor,
            borderTopWidth: 0,
          },
          tabBarIcon: getIcon(route),
          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: colors.gray[500],
        })}
      >
        <Tab.Screen
          name="Feed"
          component={FeedScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Charts"
          component={ChartsScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    );
  }

  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
        <StatusBar barStyle={"light-content"} />

        {dummyToken ? (
          <Stack.Navigator>
            <Stack.Screen name="Login" component={LoginScreen} />
          </Stack.Navigator>
        ) : (
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="Profile"
              component={ProfileScreen}
            />
          </Stack.Navigator>
        )}
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
