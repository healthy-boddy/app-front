import React, { useEffect, useState } from "react";
import { SafeAreaView, Text, View } from "react-native";
import { Button } from "../../components/core/button/button";
import { Header } from "../../components/core/header/header";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "../../hooks";
import { FormattingExample } from "./InputPassword/inputPassword";

export const EnterPin = () => {
  const navigation: any = useNavigation();

  const [errorAccess, setErrorAccess] = useState(false);
  const [code, setCode] = useState("");

  const phoneNumber = useSelector((data) => data.auth.number);

  useEffect(() => {
    console.log("phoneNumber", phoneNumber);
  }, []);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "flex-start",
      }}
    >
      <Header onPress={() => navigation.goBack()} />

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
          onPress={() => console.log("pressed")}
        />
      </View>
    </SafeAreaView>
  );
};
