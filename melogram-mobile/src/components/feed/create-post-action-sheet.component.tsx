import { Actionsheet, Box, Flex, Icon, Text } from "native-base";
import { Entypo, Ionicons } from "@expo/vector-icons";
import TextInputComponent from "../shared/text-input/text-input.component";

export default function CreatePostActionSheetComponent(props: any) {
  const musicSocialConnected = true;
  const bg = "#1A202C";

  return (
    <Actionsheet isOpen={props.isOpen} onClose={props.onClose}>
      {musicSocialConnected ? (
        <Actionsheet.Content bg={bg}>
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
            placeholder="Search for a song..."
          />
          <Actionsheet.Item
            _pressed={{
              backgroundColor: "gray.700",
            }}
            bg={bg}
          >
            <Text fontSize={16}>Test</Text>
          </Actionsheet.Item>
          <Actionsheet.Item
            _pressed={{
              backgroundColor: "gray.700",
            }}
            bg={bg}
          >
            <Text fontSize={16}>Test</Text>
          </Actionsheet.Item>
          <Actionsheet.Item
            _pressed={{
              backgroundColor: "gray.700",
            }}
            bg={bg}
          >
            <Text fontSize={16}>Test</Text>
          </Actionsheet.Item>
          <Actionsheet.Item
            _pressed={{
              backgroundColor: "gray.700",
            }}
            bg={bg}
          >
            <Text fontSize={16}>Test</Text>
          </Actionsheet.Item>
        </Actionsheet.Content>
      ) : (
        <Actionsheet.Content>
          <Actionsheet.Item
            _pressed={{
              backgroundColor: "gray.200",
            }}
          >
            <Flex direction="row" alignItems="center">
              <Icon
                size="xl"
                mr={2}
                as={Entypo}
                name={"spotify"}
                color="#1DB954"
              />
              <Text fontSize={18} fontWeight={500} color={"black"}>
                Connect Spotify
              </Text>
            </Flex>
          </Actionsheet.Item>
          <Actionsheet.Item
            _pressed={{
              backgroundColor: "gray.200",
            }}
          >
            <Flex direction="row" alignItems="center">
              <Icon
                size="xl"
                mr={2}
                as={Ionicons}
                name={"musical-notes"}
                color="#f94c57"
              />
              <Text fontSize={18} fontWeight={500} color={"black"}>
                Connect Apple Music
              </Text>
            </Flex>
          </Actionsheet.Item>
        </Actionsheet.Content>
      )}
    </Actionsheet>
  );
}
