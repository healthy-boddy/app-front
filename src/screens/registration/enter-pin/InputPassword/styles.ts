import { StyleSheet } from "react-native";

export default StyleSheet.create({
  root: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5,
  },
  emptyCell: {
    width: 12,
    height: 2,
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "gray",
  },
  cell: {
    width: "auto",
    borderColor: "#00000030",
    textAlign: "center",
    color: "#8C64FF",
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 20,
    backgroundColor: "transparent",
  },
  separator: {
    height: 2,
    width: 10,
    backgroundColor: "#000",
    alignSelf: "center",
    marginHorizontal: 1,
  },
  focusCell: {
    borderColor: "#9ee7ff",
  },
});
