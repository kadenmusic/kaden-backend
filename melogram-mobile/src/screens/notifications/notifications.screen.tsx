import { View, Text, HStack } from "native-base";
import { darkModeBackgroundColor } from "../../styles/theme";
import { SafeAreaView } from "react-native";
import HeaderComponent from "../../components/shared/header/header.component";

export default function NotificationsScreen({
  navigation,
}: {
  navigation: any;
}) {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: darkModeBackgroundColor,
      }}
    >
      <HeaderComponent
        navigation={navigation}
        title={"Notifications"}
        showActionButtons={false}
        showBackButton={true}
      />

      <HStack
        direction={"column"}
        flex={1}
        alignItems={"center"}
        justifyContent={"flex-start"}
      ></HStack>
    </SafeAreaView>
  );
}
