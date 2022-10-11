import {Dimensions, StyleSheet, Image, View, ViewStyle} from 'react-native';
import Svg, {Circle} from "react-native-svg";
import Animated, {useSharedValue, useAnimatedStyle, withTiming, withRepeat, Easing} from 'react-native-reanimated';
import {useEffect} from "react";
import {color1} from "../../../../helpers/colors";

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

type AppComponent = {
  containerStyle?: ViewStyle;
  circleLength: number;
  wrapperStyle?: ViewStyle;
  color?: string;
  width?: number;
  height?: number;
  strokeWidth?: string;
  hidePercent?: number;
  imgSource: Object;
}

export default function App ({imgSource, containerStyle, wrapperStyle, color = color1, strokeWidth, hidePercent, width = screenWidth - 40, height = 400, circleLength = 1000}: AppComponent) {
  const rotation = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ rotate: `${rotation.value}deg` }],
    };
  });

  useEffect(() => {
    rotation.value = withRepeat(withTiming(360, {
      duration: 1000,
      easing: Easing.bezier(0.9, 0.4, 0.2, 0.5)
    }), -1);
  }, [])

  return (
    <View style={[styles.wrapper, {width, height}, wrapperStyle]}>
      <Animated.View style={[styles.container, {width, height}, containerStyle, animatedStyles]}>
        <Svg>
          <Circle
              r={circleLength / (2 * Math.PI)}
              strokeWidth={strokeWidth || 10}
              stroke={color || 'black'}
              cx={width / 2}
              cy={(height || screenHeight - 40) / 2}
              strokeDasharray={circleLength}
              strokeDashoffset={circleLength * (hidePercent || 0.3)}
          />
        </Svg>
      </Animated.View>
      <Image source={imgSource} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    width: '100%',
  },
  image: {
    position: 'absolute',
    width: 250,
    height: 250,
    borderRadius: 200
  }
});
