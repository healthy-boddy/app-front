import React, { FC, ReactNode } from "react";
import { styles } from "../../../../../components/core/wrapper/wrapper-styles";
import { SafeAreaView, View } from "react-native";
import BackButton from "../../../../../components/BackButton";

interface WrapperRateProps {
  footer: ReactNode;
  onPressBack: () => void;
  children: ReactNode;
}

export const WrapperRate: FC<WrapperRateProps> = ({
  footer,
  onPressBack,
  children,
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
