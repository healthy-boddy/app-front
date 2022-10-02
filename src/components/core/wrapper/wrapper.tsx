import React, { FC, ReactNode } from "react";
import { SafeAreaView, View } from "react-native";
import { styles } from "./wrapper-styles";
import BackButton from "../../BackButton";
import CustomButton from "../../CustomButton";

interface ButtonWrapperPageInterface {
  onPressBack?: () => void;
  onPressButton: () => void;
  headerTitle?: string;
  children: ReactNode;
  buttonTitle: string;
  twoButtons?: boolean;
  onPressButtonSecond?: () => void;
  secondButtonTitle?: string;
  scrollView?: boolean;
  clearAll?: () => void;
}

export const WrapperPage: FC<ButtonWrapperPageInterface> = ({
  onPressBack,
  children,
  onPressButton,
  buttonTitle,
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

      <View style={styles.footerContainer}>
        <CustomButton onPress={onPressButton} title={buttonTitle} />
      </View>
    </View>
  );
};
