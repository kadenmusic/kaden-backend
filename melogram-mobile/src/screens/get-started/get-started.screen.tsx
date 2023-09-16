import { View, FlatList, Text, Box, Heading, Flex, Icon } from "native-base";
import { colors } from "../../styles/theme";
import { Entypo, Ionicons } from "@expo/vector-icons";
import * as Helpers from "../../helpers/helpers";
import FlatButtonComponent from "../../components/shared/flat-button/flat-button.component";
import HeaderComponent from "../../components/shared/header/header.component";
import SafeAreaWrapperComponent from "../../components/shared/safe-area-wrapper/safe-area-wrapper.component";
import ActionButtonComponent from "../../components/shared/action-button/action-button.component";
import { useMusicAppAuth } from "../../services/auth/auth.service";
import { MusicProviderType } from "../../config/enums";
import { makeRedirectUri } from "expo-auth-session";

import Constants from "expo-constants";

const APP_SCHEME = Constants.expoConfig?.scheme;

export default function GetStartedScreen({ navigation }: { navigation: any }) {
  const spotifyAuth = useMusicAppAuth(MusicProviderType.Spotify);
  const appleMusicAuth = useMusicAppAuth(MusicProviderType.AppleMusic);

  const redirectUri = makeRedirectUri({
    native: `${APP_SCHEME}://redirect`,
  });

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

          <Heading mb={3}>env: {process.env.NODE_ENV}</Heading>
          <Heading mb={3}>redirect uri: {redirectUri}</Heading>
          <Heading mb={3}>
            client id: {process.env.EXPO_PUBLIC_SPOTIFY_CLIENT_ID}
          </Heading>

          <Text color="gray.400" fontSize={18} mb={9}>
            Connect a social account to get started.
          </Text>
          <ActionButtonComponent
            onPress={() => {
              spotifyAuth.promptAsync();
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
