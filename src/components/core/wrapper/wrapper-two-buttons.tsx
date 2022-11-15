import React, { ReactNode } from "react";
import { styles } from "./wrapper-styles";
import { SafeAreaView, StatusBar, View } from "react-native";
import BackButton from "../../BackButton";
import CustomButton from "../../CustomButton";
import { color1 } from "../../../helpers/colors";

interface ButtonWrapperPageInterface {
  onPressBack?: () => void;
  onPressButton: () => void;
  onPressSecondButton: () => void;
  children: ReactNode;
  buttonTitle: string;
  secondButtonTitle: string;
}

export const WrapperTwoButtons: React.FC<ButtonWrapperPageInterface> = ({
  onPressBack,
  children,
  onPressButton,
  buttonTitle,
  secondButtonTitle,
  onPressSecondButton,
}) => {
  return (
    <View style={styles.container}>
      <StatusBar />
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
        <View
          style={{
            marginTop: 12,
          }}
        />

        <CustomButton
          onPress={onPressSecondButton}
          buttonTitle={{ color: color1 }}
          title={secondButtonTitle}
          buttonStyles={{
            backgroundColor: "transparent",
            borderColor: color1,
            borderWidth: 2,
          }}
        />
      </View>
    </View>
  );
};
