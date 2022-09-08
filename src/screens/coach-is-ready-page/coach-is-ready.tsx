import React from "react";
import { Image, Text, View } from "react-native";
import { HeaderTab } from "../../components/core/header-tab/header-tab";
import { styles } from "../registration/quiz/quize-page-two/quiz-styles";
import { Button } from "../../components/core/button/button";
import { useNavigation } from "@react-navigation/native";

const source = require("../../images/coach.png");

export const CoachIsReady = () => {
  const navigation: any = useNavigation();
  const handleClick = () => {
    navigation.navigate("TabNavigator");
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#F5F5F5",
      }}
    >
      <HeaderTab height={108} />

      <View
        style={{
          marginTop: 108,
        }}
      >
        <Text
          style={{
            fontSize: 24,
            fontWeight: "700",
            color: "#333",
            lineHeight: 28,
            marginTop: 22,
            alignSelf: "center",
          }}
        >
          Мы подобрали вам коача
        </Text>

        <Text
          style={{
            fontSize: 16,
            fontWeight: "400",
            color: "black",
            lineHeight: 20,
            marginTop: 8,
            alignSelf: "center",
            textAlign: "center",
          }}
        >
          Вы можете ознакомиться с его профилем
        </Text>
      </View>

      <View
        style={{
          paddingHorizontal: 16,
        }}
      >
        <View
          style={{
            width: "100%",
            height: "auto",
            alignItems: "center",
            backgroundColor: "#fff",
            borderRadius: 16,
            marginTop: 16,
          }}
        >
          <View
            style={{
              width: "100%",
              height: 350,
              borderRadius: 12,
              paddingHorizontal: 16,
            }}
          >
            <Image
              source={source}
              style={{
                width: "100%",
                height: "100%",
                resizeMode: "contain",
              }}
            />
          </View>
          <View
            style={{
              width: "100%",
              alignItems: "flex-start",
            }}
          >
            <View
              style={{
                paddingHorizontal: 16,
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  lineHeight: 18,
                  color: "#000000",
                  fontWeight: "600",
                }}
              >
                Агапова Елена Константиновна
              </Text>

              <Text
                style={{
                  fontSize: 15,
                  lineHeight: 17,
                  color: "#000000",
                  fontWeight: "400",
                  marginTop: 14,
                }}
              >
                (241 отзывов)
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  lineHeight: 17,
                  color: "#000000",
                  fontWeight: "400",
                  marginTop: 14,
                }}
              >
                Коуч с 5-летним стажем
              </Text>

              <Text
                style={{
                  fontSize: 15,
                  lineHeight: 17,
                  color: "#7454CF",
                  fontWeight: "400",
                  marginTop: 14,
                  marginBottom: 16,
                }}
              >
                Подробнее
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.buttonView}>
        <Button
          // disable={isButtonDisabled()}
          title="Продолжить"
          onPress={handleClick}
        />
      </View>
    </View>
  );
};
