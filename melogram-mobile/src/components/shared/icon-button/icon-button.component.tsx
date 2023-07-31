import { Icon, IconButton } from "native-base";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Entypo } from "@expo/vector-icons";
import { IconLibraryType } from "../../../config/enums";

export default function IconButtonComponent(props: any) {
  switch (props.iconLibrary) {
    case IconLibraryType.Ionicons:
      return (
        <IconButton
          {...props}
          icon={<Icon as={Ionicons} name={props.iconName} />}
          _icon={{
            color: "gray.500",
            size: props.iconSize,
          }}
          _pressed={{
            bg: "transparent",
            _icon: {
              color: props.iconColorPressed || "white",
              name: props.iconNamePressed,
            },
          }}
        />
      );
    case IconLibraryType.Entypo:
      return (
        <IconButton
          {...props}
          icon={<Icon as={Entypo} name={props.iconName} />}
          _icon={{
            color: "gray.500",
            size: props.iconSize,
          }}
          _pressed={{
            bg: "transparent",
            _icon: {
              color: props.iconColorPressed || "white",
              name: props.iconNamePressed,
            },
          }}
        />
      );
    default:
      break;
  }
}
