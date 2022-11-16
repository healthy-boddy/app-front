import React, { FC, ReactNode } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { StateClient } from "../../../screens/CoacheScreens/icon/state";
import { ChevronRight } from "../../icon/chevron-right";

interface ClientsDetailsBlockProfileProps {
  icon: ReactNode;
  title: string;
  onPress: () => void;
}

export const ClientsDetailsBlockProfile: FC<
  ClientsDetailsBlockProfileProps
> = ({ icon, title, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottomWidth: 1,
        borderColor: "#E2E2E2",
        paddingVertical: 16,
        paddingHorizontal: 16,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        {icon}
        <Text
          style={{
            color: "#1E1E1E",
            fontSize: 14,
            lineHeight: 20,
            fontWeight: "400",
            marginLeft: 8,
          }}
        >
          {title}
        </Text>
      </View>
      <ChevronRight />
    </TouchableOpacity>
  );
};
