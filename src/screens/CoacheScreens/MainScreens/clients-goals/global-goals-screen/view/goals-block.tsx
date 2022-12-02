import React, { FC } from "react";
import { Text, View } from "react-native";

interface GoalsBlockProfile {
  title: string;
  description: string;
}

export const GoalsBlock: FC<GoalsBlockProfile> = ({ title, description }) => {
  return (
    <View
      style={{
        borderRadius: 12,
        backgroundColor: "#F5F4F8",
        paddingHorizontal: 16,
        paddingVertical: 12,
        alignItems: "flex-start",
        marginTop: 16,
      }}
    >
      <Text
        style={{
          marginTop: 4,
          fontSize: 18,
          fontWeight: "600",
          lineHeight: 21.48,
          color: "#1E1E1E",
        }}
      >
        {title}
      </Text>
      <Text
        style={{
          marginTop: 4,
          fontSize: 16,
          fontWeight: "400",
          lineHeight: 20,
          color: "#1E1E1E",
        }}
      >
        {description}
      </Text>
    </View>
  );
};
