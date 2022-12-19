import React, { FC } from "react";
import { ScrollView, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { GoalsModelClient } from "../model";
import MainContainer from "../../../../../../../components/MainContainer";
import BackButton from "../../../../../../../components/BackButton";
import { GoalsBlock } from "../../../../../AuthScreens/ConstructorScreen/goals-screen/view/goals-block";

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
        <ScrollView
          scrollEnabled={props.model.goals && props.model.goals.data.length > 5}
          showsVerticalScrollIndicator={false}
          style={{
            marginBottom: 50,
          }}
        >
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
        </ScrollView>
      </MainContainer>
    );
  });
