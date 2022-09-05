import React, { useCallback } from "react";
import { Text, View } from "react-native";
import { InputComponent } from "../../components/core/input-component";
import { Button } from "../../components/core/button/button";
import { useDispatch } from "react-redux";
import { generatePassword, setName } from "../../store/auth";
import { useNavigation } from "@react-navigation/native";
import { Avatar } from "./icon/avatar";
import { useFormik } from "formik";
import { nameValidation } from "../../validation/auth";
import { ComponentHeaderWrapper } from "../../components/core/component-header-wrapper/component-header-wrapper";

export const EnterNameSignIn = () => {
  const navigation: any = useNavigation();

  const dispatch = useDispatch();
  const handleSendPhone = useCallback(
    async (phone) => dispatch(generatePassword(phone)),
    []
  );

  const handleSetNumber = useCallback(
    async (userName) => dispatch(setName(userName)),
    []
  );

  const initialValues = {
    name: "",
  };

  const onSubmit = (code: { [key: string]: string }) => {
    handleSetNumber(values.name);
    navigation.navigate("EnterPhoneNumber");
  };

  const formik = useFormik({
    initialValues,
    validationSchema: nameValidation,
    onSubmit,
  });

  const { values, handleChange, handleSubmit, errors } = formik;

  return (
    <ComponentHeaderWrapper>
      <View
        style={{
          width: "100%",
          paddingHorizontal: 16,
          marginTop: 46,
        }}
      >
        <Text
          style={{
            fontSize: 24,
            fontWeight: "700",
            color: "#333",
            lineHeight: 28,
            alignSelf: "center",
            textAlign: "center",
          }}
        >
          Добро пожаловать !
        </Text>

        <View
          style={{
            alignSelf: "center",
            marginTop: 24,
            marginBottom: 16,
          }}
        >
          <Avatar />
        </View>

        <Text
          style={{
            fontSize: 15,
            fontWeight: "400",
            color: "#BCBCBC",
            lineHeight: 18,
            alignSelf: "center",
            textAlign: "center",
          }}
        >
          Рекомендуем выбрать
          <Text
            style={{
              color: "#8C64FF",
              textDecorationLine: "underline",
            }}
          >
            {` реальную фотографию `}
          </Text>
          для более доверительного взаимодействия
        </Text>

        <Text
          style={{
            marginTop: 44,
            fontSize: 24,
            fontWeight: "700",
            color: "#1E1E1E",
            lineHeight: 28,
            alignSelf: "flex-start",
            textAlign: "left",
          }}
        >
          Введите ваше имя
        </Text>

        <View style={{ marginTop: 16 }} />

        <InputComponent
          placeholder={"Имя"}
          value={values.name}
          onChange={handleChange("name")}
          error={errors.name}
        />

        <View
          style={{
            marginTop: 265,
          }}
        >
          <Button title="Продолжить" onPress={handleSubmit} />
        </View>
      </View>
    </ComponentHeaderWrapper>
  );
};
