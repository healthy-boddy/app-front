import React from "react";
import { Text, View } from "react-native";

interface AllTasksBlockProps {
  title: string;
  duration: string;
}

export const AllTasksBlock: React.FC<AllTasksBlockProps> = ({
  title,
  duration,
}) => {
  return (
    <View
      style={{
        borderBottomWidth: 1,
        borderColor: "#E2E2E2",
        paddingVertical: 16,
      }}
    >
      <Text
        style={{
          color: "#1E1E1E",
          fontSize: 18,
          lineHeight: 21.48,
          fontWeight: "400",
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
        {duration}
      </Text>
    </View>
  );
};
