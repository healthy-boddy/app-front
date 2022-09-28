import React, { FC, useCallback } from "react";
import { Text, TouchableOpacity } from "react-native";
import { ChevronBack } from "../../../screens/pick-registration-type/icons/chevron-back";

interface EnterPhoneNumberInterface {
  onPress: () => void;
}

export const Header: FC<EnterPhoneNumberInterface> = ({ onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 14,
      }}
    >
      <ChevronBack />
      <Text
        style={{
          fontSize: 17,
          fontWeight: "400",
          color: "#7454CF",
          lineHeight: 20.29,
          marginLeft: 8,
        }}
      >
        Назад
      </Text>
    </TouchableOpacity>
  );
};
