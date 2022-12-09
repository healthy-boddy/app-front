import React, { useCallback, useRef, useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import BackButton from "../../../../../../components/BackButton";
import ArrowDown from "../../../../../ClientScreens/MainScreens/CoachSingle/CoachSingleIcons/ArrowDown";
import ArrowUp from "../../../../../ClientScreens/MainScreens/CoachSingle/CoachSingleIcons/ArrowUp";
import CustomButton from "../../../../../../components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import { ProgramDetailsClientModel } from "../model";
import Description from "../../../../../../components/Description";
import { ProgramsGoalsBlock } from "../../../../AuthScreens/ConstructorScreen/view/components/programs-goals-block";
import { AllTasksBlock } from "../../../../AuthScreens/ConstructorScreen/view/components/all-tasks-block";
import { color1 } from "../../../../../../helpers/colors";
import { BottomSheetDeleteProgram } from "./bottom-sheet-clients/bottom-sheet-delete-program";
import BottomSheet from "@gorhom/bottom-sheet";
import MaskedView from "@react-native-masked-view/masked-view";
import { LinearGradient } from "expo-linear-gradient";

export const ProgramDetailsClientView = ProgramDetailsClientModel.modelClient(
  (props) => {
    const navigation = useNavigation<any>();
    const [reviewsVisible, setReviewsVisible] = useState(false);
    const [isOpen, setOpen] = useState(false);

    const snapPoints = ["40%"];
    const sheetRef = useRef<BottomSheet>(null);
    const handleSnapPressDelete = useCallback((index: number) => {
      sheetRef.current?.snapToIndex(index);
      setOpen(true);
    }, []);

    return (
      <>
        <SafeAreaView style={[{ flex: 1, backgroundColor: "#fff" }]}>
          <View
            style={{
              paddingHorizontal: 16,
            }}
          >
            <BackButton
              onPressEdit={() =>
                navigation.navigate("EditingScreenClient", {
                  programId: props.model.currentProgramId,
                })
              }
              onPress={() => {
                navigation.navigate("ClientsDetailPageWithPrograms", {
                  clientId: props.model.client,
                });
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
                overflow: "hidden",
              }}
              onPress={() => {
                setReviewsVisible(!reviewsVisible);
              }}
            >
              {!reviewsVisible ? (
                <>
                  <MaskedView
                    maskElement={
                      <LinearGradient
                        style={StyleSheet.absoluteFill}
                        colors={["white", "transparent"]}
                        start={{ x: 0, y: 0.1 }}
                        end={{ x: 0, y: 0.5 }}
                      />
                    }
                  >
                    <Text
                      style={{
                        fontWeight: "400",
                        lineHeight: 20,
                        fontSize: 16,
                        color: "#6f6f6f",
                      }}
                    >
                      {props.model.description}
                    </Text>
                  </MaskedView>
                  <ArrowDown />
                </>
              ) : (
                <>
                  <Text
                    style={{
                      fontWeight: "400",
                      lineHeight: 20,
                      fontSize: 16,
                      color: "#6f6f6f",
                    }}
                  >
                    {props.model.description}
                  </Text>
                  <ArrowUp />
                </>
              )}
            </TouchableOpacity>

            <View style={{ marginTop: 30 }} />
            <ProgramsGoalsBlock
              onPress={() =>
                navigation.navigate("GoalsClient", {
                  programId: props.model.currentProgramId,
                  clientId: props.model.client,
                  assignedProgram: props.model.programDetailForClient,
                })
              }
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
            <ScrollView showsVerticalScrollIndicator={false}>
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
            </ScrollView>
          </View>
        </SafeAreaView>

        <View style={{ marginBottom: 40, paddingHorizontal: 16 }}>
          <CustomButton
            buttonTitle={{ color: color1 }}
            buttonStyles={{
              backgroundColor: "transparent",
              borderWidth: 2,
              borderColor: color1,
            }}
            title={"Удалить программу"}
            onPress={() => handleSnapPressDelete(0)}
          />
        </View>

        <BottomSheetDeleteProgram
          snapPoints={snapPoints}
          sheetRef={sheetRef}
          onPress={() =>
            props.model.deleteAssignedProgram(
              navigation.navigate("ClientsDetailPageWithPrograms", {
                clientId: props.model.client,
              })
            )
          }
          onClose={() => setOpen(false)}
        />
      </>
    );
  }
);
