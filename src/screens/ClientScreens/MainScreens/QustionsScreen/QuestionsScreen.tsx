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

const QuestionsScreen = () => {
    const navigation: any = useNavigation();
    const [questions, setQuestions] = useState<any>([]);
    const [userToken, setUserToken] = useState<any>("");
    let [loading, setLoading] = useState<boolean>(true);
    const [level, setLevel] = useState(0);
    let progress = (1 / 47) * level;

    let [checkedAnswer, setCheckedAnswer] = useState<any>([])

    useEffect(() => {
        (async () => {
            await AsyncStorage.getItem("userToken").then((r) => setUserToken(r));
        })();
    }, []);

    useEffect(() => {
        let AuthStr = "Bearer " + userToken;
        (async () => {
            try {
                axios
                    .get(`http://92.53.97.238/quiz/free_user_quiz/`, {
                        headers: {
                            Authorization: AuthStr,
                            "Content-Type": "application/json",
                            accept: "application/json",
                        },
                    }).then((res) => {
                    setQuestions(res.data.questions);
                    console.log(res.data.questions);
                    setLoading(true);
                });
            } catch (error) {
                console.log(error, "err");
            }
        })();
    }, [userToken]);

    console.log(checkedAnswer, 'checkedAnswer')

    return (
        <QuestionsWrapper
            buttonTitle={"Продолжить"}
            onPressBack={() => {
                navigation.navigate("Главная");
            }}
            onPressButton={() => {
                if (level < questions.length) {
                    setLevel(level + 1);
                } else if (level === questions.length) {
                    return;
                }
            }}
         onPressLetter={()=>{
            navigation.navigate("Главная")
         }}>
            <View style={styles.container}>
                {!loading && (
                    <View style={{height: "150%", marginTop: 150}}>
                        <ActivityIndicator
                            style={{transform: [{scaleX: 2}, {scaleY: 2}]}}
                            size={"large"}
                        />
                    </View>
                )}

                <Title titlePropStyle={styles.question_level}>
                    {level + 1} из {questions?.length + 1}
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
                        {questions[level]?.answers?.map((item: any) => (
                            <View>
                                <TouchableOpacity
                                    onPress={() => {
                                        setCheckedAnswer((prev: any) => ([...prev, {id: item.id}]))
                                    }
                                }
                                    key={item.id}
                                    style={styles.questions_answers}
                                >
                                    <RadioButton
                                        value={""}
                                    />
                                    <Text
                                        style={{
                                            fontWeight: "500",
                                            fontSize: 16,
                                            lineHeight: 20,
                                            color: "#1E1E1E",
                                            textAlign: "left",
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

    }
});
