import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { View, Text, Image } from "native-base";
import { Ionicons } from "@expo/vector-icons";

const ActionButtonComponent = (props: any) => {
  const { textFontWeight = 600 } = props;

  return (
    <TouchableOpacity {...props} style={styles.buttonContainer}>
      <View style={styles.leftContent}>
        {props.iconName ? (
          <Ionicons
            name={props.iconName}
            size={24}
            color={props.iconColor || "black"}
            style={styles.leftIcon}
          />
        ) : null}

        {props.innerContent ? (
          props.innerContent
        ) : (
          <Text
            fontWeight={textFontWeight}
            color={props.textColor || "black"}
            style={styles.buttonText}
          >
            {props.buttonText}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    height: 60,
    paddingHorizontal: 20,
    borderRadius: 40,
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

export default ActionButtonComponent;
