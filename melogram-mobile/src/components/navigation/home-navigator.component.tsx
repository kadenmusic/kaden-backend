import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { colors, darkModeBackgroundColor } from "../../styles/theme";
import { getIcon } from "../../util/util";
import FeedScreen from "../../screens/feed/feed.screen";
import ChartsScreen from "../../screens/charts/charts.screen";
import SearchScreen from "../../screens/search/search.screen";
import SettingsScreen from "../../screens/settings/settings.screen";

export default function HomeNavigatorComponent() {
  const Tab = createBottomTabNavigator();

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
      {/* We'll implement this later */}
      {/* <Tab.Screen
        name="Charts"
        component={ChartsScreen}
        options={{ headerShown: false }}
      /> */}
      <Tab.Screen
        name="Search"
        component={SearchScreen}
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
