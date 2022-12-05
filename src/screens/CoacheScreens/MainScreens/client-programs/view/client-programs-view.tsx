import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, View } from "react-native";
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
          props.model.programInfo.data.map((programs) => {
            return (
              <ProgramBlock
                taskQuantity={programs.program_info.tasks_quantity}
                key={programs.id}
                onPress={() =>
                  navigation.navigate("ProgramDetailsClient", {
                    programId: programs.id,
                  })
                }
                title={programs.program_info.name}
                subtitle={programs.program_info.description}
                duration={`Длительность - ${programs.program_info.duration} год`}
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
      </View>
    </WrapperWithTitlePage>
  );
});
