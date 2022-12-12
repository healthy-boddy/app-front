import React from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ProgramBlock } from "./components/program-block";
import { ConstructorScreenModel } from "../model";

export const ConstructorScreenView = ConstructorScreenModel.modelClient(
  (props) => {
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
          <Text
            style={{
              fontSize: 24,
              lineHeight: 28,
              fontWeight: "600",
              color: "#1E1E1E",
            }}
          >
            Конструктор программ
          </Text>

          <ScrollView
            scrollEnabled={
              props.model.programs.data && props.model.programs.data.length > 5
            }
            showsVerticalScrollIndicator={false}
          >
            {props.model.programs.type === "HAS_DATA" &&
              props.model.programs.data.map((programs) => {
                return (
                  <ProgramBlock
                    taskQuantity={programs.tasks_quantity}
                    key={programs.id}
                    onPress={() =>
                      navigation.navigate("ProgramDetails", {
                        programId: programs.id,
                      })
                    }
                    title={programs.name}
                    subtitle={programs.description}
                    duration={`Длительность - ${programs.duration} год`}
                  />
                );
              })}
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
);
