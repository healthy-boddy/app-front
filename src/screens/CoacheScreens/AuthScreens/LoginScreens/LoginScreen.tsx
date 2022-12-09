import React, {useEffect, useState} from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import Title from "../../../../components/Title";
import PhoneInput from "react-native-phone-input";
import { useNavigation } from "@react-navigation/native";
import { color1 } from "../../../../helpers/colors";
import axios from "axios";
import { baseUrl } from "../../../../helpers/url";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { WrapperPage } from "../../../../components/core/wrapper";

const LoginScreen = () => {
  const navigation: any = useNavigation();
  const [value, setValue] = useState<string>("");
    const [error, setError] = useState(false)
  useEffect(()=>{
        setValue("")
  }, [])

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
     // console.log(response1, "sended-pin");
      if (response1.status === 200) {
      //  console.log(response1);
          setError(false)
        navigation.navigate("LoginPin", {
          phone_number: value,
        });
      }
    } catch (error) {
        setError(true)
      console.log(error,);
    }
  }

  return (
    <WrapperPage
      onPressBack={() => {
        setError(false)
        setValue("")
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
        <View style={{marginTop: 16}}>
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
            style={[styles.phone_input, error && styles.error]}
            onPressFlag={onPressFlag}
            initialValue={"+"}
            onChangePhoneNumber={setValue}
            initialCountry={"us"}
            textStyle={error && {color: 'red'}}
            textProps={{
              placeholder: "_ _ _  _ _ _  _ _ _",
            }}
          />
        </View>
          {error && <Text style={{
              marginVertical: 8,
              color: '#E81313',
              fontWeight: '400',
              fontSize: 16
          }}>
              Этот номер уже зарегистрирован
          </Text>}
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
    error:{
      borderWidth: 2,
      borderColor: '#E81313'
    }
});
