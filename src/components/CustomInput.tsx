import React, { useState } from "react";
import {
  TextInput,
  StyleSheet,
  View,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import { color2 } from "../helpers/colors";
import Delete from "../assets/Icons/Delete";

const CustomInput = (props: any) => {
  const { onChangeText, editable, placeholder, value } = props;
  return (
    <View
      style={[
        styles.input_box,
        props.input_style,
        // value.length > 0 && { borderColor: "#7454CF", borderWidth: 2 },
      ]}
    >
      <View style={[{ width: "90%" }]}>
        <TextInput
          returnKeyType={"done"}
          autoCapitalize="none"
          onSubmitEditing={() => {
            Keyboard.dismiss();
          }}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          style={[styles.input]}
          placeholderTextColor={
            props.placeholderTextColor ? props.placeholderTextColor : "#797979"
          }
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCorrect={false}
          editable={editable}
        />
      </View>
      {props.delete && (
        <TouchableOpacity
          activeOpacity={0.6}
          style={styles.delete}
          onPress={props.onPressDelete}
        >
          <Delete />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default CustomInput;
const styles = StyleSheet.create({
  input_box: {
    borderRadius: 12,
    backgroundColor: "#F5F4F8",
    paddingHorizontal: 16,
    paddingVertical: 14,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  input: {
    fontSize: 16,
    width: "auto",
    color: "black",
  },
  delete: {
    top: 5,
    marginRight: 20,
  },
});
