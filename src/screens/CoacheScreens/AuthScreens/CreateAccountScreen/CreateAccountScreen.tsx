import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from "react-native";
import Container from "../../../../components/Container";
import BackButton from "../../../../components/BackButton";
import PhoneInput from "react-native-phone-input";
import CustomButton from "../../../../components/CustomButton";
import { color1, color2 } from "../../../../helpers/colors";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import axios from "axios";
import Title from "../../../../components/Title";
import { baseUrl } from "../../../../helpers/url";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { WrapperPage } from "../../../../components/core/wrapper";

const CreateAccountScreen = (props: any) => {
  const navigation: any = useNavigation();
  const [value, setValue] = useState<string>("");
  let role = useSelector((store: any) => store.auth_data.userRole);
  console.log(role, "role-from-number-screen");
  function onPressFlag() {
    return false;
  }

  let form = useSelector((store: any) => store.auth_data.formData);
  console.log(form, "formmm");

  async function handleSetPhoneNumber() {
    let phoneForm = new FormData();
    phoneForm.append("phone_number", value);
    form.append("phone_number", value);
    try {
      const response = await axios.post(baseUrl + "/" + role + "/", form, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(response, "ыыыыыыыыыыыыы");
    } catch (error) {
      console.log(error);
    }
    try {
      const response1 = await axios.post(baseUrl + "/send_pin/", phoneForm, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(response1, "sended-pin");
      if (response1.status === 200) {
        navigation.navigate("PinCode", {
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
        navigation.navigate("EnterName");
      }}
      buttonTitle={"Продолжить"}
      onPressButton={handleSetPhoneNumber}
    >
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        scrollEnabled={false}
        style={{ width: "100%", paddingHorizontal: 16 }}
      >
        <View>
          <Title>Введите свой номер телефона</Title>

          <Text style={styles.set_sms}>
            Мы отправим SMS с кодом подтверждения на Ваш новый номер
          </Text>
        </View>

        <View>
          <PhoneInput
            style={styles.phone_input}
            onPressFlag={onPressFlag}
            initialValue={"+7"}
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
            navigation.navigate("EmailReg");
          }}
        >
          <Text
            style={{
              color: "#7454CF",
              fontSize: 16,
              fontWeight: "600",
              lineHeight: 19,
              textDecorationLine: "underline",
              alignSelf: "center",
              marginTop: 24,
              textAlign: "center",
            }}
          >
            Либо вы можете зарегистрироваться по почте
          </Text>
        </TouchableOpacity>
      </KeyboardAwareScrollView>
    </WrapperPage>
  );
};

export default CreateAccountScreen;
const styles = StyleSheet.create({
  inline_container: {
    paddingHorizontal: 25,
    paddingTop: 35,
  },
  new_number: {
    color: "#BCBCBC",
    paddingTop: 10,
    fontSize: 16,
    marginVertical: 15,
  },
  set_sms: {
    color: "#797979",
    marginTop: 41,
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 20,
    marginBottom: 34,
  },
  phone_input: {
    backgroundColor: "#F5F4F8",
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderRadius: 12,
  },
  button_box: {
    marginBottom: 15,
  },
  email_reg: {
    textAlign: "center",
    color: "#797979",
    width: "100%",
  },
  email_reg_box: {
    height: 20,
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "center",
  },
});