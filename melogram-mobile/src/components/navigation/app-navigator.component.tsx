import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "native-base";
import HomeNavigatorComponent from "./home-navigator.component";
import ProfileScreen from "../../screens/profile/profile.screen";
import LoginScreen from "../../screens/login/login.screen";

export default function AppNavigatorComponent() {
  const Stack = createNativeStackNavigator();

  const dummyToken = false;

  return (
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
            component={HomeNavigatorComponent}
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
  );
}
