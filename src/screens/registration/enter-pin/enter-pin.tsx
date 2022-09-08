import React, { useCallback, useEffect, useState } from "react";
import { Text, View } from "react-native";
import { Button } from "../../../components/core/button/button";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "../../../hooks";
import { FormattingExample } from "./InputPassword/inputPassword";
import { useDispatch } from "react-redux";
import { checkPinCode } from "../../../store/auth";
import { ComponentHeaderWrapper } from "../../../components/core/component-header-wrapper/component-header-wrapper";

export const EnterPin = () => {
  const navigation: any = useNavigation();

  const dispatch = useDispatch();

  const [errorAccess, setErrorAccess] = useState(false);
  const [code, setCode] = useState("");

  const phoneNumber = useSelector((data) => data.auth.number);

  const handleCheckPin = useCallback(
    async (data) => dispatch(checkPinCode(data)),
    []
  );

  useEffect(() => {
    console.log("phoneNumber", phoneNumber);
  }, [phoneNumber]);

  const handleClick = () => {
    const data = {
      phone_number: phoneNumber,
      password: code,
    };

    console.log("code", code);
    handleCheckPin(data);
  };

  useEffect(() => {
    console.log("phoneNumber", phoneNumber);
  }, []);

  return (
    <ComponentHeaderWrapper>
      <Text
        style={{
          fontSize: 22,
          fontWeight: "700",
          color: "#333",
          lineHeight: 28,
          marginTop: 22,
          alignSelf: "center",
        }}
      >
        Подтверждение
      </Text>

      <Text
        style={{
          fontSize: 16,
          fontWeight: "400",
          color: "black",
          lineHeight: 20,
          marginTop: 22,
          alignSelf: "center",
          textAlign: "center",
        }}
      >{`Введите код, который мы отправили на
номер ${phoneNumber}`}</Text>

      <View
        style={{
          alignSelf: "center",
          marginTop: 24,
        }}
      >
        <FormattingExample
          value={code}
          setValue={setCode}
          errorAccess={errorAccess}
        />
      </View>

      <Text
        style={{
          fontSize: 16,
          fontWeight: "500",
          color: "#333333",
          lineHeight: 19,
          alignSelf: "center",
          textAlign: "center",
          marginTop: 36,
        }}
      >
        Повторно отправить
      </Text>

      <View
        style={{
          width: "100%",
          paddingHorizontal: 16,
          bottom: -400,
        }}
      >
        <Button
          // disable={isButtonDisabled()}
          title="Продолжить"
          onPress={handleClick}
        />
      </View>
    </ComponentHeaderWrapper>
  );
};
