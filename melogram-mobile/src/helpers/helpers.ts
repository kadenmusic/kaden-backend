import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { Dimensions } from "react-native";
import Constants from "expo-constants";
import { HEADER_HEIGHT } from "../config/constants";
import { MusicProviderType } from "../config/enums";

export const getScrollViewHeight = () => {
  const tabBarHeight = useBottomTabBarHeight();
  const { height } = Dimensions.get("window");
  const statusBarHeight = Constants.statusBarHeight;

  return height - tabBarHeight - HEADER_HEIGHT - statusBarHeight;
};

export const getSecureStoreKeyForProvider = (provider: MusicProviderType) => {
  return `${provider.toLowerCase()}_login_code`;
};
