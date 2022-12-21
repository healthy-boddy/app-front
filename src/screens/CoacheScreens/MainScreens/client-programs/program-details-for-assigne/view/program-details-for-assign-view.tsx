import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import BackButton from "../../../../../../components/BackButton";
import CustomButton from "../../../../../../components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import { ProgramDetailsForAssignModel } from "../model";
import { ProgramsGoalsBlock } from "../../../../AuthScreens/ConstructorScreen/view/components/programs-goals-block";
import { AllTasksBlock } from "../../../../AuthScreens/ConstructorScreen/view/components/all-tasks-block";
import { BottomSheetClientPicked } from "../../../../AuthScreens/ConstructorScreen/program-details-screen/view/bottom-sheet-clients/bottom-sheet-client-picked";
import BottomSheet from "@gorhom/bottom-sheet";
import { ClientResponse } from "../../../../AuthScreens/CalendarScreen/user-list-screen/interface";
import { SuccessAssignBanner } from "../../../../../../components/core/sussecc-assigne-bunner";

export const ProgramDetailsForAssignView =
  ProgramDetailsForAssignModel.modelClient((props) => {
    const navigation = useNavigation<any>();
    const [isOpen, setOpen] = useState(false);
    const [clientData, setClientData] = useState<ClientResponse>();
    const [showAll, setShowAll] = useState(false);

    const sheetRef = useRef<BottomSheet>(null);
    const snapPoints = ["90%"];

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

        <SafeAreaView
          style={[
            { flex: 1 },
            {
              backgroundColor: isOpen ? "#00000090" : "#fff",
              opacity: isOpen ? 0.5 : 1,
            },
          ]}
        >
          <View
            style={{
              paddingHorizontal: 16,
            }}
          >
            <BackButton
              onPressEdit={() =>
                navigation.navigate("EditingScreenForAssign", {
                  programId: props.model.currentProgramId,
                  clientId: props.model.programDetailForClient,
                })
              }
              // onPress={() =>
              //   navigation.navigate("ClientsDetailPageWithPrograms", {
              //     clientId: props.model.programDetailForClient,
              //   })
              // }

              onPress={() =>
                navigation.navigate("ClientProgramsScreen", {
                  data: {
                    clientID: props.model.programDetailForClient,
                  },
                })
              }
            />
            <ScrollView
              scrollEnabled={
                props.model.tasks.type === "HAS_DATA" &&
                props.model.tasks?.data?.length > 4
              }
              showsVerticalScrollIndicator={false}
              style={{
                paddingBottom: 50,
              }}
            >
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

              <Text
                style={{
                  fontWeight: "400",
                  lineHeight: 20,
                  fontSize: 16,
                  color: "#6f6f6f",
                  marginTop: 12,
                }}
              >
                {props.model.description}
              </Text>

              {/*<TouchableOpacity*/}
              {/*  style={{*/}
              {/*    marginTop: 20,*/}
              {/*    alignItems: "center",*/}
              {/*    justifyContent: "space-between",*/}
              {/*  }}*/}
              {/*  activeOpacity={0.7}*/}
              {/*  onPress={() => {*/}
              {/*    setReviewsVisible(!reviewsVisible);*/}
              {/*  }}*/}
              {/*>*/}
              {/*  {reviewsVisible && (*/}
              {/*    <Description>{props.model.description}</Description>*/}
              {/*  )}*/}
              {/*  <View*/}
              {/*    style={{*/}
              {/*      alignItems: "center",*/}
              {/*      width: "100%",*/}
              {/*    }}*/}
              {/*  >*/}
              {/*    {!reviewsVisible ? <ArrowDown /> : <ArrowUp />}*/}
              {/*  </View>*/}
              {/*</TouchableOpacity>*/}

              <View style={{ marginTop: 30 }} />
              <ProgramsGoalsBlock
                onPress={() =>
                  navigation.navigate("GoalsForAssign", {
                    programId: props.model.currentProgramId,
                    clientID: clientData?.user?.id,
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
                <TouchableOpacity onPress={() => setShowAll((data) => !data)}>
                  <Text
                    style={{
                      color: "#7454CF",
                      fontSize: 16,
                      lineHeight: 20,
                      fontWeight: "400",
                    }}
                  >
                    {showAll ? "Скрыть" : "Показать все"}
                  </Text>
                </TouchableOpacity>
              </View>

              {showAll ? (
                <View style={{ marginTop: 32 }}>
                  {props.model.tasks.type === "HAS_DATA" &&
                    props.model.tasks.data.map((task) => {
                      // const check = props.model.tasks.data?.filter((elem) =>
                      //     taskArrayDone.includes(elem?.id)
                      // );
                      return (
                        <AllTasksBlock
                          key={task.id}
                          onPress={() =>
                            navigation.navigate("TaskDetailsForAssign", {
                              task: task,
                              clientID: clientData?.user?.id,
                            })
                          }
                          title={task.name}
                          duration={`В течение ${task.date} дней`}
                        />
                      );
                    })}
                </View>
              ) : (
                <View style={{ marginTop: 32 }}>
                  {props.model.tasks.type === "HAS_DATA" &&
                    props.model.tasks.data.slice(0, 4).map((task) => {
                      // const check = props.model.tasks.data?.filter((elem) =>
                      //     taskArrayDone.includes(elem?.id)
                      // );
                      return (
                        <AllTasksBlock
                          key={task.id}
                          onPress={() =>
                            navigation.navigate("TaskDetailsForAssign", {
                              task: task,
                              programId: props.model.programDetailForClient,
                              assignedProgram:
                                props.model.programDetailForClient,
                              clientID: clientData?.user?.id,
                            })
                          }
                          title={task.name}
                          duration={`В течение ${task.date} дней`}
                        />
                      );
                    })}
                </View>
              )}
              <View
                style={{
                  marginBottom: 40,
                  marginTop: 16,
                }}
              >
                <CustomButton
                  title={"Назначить программу"}
                  onPress={() => handleSnapPressOneClient(0)}
                />
              </View>
            </ScrollView>
          </View>
        </SafeAreaView>

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
