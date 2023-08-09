import { HStack, Heading, Icon, Input, VStack } from "native-base";
import HeaderComponent from "../../components/shared/header/header.component";
import SafeAreaWrapperComponent from "../../components/shared/safe-area-wrapper/safe-area-wrapper.component";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

export default function SearchScreen({ navigation }: { navigation: any }) {
  return (
    <SafeAreaWrapperComponent>
      <HeaderComponent
        navigation={navigation}
        title={"Search Users"}
        showActionButtons={false}
        showBackButton={false}
      />

      <VStack
        paddingLeft={5}
        paddingRight={5}
        w="100%"
        space={5}
        alignSelf="center"
      >
        <Input
          placeholder="Search for a user..."
          fontSize={14}
          variant={"filled"}
          bg={"#1A202C"}
          width="100%"
          borderColor={"transparent"}
          color={"white"}
          _input={{
            selectionColor: "white",
            cursorColor: "white",
          }}
          _focus={{
            borderColor: "gray.700",
          }}
          height="45px"
          borderRadius="5"
          InputLeftElement={
            <Icon
              ml="2"
              size="5"
              color="gray.400"
              as={<Ionicons name="search" />}
            />
          }
        />
      </VStack>
    </SafeAreaWrapperComponent>
  );
}
