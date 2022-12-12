import React, { FC, ReactNode } from "react";
import { SafeAreaView, StatusBar, View } from "react-native";
import { styles } from "./wrapper-styles";
import BackButton from "../../BackButton";
import CustomButton from "../../CustomButton";

interface ButtonWrapperPageInterface {
  onPressBack?: () => void;
  onPressButton: () => void;
  children: ReactNode;
  buttonTitle: string;
}

export const WrapperPage: FC<ButtonWrapperPageInterface> = ({
  onPressBack,
  children,
  onPressButton,
  buttonTitle,
}) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={"dark-content"} backgroundColor={"white"} />
      <SafeAreaView
        style={{
          marginLeft: 16,
        }}
      >
        <BackButton onPress={onPressBack} />
      </SafeAreaView>
      <View style={styles.bodyContainer}>{children}</View>

      <View style={styles.footerContainer}>
        <CustomButton onPress={onPressButton} title={buttonTitle} />
      </View>
    </View>
  );
};
