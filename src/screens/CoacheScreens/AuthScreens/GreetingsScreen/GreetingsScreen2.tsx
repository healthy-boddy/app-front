import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Container from "../../../../components/Container";
import BackButton from "../../../../components/BackButton";
import DoctorBooks from "../../../../assets/Icons/DoctorBooks";
import CustomButton from "../../../../components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import Title from "../../../../components/Title";
import { WrapperPage } from "../../../../components/core/wrapper";

const GreetingsScreen2 = () => {
  const navigation: any = useNavigation();
  return (
    <WrapperPage
      onPressBack={() => navigation.navigate("Greetings")}
      onPressButton={() => navigation.navigate("Greetings3")}
      buttonTitle={"Продолжить"}
    >
      <View
        style={{
          paddingHorizontal: 16,
        }}
      >
        <View style={{}}>
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
            Мы желаем вам легкой адаптации в компании
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
            Давайте договоримся задавать вопросы и быть открытыми.{"\n"} {"\n"}
            Фиксируйте вопросы и отправляйте в чат-бот по мере прохождения
            заданий , мы ответим на ваши вопросы и проведем дополнительный
            инструктаж.
          </Text>
        </View>
        <View style={styles.image_box}>
          <DoctorBooks />
        </View>
      </View>
    </WrapperPage>
  );
};

export default GreetingsScreen2;
const styles = StyleSheet.create({
  inlineContainer: {
    paddingHorizontal: 20,
    paddingTop: 35,
  },
  title_box: {},
  image_box: {
    alignItems: "center",
    marginTop: 52,
    flex: 1,
  },
});
