import { View, Animated } from "react-native";
import React, { useEffect, useState } from "react";
import { styles } from "./progress-bar-style";

export const ProgressBar = ({ step, steps, height, color = "#F6BD60" }) => {
  const [width, setWidth] = useState(0);
  const animatedValue = React.useRef(new Animated.Value(-1000)).current;
  const reactive = React.useRef(new Animated.Value(-1000)).current;

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: reactive,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, []);

  useEffect(() => {
    reactive.setValue(
      step === 0
        ? -width + (width * (step + 1)) / steps
        : -width + (width * step) / steps
    );
  }, [step, width]);

  return (
    <View
      onLayout={(e) => {
        const newWidth = e.nativeEvent.layout.width;
        setWidth(newWidth);
      }}
      style={[styles.container, { borderRadius: height, height }]}
    >
      <Animated.View
        style={[
          styles.barView,
          {
            height,
            backgroundColor: step === 0 ? "#EBEBEB" : color,
            borderRadius: height,
            transform: [
              {
                translateX: animatedValue,
              },
            ],
          },
        ]}
      />
    </View>
  );
};
