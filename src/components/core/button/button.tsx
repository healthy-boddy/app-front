import React, { FC } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./button-styles";
import MaskedView from "@react-native-masked-view/masked-view";

interface ButtonProps {
  title: string;
  colorFirst?: string;
  colorSecond?: string;
  transparent?: boolean;
  onPress: () => void;
  disable?: boolean;
}

export const Button: FC<ButtonProps> = ({
  title,
  colorFirst = "#8C64FF",
  colorSecond = "#B49AFF",
  transparent,
  onPress,
  disable,
}) => {
  return (
    <>
      {transparent ? (
        <LinearGradient
          colors={[colorFirst, colorSecond]}
          start={{ x: 0.0, y: 1.0 }}
          end={{ x: 1.0, y: 1.0 }}
          style={{
            height: 48,
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 58,
          }}
        >
          <TouchableOpacity
            disabled={disable}
            onPress={onPress}
            style={styles.buttonContainer}
          >
            <MaskedView
              style={{
                height: 40,
                width: "100%",
                backgroundColor: "red",
              }}
              maskElement={
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    height: 40,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 16,
                      textAlign: "center",
                      fontWeight: "600",
                      lineHeight: 18.78,
                    }}
                  >
                    {title}
                  </Text>
                </View>
              }
            >
              <LinearGradient
                colors={disable ? ["gray", "gray"] : ["#8C64FF", "#B49AFF"]}
                start={{ x: 1, y: 1 }}
                end={{ x: 0, y: 1 }}
                style={{ flex: 1 }}
              />
            </MaskedView>
          </TouchableOpacity>
        </LinearGradient>
      ) : (
        <TouchableOpacity
          disabled={disable}
          onPress={onPress}
          style={{
            width: "100%",
          }}
        >
          <LinearGradient
            colors={disable ? ["gray", "gray"] : [colorFirst, colorSecond]}
            start={{ x: 1, y: 1 }}
            end={{ x: 0, y: 1 }}
            style={[
              {
                width: "100%",
                height: "auto",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 58,
              },
            ]}
          >
            <Text
              style={{
                paddingHorizontal: 12,
                paddingVertical: 16,
                color: "#F9F9F9",
                fontSize: 16,
                textAlign: "center",
                fontWeight: "600",
                lineHeight: 18.78,
              }}
            >
              {title}
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      )}
    </>
  );
};
