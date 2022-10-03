import * as React from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Container from "../../../../components/Container";
import BackButton from "../../../../components/BackButton";
import Title from "../../../../components/Title";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useRef, useState } from "react";
import { color1, color2, color3 } from "../../../../helpers/colors";
import axios from "axios";
import { setUserToken } from "../../../../store/actions/user_token";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
import { baseUrl } from "../../../../helpers/url";
import FormattingExample from "../../../../components/FormattingExample";
import CustomButton from "../../../../components/CustomButton";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { WrapperPinCode } from "../PinCodeScreen/view/wrapper/wrapper-pin-code";

const LoginPin = (props: any) => {
  const dispatch = useDispatch();
  const navigation: any = useNavigation();

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

  console.log(props.email, "email_or_phone");

  async function handleReSendPin() {
    let form = new FormData();
    form.append("email", props.email);
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
          email: props.email,
        });
      }
    } catch (error) {
      console.log(error);
    }
    setTime(25);
    setResendPin(false);
  }

  function handleSend(pin: any) {
    if (pin.length >= 4) {
      const form = new FormData();
      form.append("phone_number", props.phone_number);
      form.append("password", pin);
      if (pin.length === 4) {
        fetch(baseUrl + "/token/", {
          method: "post",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            email_or_phone: props.email,
            password: pin,
          }),
        })
          .then((res) => {
            return res.json();
          })
          .then(async (res) => {
            console.log(res, "resssss");
            if (res.access) {
              dispatch(setUserToken(res.access));
              await AsyncStorage.setItem("userToken", res.access);
              console.log(res.access, 333);
            }
          });
      }
    }
  }

  return (
    <WrapperPinCode
      onPressBack={() => navigation.navigate("Login")}
      footer={
        <Text
          style={{
            color: "#797979",
            fontSize: 16,
            fontWeight: "500",
            lineHeight: 20,
          }}
        >
          Не приходит код?
          <TouchableOpacity onPress={() => console.log("Pressed")}>
            <Text
              style={{
                color: color1,
                fontSize: 16,
                fontWeight: "500",
                lineHeight: 20,
                paddingTop: 3,
              }}
            >
              {" "}
              Напишите нам
            </Text>
          </TouchableOpacity>
        </Text>
      }
    >
      <KeyboardAwareScrollView
        style={{
          width: "100%",
          paddingHorizontal: 16,
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
          Введите код, который мы отправили сообщением на {props?.email}{" "}
          {props?.phone_number}
        </Text>
        <FormattingExample handleSend={handleSend} />
        {!resendPin ? (
          <Text
            style={{
              textAlign: "center",
              fontSize: 16,
              lineHeight: 20,
              fontWeight: "500",
              color: "#797979",
            }}
          >
            Получить новый код можно через {time} сек.
          </Text>
        ) : (
          <CustomButton
            title={"Получить новый код"}
            onPress={handleReSendPin}
          />
        )}

        <TouchableOpacity
          activeOpacity={0.6}
          style={{
            height: 20,
            marginTop: 15,
            flexDirection: "row",
            justifyContent: "center",
          }}
          onPress={() => {
            navigation.navigate("EmailReg", {
              role: props.role,
            });
          }}
        >
          <Text
            style={{
              color: "#797979",
              fontSize: 16,
              fontWeight: "500",
              lineHeight: 20,
            }}
          >
            Либо{` `}
            <Text style={{ marginHorizontal: 3, color: color1 }}>
              зарегистрируйтесь
            </Text>
            <Text> по почте</Text>
          </Text>
        </TouchableOpacity>
      </KeyboardAwareScrollView>
    </WrapperPinCode>
  );
};

export default LoginPin;
