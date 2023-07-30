import { View, Text } from "native-base";
import { darkModeBackgroundColor } from "../../styles/theme";
import HeaderComponent from "../../components/header/header.component";
import { SafeAreaView } from "react-native";

export default function SettingsScreen() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: darkModeBackgroundColor,
      }}
    >
      <HeaderComponent title={"Settings"} showProfile={false} />
      <Text
        style={{
          fontFamily: "PlusJakartaSans-ExtraBold",
          fontSize: 36,
          color: "white",
        }}
        fontSize={48}
      >
        profile
      </Text>
    </SafeAreaView>
  );
}
