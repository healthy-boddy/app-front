import React, { FC, useCallback, useEffect, useRef, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Alert, Text, View } from "react-native";
import { WrapperWithTitlePage } from "../../../../../components/core/wrapper/wrapper-with-title";
import { ClientsEmptyTarget } from "../../../icon/clients-empty-target";
import { GoalsModel } from "../global-goals-screen/model";
import { GoalsBlock } from "../../../AuthScreens/ConstructorScreen/goals-screen/view/goals-block";
import { runInAction } from "mobx";
import { GlobalStatus } from "../global-goasl-editing-screen/interface/interface";
import { Goals } from "../global-goals-screen/model/goals";
import { BottomSheetDeleteProgram } from "../../client-programs/program-details-screen/view/bottom-sheet-clients/bottom-sheet-delete-program";
import { BottomSheetGoalStatus } from "./bottom-sheet-goal-status/bottom-sheet-goal-status";
import BottomSheet from "@gorhom/bottom-sheet";

interface ClientGoalsViewProps {
  client: any;
}

export const ClientGoalsView: FC<ClientGoalsViewProps> = GoalsModel.modelClient(
  (props) => {
    const navigation: any = useNavigation();
    const [isOpen, setOpen] = useState(false);
    const [goalData, setGoal] = useState<Goals>();
    const dataClient = props.client.data.client;

    if (dataClient.user && dataClient.total_global_goals_count) {
      runInAction(() => {
        props.model.setClientsRouteData(dataClient);
      });
    }

    const showConfirmationAlert = (goal: Goals) => {
      const options = [
        {
          text: "Отметить “В процессе”",
          onPress: () =>
            goal.assignStatusToGlobalGoal(
              props.model.getGlobalGoals,
              GlobalStatus.InProgress
            ),
        },
        {
          text: "Отметить выполненной",
          onPress: () =>
            goal.assignStatusToGlobalGoal(
              props.model.getGlobalGoals,
              GlobalStatus.Done
            ),
        },
        { text: "Cancel" },
      ];
      return Alert.alert("Alert title", "Alert text", options);
    };

    const snapPoints = ["40%"];
    const sheetRef = useRef<BottomSheet>(null);
    const handleSnapPressDelete = useCallback((index: number) => {
      sheetRef.current?.snapToIndex(index);
      setOpen(true);
    }, []);

    return (
      <>
        <WrapperWithTitlePage
          title={"Цели"}
          onPressBack={() =>
            navigation.navigate("ClientDetailsPage", {
              data: {
                subscription: "Индивидуальный",
                subscriptionDuration: "12",
                client: props.model.clientsRouteData,
              },
            })
          }
          onPressButton={() =>
            navigation.navigate("GlobalGoalsEditing", {
              data: {
                client: dataClient,
              },
            })
          }
          buttonTitle={"Поставить цели"}
          onPressEdit={() =>
            navigation.navigate("GlobalGoalsEditing", {
              data: {
                client: dataClient,
              },
            })
          }
        >
          <View
            style={
              props.model.globalGoals.type == "HAS_DATA" && {
                flex: 1,
                paddingHorizontal: 16,
                width: "100%",
              }
            }
          >
            {props.model.globalGoals.type === "HAS_DATA" &&
            props.model.globalGoals.data.length > 0 ? (
              props.model.globalGoals.data.map((goal, index) => {
                const handlePress = (data: Goals) => {
                  setGoal(data), handleSnapPressDelete(0);
                };
                console.log("goal.status", goal.status);
                return (
                  <View key={goal.id}>
                    <GoalsBlock
                      id={goal.id}
                      onPress={() => handlePress(goal)}
                      key={goal.id}
                      title={`Цель ${index + 1}`}
                      description={goal.goalsDescription}
                      status={goal.status}
                    />
                  </View>
                );
              })
            ) : (
              <View
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <ClientsEmptyTarget />
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 19,
                    lineHeight: 22.67,
                    fontWeight: "600",
                    color: "#1E1E1E",
                  }}
                >
                  У этого клиента еще нет ни одной цели
                </Text>
              </View>
            )}
          </View>
        </WrapperWithTitlePage>
        {goalData?.source.description && (
          <BottomSheetGoalStatus
            snapPoints={snapPoints}
            sheetRef={sheetRef}
            description={goalData.source.description}
            onPressDone={() =>
              goalData &&
              goalData.assignStatusToGlobalGoal(
                props.model.getGlobalGoals,
                GlobalStatus.Done
              )
            }
            onPressInProgress={() =>
              goalData &&
              goalData.assignStatusToGlobalGoal(
                props.model.getGlobalGoals,
                GlobalStatus.InProgress
              )
            }
            onClose={() => setOpen(false)}
          />
        )}
      </>
    );
  }
);
