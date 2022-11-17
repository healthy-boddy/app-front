import React, { FC } from "react";
import { Text, View } from "react-native";
import { ChevronRight } from "../../../../../components/icon/chevron-right";

interface ProgramsTargetsBlockProps {
  title: string;
  number: number;
}

export const ProgramsTargetsBlock: FC<ProgramsTargetsBlockProps> = ({
  title,
  number,
}) => {
  return (
    <View
      style={{
        backgroundColor: "#F5F4F8",
        padding: 16,
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        borderRadius: 12,
      }}
    >
      <Text>{title}</Text>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            marginRight: 13,
            color: "#797979",
            fontSize: 16,
            lineHeight: 20,
            fontWeight: "400",
          }}
        >
          {number}
        </Text>
        <ChevronRight />
      </View>
    </View>
  );
};
