import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "native-base";
import HomeNavigatorComponent from "./home-navigator.component";
import ProfileScreen from "../../screens/profile/profile.screen";
import LoginScreen from "../../screens/login/login.screen";
import NotificationsScreen from "../../screens/notifications/notifications.screen";
import GetStartedScreen from "../../screens/get-started/get-started.screen";
// import { createAuthSlice } from "../../state/slices/auth.slice";
// import { useAppState } from "../../state/app-state";
//
export default function AppNavigatorComponent() {
  const Stack = createNativeStackNavigator();
  // const authToken = createAuthSlice((state: any) => state.authToken);
  // const appState = useAppState();
  // console.log(appState);

  // const loggedIn = !!authToken;
  const loggedIn = false;

  return (
    <NavigationContainer>
      <StatusBar barStyle={"light-content"} />

      {!loggedIn ? (
        <Stack.Navigator>
          <Stack.Screen
            options={{ headerShown: false }}
            name="GetStarted"
            component={GetStartedScreen}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Login"
            component={LoginScreen}
          />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeNavigatorComponent}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Profile"
            component={ProfileScreen}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Notifications"
            component={NotificationsScreen}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}
