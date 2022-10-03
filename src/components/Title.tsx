import React from "react";
import { Text, StyleSheet } from "react-native";

const Title = (props: any) => {
  const { children, titlePropStyle } = props;
  return <Text style={[styles.title, titlePropStyle]}>{children}</Text>;
};
export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 19,
    fontWeight: "600",
    lineHeight: 22.67,
    color: "#1E1E1E",
  },
});
