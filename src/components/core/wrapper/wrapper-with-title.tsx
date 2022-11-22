import React, { FC, ReactNode } from "react";
import {
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./wrapper-styles";
import BackButton from "../../BackButton";
import CustomButton from "../../CustomButton";
import BackIcon from "../../../assets/Icons/BackIcon";

interface ButtonWrapperPageInterface {
  onPressBack?: () => void;
  onPressButton: () => void;
  children: ReactNode;
  buttonTitle: string;
  title: string;
}

export const WrapperWithTitlePage: FC<ButtonWrapperPageInterface> = ({
  onPressBack,
  children,
  onPressButton,
  buttonTitle,
  title,
}) => {
  return (
    <View style={styles.container}>
      <SafeAreaView
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginLeft: 16,
          marginRight: 16,
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

        <View
          style={{
            width: 70,
          }}
        />
      </SafeAreaView>
      <View style={styles.bodyContainer}>{children}</View>

      <View style={styles.footerContainer}>
        <CustomButton onPress={onPressButton} title={buttonTitle} />
      </View>
    </View>
  );
};