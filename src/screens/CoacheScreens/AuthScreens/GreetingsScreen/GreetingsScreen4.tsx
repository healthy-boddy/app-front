import React, {useEffect, useState} from "react";
import {Image, ScrollView, StyleSheet, RefreshControl, Text, TouchableOpacity, View} from "react-native";
import {useNavigation} from "@react-navigation/native";
import Title from "../../../../components/Title";
import MainContainer from "../../../../components/MainContainer";
import {useDispatch, useSelector} from "react-redux";
import {BellIcon} from "../../../../assets/Icons/BellIcon";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {deleteUserBio, deleteUserToken} from "../../../../store/actions/user_token";
import {deleteUserData} from "../../../../store/actions/user_data";
import {setCoachTutorialsArray, setVideoEndPresentation} from "../../../../store/actions/auth_data";
import DoubleChecked from "../../../../assets/Icons/DoubleChecked";
import {useIsFocused} from "@react-navigation/native";
import MansIcon from "./ScreenIcons/MansIcon";
import Description from "../../../../components/Description";

const GreetingsScreen4 = (props: any) => {
    const dispatch = useDispatch()
    const navigation: any = useNavigation();
    let isFocused = useIsFocused()
    let tokenFromReducer = useSelector((store: any) => store.user_token.user_token);
    let user_data = useSelector((store: any) => store.user_data?.user_data);
    let [coachTutorialDays, setCoachTutorialDays] = useState<any>([])
    let AuthStr = "Bearer " + tokenFromReducer;

    const handleSinglePage = () => {
        navigation.navigate("CoachSingleScreen")
    }

    console.log(user_data, 'isFocused')

    async function getCoachLearnStatus() {
        await fetch('http://92.53.97.238/coach_learn/status/', {
            method: 'GET',
            headers: {
                "accept": "application/json",
                "Authorization": AuthStr
            }
        }).then((res) => {
            return res.json()
        }).then((res) => {
            dispatch(setCoachTutorialsArray(res))
            setCoachTutorialDays(res)
            console.log(res, 'coach learn status')

        })
    }

    useEffect(() => {
        (async () => {
            await getCoachLearnStatus()
        })();
    }, [isFocused])

    useEffect(() => {
        (async () => {
            await fetch('http://92.53.97.238/coach_learn/info/', {
                method: 'GET',
                headers: {
                    "accept": "application/json",
                    "Authorization": AuthStr
                }
            }).then((res) => {
                return res.json()
            }).then((res) => {
                dispatch(setVideoEndPresentation(res))
                //   console.log(res, 'coach_learn/info')
            })
        })();
    }, [])

    const wait = timeout => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    };

    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        getCoachLearnStatus().then(r => r)
        wait(1000).then(() => setRefreshing(false));
    }, []);

    return (
        <MainContainer>
            <ScrollView
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}
                style={{paddingHorizontal: 16}}>
                <View style={styles.header}>
                    <TouchableOpacity
                        activeOpacity={0.2}
                        onPress={handleSinglePage}
                        style={{flexDirection: 'row', alignItems: 'center'}}
                    >
                        <View>
                            <Image style={{
                                width: 40,
                                height: 40,
                                borderRadius: 100,
                                marginRight: 10
                            }} source={{uri: user_data.avatar}}
                            />
                        </View>
                        <Text style={styles.user_name}>
                            {user_data.user.username}
                        </Text>
                    </TouchableOpacity>
                    <View>
                        <BellIcon/>
                    </View>
                </View>
                {!user_data.specialization ? <View style={{flex: 1}}>
                        <View style={{marginVertical: 16}}>
                            <Title>Мое обучение</Title>
                        </View>
                        <TouchableOpacity
                            disabled={!(coachTutorialDays[1]?.available && !coachTutorialDays[1]?.passed)}
                            style={[
                                (coachTutorialDays[1]?.available && !coachTutorialDays[1]?.passed) ?
                                    styles.question_not_completed_style :
                                    (coachTutorialDays[1]?.available && coachTutorialDays[1]?.passed) ?
                                        styles.question_completed_style : styles.active_day_question]
                            }
                            onPress={() => {
                                navigation.navigate('FirstTutorial')
                            }}>
                            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                                <Title titlePropStyle={{marginBottom: 4}}>День 1</Title>
                                {coachTutorialDays[1]?.passed && <DoubleChecked/>}
                            </View>
                            <Text style={[styles.day_questions_description, (!coachTutorialDays[1]?.available && !coachTutorialDays[1]?.passed) && {color: '#C9C9C9'}]}>

                            {`\u2022  Знакомство с продуктом`}{'\n'}
                                {`\u2022 Обучение по продукту с методологом`}
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            disabled={!(coachTutorialDays[2]?.available && !coachTutorialDays[2]?.passed)}
                            style={[
                                (coachTutorialDays[2]?.available && !coachTutorialDays[2]?.passed) ?
                                    styles.question_not_completed_style :
                                    (coachTutorialDays[2]?.available && coachTutorialDays[2]?.passed) ?
                                        styles.question_completed_style : styles.active_day_question,
                            ]}
                            onPress={() => {
                                navigation.navigate('SecondFirstTutorial')
                            }}>
                            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                                <Title titlePropStyle={{marginBottom: 4}}>День 2</Title>
                                {coachTutorialDays[2]?.passed && <DoubleChecked/>}
                            </View>
                            <Text style={[styles.day_questions_description, (!coachTutorialDays[2]?.available && !coachTutorialDays[2]?.passed) && {color: '#C9C9C9'}]}>
                            {`\u2022 Путь клиента`}{'\n'}
                                {`\u2022 Алгоритм проведения первичной`}{'\n'}
                                консультации
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            disabled={!(coachTutorialDays[3]?.available && !coachTutorialDays[3]?.passed)}
                            style={[
                                (coachTutorialDays[3]?.available && !coachTutorialDays[3]?.passed) ?
                                    styles.question_not_completed_style :
                                    (coachTutorialDays[3]?.available && coachTutorialDays[3]?.passed) ?
                                        styles.question_completed_style : styles.active_day_question,

                            ]}
                            onPress={() => {
                                navigation.navigate("ThirdDayTutorial")
                            }}>
                            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                                <Title titlePropStyle={{marginBottom: 4}}>День 3</Title>
                                {coachTutorialDays[3]?.passed && <DoubleChecked/>}
                            </View>
                            <Text style={[styles.day_questions_description, (!coachTutorialDays[3]?.available && !coachTutorialDays[3]?.passed) && {color: '#C9C9C9'}]}>
                                {`\u2022 Долгосрочное ведение клиента`}{'\n'}
                                {`\u2022 Постановка целей и задач`}
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate("Greetings5")
                            }}
                            disabled={!coachTutorialDays[3]?.available}
                            style={styles.active_day_question}
                        >
                            <Title titlePropStyle={[{marginBottom: 4}]}>Заполните свой профиль</Title>
                            <Text style={[styles.day_questions_description, (!coachTutorialDays[3]?.available && !coachTutorialDays[3]?.passed) && {color: '#C9C9C9'}]}>
                               Для первичного знакомства с клиентом - это повысит доверие к вам, как к специалисту
                            </Text>
                        </TouchableOpacity>
                    </View>
                    :
                    <View style={{flex: 1}}>
                        <View style={{alignItems: 'center', marginTop: 200}}>
                            <MansIcon/>
                            <Title titlePropStyle={{marginTop: 25}}>
                                Здравствуйте, Алексей!
                            </Title>
                            <Description textAlign={"center"} marginTop={10}>
                                Мы подбираем для вас клиентов. Это займет не больше 1 рабочего дня
                            </Description>
                        </View>
                    </View>
                }
            </ScrollView>
        </MainContainer>
    );
};
export default GreetingsScreen4;

const styles = StyleSheet.create({
    inlineContainer: {
        paddingHorizontal: 20,
        paddingTop: 35,
    },
    header: {
        flexDirection: 'row',
        justifyContent: "space-between",
        width: '100%',
        alignItems: "center"
    },
    active_day_question: {
        width: '100%',
        borderRadius: 12,
        backgroundColor: '#FBFBFC',
        paddingHorizontal: 16,
        paddingVertical: 12,
        marginBottom: 16
    },
    day_questions_description: {
        fontWeight: '400',
        fontSize: 16,
        fontStyle: 'normal',
        lineHeight: 20,
        color: '#797979'
    },
    user_name: {
        color: '#1E1E1E',
        fontStyle: "normal",
        fontSize: 16,
        fontWeight: '600',
        lineHeight: 19
    },
    question_not_completed_style: {
        backgroundColor: '#F5F4F8',
        width: '100%',
        borderRadius: 12,
        paddingHorizontal: 16,
        paddingVertical: 12,
        marginBottom: 16
    },
    question_completed_style: {
        backgroundColor: '#E5DDFD',
        width: '100%',
        borderRadius: 12,
        paddingHorizontal: 16,
        paddingVertical: 12,
        marginBottom: 16
    },
});
