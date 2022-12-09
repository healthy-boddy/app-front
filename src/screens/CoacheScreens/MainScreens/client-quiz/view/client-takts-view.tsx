import React, { FC } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import BackIcon from "../../../../../assets/Icons/BackIcon";
import { ClientQuizModel } from "../model";
import { QuizBlock } from "./quiz-block/quiz-block";
import { format } from "date-fns";

interface ClientGoalsViewProps {
  client: any;
}

export const ClientQuizView: FC<ClientGoalsViewProps> =
  ClientQuizModel.modelClient((props) => {
    const navigation: any = useNavigation();

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
              justifyContent: "space-between",
            }}
          >
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => navigation.navigate("CalendarPage")}
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
              Анкеты
            </Text>
            <View
              style={{
                width: 90,
              }}
            />
          </View>

          <View style={{ marginTop: 16 }} />

          {props.model.quiz.type === "HAS_DATA" &&
            props.model.quiz.data.map((quiz) => (
              <QuizBlock
                title={quiz.quiz_name}
                description={format(
                  new Date(quiz.created_at),
                  "dd.MM.yyyy, k:mm"
                )}
                onPress={() =>
                  navigation.navigate("ClientQuizDetails", {
                    data: {
                      client: props.model.clientData,
                      quiz,
                    },
                  })
                }
                // onPress={() => console.log(quiz)}
              />
            ))}
        </View>
      </SafeAreaView>
    );
  });
