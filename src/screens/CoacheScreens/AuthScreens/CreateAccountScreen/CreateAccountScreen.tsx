import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from "react-native";
import PhoneInput from "react-native-phone-input";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import axios from "axios";
import Title from "../../../../components/Title";
import { baseUrl } from "../../../../helpers/url";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { WrapperPage } from "../../../../components/core/wrapper";
import ErrorPopUp from "../../../../components/ErrorPopUp";
import MainContainer from "../../../../components/MainContainer";
import BackButton from "../../../../components/BackButton";
import CustomButton from "../../../../components/CustomButton";

const CreateAccountScreen = (props: any) => {
  const navigation: any = useNavigation();
  const [value, setValue] = useState<string>("");
  let role = useSelector((store: any) => store.auth_data.userRole);
  const [validNumber, setValidNumber] = useState(false);

  function onPressFlag() {
    return false;
  }

  let form = useSelector((store: any) => store.auth_data.formData);

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
      setValidNumber(true);
      return;
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
    setValidNumber(false);
  }

  return (
    <MainContainer>
      <View style={{ marginBottom: 16 }}>
        <BackButton
          onPress={() => {
            setValidNumber(false);
            setValue("");
            navigation.navigate("EnterName");
          }}
        />
      </View>
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        scrollEnabled={false}
        style={{ width: "100%" }}
      >
        <View>
          <Title>Введите свой номер телефона</Title>
          <Text style={styles.set_sms}>
            Мы отправим SMS с кодом подтверждения на Ваш новый номер
          </Text>
        </View>

        <View>
          <PhoneInput
            style={[styles.phone_input, validNumber && styles.error]}
            textStyle={validNumber && { color: "red" }}
            onPressFlag={onPressFlag}
            initialValue={"+"}
            onChangePhoneNumber={setValue}
            initialCountry={"us"}
            textProps={{
              placeholder: "_ _ _  _ _ _  _ _ _",
            }}
          />
        </View>
        {validNumber && (
          <Text
            style={{
              marginVertical: 8,
              color: "#E81313",
              fontWeight: "400",
              fontSize: 16,
            }}
          >
            Этот номер уже зарегистрирован
          </Text>
        )}
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => {
            navigation.navigate("EmailReg");
          }}
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 15,
          }}
        >
          <Text>Либо</Text>
          <Text
            style={{
              color: "#7454CF",
              fontSize: 16,
              fontWeight: "600",
              lineHeight: 19,
              alignSelf: "center",
              textAlign: "center",
              marginHorizontal: 5,
            }}
          >
            зарегистрируйтесь
          </Text>
          <Text>по почте</Text>
        </TouchableOpacity>
      </KeyboardAwareScrollView>
      <View style={{ marginBottom: 25 }}>
        <CustomButton title={"Продолжить"} onPress={handleSetPhoneNumber} />
      </View>
    </MainContainer>
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
    marginTop: 8,
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
  error: {
    borderWidth: 2,
    borderColor: "#E81313",
  },
});
