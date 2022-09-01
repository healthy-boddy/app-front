import React, { useCallback, useEffect, useState } from "react";
import { Header } from "../../components/core/header/header";
import { SafeAreaView, Text, View } from "react-native";
import { InputComponent } from "../../components/core/input-component";
import { Button } from "../../components/core/button/button";
import { useDispatch } from "react-redux";
import { generatePassword, postClientData, setNumber } from "../../store/auth";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "../../hooks";

export const EnterPhoneNumber = () => {
  const [phone, setPhone] = useState("");

  const navigation: any = useNavigation();

  function setPhoneData(value: string) {
    if (value.length < 2) {
      return;
    }
    // todo: split symbols by mask +7 (999) 999-99-99
    setPhone(value);
  }

  function handlePhoneBlur() {
    if (phone === "+7") {
      setPhone("");
    }
  }

  function handlePhoneFocus() {
    if (phone === "") {
      setPhone("+7");
    }
  }
  const dispatch = useDispatch();

  const name = useSelector((data) => data.auth.userName);

  // const handleSendPhone = useCallback(
  //   async (phone) => dispatch(generatePassword(phone)),
  //   []
  // );

  const handleSetPhone = useCallback(
    async (phoneNumber) => dispatch(setNumber(phoneNumber)),
    []
  );

  const handleSubmitData = useCallback(
    async (dataObj) => dispatch(postClientData(dataObj)),
    []
  );

  const handleSubmit = (phone: string) => {
    handleSetPhone(phone);
    const dataSend = {
      phone_number: phone,
      username: name,
    };
    handleSubmitData(dataSend);
  };

  function isButtonDisabled() {
    return phone.length < 12;
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "flex-start",
      }}
    >
      <Header onPress={() => navigation.goBack()} />

      <View
        style={{
          width: 68,
          height: 68,
          backgroundColor: "#F4F4F4",
          marginTop: 23,
          alignSelf: "center",
          borderRadius: 12,
        }}
      />

      <View
        style={{
          marginTop: 17,
          alignSelf: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 22,
            fontWeight: "700",
            color: "#333",
            lineHeight: 28,
            marginTop: 17,
          }}
        >
          Введите свой телефон
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "400",
            color: "#333",
            lineHeight: 20,
            marginTop: 8,
            textAlign: "center",
            paddingHorizontal: 16,
          }}
        >
          Мы отправим SMS с кодом подтверждения на Ваш новый номер
        </Text>
      </View>

      <View
        style={{
          paddingHorizontal: 16,
          marginTop: 32,
        }}
      >
        <InputComponent
          value={phone}
          onChange={setPhoneData}
          onFocus={handlePhoneFocus}
          onBlur={handlePhoneBlur}
          placeholder="Телефон"
          keyboardType="phone-pad"
          autoCorrect={false}
          maxLength={12}
        />
      </View>

      <View
        style={{
          width: "100%",
          paddingHorizontal: 16,
          marginTop: 60,
        }}
      >
        <Button
          disable={isButtonDisabled()}
          title="Продолжить"
          onPress={() => handleSubmit(phone)}
        />
      </View>
    </SafeAreaView>
  );
};
