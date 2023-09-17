import {
  View,
  Text,
  HStack,
  Box,
  Button,
  Center,
  FormControl,
  Heading,
  Input,
  Link,
  VStack,
} from "native-base";
import SafeAreaWrapperComponent from "../../components/shared/safe-area-wrapper/safe-area-wrapper.component";
import { useState } from "react";

// This screen is so the app will pass beta testing from Apple
export default function DummyCredentialsScreen({
  navigation,
}: {
  navigation: any;
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (value: string) => {
    setEmail(value);
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
  };

  const goToGetStarted = () => {
    if (
      email.toLocaleLowerCase() === "test@email.com" &&
      password.toLocaleLowerCase() === "test"
    ) {
      navigation.navigate("GetStarted");
    }
  };
  return (
    <Center w="100%">
      <Box safeArea p="2" py="8" w="90%" maxW="290">
        <Heading
          size="lg"
          fontWeight="600"
          color="coolGray.800"
          _dark={{
            color: "warmGray.50",
          }}
        >
          Melogram Beta Testing
        </Heading>
        <Heading
          mt="1"
          _dark={{
            color: "warmGray.200",
          }}
          color="coolGray.600"
          fontWeight="medium"
          size="xs"
        >
          Sign in to continue:
        </Heading>

        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Email ID</FormControl.Label>
            <Input value={email} onChangeText={handleEmailChange} />
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input
              type="password"
              value={password}
              onChangeText={handlePasswordChange}
            />
          </FormControl>
          <Button onPress={goToGetStarted} mt="2" colorScheme="indigo">
            Sign in
          </Button>
        </VStack>
      </Box>
    </Center>
  );
}
