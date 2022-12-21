import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import BackButton from "../../../../../../components/BackButton";
import { ProgramsGoalsBlock } from "../../view/components/programs-goals-block";
import { AllTasksBlock } from "../../view/components/all-tasks-block";
import CustomButton from "../../../../../../components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import { ProgramDetailsModel } from "../model";
import { BottomSheetClientPicked } from "./bottom-sheet-clients/bottom-sheet-client-picked";
import BottomSheet from "@gorhom/bottom-sheet";
import { BottomSheetClients } from "./bottom-sheet-clients/bottom-sheet-clients";
import { ClientResponse } from "../../../CalendarScreen/user-list-screen/interface";
import { SuccessAssignBanner } from "../../../../../../components/core/sussecc-assigne-bunner";
import { color1 } from "../../../../../../helpers/colors";

export const ProgramDetailsView = ProgramDetailsModel.modelClient((props) => {
  const navigation = useNavigation<any>();
  const [isOpen, setOpen] = useState(false);
  const [isOpenClients, setOpenClients] = useState(false);
  const [showAll, setShowAll] = useState(false);

  const [clientData, setClientData] = useState<ClientResponse>();

  const sheetRef = useRef<BottomSheet>(null);
  const sheetRefClients = useRef<BottomSheet>(null);
  const snapPoints = ["90%"];

  const handleSnapPressOneClient = useCallback((index: number) => {
    sheetRef.current?.snapToIndex(index);
    setOpen(true);
  }, []);

  const handleSnapPressClients = useCallback((index: number) => {
    sheetRefClients.current?.snapToIndex(index);
    setOpenClients(true);
  }, []);

  const handlePressPickClient = (data: ClientResponse) => {
    setClientData(data);
  };

  const handleAssigned = (id: number | null) => {
    if (id) {
      props.model.assignProgramToClientById(id);
    }
  };

  useEffect(() => {
    if (props.model.successesAssigned) {
      sheetRef.current?.close();
      sheetRefClients.current?.close();
    }
  }, [props.model.successesAssigned]);

  let taskArrayDone: Array<number> = [];

  props.model.tasksComplete.data?.map((data: any) =>
    taskArrayDone.push(data?.task)
  );

  console.log("props.model.currentProgramId", props.model.currentProgramId);

  return (
    <>
      {props.model.successesAssigned && (
        <SuccessAssignBanner
          onPress={() => props.model.setAssessAssigned(false)}
        />
      )}

      <SafeAreaView
        style={[
          { flex: 1, backgroundColor: "fff" },

          {
            backgroundColor: isOpen || isOpenClients ? "#00000090" : "#fff",
            opacity: isOpen || isOpenClients ? 0.5 : 1,
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
              navigation.navigate("EditingScreen", {
                programId: props.model.currentProgramId,
              })
            }
            onPress={() => {
              navigation.navigate("ConstructorPage");
            }}
          />
          <ScrollView
            style={{
              marginBottom: 40,
            }}
            scrollEnabled={
              (props.model.tasks.data && props.model.tasks.data.length > 4) ||
              props.model.description.length > 300
            }
            showsVerticalScrollIndicator={false}
          >
            <Text
              style={{
                color: "#1E1E1E",
                fontSize: 24,
                lineHeight: 28,
                fontWeight: "600",
                marginTop: 16,
              }}
            >
              {props.model.name}
            </Text>

            {/*<TouchableOpacity*/}
            {/*  style={{*/}
            {/*    marginTop: 20,*/}
            {/*    alignItems: "center",*/}
            {/*    justifyContent: "space-between",*/}
            {/*    overflow: "hidden",*/}
            {/*  }}*/}
            {/*  onPress={() => {*/}
            {/*    setReviewsVisible(!reviewsVisible);*/}
            {/*  }}*/}
            {/*>*/}
            {/*  {!reviewsVisible ? (*/}
            {/*    <>*/}
            {/*      <MaskedView*/}
            {/*        maskElement={*/}
            {/*          <>*/}
            {/*            <LinearGradient*/}
            {/*              style={StyleSheet.absoluteFill}*/}
            {/*              colors={["white", "transparent"]}*/}
            {/*              start={{ x: 0, y: 0.1 }}*/}
            {/*              end={{ x: 0, y: 0.5 }}*/}
            {/*            />*/}
            {/*            <ArrowDown />*/}
            {/*          </>*/}
            {/*        }*/}
            {/*      >*/}
            {/*        <Text*/}
            {/*          style={{*/}
            {/*            fontWeight: "400",*/}
            {/*            lineHeight: 20,*/}
            {/*            fontSize: 16,*/}
            {/*            color: "#6f6f6f",*/}
            {/*          }}*/}
            {/*        >*/}
            {/*          {props.model.description}*/}
            {/*        </Text>*/}
            {/*      </MaskedView>*/}
            {/*    </>*/}
            {/*  ) : (*/}
            {/*    <>*/}
            {/*      <Text*/}
            {/*        style={{*/}
            {/*          fontWeight: "400",*/}
            {/*          lineHeight: 20,*/}
            {/*          fontSize: 16,*/}
            {/*          color: "#6f6f6f",*/}
            {/*        }}*/}
            {/*      >*/}
            {/*        {props.model.description}*/}
            {/*      </Text>*/}
            {/*      <ArrowUp />*/}
            {/*    </>*/}
            {/*  )}*/}
            {/*</TouchableOpacity>*/}

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
                    const check = props.model.tasks.data?.filter((elem) =>
                      taskArrayDone.includes(elem.id)
                    );
                    return (
                      <React.Fragment key={task.id}>
                        <AllTasksBlock
                          checkForDone={check
                            ?.map((data) => data.id === task.id)
                            .toString()}
                          key={task.id}
                          onPress={() =>
                            navigation.navigate("TaskDetails", {
                              task: task,
                              // clientId: props.model.client,
                            })
                          }
                          title={task.name}
                          duration={
                            task.date !== 0
                              ? `В течение ${task.date} дней`
                              : `В течение всей программы`
                          }
                        />
                      </React.Fragment>
                    );
                  })}
              </View>
            ) : (
              <View style={{ marginTop: 32 }}>
                {props.model.tasks.type === "HAS_DATA" &&
                  props.model.tasks.data.slice(0, 4).map((task) => {
                    const check = props.model.tasks.data?.filter((elem) =>
                      taskArrayDone.includes(elem?.id)
                    );

                    return (
                      <AllTasksBlock
                        checkForDone={check
                          ?.map((data) => data.id === task.id)
                          .toString()}
                        key={task.id}
                        onPress={() =>
                          navigation.navigate("TaskDetails", {
                            task: task,
                            programID: props.model.currentProgramId,
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
                marginTop: 32,
              }}
            >
              <CustomButton
                title={"Назначить клиенту"}
                onPress={() => handleSnapPressClients(0)}
              />
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>

      <BottomSheetClients
        snapPoints={snapPoints}
        sheetRef={sheetRefClients}
        onClose={() => setOpenClients(false)}
        onPress={() => handleSnapPressOneClient(0)}
        onPressPickButton={handlePressPickClient}
        programName={props.model.name}
      />
      {clientData && (
        <BottomSheetClientPicked
          snapPoints={snapPoints}
          sheetRef={sheetRef}
          onClose={() => setOpen(false)}
          clientData={clientData}
          programName={props.model.name}
          onPressToPick={handleAssigned}
        />
      )}
    </>
  );
});
