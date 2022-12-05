import React, { useEffect } from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ProgramBlock } from "./components/program-block";
import { ClientProgramsModel } from "../model";
import BackIcon from "../../../../../../assets/Icons/BackIcon";

export const ClientProgramsView = ClientProgramsModel.modelClient((props) => {
  const navigation = useNavigation<any>();
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "flex-start",
      }}
    >
      <View
        style={{
          paddingHorizontal: 16,
          top: 30,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() =>
              navigation.navigate("ClientsDetailPageWithPrograms", {
                clientId: props.model.clientId,
              })
            }
            style={{
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
            }}
          >
            <BackIcon />
            <Text
              style={{
                color: "#7454CF",
                marginLeft: 10,
                fontSize: 18,
                fontWeight: "400",
                lineHeight: 21.48,
              }}
            >
              Назад
            </Text>
          </TouchableOpacity>

          <Text
            style={{
              fontSize: 18,
              lineHeight: 21.48,
              fontWeight: "400",
              color: "#1E1E1E",
              marginLeft: 8,
            }}
          >
            Конструктор программ
          </Text>
        </View>

        {props.model.programs.type === "HAS_DATA" &&
          props.model.programs.data?.map((programs) => {
            return (
              <ProgramBlock
                taskQuantity={programs.tasks_quantity}
                key={programs.id}
                onPress={() =>
                  navigation.navigate("ProgramDetailsForAssign", {
                    programId: programs.id,
                    clientID: props.model.client,
                  })
                }
                title={programs.name}
                subtitle={programs.description}
                duration={`Длительность - ${programs.duration} год`}
              />
            );
          })}
      </View>
    </SafeAreaView>
  );
});
