import Ionicons from "@expo/vector-icons/Ionicons";
import { ParamListBase, RouteProp } from "@react-navigation/native";
export const getIcon = (route: RouteProp<ParamListBase, string>) => {
  return ({
    focused,
    color,
    size,
  }: {
    focused: boolean;
    color: any;
    size: any;
  }) => {
    let iconName: any;

    switch (route.name) {
      case "Feed":
        iconName = focused ? "ios-home" : "ios-home-outline";
        break;
      case "Settings":
        iconName = focused ? "cog" : "cog-outline";
        break;
      case "Charts":
        iconName = focused ? "stats-chart" : "stats-chart-outline";
        break;
      default:
        "";
    }

    // You can return any component that you like here!
    return <Ionicons name={iconName} size={size} color={color} />;
  };
};
