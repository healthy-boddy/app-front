import React, { FC, useCallback, useEffect, useRef, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Image, Text, View } from "react-native";
import { WrapperWithTitlePage } from "../../../../../components/core/wrapper/wrapper-with-title";
import { GoalsModel } from "../global-goals-screen/model";
import { GoalsBlock } from "../../../AuthScreens/ConstructorScreen/goals-screen/view/goals-block";
import { runInAction } from "mobx";
import { GlobalStatus } from "../global-goasl-editing-screen/interface/interface";
import { Goals } from "../global-goals-screen/model/goals";
import { BottomSheetGoalStatus } from "./bottom-sheet-goal-status/bottom-sheet-goal-status";
import BottomSheet from "@gorhom/bottom-sheet";
import { SuccessAssignBanner } from "../../../../../components/core/sussecc-assigne-bunner";

interface ClientGoalsViewProps {
  client: any;
}

const imageGoals = require("../../image/no_goals.png");

export const ClientGoalsView: FC<ClientGoalsViewProps> = GoalsModel.modelClient(
  (props) => {
    const navigation: any = useNavigation();
    const [isOpen, setOpen] = useState(false);
    const [goalData, setGoal] = useState<Goals>();
    const dataClient = props.client;

    //todo: add navigation to model

    if (props?.client !== undefined) {
      runInAction(() => {
        props.model.getGlobalGoals(props.client.user.id);
      });
    }

    const snapPoints = ["40%"];
    const sheetRef = useRef<BottomSheet>(null);
    const handleSnapPressDelete = useCallback((index: number) => {
      sheetRef.current?.snapToIndex(index);
      setOpen(true);
    }, []);

    useEffect(() => {
      if (goalData && goalData?.successesAssigned) {
        sheetRef.current?.close();
      }
    }, [goalData && goalData?.successesAssigned]);

    return (
      <>
        {goalData && goalData.successesAssigned && (
          <SuccessAssignBanner
            title={"Цели успешно назначены!"}
            onPress={() => goalData?.setAssessAssigned(false)}
          />
        )}
        <WrapperWithTitlePage
          title={"Цели"}
          onPressBack={() =>
            navigation.navigate("ClientDetailsPage", {
              data: {
                avatar: props.client.user.avatar_thumbnail,
                name: props.client.user.username,
                subscription: "Индивидуальный",
                subscriptionDuration: "12",
                clientID: props.client.user.id,
                client: props.client,
              },
            })
          }
          onPressButton={() =>
            navigation.navigate("GlobalGoalsEditing", {
              data: {
                client: props?.client,
              },
            })
          }
          buttonTitle={"Поставить цели"}
          onPressEdit={() =>
            navigation.navigate("GlobalGoalsEditing", {
              data: {
                client: props?.client,
              },
            })
          }
          editButton={
            props.model.globalGoals.type === "HAS_DATA" &&
            props.model.globalGoals.data.length > 0
          }
        >
          <View
            style={[
              props.model.globalGoals.type == "HAS_DATA" && {
                flex: 1,
                paddingHorizontal: 16,
                width: "100%",
              },
            ]}
          >
            {props.model.globalGoals.type === "HAS_DATA" &&
            props.model.globalGoals.data.length > 0 ? (
              props.model.globalGoals.data.map((goal, index) => {
                const handlePress = (data: Goals) => {
                  setGoal(data), handleSnapPressDelete(0);
                };

                return (
                  <GoalsBlock
                    id={goal.id}
                    onPress={() => handlePress(goal)}
                    key={goal.id}
                    title={`Цель ${index + 1}`}
                    description={goal.goalsDescription}
                    status={goal.status}
                  />
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
                <View
                  style={{
                    width: 300,
                    height: 300,
                  }}
                >
                  <Image
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                    resizeMode={"contain"}
                    source={imageGoals}
                  />
                </View>
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
