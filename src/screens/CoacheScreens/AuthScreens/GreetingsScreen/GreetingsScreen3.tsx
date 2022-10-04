import React from "react";
import Container from "../../../../components/Container";
import BackButton from "../../../../components/BackButton";
import { View, Text, StyleSheet } from "react-native";
import CustomButton from "../../../../components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import Title from "../../../../components/Title";
import { WrapperPage } from "../../../../components/core/wrapper";

const GreetingsScreen3 = () => {
  const navigation: any = useNavigation();
  return (
    <WrapperPage
      onPressBack={() => navigation.navigate("Greetings2")}
      onPressButton={() => navigation.navigate("Greetings4")}
      buttonTitle={"Продолжить"}
    >
      <View
        style={{
          paddingHorizontal: 16,
        }}
      >
        <Text
          style={{
            fontWeight: "600",
            fontSize: 24,
            lineHeight: 28,
            color: "#1E1E1E",
            textAlign: "left",
            alignSelf: "flex-start",
          }}
        >
          Ваш план на ближайшую неделю:
        </Text>
        <Text
          style={{
            marginTop: 12,
            fontWeight: "400",
            fontSize: 16,
            lineHeight: 20,
            color: "#797979",
          }}
        >
          -Знакомство с продуктом{"\n"}
          -Обучение по продукту с методологом Ольгой Ивановой {"\n"}-Знакомство
          с командой и тестовое задание
        </Text>
        <View>
          <Text
            style={{
              fontWeight: "600",
              fontSize: 19,
              lineHeight: 22,
              color: "#1E1E1E",
              textAlign: "left",
              alignSelf: "flex-start",
              marginTop: 16,
            }}
          >
            Ваш план на ближайшую неделю:
          </Text>

          <Text
            style={{
              marginTop: 12,
              fontWeight: "400",
              fontSize: 16,
              lineHeight: 20,
              color: "#797979",
            }}
          >
            - Первичный контакт с клиентом -видео + тестовое задание{"\n"}
            -с Ольгой Ивановой обсудите мотивацию, загруженность и график,
            методолог и руководитель всех Health Buddy.{"\n"}
          </Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text
            style={{
              fontWeight: "600",
              fontSize: 19,
              lineHeight: 22,
              color: "#1E1E1E",
              textAlign: "left",
              alignSelf: "flex-start",
              marginTop: 16,
            }}
          >
            Cозвон с клиентом:
          </Text>
          <Text
            style={{
              marginTop: 12,
              fontWeight: "400",
              fontSize: 16,
              lineHeight: 20,
              color: "#797979",
            }}
          >
            -Коучинговые методики: мастермаинд с коллегами и тьютором (тестовое
            задание){"\n"}
            -Постановка целей и задач , долгосрочное ведение клиента (тестовое
            задание){"\n"}
          </Text>
        </View>
      </View>
    </WrapperPage>
  );
};

export default GreetingsScreen3;
const styles = StyleSheet.create({
  inlineContainer: {
    paddingHorizontal: 20,
    paddingTop: 35,
  },
});
