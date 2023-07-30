import { HStack, Icon, IconButton, Text, View } from "native-base";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function HeaderComponent(props: {
  title: string;
  showProfile?: boolean;
}) {
  const { showProfile = true } = props;

  return (
    <HStack
      paddingLeft={5}
      justifyContent={"space-between"}
      paddingRight={5}
      paddingTop={2}
      height={{
        base: 75,
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
