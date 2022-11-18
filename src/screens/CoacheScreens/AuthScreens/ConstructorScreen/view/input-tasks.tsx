import React, { Dispatch, SetStateAction } from "react";
import { TextInput, View } from "react-native";

interface InputTasksProps {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  placeholder: string;
}

export const InputTasks: React.FC<InputTasksProps> = ({
  value,
  setValue,
  placeholder,
}) => {
  return (
    <View
      style={{
        backgroundColor: "#F5F4F8",
        paddingVertical: 14,
        paddingHorizontal: 16,
        borderRadius: 12,
        width: "100%",
      }}
    >
      <TextInput
        style={{
          color: "#1E1E1E",
          fontWeight: "400",
          lineHeight: 22,
          fontSize: 16,
        }}
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
      />
    </View>
  );
};
