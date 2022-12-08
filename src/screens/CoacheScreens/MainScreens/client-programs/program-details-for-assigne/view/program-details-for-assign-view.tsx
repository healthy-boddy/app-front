import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import BackButton from "../../../../../../components/BackButton";
import ArrowDown from "../../../../../ClientScreens/MainScreens/CoachSingle/CoachSingleIcons/ArrowDown";
import ArrowUp from "../../../../../ClientScreens/MainScreens/CoachSingle/CoachSingleIcons/ArrowUp";
import CustomButton from "../../../../../../components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import { ProgramDetailsForAssignModel } from "../model";
import Description from "../../../../../../components/Description";
import { ProgramsGoalsBlock } from "../../../../AuthScreens/ConstructorScreen/view/components/programs-goals-block";
import { AllTasksBlock } from "../../../../AuthScreens/ConstructorScreen/view/components/all-tasks-block";
import { BottomSheetClientPicked } from "../../../../AuthScreens/ConstructorScreen/program-details-screen/view/bottom-sheet-clients/bottom-sheet-client-picked";
import BottomSheet from "@gorhom/bottom-sheet";
import { ClientResponse } from "../../../../AuthScreens/CalendarScreen/user-list-screen/interface";
import { SuccessAssignBanner } from "../../../../../../components/core/sussecc-assigne-bunner";

export const ProgramDetailsForAssignView =
  ProgramDetailsForAssignModel.modelClient((props) => {
    const navigation = useNavigation<any>();
    const [reviewsVisible, setReviewsVisible] = useState(false);
    const [isOpen, setOpen] = useState(false);
    const [clientData, setClientData] = useState<ClientResponse>();

    const sheetRef = useRef<BottomSheet>(null);
    const snapPoints = ["70%"];

    useEffect(() => {
      if (props.model.programDetailForClient) {
        setClientData(
          props.model.users.data
            ?.map((data) => data)
            .find((data) => data.user.id === props.model.programDetailForClient)
        );
      }
    });

    const handleSnapPressOneClient = useCallback((index: number) => {
      sheetRef.current?.snapToIndex(index);
      setOpen(true);
    }, []);

    useEffect(() => {
      if (props.model.successesAssigned) {
        sheetRef.current?.close();
      }
    }, [props.model.successesAssigned]);

    return (
      <>
        {props.model.successesAssigned && (
          <SuccessAssignBanner
            onPress={() => props.model.setAssessAssigned(false)}
          />
        )}

        <SafeAreaView style={[{ flex: 1, backgroundColor: "#fff" }]}>
          <View
            style={{
              paddingHorizontal: 16,
            }}
          >
            <BackButton
              onPressEdit={() =>
                navigation.navigate("EditingScreen", {
                  programId: props.model.currentProgramId,
                })
              }
              onPress={() =>
                navigation.navigate("ClientsDetailPageWithPrograms", {
                  clientId: props.model.programDetailForClient,
                })
              }
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
              onPress={() =>
                navigation.navigate("Goals", {
                  programId: props.model.currentProgramId,
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
            title={"Назначить программу"}
            onPress={() => handleSnapPressOneClient(0)}
          />
        </View>

        <BottomSheetClientPicked
          snapPoints={snapPoints}
          sheetRef={sheetRef}
          onClose={() => setOpen(false)}
          clientData={clientData}
          programName={props.model.name}
          onPressToPick={props.model.assignProgramToClient}
        />
      </>
    );
  });
