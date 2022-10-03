import React, { useState } from "react";
import { Text, StyleSheet, View, TextInput } from "react-native";
import Container from "../../../../components/Container";
import BackButton from "../../../../components/BackButton";
import Title from "../../../../components/Title";
import CustomButton from "../../../../components/CustomButton";
import axios from "axios";
import { useSelector } from "react-redux";
import { baseUrl } from "../../../../helpers/url";
import { useNavigation } from "@react-navigation/native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import CustomInput from "../../../../components/CustomInput";
import { WrapperPage } from "../../../../components/core/wrapper";

const EmailRegistration = (props: any) => {
  const navigation: any = useNavigation();
  let form = useSelector((store: any) => store.auth_data.formData);
  console.log(props.role, "props.role Email screen");
  const [email, sendEmail] = useState("");

  async function handleSendEmail() {
    let emailForm = new FormData();
    emailForm.append("email", email);
    await form.append("email", email);
    try {
      const response = await axios.post(
        baseUrl + "/" + props?.role + "/",
        form,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data, "asd");
    } catch (error) {
      console.log(error, "catch-error");
    }
    try {
      const response1 = await axios.post(baseUrl + "/send_pin/", emailForm, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(response1, "sended-pin");
      if (response1.status === 200) {
        navigation.navigate("PinCode", {
          email_name: email,
          role: props.role,
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  console.log(props.role, "props-role-in-emailregistrationscreen");

  return (
    <WrapperPage
      buttonTitle={"Продолжить"}
      onPressButton={handleSendEmail}
      onPressBack={() => {
        navigation.navigate("CreateAccount", {
          role: props.role,
          email_name: email,
        });
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
        <View style={{ flex: 1 }}>
          <View style={{ marginTop: 30 }}>
            <CustomInput
              placeholder={"Введите почту"}
              onChangeText={sendEmail}
              value={email}
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
    </WrapperPage>
  );
};

export default EmailRegistration;

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
});
