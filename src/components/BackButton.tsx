import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import BackIcon from "../assets/Icons/BackIcon";
import { PencilSvg } from "./icon/pencil";

const BackButton = (props: any) => {
  const { onPress } = props;
  return (
    <View
      style={{
        width: "100%",
        height: 48,
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
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

      {props.title && (
        <Text
          style={{
            marginTop: 4,
            fontSize: 18,
            fontWeight: "600",
            lineHeight: 21.48,
            color: "#1E1E1E",
          }}
        >
          {props.title}
        </Text>
      )}

      <View
        style={{
          width: 90,
        }}
      />

      {props.latter && (
        <TouchableOpacity onPress={props.onPressLetter} style={styles.back}>
          <Text style={styles.latterTitle}>Позже</Text>
        </TouchableOpacity>
      )}

      {props.onPressEdit && (
        <TouchableOpacity onPress={props.onPressEdit} style={styles.back}>
          <PencilSvg />
        </TouchableOpacity>
      )}
      {props.editAnalyse && (
        <TouchableOpacity
          onPress={props.onPressEditAnalyse}
          style={[styles.back, { top: 7 }]}
        >
          <Text style={styles.latterTitle}>Изменить</Text>
        </TouchableOpacity>
      )}
      {props.saveAnalyse && (
        <TouchableOpacity
          onPress={props.onPressSave}
          style={[styles.back, { top: 7 }]}
        >
          <Text style={styles.latterTitle}>Сохранить</Text>
        </TouchableOpacity>
      )}
      {props.saveDate && (
        <TouchableOpacity onPress={props.onPressSaveDate} style={[styles.back]}>
          <Text style={styles.latterTitle}>Сохранить</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default BackButton;
const styles = StyleSheet.create({
  back: {
    flexDirection: "row",
    // marginTop: Platform.OS === "android" ? 35 : 0,
    alignItems: "center",
    marginRight: 16,
  },
  title: {
    color: "#7454CF",
    marginLeft: 10,
    fontSize: 18,
    fontWeight: "400",
    lineHeight: 21.48,
  },
  latterTitle: {
    fontSize: 18,
    lineHeight: 21,
    fontWeight: "400",
    fontStyle: "normal",
    color: "#7454CF",
  },
});
