import React, { FC, ReactNode } from "react";
import {
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./wrapper-styles";
import CustomButton from "../../CustomButton";
import BackIcon from "../../../assets/Icons/BackIcon";
import { PencilSvg } from "../../icon/pencil";

interface ButtonWrapperPageInterface {
  onPressBack?: () => void;
  onPressButton?: () => void;
  children: ReactNode;
  buttonTitle?: string;
  title: string;
  onPressEdit?: () => void;
}

export const WrapperWithTitlePage: FC<ButtonWrapperPageInterface> = ({
  onPressBack,
  children,
  onPressButton,
  buttonTitle,
  title,
  onPressEdit,
}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 16,
          height: 60,
        }}
      >
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={onPressBack}
          style={{
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <View>
            <BackIcon />
          </View>
          <View>
            <Text
              style={{
                color: "#7454CF",
                marginLeft: 10,
                fontSize: 18,
                fontWeight: "400",
                lineHeight: 21.48,
              }}
            >
              Назад
            </Text>
          </View>
        </TouchableOpacity>
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

        <View />

        <TouchableOpacity onPress={onPressEdit} style={styles.back}>
          <PencilSvg />
        </TouchableOpacity>
      </View>
      <View style={styles.bodyContainer}>{children}</View>

      {buttonTitle !== "" && (
        <View style={styles.footerContainer}>
          <CustomButton onPress={onPressButton} title={buttonTitle} />
        </View>
      )}
    </SafeAreaView>
  );
};
