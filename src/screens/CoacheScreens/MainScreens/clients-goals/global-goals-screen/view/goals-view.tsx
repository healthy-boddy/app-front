import React, { FC } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import BackButton from "../../../../../../components/BackButton";
import MainContainer from "../../../../../../components/MainContainer";
import { useNavigation } from "@react-navigation/native";
import { GoalsModel } from "../model";
import { GoalsBlock } from "./goals-block";

export const GoalsView = GoalsModel.modelClient((props) => {
  const navigation: any = useNavigation();

  return (
    <MainContainer>
      <View style={{ flex: 1, paddingHorizontal: 16 }}>
        <BackButton
          title={"Цели"}
          onPressEdit={() => navigation.navigate("GoalsEditing")}
          onPress={() => {
            navigation.navigate("ClientGoals");
          }}
        />

        <View style={{ marginTop: 16 }} />

        {props.model.globalGoals.type === "HAS_DATA" &&
          props.model.globalGoals.data.map((data, index) => {
            return (
              <GoalsBlock
                key={data.id}
                title={`Цель ${index + 1}`}
                description={data.goalsDescription}
              />
            );
          })}

        <TouchableOpacity onPress={() => console.log("pres")}>
          <Text
            style={{
              color: "#7454CF",
              marginLeft: 10,
              fontSize: 18,
              fontWeight: "400",
              lineHeight: 21.48,
              marginTop: 32,
            }}
          >
            + Добавить еще одну цель
          </Text>
        </TouchableOpacity>
      </View>
    </MainContainer>
  );
});
