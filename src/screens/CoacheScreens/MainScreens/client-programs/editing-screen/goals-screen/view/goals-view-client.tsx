import React, { FC } from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { GoalsModelClient } from "../model";
import { GoalsBlock } from "./goals-block";
import MainContainer from "../../../../../../../components/MainContainer";
import BackButton from "../../../../../../../components/BackButton";

interface EditingScreenViewProps {
  programId: number | undefined;
}

export const GoalsViewClient: FC<EditingScreenViewProps> =
  GoalsModelClient.modelClient((props) => {
    const navigation: any = useNavigation();

    if (props.programId) {
      props.model.setProgram(props.programId);
    }

    return (
      <MainContainer>
        <BackButton
          title={"Цели"}
          onPressEdit={() =>
            navigation.navigate("GoalsEditingClient", {
              programId: props.model.program,
              assignedProgram: props.model.programDetailForClient,
              clientID: props.model.client,
            })
          }
          onPress={() =>
            navigation.navigate("ProgramDetailsClient", {
              programId: props.model.program,
              assignedProgram: props.model.programDetailForClient,
              clientID: props.model.client,
            })
          }
        />

        <View style={{ marginTop: 16 }} />

        {props.model.goals.type === "HAS_DATA" &&
          props.model.goals.data.map((data, index) => {
            return (
              <GoalsBlock
                id={data.id}
                key={data.id}
                title={`Цель ${index + 1}`}
                description={data.goalsDescription}
              />
            );
          })}
      </MainContainer>
    );
  });
