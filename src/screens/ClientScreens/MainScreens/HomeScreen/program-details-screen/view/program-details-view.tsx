import React, { useEffect, useRef, useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import BackButton from "../../../../../../components/BackButton";
import { useNavigation } from "@react-navigation/native";
import { ProgramDetailsModel } from "../model";
import BottomSheet from "@gorhom/bottom-sheet";
import { SuccessAssignBanner } from "../../../../../../components/core/sussecc-assigne-bunner";
import { ProgramsGoalsBlock } from "../../../../../CoacheScreens/AuthScreens/ConstructorScreen/view/components/programs-goals-block";
import { AllTasksBlock } from "../../../../../CoacheScreens/AuthScreens/ConstructorScreen/view/components/all-tasks-block";

export const ProgramDetailsView = ProgramDetailsModel.modelClient((props) => {
  const navigation = useNavigation<any>();
  const [showAll, setShowAll] = useState(false);
  const sheetRef = useRef<BottomSheet>(null);
  const sheetRefClients = useRef<BottomSheet>(null);

  useEffect(() => {
    if (props.model.successesAssigned) {
      sheetRef.current?.close();
      sheetRefClients.current?.close();
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
            // onPressEdit={() =>
            //   navigation.navigate("EditingScreen", {
            //     programId: props.model.currentProgramId,
            //   })
            // }
            onPress={() => {
              navigation.goBack();
            }}
          />
          <ScrollView
            style={{
              marginBottom: 40,
            }}
            scrollEnabled={
              (props.model.tasks.data &&
                props?.model?.tasks?.data?.length > 4) ||
              props?.model?.description?.length > 300
            }
            showsVerticalScrollIndicator={false}
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

            {console.log("NAME", props.model.name)}

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
              {props?.model?.description}
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
                    return (
                      <>
                        <AllTasksBlock
                          key={task.id}
                          onPress={() =>
                            navigation.navigate("TaskDetails", {
                              task: task,
                            })
                          }
                          title={task.name}
                          duration={
                            task.date !== 0
                              ? `В течение ${task.date} дней`
                              : `В течение всей программы`
                          }
                        />
                      </>
                    );
                  })}
              </View>
            ) : (
              <View style={{ marginTop: 32 }}>
                {props.model.tasks.type === "HAS_DATA" &&
                  props.model.tasks.data.slice(0, 4).map((task) => {
                    console.log("task MAP", task.id);
                    return (
                      <AllTasksBlock
                        key={task.id}
                        onPress={() =>
                          navigation.navigate("TaskDetails", {
                            task: task,
                          })
                        }
                        title={task.name}
                        duration={`В течение ${task.date} дней`}
                      />
                    );
                  })}
              </View>
            )}
          </ScrollView>
        </View>
      </SafeAreaView>
    </>
  );
});
