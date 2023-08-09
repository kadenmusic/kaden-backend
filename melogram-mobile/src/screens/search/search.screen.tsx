import { View, Text } from "native-base";
import { darkModeBackgroundColor } from "../../styles/theme";

export default function SearchScreen() {
  return (
    <View
      bg={darkModeBackgroundColor}
      flex={1}
      justifyContent="center"
      alignItems="center"
    >
      <Text
        style={{
          fontFamily: "PlusJakartaSans-ExtraBold",
          fontSize: 36,
          color: "white",
        }}
        fontSize={48}
      >
        search
      </Text>
    </View>
  );
}
