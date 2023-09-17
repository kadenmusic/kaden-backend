import { StyleSheet } from "react-native";

export const loadingComponentStyle = StyleSheet.create({
  backdrop: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 999,
    backgroundColor: "rgba(0,0,0,0.4)",
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  spinner: {
    color: "white",
  },
});
