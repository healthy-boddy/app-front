import React, { FC } from "react";
import { ScrollView, View } from "react-native";
import BackButton from "../../../../../../components/BackButton";
import MainContainer from "../../../../../../components/MainContainer";
import { useNavigation } from "@react-navigation/native";
import { GoalsModel } from "../model";
import { GoalsBlock } from "./goals-block";

interface EditingScreenViewProps {
  programId: number | undefined;
}

export const GoalsView: FC<EditingScreenViewProps> = GoalsModel.modelClient(
  (props) => {
    const navigation: any = useNavigation();

    if (props.programId) {
      props.model.setProgram(props.programId);
    }

    return (
      <MainContainer>
        <BackButton
          title={"Цели программы"}
          onPressEdit={() =>
            navigation.navigate("GoalsEditing", {
              programId: props.programId,
            })
          }
          onPress={() => {
            navigation.navigate("ProgramDetails");
          }}
        />

        <View style={{ marginTop: 16 }} />
        <ScrollView
          scrollEnabled={
            props.model.goals && props?.model?.goals?.data?.length > 5
          }
          showsVerticalScrollIndicator={false}
          style={{
            marginBottom: 50,
          }}
        >
          {props?.model?.goals &&
            props?.model?.goals?.type === "HAS_DATA" &&
            props.model.goals.data.map((data, index) => {
              return (
                <GoalsBlock
                  key={data.id}
                  title={`Цель ${index + 1}`}
                  description={data.goalsDescription}
                />
              );
            })}
        </ScrollView>
      </MainContainer>
    );
  }
);
