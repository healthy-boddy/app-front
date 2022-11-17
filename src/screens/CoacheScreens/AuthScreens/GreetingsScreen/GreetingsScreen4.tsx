import React, {useEffect, useRef, useState} from "react";
import {Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {Video} from "expo-av";
import {useNavigation} from "@react-navigation/native";
import Title from "../../../../components/Title";
import {WrapperPage} from "../../../../components/core/wrapper";
import MainContainer from "../../../../components/MainContainer";
import {useDispatch, useSelector} from "react-redux";
import {BellIcon} from "../../../../assets/Icons/BellIcon";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {deleteUserBio, deleteUserToken} from "../../../../store/actions/user_token";
import {deleteUserData} from "../../../../store/actions/user_data";
import {baseUrl} from "../../../../helpers/url";
import {setCoachTutorialsArray} from "../../../../store/actions/auth_data";

const GreetingsScreen4 = (props: any) => {
    const dispatch = useDispatch()
    const navigation: any = useNavigation();

    let tokenFromReducer = useSelector((store: any) => store.user_token.user_token);
    let user_data = useSelector((store: any) => store.user_data?.user_data);

    let AuthStr = "Bearer " + tokenFromReducer;

    const handleLogOut = async () => {
        await AsyncStorage.removeItem("userToken");
        dispatch(deleteUserToken());
        dispatch(deleteUserBio());
        dispatch(deleteUserData());
    }

    useEffect(() => {
        (async () => {
            await fetch('http://92.53.97.238/coach_learn/status/',{
                method: 'GET',
                headers: {
                    "accept": "application/json",
                    "Authorization": AuthStr
                }
            }).then((res)=>{
                return res.json()
            }).then((res)=>{
                dispatch(setCoachTutorialsArray(res))
                console.log(res, 'Greetings')
            })
        })();
    }, [])

    return (
        <MainContainer
            onPressBack={() => navigation.navigate("Greetings3")}
            onPressButton={() => navigation.navigate("Greetings5")}
            buttonTitle={"Продолжить"}
        >
            <View style={{
                paddingHorizontal: 16
            }}>
                <View style={styles.header}>
                    <TouchableOpacity
                        activeOpacity={0.2}
                        onLongPress={handleLogOut}
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
                <View style={{marginVertical: 16}}>
                    <Title>Мое обучение</Title>
                </View>
                <TouchableOpacity style={styles.day_question} onPress={() => {
                    navigation.navigate('FirstTutorial')
                }}>
                    <Title titlePropStyle={{marginBottom: 4}}>День 1</Title>
                    <Text style={styles.day_questions_description}>
                        {`\u2022  Знакомство с продуктом`}{'\n'}
                        {`\u2022 Обучение по продукту с методологом`}
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.day_question}
                onPress={()=>{
                    navigation.navigate('SecondFirstTutorial')
                }}>
                    <Title titlePropStyle={{marginBottom: 4}}>День 2</Title>
                    <Text style={styles.day_questions_description}>
                        {`\u2022 Путь клиента`}{'\n'}
                        {`\u2022 Алгоритм проведения первичной`}{'\n'}
                        консультации
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.day_question}
                onPress={()=>{
                    navigation.navigate("ThirdDayTutorial")
                }}>
                    <Title titlePropStyle={{marginBottom: 4}}>День 3</Title>
                    <Text style={styles.day_questions_description}>
                        {`\u2022 Долгосрочное ведение клиента`}{'\n'}
                        {`\u2022 Постановка целей и задач`}
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.day_question}>
                    <Title titlePropStyle={{marginBottom: 4}}>Заполните свой профиль</Title>
                    <Text style={styles.day_questions_description}>
                        Для первичного знакомства с клиентом - это повысит доверие к вам, как к специалисту
                    </Text>
                </TouchableOpacity>
            </View>
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
    day_question: {
        width: '100%',
        borderRadius: 12,
        backgroundColor: '#F5F4F8',
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
    }
});
