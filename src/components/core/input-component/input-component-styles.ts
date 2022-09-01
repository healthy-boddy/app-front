import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  textInput: {
    width: "100%",
    height: 48,
    paddingVertical: 8,
    paddingHorizontal: 20,
    backgroundColor: "#FFFFFF",
    borderColor: "#D9D9E7",
    borderRadius: 10,
    borderWidth: 1,
    color: "#484851",
    fontSize: 14,
    lineHeight: 16,
  },
  borderless: {
    borderWidth: 0,
  },
  error: {
    color: "#DA1414",
    fontSize: 16,
    lineHeight: 20,
    fontWeight: "500",
  },
  errorBorder: { borderColor: "#FFCDD8" },
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "auto",
  },
  iconContainer: {
    position: "absolute",
    alignItems: "flex-end",
    left: Dimensions.get("screen").width / 1.3,
  },
});
