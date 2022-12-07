import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity, View } from "react-native";
import { ClientsEmptyPrograms } from "../../../icon/clients-empty-programms";
import { WrapperWithTitlePage } from "../../../../../components/core/wrapper/wrapper-with-title";
import { ClientsProgramsModel } from "../model";
import { ProgramBlock } from "../../../AuthScreens/ConstructorScreen/view/components/program-block";

export const ClientsProgramsView = ClientsProgramsModel.modelClient((props) => {
  const navigation: any = useNavigation();

  console.log("props.model.clientId", props.model.clientId);
  return (
    <WrapperWithTitlePage
      title={"Программы"}
      onPressBack={() => navigation.navigate("CalendarPage")}
      onPressButton={() =>
        navigation.navigate("ClientProgramsScreen", {
          data: {
            clientID: props.model.clientId,
          },
        })
      }
      buttonTitle={
        props.model.programInfo.data && props.model.programInfo.data?.length > 0
          ? ""
          : "Назначить программу"
      }
    >
      <View
        style={
          props.model.programInfo.type == "HAS_DATA" && {
            flex: 1,
            paddingHorizontal: 16,
            width: "100%",
          }
        }
      >
        {props.model.programInfo.type === "HAS_DATA" &&
        props.model.programInfo.data?.length > 0 ? (
          props.model.programInfo.data.map((program) => {
            console.log("propgam", program);
            return (
              <ProgramBlock
                taskQuantity={program.program_info.tasks_quantity}
                key={program.id}
                onPress={() =>
                  navigation.navigate("ProgramDetailsClient", {
                    programId: program.program,
                    assignedProgram: program.id,
                    clientID: program.assigned_to,
                  })
                }
                title={program.program_info.name}
                subtitle={program.program_info.description}
                duration={`Длительность - ${program.program_info.duration} год`}
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
            <ClientsEmptyPrograms />
            <Text
              style={{
                textAlign: "center",
                fontSize: 19,
                lineHeight: 22.67,
                fontWeight: "600",
                color: "#1E1E1E",
              }}
            >
              У этого клиента еще нет ни одной программы
            </Text>
          </View>
        )}

        {props.model.programInfo.data &&
          props.model.programInfo.data.length > 0 && (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("ClientProgramsScreen", {
                  data: {
                    clientID: props.model.clientId,
                  },
                })
              }
            >
              <Text
                style={{
                  color: "#7454CF",
                  marginLeft: 10,
                  fontSize: 18,
                  fontWeight: "400",
                  lineHeight: 21.48,
                  marginTop: 32,
                }}
              >
                + Добавить еще одну программу
              </Text>
            </TouchableOpacity>
          )}
      </View>
    </WrapperWithTitlePage>
  );
});
