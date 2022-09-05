import React, { useCallback } from "react";
import { Text, View } from "react-native";
import { ComponentHeaderWrapper } from "../../components/core/component-header-wrapper/component-header-wrapper";
import { ProgressBar } from "../../components/core/progress-bar/progress-bar";
import { CardBlock } from "./card-block";
import { usePickGender } from "./hook/hooks";
import { Button } from "../../components/core/button/button";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { setGender } from "../../store/auth";

export enum Gender {
  Initial = "",
  Man = "male",
  Woman = "female",
}

export const PickGender = () => {
  const { handlePressFemale, handlePressMale, isActive } = usePickGender();
  const navigation: any = useNavigation();
  const dispatch = useDispatch();

  const handlePickGender = useCallback(
    async (gender) => dispatch(setGender(gender)),
    []
  );

  const handleClick = () => {
    Object.keys(isActive).forEach((key) => {
      if (isActive[key] === "") {
        delete isActive[key];
      }
    });

    if (isActive["woman"]) {
      isActive["gender"] = isActive["woman"];
      delete isActive["woman"];
    } else if (isActive["man"]) {
      isActive["gender"] = isActive["man"];
      delete isActive["man"];
    }
    handlePickGender(isActive);
    navigation.navigate("PickBirthDate");
  };

  return (
    <>
      <ComponentHeaderWrapper>
        <View
          style={{
            alignSelf: "center",
            marginTop: 14,
            width: "100%",
            paddingHorizontal: 16,
          }}
        >
          <Text
            style={{
              alignSelf: "center",
              color: "#000000",
              fontWeight: "600",
              fontSize: 17,
              lineHeight: 22,
              textAlign: "center",
              marginBottom: 18,
            }}
          >
            1 из 4
          </Text>

          <ProgressBar steps={4} step={1} color={"#8C64FF"} height={10} />
        </View>
        <Text
          style={{
            alignSelf: "flex-start",
            color: "#000000",
            fontWeight: "700",
            fontSize: 24,
            lineHeight: 28,
            textAlign: "left",
            marginBottom: 18,
            marginTop: 40,
            marginHorizontal: 16,
          }}
        >
          Пол
        </Text>

        <View
          style={{
            paddingHorizontal: 16,
            width: "100%",
          }}
        >
          <CardBlock
            onPress={handlePressMale}
            sexTitle={"Мужской"}
            isActive={isActive.man}
          />
          <View style={{ marginTop: 12 }} />
          <CardBlock
            onPress={handlePressFemale}
            sexTitle={"Женский"}
            isActive={isActive.woman}
          />
        </View>

        <View
          style={{
            position: "absolute",
            width: "100%",
            paddingHorizontal: 16,
            bottom: 61,
          }}
        >
          <Button
            // disable={isButtonDisabled()}
            title="Продолжить"
            onPress={handleClick}
          />
        </View>
      </ComponentHeaderWrapper>
    </>
  );
};
