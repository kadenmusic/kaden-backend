import { View, Text, HStack } from "native-base";
import HeaderComponent from "../../components/shared/header/header.component";
import SafeAreaWrapperComponent from "../../components/shared/safe-area-wrapper/safe-area-wrapper.component";

export default function NotificationsScreen({
  navigation,
}: {
  navigation: any;
}) {
  return (
    <SafeAreaWrapperComponent>
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
    </SafeAreaWrapperComponent>
  );
}
