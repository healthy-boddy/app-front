import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Pressable,
  Platform,
  TouchableOpacity,
} from "react-native";
import BackIcon from "../assets/Icons/BackIcon";
import { color1 } from "../helpers/colors";

const BackButton = (props: any) => {
  const { onPress } = props;
  return (
    <View style={{ width: "100%", height: 70 }}>
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={onPress}
        style={styles.back}
      >
        <View>
          <BackIcon />
        </View>
        <View>
          <Text style={styles.title}>Назад</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default BackButton;
const styles = StyleSheet.create({
  back: {
    flexDirection: "row",
    marginTop: Platform.OS === "android" ? 35 : 0,
    alignItems: "center",
  },
  title: {
    color: "#7454CF",
    marginLeft: 10,
    fontSize: 18,
    fontWeight: "400",
    lineHeight: 21.48,
  },
});
