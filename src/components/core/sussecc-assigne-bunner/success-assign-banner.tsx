import React, { FC } from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import Doctor from "../../../assets/Icons/Doctor";
import { CloseIcon } from "../../../screens/CoacheScreens/AuthScreens/ConstructorScreen/view/components/icons/close-icon";

interface SuccessAssignBannerProps {
  onPress: () => void;
  title?: string;
}

export const SuccessAssignBanner: FC<SuccessAssignBannerProps> = ({
  onPress,
  title = "Программа успешно назначена!",
}) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "flex-start",
        position: "absolute",
        zIndex: 200,
        width: "100%",
        height: "100%",
      }}
    >
      <View
        style={{
          paddingHorizontal: 22,
          flexDirection: "row",
          marginTop: 65,
        }}
      >
        <TouchableOpacity
          onPress={onPress}
          style={{
            width: "100%",
            alignItems: "flex-end",
          }}
        >
          <CloseIcon />
        </TouchableOpacity>
      </View>

      <View style={{ marginTop: 100 }} />
      <Doctor />

      <Text
        style={{
          color: "#1E1E1E",
          fontWeight: "600",
          fontSize: 19,
          lineHeight: 22.67,
          marginTop: 25,
        }}
      >
        {title}
      </Text>
    </SafeAreaView>
  );
};
