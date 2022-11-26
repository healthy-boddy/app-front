import React, { useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { QuestionsWrapper } from "../QustionsScreen/questions-wrapper";
import { ActivityIndicator, ProgressBar } from "react-native-paper";
import { color1 } from "../../../../helpers/colors";
import { useSelector } from "react-redux";
import axios from "axios";
import Title from "../../../../components/Title";
import CheckBox from "../../../../assets/Icons/CheckBox";

type Answer = {
  question: number;
  answers: Array<number>;
};

const PaidQuizzesScreen = () => {
  const navigation = useNavigation<any>();
  let tokenFromReducer = useSelector(
    (store: any) => store.user_token.user_token
  );
  let AuthStr = "Bearer " + tokenFromReducer;
  const [level, setLevel] = useState(0);
  let [questions, setQuestions] = useState<any>([]);
  let [loading, setLoading] = useState(true);
  let progress = (1 / 173) * level;
  let [checkedAnswer, setCheckedAnswer] = useState<Array<Answer>>([]);

  useEffect(() => {
    (async () => {
      try {
        axios
          .get(`http://92.53.97.238/quiz/paid_user_quiz/`, {
            headers: {
              Authorization: AuthStr,
              "Content-Type": "application/json",
              accept: "application/json",
            },
          })
          .then((res) => {
            setQuestions(res.data.questions);
            console.log(res.data.questions);
            setLoading(false);
            //   setLoading(false);
          });
      } catch (error) {
        console.log(error, "err");
      }
    })();
  }, []);

  const answerPressed = (answer: any, question: any) => {
    const answerId = answer.id;
    const questionId = question.id;
    const currentQuestion = checkedAnswer.find(
      (item) => item.question === questionId
    );

    if (currentQuestion && question.is_multichoice) {
      if (currentQuestion.answers.includes(answerId)) {
        currentQuestion.answers.splice(
          currentQuestion.answers.indexOf(answerId),
          1
        );
      } else {
        currentQuestion.answers.push(answerId);
      }

      setCheckedAnswer((prev) => [...prev]);
    } else {
      if (currentQuestion) {
        checkedAnswer.splice(checkedAnswer.indexOf(currentQuestion), 1);
      }
      setCheckedAnswer((prev) => [
        ...prev,
        {
          question: questionId,
          answers: [answerId],
        },
      ]);
    }
    //console.log(checkedAnswer, 'after')
  };

  const checked = (answerId: number, questionId: number) => {
    const currentQuestion = checkedAnswer.find(
      (item) => item.question === questionId
    );
    let isChecked = false;
    if (currentQuestion) {
      isChecked = currentQuestion.answers.includes(answerId);
    }
    return !isChecked ? null : (
      <View style={{ left: -4.14, top: -4 }}>
        <CheckBox />
      </View>
    );
  };
  console.log(checkedAnswer);
  async function handleSendQuestionsAnswers() {
    await fetch("http://92.53.97.238/quiz/response/", {
      method: "post",
      headers: {
        Authorization: AuthStr,
        accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        response_answers: checkedAnswer,
        quiz: 2,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        console.log(response, "fetch");
      });
  }

  return (
    <QuestionsWrapper
      buttonTitle={"Продолжить"}
      onPressBack={() => {
        if (level >= 1) {
          setLevel(level - 1);
        }
      }}
      onPressButton={() => {
        if (level < questions.length - 1) {
          setLevel(level + 1);
        } else if (level === questions.length - 1) {
          handleSendQuestionsAnswers().then((r) => console.log(r));
          navigation.navigate("TyPage");
        }
      }}
      onPressLetter={() => {
        navigation.navigate("Main");
      }}
    >
      <View style={styles.container}>
        {loading && (
          <View style={{ height: "150%", marginTop: 150 }}>
            <ActivityIndicator size={"large"} />
          </View>
        )}

        <Title titlePropStyle={styles.question_level}>
          {level + 1} из {questions?.length}
        </Title>

        <ProgressBar
          progress={progress}
          color={color1}
          style={{
            height: 8,
            backgroundColor: "#F5F4F8",
            borderRadius: 20,
          }}
        />

        <View style={{ marginTop: 32, marginBottom: 20 }}>
          <Title>{questions[level]?.text}</Title>
        </View>

        <View style={{ flex: 1 }}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {questions[level]?.answers?.map((item: any, index: number) => (
              <View key={`${item.id}-${index}`}>
                <TouchableOpacity
                  onPress={() => answerPressed(item, questions[level])}
                  key={item.id}
                  style={styles.questions_answers}
                >
                  <View style={styles.checkBox_box}>
                    {checked(item.id, questions[level].id)}
                  </View>
                  <Text
                    style={{
                      fontWeight: "500",
                      fontSize: 16,
                      lineHeight: 20,
                      color: "#1E1E1E",
                      textAlign: "left",
                      maxWidth: 303,
                    }}
                  >
                    {item?.text}
                  </Text>
                </TouchableOpacity>
                <View style={styles.line} />
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
    </QuestionsWrapper>
  );
};
export default PaidQuizzesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 16,
  },
  level_info: {
    textAlign: "center",
    color: "#1E1E1E",
    fontSize: 19,
    fontWeight: "600",
    lineHeight: 21,
    marginTop: 7,
    marginBottom: 12,
  },
  question_level: {
    marginTop: 7,
    marginBottom: 16,
    textAlign: "center",
  },
  questions_answers: {
    paddingVertical: 15,
    borderRadius: 30,
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 6,
  },
  line: {
    height: 2,
    backgroundColor: "#E2E2E2",
    width: "100%",
  },
  checkBox_box: {
    borderColor: "#E2E2E2",
    width: 24,
    marginRight: 14,
    height: 24,
    borderRadius: 20,
    borderWidth: 2,
  },
});
