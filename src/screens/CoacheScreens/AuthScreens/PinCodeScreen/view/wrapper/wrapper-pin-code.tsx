import React, { FC, ReactNode } from "react";
import { SafeAreaView, View } from "react-native";
import BackButton from "../../../../../../components/BackButton";
import CustomButton from "../../../../../../components/CustomButton";
import { styles } from "./wrapper-styles";

interface ButtonWrapper {
  onPressBack: () => void;
  footer: ReactNode;
  children: ReactNode;
}

export const WrapperPinCode: FC<ButtonWrapper> = ({
  onPressBack,
  children,
  footer,
}) => {
  return (
    <View style={styles.container}>
      <SafeAreaView
        style={{
          marginLeft: 16,
        }}
      >
        <BackButton onPress={onPressBack} />
      </SafeAreaView>
      <View style={styles.bodyContainer}>{children}</View>
      <View style={styles.footerContainer}>{footer}</View>
    </View>
  );
};
