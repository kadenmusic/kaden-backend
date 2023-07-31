import { SafeAreaView } from "react-native";
import { Text } from "native-base";
import { darkModeBackgroundColor } from "../../styles/theme";
import HeaderComponent from "../../components/shared/header/header.component";

export default function ProfileScreen({ navigation }: { navigation: any }) {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: darkModeBackgroundColor,
      }}
    >
      <HeaderComponent
        navigation={navigation}
        title={"Profile"}
        showProfile={false}
      />
      <Text
        style={{
          fontFamily: "PlusJakartaSans-ExtraBold",
          fontSize: 36,
          color: "white",
        }}
        fontSize={48}
      >
        My profile
      </Text>
    </SafeAreaView>
  );
}
