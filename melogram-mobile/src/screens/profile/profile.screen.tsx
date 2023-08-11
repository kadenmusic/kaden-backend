import {
  Avatar,
  Box,
  FlatList,
  HStack,
  Heading,
  Text,
  VStack,
  View,
} from "native-base";
import HeaderComponent from "../../components/shared/header/header.component";
import { AVATAR_SRC, dummyPostData } from "../../config/dummy";
import SafeAreaWrapperComponent from "../../components/shared/safe-area-wrapper/safe-area-wrapper.component";

export default function ProfileScreen({ navigation }: { navigation: any }) {
  return (
    <SafeAreaWrapperComponent>
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
          height="50px"
          // flex={1}
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
        <HStack
          flex={1}
          width={"100%"}
          flexDirection={"column"}
          paddingLeft={5}
          marginTop={2}
          paddingRight={5}
          paddingBottom={5}
        >
          <Heading mb={2}>Posts</Heading>
          <FlatList
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
            data={dummyPostData}
            renderItem={({ item }) => (
              <Box
                height="60px"
                borderBottomWidth="1"
                borderBottomColor={"gray.500"}
              >
                <Text fontSize={18} fontWeight={700}>
                  Victory Dance
                </Text>
                <View style={{ flexDirection: "row" }}>
                  <Text color="gray.500">by </Text>
                  <Text color="gray.500"> </Text>
                  <Text fontWeight={500}>My Morning Jacket</Text>
                </View>
              </Box>
            )}
            keyExtractor={(item) => item.id}
          />
        </HStack>
      </HStack>
    </SafeAreaWrapperComponent>
  );
}
