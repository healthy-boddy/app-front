import React, { FC, ReactNode } from "react";
import { MoneyIcon } from "../icon/money-icon";
import { Text, View } from "react-native";

interface WrapperClientDataProps {
  icon: ReactNode;
  title: string;
  borderRadiusColor?: string;
}

export const WrapperClientData: FC<WrapperClientDataProps> = ({
  icon,
  title,
  borderRadiusColor = "#9DDEB8",
}) => {
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 40,
        borderWidth: 2,
        borderColor: borderRadiusColor,
        marginTop: 12,
        flexDirection: "row",
      }}
    >
      {icon}
      <Text
        style={{
          textAlign: "left",
          paddingLeft: 5.5,
          color: "#797979",
          fontSize: 12,
          lineHeight: 14,
          fontWeight: "500",
        }}
      >
        {title}
      </Text>
    </View>
  );
};
