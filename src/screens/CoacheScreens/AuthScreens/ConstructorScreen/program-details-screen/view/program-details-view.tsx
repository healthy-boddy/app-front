import React, { useCallback, useRef, useState } from "react";
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
import { ProgramsGoalsBlock } from "../../view/components/programs-goals-block";
import { AllTasksBlock } from "../../view/components/all-tasks-block";
import CustomButton from "../../../../../../components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import { ProgramDetailsModel } from "../model";
import Description from "../../../../../../components/Description";
import { BottomSheetClientPicked } from "./bottom-sheet-clients/bottom-sheet-client-picked";
import BottomSheet from "@gorhom/bottom-sheet";
import { BottomSheetClients } from "./bottom-sheet-clients/bottom-sheet-clients";
import { ClientResponse } from "../../../CalendarScreen/user-list-screen/interface";

export const ProgramDetailsView = ProgramDetailsModel.modelClient((props) => {
  const navigation = useNavigation<any>();
  const [reviewsVisible, setReviewsVisible] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const [isOpenClients, setOpenClients] = useState(false);

  const [clientData, setClientData] = useState<ClientResponse>();

  const sheetRef = useRef<BottomSheet>(null);
  const sheetRefClients = useRef<BottomSheet>(null);
  const snapPoints = ["70%"];

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

  return (
    <>
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
                    onPress={() =>
                      navigation.navigate("TaskDetails", {
                        ...task,
                      })
                    }
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
          title={"Назначить клиенту"}
          onPress={() => handleSnapPressClients(0)}
        />
      </View>

      <BottomSheetClients
        snapPoints={snapPoints}
        sheetRef={sheetRefClients}
        onClose={() => setOpenClients(false)}
        onPress={() => handleSnapPressOneClient(0)}
        onPressPickButton={handlePressPickClient}
        programName={props.model.name}
      />
      <BottomSheetClientPicked
        snapPoints={snapPoints}
        sheetRef={sheetRef}
        onClose={() => setOpen(false)}
        clientData={clientData ?? null}
        programName={props.model.name}
        onPressToPick={handleAssigned}
      />
    </>
  );
});
