import React from "react";
import {
  NativeBaseProvider,
  Box,
  Center,
  HStack,
  Icon,
  View,
} from "native-base";

export default function App() {
  return (
    <NativeBaseProvider>
      <View flex={1} justifyContent="center" alignItems="center">
        <Center
          bg="primary.400"
          _text={{
            color: "white",
            fontWeight: "bold",
          }}
          height="32"
          width="40"
          shadow={2}
        >
          Center
        </Center>
      </View>
    </NativeBaseProvider>
  );
}
