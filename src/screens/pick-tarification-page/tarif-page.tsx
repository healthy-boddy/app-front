import React from "react";
import { Image, SafeAreaView, Text, View } from "react-native";
import { TariffBlock } from "./tariff-block";
import { usePickTariff } from "./hook/hooks";
import { Button } from "../../components/core/button/button";
import { useNavigation } from "@react-navigation/native";

export enum Tariff {
  Initial = "",
  Tariff_one = "one",
  Tariff_two = "two",
  Tariff_three = "three",
  Tariff_four = "four",
}

export const TariffPage = () => {
  const source = require("../../images/Cover.png");
  const {
    isActiveTariff,
    handlePressFour,
    handlePressThree,
    handlePressOne,
    handlePressTwo,
  } = usePickTariff();

  const navigation: any = useNavigation();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "flex-start",
      }}
    >
      <View
        style={{
          width: "100%",
          height: 180,
        }}
      >
        <Image
          source={source}
          style={{
            width: "100%",
            height: "100%",
            resizeMode: "cover",
          }}
        />
      </View>

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
        Выберите свой тариф
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
      >
        Выберите подходящий для вас варианты и мы сразу с вами свяжемся.
      </Text>

      <View
        style={{
          marginTop: 12,
          flexDirection: "row",
          alignSelf: "center",
          width: "50%",
          alignItems: "center",
          justifyContent: "center",
          paddingHorizontal: 16,
        }}
      >
        <TariffBlock
          onPress={handlePressOne}
          isActiveTariff={isActiveTariff.tariff_one}
          title="Tariff 1"
        />

        <View style={{ marginLeft: 12 }} />
        <TariffBlock
          onPress={handlePressTwo}
          isActiveTariff={isActiveTariff.tariff_two}
          title="Tariff 2"
        />
      </View>

      <View
        style={{
          marginTop: 12,
          flexDirection: "row",
          alignSelf: "center",
          width: "50%",
          alignItems: "center",
          justifyContent: "center",
          paddingHorizontal: 16,
        }}
      >
        <TariffBlock
          onPress={handlePressThree}
          title="Tariff 3"
          isActiveTariff={isActiveTariff.tariff_three}
        />

        <View style={{ marginLeft: 12 }} />
        <TariffBlock
          onPress={handlePressFour}
          title="Tariff 4"
          isActiveTariff={isActiveTariff.tariff_four}
        />
      </View>

      <View
        style={{
          width: "100%",
          paddingHorizontal: 16,
          marginTop: 24,
        }}
      >
        <Button
          title="Продолжить"
          onPress={() => navigation.navigate("PickMentor")}
        />
      </View>
    </SafeAreaView>
  );
};
