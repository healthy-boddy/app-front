import React from "react";
import { TextInput, StyleSheet, View, TouchableOpacity } from "react-native";
import { color2 } from "../helpers/colors";
import Delete from "../assets/Icons/Delete";

const CustomInput = (props: any) => {
  const { onChangeText, placeholder, value } = props;
  return (
    <View style={styles.input_box}>
      <View>
        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          style={styles.input}
          placeholderTextColor={"#797979"}
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
  },
  input: {
    fontSize: 16,
    width: "100%",
    color: "#797979",
  },
  delete: {
    top: 5,
    marginRight: 20,
  },
});
