import { Actionsheet, Box, Flex, Icon, Text } from "native-base";
import { Entypo, Ionicons } from "@expo/vector-icons";

export default function CreatePostActionSheetComponent(props: any) {
  const musicSocialConnected = false;

  return (
    <Actionsheet isOpen={props.isOpen} onClose={props.onClose}>
      {musicSocialConnected ? (
        <Actionsheet.Content>
          <Box w="100%" h={60} px={4} justifyContent="center">
            <Text
              fontSize="16"
              color="gray.500"
              _dark={{
                color: "gray.300",
              }}
            >
              Albums
            </Text>
          </Box>
          <Actionsheet.Item>Delete</Actionsheet.Item>
          <Actionsheet.Item isDisabled>Share</Actionsheet.Item>
          <Actionsheet.Item>Play</Actionsheet.Item>
          <Actionsheet.Item>Favourite</Actionsheet.Item>
          <Actionsheet.Item>Cancel</Actionsheet.Item>
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
