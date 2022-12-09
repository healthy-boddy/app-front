import React, { FC } from "react";
import { Text, TouchableOpacity, View } from "react-native";

interface QuizBlockProps {
  title: string;
  description: string;
  onPress: () => void;
}

export const QuizBlock: FC<QuizBlockProps> = ({
  onPress,
  description,
  title,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: "#F5F4F8",
        borderRadius: 12,
        paddingHorizontal: 16,
        paddingVertical: 12,
        marginTop: 16,
      }}
    >
      <Text
        style={{
          color: "#1E1E1E",
          fontSize: 18,
          lineHeight: 21.67,
          fontWeight: "600",
        }}
      >
        {title}
      </Text>
      <Text
        style={{
          color: "#797979",
          fontSize: 16,
          lineHeight: 20,
          fontWeight: "400",
          marginTop: 4,
        }}
      >
        {description}
      </Text>
    </TouchableOpacity>
  );
};
