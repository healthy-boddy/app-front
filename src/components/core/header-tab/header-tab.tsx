import React, { FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Path, Svg } from "react-native-svg";

interface HeaderTabInterface {
  height?: number;
}

export const HeaderTab: FC<HeaderTabInterface> = ({ height = 190 }) => {
  return (
    <View>
      <View style={[stylesheet.styleFrame340248, { height }]}>
        <View style={stylesheet.styleFrame340219}>
          <Text style={stylesheet.styleDobriiDenAlena_}>
            Добрый день, Алена!
          </Text>
        </View>
        <View style={stylesheet.styleFrame339716}>
          <View style={stylesheet.styleBellBadgeFill}>
            <View style={stylesheet.styleBellBadgeFillCopy1}>
              <Svg fill="rgba(143, 104, 255, 1)">
                <Path d="M1.45898 15.1172L15.5127 15.1172C16.418 15.1172 16.9717 14.625 16.9717 13.8867C16.9717 12.9551 16.1279 12.1553 15.3369 11.3994C14.7744 10.8369 14.5986 9.70312 14.5195 8.71875C14.4932 8.14746 14.4492 7.60254 14.3789 7.08398C13.9131 7.27734 13.4033 7.3916 12.8672 7.3916C10.5293 7.3916 8.60449 5.4668 8.60449 3.12012C8.60449 2.03906 9.01758 1.0459 9.68555 0.298828C9.34277 0.114258 8.92969 0 8.48145 0C7.18945 0 6.23145 0.896484 5.8623 2.05664C3.59473 2.87402 2.64551 5.1416 2.51367 8.3584C2.39941 9.52734 2.25 10.793 1.63477 11.3994C0.84375 12.1553 0 12.9551 0 13.8867C0 14.625 0.553711 15.1172 1.45898 15.1172ZM8.49023 18.7383C10.0459 18.7383 11.1797 17.6221 11.2939 16.3477L5.67773 16.3477C5.79199 17.6221 6.92578 18.7383 8.49023 18.7383Z" />
              </Svg>
            </View>
          </View>
          <View style={stylesheet.styleBellBadgeFillCopy2}>
            <Svg fill="rgba(255, 94, 94, 1)">
              <Path d="M6.06445 3.03223C6.06445 4.69336 4.68457 6.06445 3.03223 6.06445C1.37109 6.06445 0 4.69336 0 3.03223C0 1.37109 1.37109 0 3.03223 0C4.68457 0 6.06445 1.37109 6.06445 3.03223Z" />
            </Svg>
          </View>
        </View>
      </View>
    </View>
  );
};
const stylesheet = StyleSheet.create({
  styleDobriiDenAlena_: {
    width: 167,
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontFamily: "Arial_400Regular",
    letterSpacing: -0.5,
    fontStyle: "normal",
    fontWeight: "600",
    textAlign: "left",
    height: "auto",
    lineHeight: 18.8,
  },
  styleFrame340219: {
    position: "absolute",
    left: 16,
    top: 60,
    width: 202,
    height: "auto",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  styleBellBadgeFillCopy1: {
    position: "absolute",
    left: 6,
    right: -11,
    top: 4,
    bottom: -15,
    width: "auto",
    height: "auto",
  },
  styleBellBadgeFill: {
    position: "absolute",
    left: 0,
    top: 0,
    width: 28,
    height: 28,
  },
  styleBellBadgeFillCopy2: {
    position: "absolute",
    left: 15,
    right: 9,
    top: 4,
    bottom: -2,
    width: "auto",
    height: "auto",
  },
  styleFrame339716: {
    position: "absolute",
    left: 331,
    top: 62,
    width: 28,
    height: 28,
    borderRadius: 32.66666793823242,
    backgroundColor: "rgba(255, 255, 255, 1)",
  },
  styleFrame340248: {
    position: "absolute",
    left: 0,
    top: 0,
    width: "100%",
    borderBottomRightRadius: 32,
    borderBottomLeftRadius: 32,
    backgroundColor: "#8C64FF",
  },
});
