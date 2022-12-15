import React, {useEffect, useState} from "react";
import {
    View,
    StyleSheet,
    Text,
    ScrollView,
    TouchableOpacity,
    TextInput,
} from "react-native";
import MainContainer from "../../../../../components/MainContainer";
import BackButton from "../../../../../components/BackButton";
import CustomButton from "../../../../../components/CustomButton";
import {useNavigation} from "@react-navigation/native";
import {useSelector} from "react-redux";
import {ProgressBar} from "react-native-paper";
import CheckBox from "../../../../../assets/Icons/CheckBox";
import Title from "../../../../../components/Title";
import {color1} from "../../../../../helpers/colors";
import Modal from "react-native-modal";
import Description from "../../../../../components/Description";

type Answer = {
    other_answer?: string;
    question: number;
    answers: Array<number>;
};
const TutorialQuestionsScreen = () => {
    const navigation = useNavigation<any>();
    const [level, setLevel] = useState(0);
    let tokenFromReducer = useSelector(
        (store: any) => store.user_token.user_token
    );

    let progress = (1 / 6) * level;
    let [questions, setQuestions] = useState<any>([]);
    let [checkedAnswer, setCheckedAnswer] = useState<Array<Answer>>([]);
    let [isVisible, setIsVisible] = useState(false);
    let [inputAnswerVisible, setInputAnswerVisible] = useState(false);
    let AuthStr = "Bearer " + tokenFromReducer;

    console.log(checkedAnswer, "checkedAnswer");

    useEffect(() => {
        (async () => {
            await fetch("http://92.53.97.238/quiz/coach_first_quiz/", {
                method: "get",
                headers: {
                    accept: "application/json",
                    Authorization: AuthStr,
                },
            })
                .then((res) => {
                    return res.json();
                })
                .then((res) => {
                    setQuestions(res.questions);
                    console.log(res);
                });
        })();
    }, []);

    const answerPressed = (answer: any, question: any) => {
        const answerId = answer.id;
        const questionId = question.id;
        const text = answer.text;

        if (text === "другое") {
            setInputAnswerVisible(true);
        }
        const currentQuestion = checkedAnswer.find(
            (item) => item.question === questionId
        );
        if (currentQuestion && question.is_multichoice) {
            if (currentQuestion.answers.includes(answerId)) {
                if (text === "другое") {
                    setInputAnswerVisible(false);
                    currentQuestion.other_answer = "";
                }
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
        // console.log(checkedAnswer, 'after')
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
            <View style={{left: -4.14, top: -4}}>
                <CheckBox/>
            </View>
        );
    };

    const onNextPress = () => {
        if (checkedAnswer.length < level + 1) {
            setIsVisible(true)
            return false
        }
        if (level < questions.length - 1) {
            setInputAnswerVisible(false);
            setLevel(level + 1);
        } else if (level === questions.length - 1) {
            handleSendQuestionsAnswers().then((r) => console.log(r));
            navigation.navigate("TyFormTutorials");
        }
    };
    console.log(checkedAnswer?.length, 'length')

    const handleOtherAnswer = (val) => {
        const currentQuestion = getCurrentQuestion();
        if (currentQuestion) {
            currentQuestion.other_answer = val;
            setCheckedAnswer((prev) => [...prev]);
        }
    };

    const getCurrentQuestion = () => {
        const questionId = questions[level]?.id;
        return checkedAnswer.find((item) => item.question === questionId);
    };

    useEffect(() => {
        setInputAnswerVisible(!!getCurrentQuestion()?.other_answer);
    }, [level]);

    async function handleSendQuestionsAnswers() {
        let form = new FormData();
        // @ts-ignore
        form.append("day", 1);

        await fetch("http://92.53.97.238/quiz/response/", {
            method: "POST",
            headers: {
                Authorization: AuthStr,
                accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                response_answers: checkedAnswer,
                quiz: 3,
            }),
        })
            .then((response) => {
                return response.json();
            })
            .then((response) => {
                console.log(response, "send questions quiz");
            });

        console.log(form, "form");

        await fetch("http://92.53.97.238/coach_learn/", {
            method: "POST",
            headers: {
                Authorization: AuthStr,
                accept: "application/json",
                "Content-Type": "multipart/form-data",
            },
            body: form,
        })
            .then((response) => {
                return response.json();
            })
            .then((response) => {
                console.log(response, "day 1 complated");
            });
    }

    return (
        <MainContainer>
            <BackButton
                onPressLetter={() => {
                    navigation.navigate("Greetings4");
                }}
                latter
                onPress={() => {
                    if (level >= 1) {
                        setLevel(level - 1);
                    }
                }}
            />
            <View style={{flex: 1}}>
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
                <View style={{marginTop: 32, marginBottom: 8}}>
                    <Title>{questions[level]?.text}</Title>
                </View>
                <Description>
                    {questions[level]?.is_multichoice ?
                        'Выберите один или несколько вариантов'
                        :
                        'Выберите один вариант'}
                </Description>
                <View style={{flex: 1}}>
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
                                <View style={styles.line}/>
                            </View>
                        ))}
                        {inputAnswerVisible && (
                            <View
                                style={{
                                    width: "100%",
                                    height: 48,
                                    backgroundColor: "#F5F4F8",
                                    borderRadius: 12,
                                    marginTop: 15,
                                    padding: 10,
                                }}
                            >
                                <TextInput
                                    value={getCurrentQuestion()?.other_answer || ""}
                                    onChangeText={handleOtherAnswer}
                                    style={{width: "100%"}}
                                    placeholder={"Свой вариант"}
                                    placeholderTextColor={"#797979"}
                                />
                            </View>
                        )}
                    </ScrollView>
                    <Modal useNativeDriver={true} isVisible={isVisible}>
                        <View style={styles.modal}>
                            <Text style={{
                                textAlign: 'center',
                                fontStyle: 'normal',
                                fontWeight: '600',
                                fontSize: 19,
                                lineHeight: 22,
                                flex: 1
                            }}>
                                Необходимо выбрать 1 из вариантов ответа
                            </Text>
                            <CustomButton
                                title={'Продолжить'}
                                onPress={()=>{setIsVisible(false)}}
                            >
                                <Text style={{
                                    fontSize: 16,
                                    fontWeight: '600'
                                }}>
                                    Продолжить
                                </Text>
                            </CustomButton>
                        </View>
                    </Modal>
                </View>
            </View>
            <View style={{marginBottom: 25}}>
                <CustomButton
                    title={"Продолжить"}
                    onPress={onNextPress}
                />
            </View>
        </MainContainer>
    );
};

export default TutorialQuestionsScreen;
const styles = StyleSheet.create({
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
    level_info: {
        textAlign: "center",
        color: "#1E1E1E",
        fontSize: 19,
        fontWeight: "600",
        lineHeight: 21,
        marginTop: 7,
        marginBottom: 12,
    },
    line: {
        height: 1,
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
    modal: {
        backgroundColor: 'white',
        width: '100%',
        height: 220,
        borderRadius: 30,
        paddingVertical: 40,
        paddingHorizontal: 16
    }
});
