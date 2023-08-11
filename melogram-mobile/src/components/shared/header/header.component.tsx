import { HStack, Icon, IconButton, Text, View } from "native-base";
import Ionicons from "@expo/vector-icons/Ionicons";
import { HEADER_HEIGHT } from "../../../config/constants";
import IconButtonComponent from "../icon-button/icon-button.component";
import { IconLibraryType } from "../../../config/enums";

export default function HeaderComponent(props: {
  title: string;
  navigation: any;
  showActionButtons?: boolean;
  showBackButton?: boolean;
}) {
  const { showActionButtons = true } = props;
  const { showBackButton = false } = props;

  const goToProfileScreen = () => {
    props.navigation.navigate("Profile");
  };

  const goToNotificationsScreen = () => {
    props.navigation.navigate("Notifications");
  };

  const handleGoBack = () => {
    props.navigation.goBack();
  };

  return (
    <HStack
      paddingLeft={showBackButton ? 0 : 5}
      justifyContent={"space-between"}
      paddingRight={5}
      paddingTop={2}
      height={{
        base: HEADER_HEIGHT,
      }}
    >
      <HStack flex={1} alignItems={"center"}>
        {showBackButton ? (
          <IconButtonComponent
            onPress={handleGoBack}
            iconSize="lg"
            iconColor="white"
            iconName="chevron-back-outline"
            iconNamePressed="chevron-back"
            iconLibrary={IconLibraryType.Ionicons}
          />
        ) : (
          <></>
        )}
        <Text
          fontWeight={800}
          fontSize={{
            base: 28,
          }}
          color={"white"}
        >
          {props.title}
        </Text>
      </HStack>

      {showActionButtons ? (
        <>
          <View>
            <IconButton
              onPress={goToNotificationsScreen}
              marginRight={-3}
              marginTop={1}
              icon={<Icon as={Ionicons} name="notifications-outline" />}
              _icon={{
                color: "gray.500",
                size: "2xl",
              }}
              _pressed={{
                bg: "transparent",
                _icon: {
                  color: "white",
                  name: "notifications-outline",
                },
              }}
            />
          </View>
          <View>
            <IconButton
              onPress={goToProfileScreen}
              marginRight={-3}
              marginTop={1}
              icon={<Icon as={Ionicons} name="person-circle-outline" />}
              _icon={{
                color: "gray.500",
                size: "2xl",
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
        </>
      ) : (
        <></>
      )}
    </HStack>
  );
}
