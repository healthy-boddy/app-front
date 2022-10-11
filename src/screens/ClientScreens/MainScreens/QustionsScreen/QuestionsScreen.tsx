import React, {useEffect, useState} from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {QuestionsWrapper} from "./questions-wrapper";
import Title from "../../../../components/Title";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {ActivityIndicator, ProgressBar, RadioButton} from "react-native-paper";
import {color1} from "../../../../helpers/colors";
import CheckBox from "../../../../assets/Icons/CheckBox";

type Answer = {
    question: number;
    answers: Array<number>;
}

const QuestionsScreen = () => {
    const navigation: any = useNavigation();
    const [questions, setQuestions] = useState<any>([]);
    const [userToken, setUserToken] = useState<any>("");
    let [loading, setLoading] = useState<boolean>(true);
    const [level, setLevel] = useState(0);
    let progress = (1 / 46) * level;

    let [checkedAnswer, setCheckedAnswer] = useState<Array<Answer>>([])

    useEffect(() => {
        (async () => {
            await AsyncStorage.getItem("userToken").then((r) => setUserToken(r));
        })();
    }, []);

    useEffect(() => {
        let AuthStr = "Bearer " + userToken;
        (async () => {
            try {
                axios.get(`http://92.53.97.238/quiz/free_user_quiz/`, {
                        headers: {
                            Authorization: AuthStr,
                            "Content-Type": "application/json",
                            accept: "application/json",
                        },
                    }).then((res) => {
                    setQuestions(res.data.questions);
                    console.log(res.data.questions);
                    setLoading(false);
                });
            } catch (error) {
                console.log(error, "err");
            }
        })();
    }, [userToken]);

    const answerPressed = (answerId: number, questionId: number) => {
        const currentQuestion = checkedAnswer.find(item => item.question === questionId);
        if (currentQuestion && currentQuestion.answers.length) {
            if (currentQuestion.answers.includes(answerId)) {
                checkedAnswer.splice(checkedAnswer.indexOf(currentQuestion), 1)
                setCheckedAnswer([...checkedAnswer]);
            }
            return;
        }
        setCheckedAnswer(prev => ([...prev, {
          question: questionId,
          answers: [answerId]
        }]));

    }

    const checked = (answerId: number, questionId: number) => {
        const currentQuestion = checkedAnswer.find(item => item.question === questionId);
        let isChecked = false;
        if (currentQuestion) {
            isChecked = currentQuestion.answers.includes(answerId)
        }

        return ( !isChecked ? null :
          <View style={{left: -4.14, top: -4}}>
              <CheckBox/>
          </View>
        )
    }

    async function handleSendQuestionsAnswers(){
        console.log(JSON.stringify({response_answers: checkedAnswer}), ' 33332')
        let AuthStr = "Bearer " + userToken;
        try {
            const response = axios.post('http://92.53.97.238/quiz/free_user_quiz/',
                {body: {response_answers: JSON.stringify(checkedAnswer)}},
                {
                    headers:{
                         Authorization: AuthStr,
                        "Content-Type": "application/json"
                    }
                }
        )
            console.log(response, 'posted')
        }catch (e){
            console.log('axios - error')
            console.log(e, 'res')
        }


       //  await fetch('http://92.53.97.238/quiz/free_user_quiz/',{
       //     method: 'post',
       //     headers:{
       //         Authorization: AuthStr,
       //         "Content-Type": "application/json",
       //     },
       //     body: JSON.stringify({
       //         response_answers: checkedAnswer
       //     })
       // }).then((res)=>{
       //     return res.json()
       //  }).then((res)=>{
       //      console.log(res, 'questions-answers-post')
       //  })
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
                }else if (level === questions.length -1){
                    handleSendQuestionsAnswers().then(r => console.log(r))
                    navigation.navigate("Main")
                }
            }}
            onPressLetter={() => {
                navigation.navigate("Main")
            }}>
            <View style={styles.container}>
                {loading && (
                    <View style={{height: "150%", marginTop: 150}}>
                        <ActivityIndicator size={"large"}/>
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

                <View style={{marginTop: 32, marginBottom: 20}}>
                    <Title>{questions[level]?.text}</Title>
                </View>

                <View style={{flex: 1}}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        {questions[level]?.answers?.map((item: any, index: number) => (
                            <View key={`${item.id}-${index}`}>
                                <TouchableOpacity
                                    onPress={() => answerPressed(item.id, questions[level].id)}
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
                                            maxWidth: 303
                                        }}
                                    >
                                        {item?.text}
                                    </Text>
                                </TouchableOpacity>
                                <View style={styles.line}/>
                            </View>
                        ))}
                    </ScrollView>
                </View>
            </View>
        </QuestionsWrapper>
    );
};

export default QuestionsScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        width: "100%",
    },
    question_level: {
        marginTop: 7,
        marginBottom: 16,
        textAlign: "center",
    },
    questions_answers: {
        paddingVertical: 15,
        borderRadius: 30,
        marginBottom: 12,
        flexDirection: 'row',
        alignItems: "center"
    },
    line: {
        height: 2,
        backgroundColor: '#E2E2E2',
        width: '100%',
    },
    checkBox_box: {
        borderColor: '#E2E2E2',
        width: 24,
        marginRight: 14,
        height: 24,
        borderRadius: 20,
        borderWidth: 2,
    }
});
