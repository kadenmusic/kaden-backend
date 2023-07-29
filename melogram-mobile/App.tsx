import React, { useCallback } from "react";
import { NativeBaseProvider, Center, Text, View } from "native-base";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { CUSTOM_FONTS } from "./src/config/constants";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

function HomeScreen() {
  return (
    <View flex={1} justifyContent="center" alignItems="center">
      <Text
        style={{ fontFamily: "PlusJakartaSans-ExtraBold", fontSize: 36 }}
        fontSize={48}
      >
        melogram
      </Text>
    </View>
  );
}

function LoginScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>LOGIN!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
}

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
    <NativeBaseProvider>
      <NavigationContainer>
        {dummyToken ? (
          <Stack.Navigator>
            <Stack.Screen name="Login" component={LoginScreen} />
          </Stack.Navigator>
        ) : (
          <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
          </Tab.Navigator>
        )}
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
