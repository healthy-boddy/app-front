import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { DoneGoalsSvg } from "../../../../../../components/icon/done-goals-svg";

interface AllTasksBlockProps {
  title: string;
  duration: string;
  onPress: () => void;
  checkForDone?: string;
}

export const AllTasksBlock: React.FC<AllTasksBlockProps> = ({
  title,
  duration,
  onPress,
  checkForDone,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        {
          borderBottomWidth: 1,
          borderColor: "#E2E2E2",
          paddingVertical: 16,
          paddingHorizontal: 16,
        },
        checkForDone === "true" && {
          backgroundColor: "#E5DDFD",
          borderRadius: 12,
        },
      ]}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
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
        {checkForDone === "true" && <DoneGoalsSvg />}
      </View>
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
    </TouchableOpacity>
  );
};
