import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const Button = ({ onPress, children, buttonStyle, textStyle }) => (
  <TouchableOpacity onPress={onPress} style={[styles.button, buttonStyle]}>
    <Text style={[styles.text, textStyle]}>{children}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: "white",
    borderRadius: 5,

    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  text: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Button;
