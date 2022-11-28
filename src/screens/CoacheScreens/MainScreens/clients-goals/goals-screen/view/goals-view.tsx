import React, { FC } from "react";
import { View } from "react-native";
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
            navigation.navigate("ClientsTasks");
          }}
        />

        <View style={{ marginTop: 16 }} />

        {props.model.goals.type === "HAS_DATA" &&
          props.model.goals.data.map((data, index) => {
            return (
              <GoalsBlock
                key={data.id}
                title={`Цель ${index + 1}`}
                description={data.goalsDescription}
              />
            );
          })}
      </View>
    </MainContainer>
  );
});
