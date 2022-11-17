import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ProgramBlock } from "./view/program-block";

const ConstructorScreen = () => {
  const navigation = useNavigation<any>();
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "flex-start",
      }}
    >
      <View
        style={{
          paddingHorizontal: 16,
          top: 30,
        }}
      >
        <Text
          style={{
            fontSize: 24,
            lineHeight: 28,
            fontWeight: "600",
            color: "#1E1E1E",
          }}
        >
          Конструктор программ
        </Text>
        <ProgramBlock
          onPress={() => {
            navigation.navigate("SelfLove");
          }}
          title={"Любовь к себе"}
          subtitle={
            "Снижаем вес путем регулирования гормонального фона и плана питания"
          }
          duration={"Длительность - 1 год"}
        />

        <ProgramBlock
          onPress={() => console.log("Press")}
          title={"Здоровый ЖКТ"}
          subtitle={
            "Снижаем вес путем регулирования гормонального фона и плана питания"
          }
          duration={"Длительность - 20 месяцев"}
        />
      </View>
    </SafeAreaView>
  );
};

export default ConstructorScreen;
