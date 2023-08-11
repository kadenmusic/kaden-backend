import { HStack, Heading, Icon, Input, VStack } from "native-base";
import HeaderComponent from "../../components/shared/header/header.component";
import SafeAreaWrapperComponent from "../../components/shared/safe-area-wrapper/safe-area-wrapper.component";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import TextInputComponent from "../../components/shared/text-input/text-input.component";

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
        <TextInputComponent
          inputLeftElement={
            <Icon
              ml="2"
              size="5"
              color="gray.400"
              as={<Ionicons name="search" />}
            />
          }
          width="100%"
          placeholder="Search for a user..."
        />
      </VStack>
    </SafeAreaWrapperComponent>
  );
}
