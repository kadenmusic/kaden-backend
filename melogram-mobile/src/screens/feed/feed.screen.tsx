import { View, Text, HStack, Icon, IconButton } from "native-base";
import { darkModeBackgroundColor } from "../../styles/theme";
import { SafeAreaView } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import HeaderComponent from "../../components/header/header.component";

export default function FeedScreen() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: darkModeBackgroundColor,
      }}
    >
      <HeaderComponent title={"Your Feed"} />
      <View justifyContent="center" alignItems="center">
        <Text
          fontWeight={800}
          style={{
            fontSize: 36,
            color: "white",
          }}
          fontSize={48}
        >
          melogram
        </Text>
      </View>
    </SafeAreaView>
  );
}
