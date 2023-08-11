import { SafeAreaView } from "react-native";
import { darkModeBackgroundColor } from "../../../styles/theme";

export default function SafeAreaWrapperComponent({
  children,
}: {
  children: any;
}) {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: darkModeBackgroundColor,
      }}
    >
      {children}
    </SafeAreaView>
  );
}
