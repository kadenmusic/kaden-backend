import { HStack, Icon, IconButton, Text, View } from "native-base";
import Ionicons from "@expo/vector-icons/Ionicons";
import { HEADER_HEIGHT } from "../../config/constants";

export default function HeaderComponent(props: {
  title: string;
  navigation: any;
  showProfile?: boolean;
}) {
  const { showProfile = true } = props;

  const goToProfileScreen = () => {
    props.navigation.navigate("Profile");
  };

  return (
    <HStack
      paddingLeft={5}
      justifyContent={"space-between"}
      paddingRight={5}
      paddingTop={2}
      height={{
        base: HEADER_HEIGHT,
      }}
    >
      <Text
        fontWeight={800}
        fontSize={{
          base: 28,
        }}
        color={"white"}
      >
        {props.title}
      </Text>
      {showProfile ? (
        <View>
          <IconButton
            onPress={goToProfileScreen}
            marginRight={-3}
            marginTop={-1.5}
            icon={<Icon as={Ionicons} name="person-circle-outline" />}
            _icon={{
              color: "gray.500",
              size: "3xl",
            }}
            _pressed={{
              bg: "transparent",
              _icon: {
                color: "white",
                name: "person-circle-outline",
              },
            }}
          />
        </View>
      ) : (
        <></>
      )}
    </HStack>
  );
}
