import React, { FC, ReactNode } from "react";
import { Text, View } from "react-native";
import { styles } from "./tab-navigator-styles";

export interface TabNavigatorElemProps {
  icon: ReactNode;
  navigatorName: string;
  colorItem: string;
}

export const TabNavigatorElem: FC<TabNavigatorElemProps> = ({
  icon,
  navigatorName,
  colorItem,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.centeredView}>
        <View style={styles.iconPositionView}>
          <View>{icon}</View>
        </View>
        <Text style={[styles.tabTitle, { color: colorItem }]}>
          {navigatorName}
        </Text>
      </View>
    </View>
  );
};
