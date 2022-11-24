import React, { useState } from "react";
import MainContainer from "../../../../../../components/MainContainer";
import { Text, TouchableOpacity, View } from "react-native";
import BackButton from "../../../../../../components/BackButton";
import ArrowDown from "../../../../../ClientScreens/MainScreens/CoachSingle/CoachSingleIcons/ArrowDown";
import ArrowUp from "../../../../../ClientScreens/MainScreens/CoachSingle/CoachSingleIcons/ArrowUp";
import { ProgramsGoalsBlock } from "../../view/components/programs-goals-block";
import { AllTasksBlock } from "../../view/components/all-tasks-block";
import CustomButton from "../../../../../../components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import { ProgramDetailsModel } from "../model";
import Description from "../../../../../../components/Description";

export const ProgramDetailsView = ProgramDetailsModel.modelClient((props) => {
  const navigation = useNavigation<any>();
  const [reviewsVisible, setReviewsVisible] = useState(false);

  return (
    <MainContainer>
      <View style={{ flex: 1, paddingHorizontal: 16 }}>
        <View style={{ flex: 1 }}>
          <BackButton
            onPressEdit={() =>
              navigation.navigate("EditingScreen", {
                programId: props.model.id,
              })
            }
            onPress={() => {
              navigation.navigate("ConstructorPage");
            }}
          />
          <Text
            style={{
              color: "#1E1E1E",
              fontSize: 24,
              lineHeight: 28,
              fontWeight: "600",
            }}
          >
            {props.model.name}
          </Text>

          <TouchableOpacity
            style={{
              marginTop: 20,
              alignItems: "center",
              justifyContent: "space-between",
            }}
            activeOpacity={0.7}
            onPress={() => {
              setReviewsVisible(!reviewsVisible);
            }}
          >
            {reviewsVisible && (
              <Description>{props.model.description}</Description>
            )}
            <View
              style={{
                alignItems: "center",
                width: "100%",
              }}
            >
              {!reviewsVisible ? <ArrowDown /> : <ArrowUp />}
            </View>
          </TouchableOpacity>

          <View style={{ marginTop: 30 }} />
          <ProgramsGoalsBlock
            onPress={() => console.log("Programs detail view")}
            number={props.model.goalsQuantity}
            title={"Цели программы"}
          />

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: 36,
              borderBottomWidth: 1,
              borderColor: "#E2E2E2",
              paddingVertical: 12,
            }}
          >
            <Text
              style={{
                color: "#1E1E1E",
                fontSize: 19,
                lineHeight: 22.67,
                fontWeight: "600",
              }}
            >
              Задачи
            </Text>
            <TouchableOpacity onPress={() => console.log("Press")}>
              <Text
                style={{
                  color: "#7454CF",
                  fontSize: 16,
                  lineHeight: 20,
                  fontWeight: "400",
                }}
              >
                Показать все
              </Text>
            </TouchableOpacity>
          </View>

          <View style={{ marginTop: 32 }} />

          {props.model.tasks.type === "HAS_DATA" &&
            props.model.tasks.data.map((task) => {
              return (
                <AllTasksBlock
                  key={task.id}
                  onPress={() => navigation.navigate("TaskDetails")}
                  title={task.name}
                  duration={`В течение ${task.description} дней`}
                />
              );
            })}
        </View>

        <View style={{ marginBottom: 25 }}>
          <CustomButton
            title={"Назначить клиенту"}
            onPress={() => {
              navigation.navigate("Editing");
            }}
          />
        </View>
      </View>
    </MainContainer>
  );
});
