import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,

} from "react-native";
import Title from "../../../../components/Title";
import axios from "axios";
import { baseUrl } from "../../../../helpers/url";
import { useNavigation } from "@react-navigation/native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { color1 } from "../../../../helpers/colors";
import CustomInput from "../../../../components/CustomInput";
import { WrapperPage } from "../../../../components/core/wrapper";

const LoginWithEmailScreen = (props: any) => {
  const navigation: any = useNavigation();
  const [email, setEmail] = useState("");

  async function handleSendEmail() {
    let form = new FormData();
    form.append("email", email);

    try {
      const response1 = await axios.post(baseUrl + "/send_pin/", form, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(response1, "sended-pin");
      if (response1.status === 200) {
        console.log("OK");
        navigation.navigate("LoginPin", {
          email: email,
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <WrapperPage
      buttonTitle={"Продолжить"}
      onPressButton={handleSendEmail}
      onPressBack={() => {
        navigation.navigate("Login");
      }}
    >
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        scrollEnabled={false}
        style={{ width: "100%", paddingHorizontal: 16 }}
      >
        <Title>Введите свой Email</Title>
        <Text
          style={{
            marginTop: 8,
            color: "#8B8B8B",
            fontSize: 16,
            fontWeight: "400",
            lineHeight: 20,
          }}
        >
          Мы отправим письмо с кодом подтверждения на ваш Email
        </Text>
        <View style={{ flex: 1, width: '100%' }}>
          <View style={{ marginTop: 30, width: '100%' }}>
            <CustomInput
              placeholder={"Введите почту"}
              onChangeText={setEmail}
              value={email}
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
    </WrapperPage>
  );
};

export default LoginWithEmailScreen;

const styles = StyleSheet.create({
  inlineContainer: {
    paddingHorizontal: 20,
    paddingTop: 35,
  },
  input: {
    width: "100%",
    borderRadius: 40,
    backgroundColor: "#e5e5e8",
    marginTop: 25,
    padding: 10,
  },
  text: {
    color: color1,
    fontWeight: "bold",
    marginHorizontal: 3,
    fontSize: 16,
  },
});
