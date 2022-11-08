import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Container from "../../../../components/Container";
import BackButton from "../../../../components/BackButton";
import DoctorBooks from "../../../../assets/Icons/DoctorBooks";
import CustomButton from "../../../../components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import Title from "../../../../components/Title";
import { WrapperPage } from "../../../../components/core/wrapper";
import DoctorComputer from "../../../../assets/Icons/DoctorComputer";

const GreetingsScreen2 = () => {
  const navigation: any = useNavigation();
  return (
    <WrapperPage
      onPressBack={() => navigation.navigate("Greetings")}
      onPressButton={() => navigation.navigate("Greetings3")}
      buttonTitle={"Continue"}
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
              We wish you to have an easy adaptation in the company.
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
              Let's agree to ask questions and be open.

              Record your questions and send them to the chat-bot while doing exercises, we will answer your questions and we will make an additional briefing for you.
          </Text>
        </View>
        <View style={styles.image_box}>
          <DoctorComputer />
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
