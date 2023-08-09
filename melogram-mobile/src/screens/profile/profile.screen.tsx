import { SafeAreaView } from "react-native";
import { Avatar, HStack, Heading, Text, VStack, View } from "native-base";
import { darkModeBackgroundColor } from "../../styles/theme";
import HeaderComponent from "../../components/shared/header/header.component";
import { AVATAR_SRC } from "../../config/dummy";

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
        showActionButtons={false}
        showBackButton={true}
      />

      <HStack
        direction={"column"}
        flex={1}
        alignItems={"center"}
        justifyContent={"flex-start"}
      >
        <Avatar
          mb={3}
          source={{
            uri: AVATAR_SRC,
          }}
          size="2xl"
        />
        <Heading mb={2}>@spenava</Heading>
        <Text color="gray.500" mb={5}>
          Member since July 2023
        </Text>
        <HStack
          paddingLeft={5}
          paddingRight={5}
          width="100%"
          flex={1}
          justifyContent={"space-around"}
        >
          <VStack width={150} alignItems={"center"}>
            <Text fontWeight={"700"}>230</Text>
            <Text color="gray.500">Posts</Text>
          </VStack>
          <VStack width={150} alignItems={"center"}>
            <Text fontWeight={"700"}>30</Text>
            <Text color="gray.500">Followers</Text>
          </VStack>
          <VStack width={150} alignItems={"center"}>
            <Text fontWeight={"700"}>90</Text>
            <Text color="gray.500">Following</Text>
          </VStack>
        </HStack>
      </HStack>
    </SafeAreaView>
  );
}
