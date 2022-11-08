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
    <View style={{ width: "100%", height: 70, justifyContent: 'space-between', flexDirection: 'row' }}>
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={onPress}
        style={styles.back}
      >
        <View>
          <BackIcon />
        </View>
        <View>
          <Text style={styles.title}>Back</Text>
        </View>
      </TouchableOpacity>

      {props.latter && <TouchableOpacity
          onPress={props.onPressLetter} style={styles.back}>
        <Text style={styles.latterTitle}>
          Позже
        </Text>
      </TouchableOpacity>}
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
  latterTitle:{
    fontSize: 18,
    lineHeight: 21,
    fontWeight: '400',
    fontStyle: "normal",
    marginRight: 16,
    color: '#7454CF'
  }
});
