import React, { FC } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Gender } from "./pick-gender";
import { DoneIcon } from "./icon/done-icon";

interface CardBlockInterface {
  onPress: () => void;
  sexTitle: string;
  isActive: Gender;
}

export const CardBlock: FC<CardBlockInterface> = ({
  onPress,
  sexTitle,
  isActive,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        {
          width: "100%",
          height: "auto",
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "space-between",
          borderRadius: 16,
          shadowOpacity: 0.6,
          shadowOffset: { width: 0, height: 0 },
          shadowRadius: 8,
          shadowColor: "rgba(0, 0, 0, 0.12)",
          padding: 12,
          backgroundColor: "#fff",
        },
        isActive === Gender.Man && {
          backgroundColor: "#8C64FF",
        },
        isActive === Gender.Woman && {
          backgroundColor: "#8C64FF",
        },
      ]}
    >
      <Text
        style={[
          {
            textAlign: "left",
            fontWeight: "500",
            fontSize: 16,
            lineHeight: 28,
            color: "#1E1E1E",
          },

          isActive === Gender.Man && {
            color: "#fff",
          },
          isActive === Gender.Woman && {
            color: "#fff",
          },
        ]}
      >
        {sexTitle}
      </Text>
      <View
        style={[
          {
            width: 24,
            height: 24,
            backgroundColor: "#C6B1FF",
            borderWidth: 1,
            borderColor: "#93B8FE",
            borderRadius: 60,
            alignItems: "center",
            justifyContent: "center",
          },
          isActive === Gender.Man && {
            backgroundColor: "#fff",
            width: 28,
            height: 28,
            borderColor: "#fff",
          },
          isActive === Gender.Woman && {
            backgroundColor: "#fff",
            width: 28,
            height: 28,
            borderColor: "#fff",
          },
        ]}
      >
        {isActive && <DoneIcon color={"#8C64FF"} />}
      </View>
    </TouchableOpacity>
  );
};
