import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import BackButton from "../../../../components/BackButton";
import { color1, color2, color3 } from "../../../../helpers/colors";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Title from "../../../../components/Title";
import { setUserToken } from "../../../../store/actions/user_token";
import { baseUrl } from "../../../../helpers/url";
import FormattingExample from "../../../../components/FormattingExample";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import * as MailComposer from "expo-mail-composer";
import MainContainer from "../../../../components/MainContainer";
import {WrapperPinCode} from "./view/wrapper/wrapper-pin-code";

const PinCodeScreen = (props: any) => {
  const navigation: any = useNavigation();
  let [validPin, setValidPin] = useState(true);
  const dispatch = useDispatch();
  let form = useSelector((store: any) => store.auth_data.formData);
  let role = useSelector((store: any) => store.auth_data.userRole);

  const [resendPin, setResendPin] = useState(false);

  const [time, setTime] = React.useState(25);

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime((prev) => --prev);
      if (time < 1) {
        setResendPin(true);
        clearInterval(timerId);
      }
    }, 1000);
    if (resendPin) {
      clearInterval(timerId);
    }
    return () => {
      clearInterval(timerId);
    };
  }, [time]);

  async function handleSend(pin: any) {
    const pinForm = new FormData();
    pinForm.append("email_or_phone", form._parts[2][1]);
    pinForm.append("password", pin);
    try {
      const response = await axios.post(baseUrl + "/token/", pinForm, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(response, "rrr");
      setValidPin(true);
      dispatch(setUserToken(response.data.access));
      await AsyncStorage.setItem("userToken", response.data.access);
      await AsyncStorage.setItem("access", response.data.access);
      await AsyncStorage.setItem("refresh", response.data.refresh);
    } catch (error) {
      setValidPin(false);
      //   console.log(error);
    }
  }

  async function handleSendEmail() {
    let phoneForm = new FormData();
    await phoneForm.append("email", props.email_name);
    try {
      const response = await axios.post(baseUrl + "/" + role + "/", form, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(response.data, "resended-pin1");
    } catch (error) {
      console.log(error);
      console.log(3333333);
    }
    try {
      const response1 = await axios.post(baseUrl + "/send_pin/", phoneForm, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(response1, "resended-pin2");
    } catch (error) {
      console.log(error);
    }
    setResendPin(false);
    setTime(25);
  }
  async function sendEmailAsync() {
    let result = await MailComposer.composeAsync({
      recipients: ["support@longlifelab.ru"],
      subject: "Email subject!!!!",
      // body: 'This is the body of the email ✅',
    });
    alert(result.status);
  }
  return (
      <MainContainer>
        <View style={{marginBottom: 16}}>
          <BackButton
              onPress={()=>{navigation.navigate("CreateAccount")}}
          />
        </View>
        <KeyboardAwareScrollView
            style={{
              width: "100%",
            }}
        >
          <Title>Введите код подтверждения</Title>
          <Text
              style={{
                marginTop: 8,
                color: color3,
                fontWeight: "400",
                fontSize: 16,
                lineHeight: 20,
              }}
          >
            Введите код, который мы отправили сообщением на {props?.email_name}{" "}
            {props?.phone_number}
          </Text>
          <FormattingExample handleSend={handleSend} error={false} />
          {!resendPin ? (
              <Text
                  style={{
                    textAlign: "center",
                    fontSize: 16,
                    lineHeight: 19,
                    fontWeight: "700",
                    color: "#797979",
                  }}
              >
                Получить новый код можно через{" "}
                <Text
                    style={{
                      color: "#7454CF",
                    }}
                >
                  {time} сек.
                </Text>
              </Text>
          ) : (
              <TouchableOpacity activeOpacity={0.6} onPress={handleSendEmail}>
                <Text
                    style={{
                      color: "#7454CF",
                      fontSize: 16,
                      fontWeight: "600",
                      lineHeight: 19,
                      textDecorationLine: "underline",
                      alignSelf: "center",
                      textAlign: "center",
                    }}
                >
                  Получить новый код
                </Text>
              </TouchableOpacity>
          )}
        </KeyboardAwareScrollView>
        <View style={{marginBottom: 25, alignItems: 'center'}}>
          <View style={{flexDirection: 'row'}}>
            <Text
                style={{
                  color: "#797979",
                  fontSize: 16,
                  fontWeight: "500",
                  lineHeight: 20,
                }}
            >
              Не приходит код?
            </Text>
            <TouchableOpacity
                onPress={sendEmailAsync}
            >
              <Text
                  style={{
                    color: color1,
                    fontSize: 16,
                    fontWeight: "500",
                    lineHeight: 20,

                  }}
              >
                {" "}
                Напишите нам
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </MainContainer>
  );
};

export default PinCodeScreen;
const styles = StyleSheet.create({
  backBtn: {
    marginTop: 35,
  },
  inlineContainer: {
    paddingHorizontal: 20,
    paddingTop: 35,
  },
  number_box: {},
  pin_input_box: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    left: -10,
  },
  pinInput: {
    width: "20%",
    backgroundColor: color2,
    borderRadius: 15,
    height: 47,
  },
  enter_pin_title_box: {
    marginTop: 15,
    flex: 1,
  },
  enter_pin_title: {
    color: color3,
  },
  error_message: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#FEEFEF",
    padding: 10,
    borderRadius: 15,
    marginVertical: 5,
  },
  input: {
    padding: 15,
    textAlign: "center",
  },
});
