import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { Dimensions } from "react-native";
import Constants from "expo-constants";
import { HEADER_HEIGHT } from "../config/constants";

export const getScrollViewHeight = () => {
  const tabBarHeight = useBottomTabBarHeight();
  const { height } = Dimensions.get("window");
  const statusBarHeight = Constants.statusBarHeight;

  return height - tabBarHeight - HEADER_HEIGHT - statusBarHeight;
};
