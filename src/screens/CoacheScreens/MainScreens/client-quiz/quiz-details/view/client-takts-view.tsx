import React, { FC } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { ClientQuizDetailsModel } from "../model";
import BackIcon from "../../../../../../assets/Icons/BackIcon";

interface ClientGoalsViewProps {
  client: any;
}

export const ClientQuizView: FC<ClientGoalsViewProps> =
  ClientQuizDetailsModel.modelClient((props) => {
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
              onPress={() =>
                navigation.navigate("ClientQuiz", {
                  data: {
                    client: props.model.clientData,
                  },
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
          </View>

          <ScrollView
            style={{
              marginBottom: 30,
            }}
            showsVerticalScrollIndicator={false}
          >
            <View style={{ marginTop: 29 }} />
            <Text style={styles.mainTitle}>
              {props.model.quizData?.quiz_name}
            </Text>
            {props.model.quizAnswerText.type === "HAS_DATA" &&
              props.model.quizAnswerText.data.map((answer, index) => {
                return (
                  <View
                    key={index}
                    style={{
                      borderBottomWidth: 1,
                      paddingVertical: 16,
                      borderColor: "#E2E2E2",
                    }}
                  >
                    <Text style={styles.titleText}>
                      {index + 1}. {answer.question_text}
                    </Text>
                    <Text
                      style={styles.titleAnswer}
                    >{`   \u2022 ${answer.answers_text_list[0]}`}</Text>
                  </View>
                );
              })}
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  });

const styles = StyleSheet.create({
  titleText: {
    fontSize: 16,
    lineHeight: 19,
    fontWeight: "600",
    color: "#1E1E1E",
  },
  titleAnswer: {
    fontSize: 16,
    lineHeight: 20,
    fontWeight: "400",
    color: "#1E1E1E",
    marginTop: 12,
  },
  mainTitle: {
    fontSize: 24,
    lineHeight: 28,
    fontWeight: "600",
    color: "#1E1E1E",
  },
});
