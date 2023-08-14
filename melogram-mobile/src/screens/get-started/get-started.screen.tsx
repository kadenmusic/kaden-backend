import { View, FlatList, Text, Box, Heading, Flex, Icon } from "native-base";
import { colors } from "../../styles/theme";
import { Entypo, Ionicons } from "@expo/vector-icons";
import * as Helpers from "../../helpers/helpers";
import FlatButtonComponent from "../../components/shared/flat-button/flat-button.component";
import HeaderComponent from "../../components/shared/header/header.component";
import SafeAreaWrapperComponent from "../../components/shared/safe-area-wrapper/safe-area-wrapper.component";
import ActionButtonComponent from "../../components/shared/action-button/action-button.component";
import { useAuthStore } from "../../state/auth/auth.store";
import * as WebBrowser from "expo-web-browser";
import { makeRedirectUri, useAuthRequest } from "expo-auth-session";
import { useEffect } from "react";

WebBrowser.maybeCompleteAuthSession();

// Endpoint
const discovery = {
  authorizationEndpoint: "https://accounts.spotify.com/authorize",
  tokenEndpoint: "https://accounts.spotify.com/api/token",
};

export default function GetStartedScreen({ navigation }: { navigation: any }) {
  const [request, response, promptAsync] = useAuthRequest(
    {
      clientId: "4410784367c941de899fa9285967971b",
      scopes: ["user-read-email", "playlist-modify-public"],
      // In order to follow the "Authorization Code Flow" to fetch token after authorizationEndpoint
      // this must be set to false
      usePKCE: false,
      redirectUri: "exp://localhost:8081/--/spotify-auth-callback",
      // TODO: Create proper schemes for prod, etc.
      // redirectUri: makeRedirectUri({
      //   scheme: "melogram-mobile",
      //   path: "redirect",
      // }),
    },
    discovery,
  );

  useEffect(() => {
    if (response?.type === "success") {
      const { code } = response.params;
      console.log(code);
    }
  }, [response]);

  return (
    <SafeAreaWrapperComponent>
      <HeaderComponent
        title={""}
        showActionButtons={false}
        navigation={navigation}
      />

      <View
        paddingLeft={5}
        paddingRight={5}
        height={"80%"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box width={"100%"}>
          <Heading mb={3}>Welcome to Melogram.</Heading>
          <Text color="gray.400" fontSize={18} mb={9}>
            Connect a social account to get started.
          </Text>
          <ActionButtonComponent
            onPress={() => {
              promptAsync();
            }}
            innerContent={
              <Flex
                direction="row"
                alignItems="center"
                width={"100%"}
                justifyContent={"start"}
              >
                <Icon
                  size="xl"
                  mr={2}
                  as={Entypo}
                  name={"spotify"}
                  color="#1DB954"
                />
                <Text fontSize={18} fontWeight={500} color={"black"}>
                  Sign in with Spotify
                </Text>
              </Flex>
            }
          />
          <View h="15px"></View>
          <ActionButtonComponent
            innerContent={
              <Flex
                direction="row"
                alignItems="center"
                width={"100%"}
                justifyContent={"start"}
              >
                <Icon
                  size="xl"
                  mr={2}
                  as={Ionicons}
                  name={"logo-apple"}
                  color="#f94c57"
                />
                <Text fontSize={18} fontWeight={500} color={"black"}>
                  Sign in with Apple
                </Text>
              </Flex>
            }
          />
          <View h="15px"></View>
          {/* <ActionButtonComponent
            innerContent={
              <Flex
                direction="row"
                alignItems="center"
                width={"100%"}
                justifyContent={"start"}
              >
                <Icon
                  size="xl"
                  mr={2}
                  as={Ionicons}
                  name={"logo-facebook"}
                  color="#4267B2"
                />
                <Text fontSize={18} fontWeight={500} color={"black"}>
                  Sign in with Facebook
                </Text>
              </Flex>
            }
          /> */}
        </Box>
      </View>
    </SafeAreaWrapperComponent>
  );
}
