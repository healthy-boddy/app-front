import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import { LogoSvg } from "./logo-svg";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "./authorisation-styles";
import MaskedView from "@react-native-masked-view/masked-view";
import { Button } from "../../components/core/button/button";
import { useNavigation } from "@react-navigation/native";

export const Authorisation = () => {
  const navigation: any = useNavigation();
  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
      }}
    >
      <LogoSvg />
      <View style={{ marginTop: 12 }} />
      <MaskedView
        style={{ height: 38, width: "100%" }}
        maskElement={<Text style={styles.logoFonts}>Health Buddy</Text>}
      >
        <LinearGradient
          colors={["#8C64FF", "#B49AFF"]}
          start={{ x: 1, y: 1 }}
          end={{ x: 0, y: 1 }}
          style={{ flex: 1 }}
        />
      </MaskedView>

      <View style={{ marginTop: 123 }} />

      <Text
        style={{
          fontWeight: "600",
          lineHeight: 24,
          fontSize: 20,
          textAlign: "center",
          color: "#000000",
        }}
      >
        Добро пожаловать
      </Text>

      <View
        style={{
          width: "100%",
          paddingHorizontal: 16,
          position: "absolute",
          bottom: 20,
        }}
      >
        <Button
          onPress={() => navigation.navigate("EnterNameSignIn")}
          title={"Зарегистрироваться"}
        />
        <View style={{ marginTop: 16 }} />
        <Button
          onPress={() => navigation.navigate("PickRegistration")}
          title={"Войти"}
          transparent
        />
      </View>
    </SafeAreaView>
  );
};
