import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    flex: 1,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 14,
    paddingLeft: 24,
  },
  bodyContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  footerContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 40,
    paddingHorizontal: 16,
  },
  twoButtonsBottomContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 40,
    paddingHorizontal: 16,
  },
  clearAllFont: {
    fontWeight: "400",
    fontSize: 17,
    lineHeight: 20,
    textAlign: "right",
    color: "#1C1C1E",
    paddingRight: 12,
  },
});
