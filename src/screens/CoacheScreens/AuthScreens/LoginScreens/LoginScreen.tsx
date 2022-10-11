import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import Container from "../../../../components/Container";
import BackButton from "../../../../components/BackButton";
import Title from "../../../../components/Title";
import PhoneInput from "react-native-phone-input";
import { useNavigation } from "@react-navigation/native";
import { color1, color2, color3 } from "../../../../helpers/colors";
import CustomButton from "../../../../components/CustomButton";
import axios from "axios";
import { baseUrl } from "../../../../helpers/url";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { WrapperPage } from "../../../../components/core/wrapper";

const LoginScreen = () => {
  const navigation: any = useNavigation();
  const [value, setValue] = useState<string>("");

  function onPressFlag() {
    return false;
  }

  async function handleLogin() {
    let form = new FormData();
    form.append("phone_number", value);
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
          phone_number: value,
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <WrapperPage
      onPressBack={() => {
        navigation.navigate("Welcome");
      }}
      buttonTitle={"Продолжить"}
      onPressButton={handleLogin}
    >
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        scrollEnabled={false}
        style={{ width: "100%", paddingHorizontal: 16 }}
      >
        <View>
          <Title>Введите свой телефон</Title>

          <View style={{ marginBottom: 15 }}>
            <Text
              style={{
                color: "#797979",
                marginTop: 8,
                fontSize: 16,
                fontWeight: "400",
                lineHeight: 20,
              }}
            >
              Мы отправим SMS с кодом подтверждения на Ваш новый номер
            </Text>
          </View>
        </View>

        <View>
          <PhoneInput
            style={styles.phone_input}
            onPressFlag={onPressFlag}
            initialValue={"+"}
            onChangePhoneNumber={setValue}
            initialCountry={"us"}
            textProps={{
              placeholder: "_ _ _  _ _ _  _ _ _",
            }}
          />
        </View>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => {
            navigation.navigate("LoginEmail");
          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontWeight: "500",
              lineHeight: 20,
              color: color1,
              alignSelf: "center",
              marginTop: 24,
              textDecorationLine: "underline",
            }}
          >
            Войти по почте
          </Text>
        </TouchableOpacity>
      </KeyboardAwareScrollView>
    </WrapperPage>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  phone_input: {
    backgroundColor: "#F5F4F8",
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderRadius: 12,
  },
});
