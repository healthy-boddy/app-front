import React, { FC } from "react";
import { StyleSheet, View } from "react-native";
import * as Progress from "react-native-progress";

interface ActivityIndicatorComponentProps {
  animating?: boolean;
  transparent?: boolean;
}

export const ActivityIndicatorComponent: FC<
  ActivityIndicatorComponentProps
> = ({ animating, transparent = true }) => {
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        left: 0,
        position: "absolute",
        right: 0,
        top: 0,
        bottom: 0,
        flex: 1,
        backgroundColor: "gray",
        opacity: 0.7,
      }}
    >
      <Progress.Circle
        size={50}
        indeterminate={true}
        borderColor={"#8C64FF"}
        unfilledColor={"transparent"}
        borderWidth={4}
        style={[!transparent && styles.bgColor]}
      />
    </View>
  );
};

const backgroundColor = "#ffffff";
const styles = StyleSheet.create({
  bgColor: {
    backgroundColor,
  },
});
