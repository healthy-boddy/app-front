import React from "react";
import { Image, Text, View, SafeAreaView } from "react-native";
import { HeaderTab } from "../../../components/core/header-tab/header-tab";
import { Button } from "../../../components/core/button/button";
import { useNavigation } from "@react-navigation/native";

const source = require("../../../images/find_menthor.png");

export const PickMentor = () => {
  const navigation: any = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
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
          Выбрать своего наставника
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
          Ответь на несколько вопросов, чтобы выбрать наиболее подходящего тебе
          наставника
        </Text>
      </View>

      <View
        style={{
          paddingHorizontal: 16,
        }}
      >
        <View
          style={{
            marginTop: 24,
            width: "100%",
            height: 346,
            backgroundColor: "#fff",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 24,
            alignSelf: "center",
          }}
        >
          <Image
            source={source}
            style={{
              width: "100%",
              height: "100%",
              resizeMode: "cover",
            }}
          />
        </View>
      </View>

      <View
        style={{
          position: "absolute",
          width: "100%",
          paddingHorizontal: 16,
          bottom: 167,
        }}
      >
        <Button
          // disable={isButtonDisabled()}
          title="Продолжить"
          onPress={() => navigation.navigate("QuizPageOne")}
        />
      </View>
    </View>
  );
};
