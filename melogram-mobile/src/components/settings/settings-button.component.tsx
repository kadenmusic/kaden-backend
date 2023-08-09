import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { View, Text, Image } from "native-base";
import { Ionicons } from "@expo/vector-icons";

const SettingsButtonComponent = (props: any) => {
  const { showArrow = true } = props;
  const { textFontWeight = 400 } = props;

  return (
    <TouchableOpacity style={styles.buttonContainer}>
      <View style={styles.leftContent}>
        <Ionicons
          name={props.iconName}
          size={24}
          color={props.iconColor || "white"}
          style={styles.leftIcon}
        />
        <Text
          fontWeight={textFontWeight}
          color={props.textColor || "white"}
          style={styles.buttonText}
        >
          {props.buttonText}
        </Text>
      </View>
      {showArrow ? (
        <View style={styles.rightContent}>
          <Ionicons
            name="chevron-forward"
            size={24}
            color={props.iconColor || "white"}
          />
        </View>
      ) : (
        <></>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#1A202C",
    height: 60,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  leftContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  leftIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  buttonText: {
    fontSize: 18,
  },
  rightContent: {},
});

export default SettingsButtonComponent;
