import React, {useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Image, Linking, ScrollView, Pressable} from "react-native";
import MainContainer from "../../../../../components/MainContainer";
import BackButton from "../../../../../components/BackButton";
import Title from "../../../../../components/Title";
import Description from "../../../../../components/Description";
import CustomButton from "../../../../../components/CustomButton";
import {useNavigation} from "@react-navigation/native";
import {LargeInput} from "../../../../../components/core/LargeInput";
import DoctorBooks from "../../../../../assets/Icons/DoctorBooks";
import XMark from "./icons/xMark";
import {useSelector} from "react-redux";
import {WebView} from "react-native-webview";
import VideoPreViewVector from "../TutorialScreensIcons/VideoPreViewVector";
import StartVideoVector from "../TutorialScreensIcons/StartVideoVector";

const ThirdDayTutorialScreen = () => {
    const [page, setPage] = useState(1)
    const [largeInputValue, setLargeInputValue] = useState('')
    let pdfAndVideo = useSelector((store: any) => store?.auth_data?.setVideoEndPresentationArray);
    let tokenFromReducer = useSelector((store: any) => store.user_token.user_token);
    let AuthStr = "Bearer " + tokenFromReducer;
    let [logVideo, setLogVideo] = useState(false)
    const [valueError, setValueError] = useState(false)
    const navigation = useNavigation<any>()
    async function openPdf() {
        await Linking.openURL(pdfAndVideo.coach_third_day_presentation_url);
    }

    async function handleSendLastAnswers() {
        if (!largeInputValue){
            setValueError(true)
            return  false
        }
        setValueError(false)
        let checkListForm = new FormData()
        checkListForm.append('third_day_answer', largeInputValue)
        let form = new FormData()
        // @ts-ignore
        form.append('day', 3)
        await fetch('http://92.53.97.238/user/coach/update_me/', {
            method: 'put',
            headers: {
                Authorization: AuthStr,
                "Content-Type": "multipart/form-data",

            },
            body: checkListForm
        }).then((res) => {
            return res.json()
        }).then((res) => {
            console.log(res, 'handleSendCheckList day 3')
        })

        await fetch('http://92.53.97.238/coach_learn/', {
            method: 'POST',
            headers: {
                Authorization: AuthStr,
                "accept": "application/json",
                "Content-Type": "multipart/form-data",
            },
            body: form
        }).then((response)=>{
            return response.json()
        }).then((response)=>{
            console.log(response, 'day 1 complated')
        })
        setPage(page + 1)
    }

    function renderPages() {
        if (page === 1) {
            return (
                <MainContainer>
                    <View style={{flex: 1, paddingHorizontal: 16}}>
                        <View style={{flex: 1}}>
                            <BackButton   onPressLetter={() => {
                                navigation.navigate("Greetings4")
                            }} onPress={() => {
                                navigation.navigate("Greetings4")
                            }}/>
                            <Title titlePropStyle={{fontSize: 24, marginTop: 14}}>
                                Цель коучинг
                            </Title>
                            <Description marginTop={8} marginBottom={24}>
                                Если поставить неверную цель и не разбить ее на задачи, добиться результата будет
                                невозможно.
                            </Description>
                            <Title>
                                Идея VS Цель VS Задача
                            </Title>
                            <Description>
                                {`\u2022 Идея - совокупность представлений в сознании человека ,`}{"\n"}
                                {`\u2022 Цель - конечный результат,`}{"\n"}
                                {`\u2022 Задача - последовательность действий, необходимая для достижения цели,`}{"\n"}
                            </Description>
                            <Title titlePropStyle={{marginBottom: 10}}>
                                Задание
                            </Title>
                            <Description>
                                Посмотрите видео о коучинговых механиках
                            </Description>
                            <View style={styles.video_box}>
                                {!logVideo ?
                                    <Pressable onPress={() => {
                                        setLogVideo(true)
                                    }}
                                               style={{
                                                   width: '100%',
                                                   height: 200,
                                                   backgroundColor: '#8C64FF',
                                                   borderRadius: 20
                                               }}>
                                        <View style={{
                                            flexDirection: 'row'
                                        }}>
                                            <View>
                                                <VideoPreViewVector/>
                                            </View>
                                            <View style={{alignItems: 'center', right: 35, justifyContent: 'center'}}>
                                                <StartVideoVector/>
                                            </View>
                                        </View>
                                    </Pressable>
                                    :
                                    <WebView
                                        style={{width: '100%', height: 200}}
                                        source={{uri: pdfAndVideo.coach_third_day_video_url}}
                                    />}
                            </View>
                        </View>
                        <View style={{marginBottom: 25}}>
                            <CustomButton
                                onPress={() => {
                                    setPage(page + 1)
                                }}
                                title={'Продолжить'}
                            />
                        </View>
                    </View>
                </MainContainer>
            )
        } else if (page === 2) {
            return (
                <MainContainer>
                    <View style={{flex: 1, paddingHorizontal: 16}}>
                        <View style={{flex: 1}}>
                            <BackButton  onPress={() => {
                                setPage(page - 1)
                            }}/>
                            <Title titlePropStyle={{fontSize: 24, marginTop: 14, marginBottom: 8}}>
                                Из чего формируется цель?
                            </Title>
                            <Description>
                                {`\u2022 Субъективных мотивирующих потребностей клиента,`}{"\n"}
                                {`\u2022 Запроса и симптомов клиента,`}{"\n"}
                                {`\u2022 Результатов лабораторных, инструментальных исследований,`}{"\n"}
                                {`\u2022 Совместного обсуждения приоритетных составляющих,`}{"\n"}
                                {`\u2022 Мнения врача,`}{"\n"}
                            </Description>

                            <Title titlePropStyle={{fontSize: 24, marginTop: 14, marginBottom: 8}}>
                                Пример цели
                            </Title>
                            <Description>
                                {`\u2022 Обеспечить оптимальную глубину фаз сна для повышения работоспособности и энергии за 3 месяца,`}{"\n"}
                                {`\u2022 Набор мышечной массы тела до кг для легкости и выносливости за месяцев,`}{"\n"}
                            </Description>
                        </View>
                        <View style={{marginBottom: 25}}>
                            <CustomButton
                                title={'Продолжить'}
                                onPress={() => {
                                    setPage(page + 1)
                                }}
                            />
                        </View>
                    </View>
                </MainContainer>
            )
        } else if (page === 3) {
            return (
                <MainContainer>
                    <View style={{flex: 1, paddingHorizontal: 16}}>
                        <View style={{flex: 1}}>
                            <BackButton onPress={() => {
                                setPage(page - 1)
                            }}/>
                            <Title titlePropStyle={{fontSize: 24, marginTop: 14, marginBottom: 8}}>
                                Методика постановки целей SMART
                            </Title>
                            <Description>
                                {`\u2022 S (specific) - конкретная,`}{"\n"}
                                {`\u2022 M (measurable) - измеримая,`}{"\n"}
                                {`\u2022 A (achievable) - достижимая,`}{"\n"}
                                {`\u2022 R (relevant) - значимая,`}{"\n"}
                                {`\u2022 T (time bound) - ограниченная во времени,`}{"\n"}
                            </Description>

                            <Title titlePropStyle={{fontSize: 24, marginTop: 14, marginBottom: 8}}>
                                Задание
                            </Title>
                            <Description>
                                Внимательно изучите презентацию о методике SMART
                            </Description>
                            <View style={styles.presentation_box}>
                                <View>
                                    <VideoPreViewVector/>
                                </View>
                                <TouchableOpacity onPress={openPdf} style={{
                                    alignSelf: 'flex-end',
                                    marginBottom: 20,
                                    backgroundColor: 'rgba(255, 255, 255, 0.4)',
                                    paddingVertical: 8,
                                    paddingHorizontal: 15,
                                    borderRadius: 20,
                                    marginRight: 20
                                }}>
                                    <Text style={{color: '#FFFFFF'}}>Смотреть презентацию</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{marginBottom: 25}}>
                            <CustomButton
                                title={'Продолжить'}
                                onPress={() => {
                                    setPage(page + 1)
                                }}
                            />
                        </View>
                    </View>
                </MainContainer>
            )
        } else if (page === 4) {
            return (
                <MainContainer>
                    <View style={{flex: 1, paddingHorizontal: 16}}>
                        <ScrollView>
                            <View style={{flex: 1}}>
                                <BackButton   onPressLetter={() => {
                                    navigation.navigate("Greetings4")
                                }} latter onPress={() => {
                                    setPage(page - 1)
                                }}/>
                                <Title titlePropStyle={{fontSize: 24, marginTop: 14, marginBottom: 8}}>
                                    Закрепите свои знания
                                </Title>
                                <Description>
                                    Сформулируйте 8 целей для двух клиентов.
                                </Description>
                                <Description marginVertical={12}>
                                    Цель должен быть:
                                </Description>
                                <Description>
                                    {`\u2022 краткострочные,`}{"\n"}
                                    {`\u2022 долгосрочные,`}{"\n"}
                                    {`\u2022 промежуточные,`}{"\n"}
                                    {`\u2022 конечные,`}{"\n"}
                                </Description>
                                <Description marginBottom={5}>
                                    1. Клиент 45 лет, мужчина, жалобы на боли в области сердца, лишний вес 5 кг,
                                    отсуствие
                                    либидо, программа 3 месяца
                                </Description>
                                <Description>
                                    2. Клиент 30 лет, женщина, усталость, слабость, выпадение волос, проблемы со стулом
                                    и
                                    настроением, программа 6 месяца
                                </Description>
                                <View style={{marginTop: 12}}>
                                    <LargeInput
                                        setValue={setLargeInputValue}
                                        value={largeInputValue}
                                        placeholder={'Напишите ответ'}
                                        valueError={valueError}
                                    />
                                    {valueError && <Text style={{
                                        color: 'red',
                                        fontWeight: '400',
                                        fontSize: 14,
                                        fontStyle: 'normal',
                                        marginTop: 4
                                    }}>
                                        Необходимо заполнить поле
                                    </Text>}
                                </View>
                            </View>
                        </ScrollView>
                        <View style={{marginBottom: 25}}>
                            <CustomButton
                                onPress={handleSendLastAnswers}
                                title={'Продолжить'}/>
                        </View>
                    </View>
                </MainContainer>
            )
        } else if (page === 5) {
            return (
                <MainContainer>
                    <View style={{flex: 1, paddingHorizontal: 16}}>
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate("Greetings4")
                            }}
                            style={{alignItems: 'flex-end', marginTop: 16}}>
                            <XMark/>
                        </TouchableOpacity>
                        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                            <DoctorBooks/>
                            <Title titlePropStyle={{marginTop: 36}}>
                                Вы успешно прошли обучение!
                            </Title>
                            <Description textAlign={'center'} marginTop={12}>
                                Теперь вы сможете получить первых клиентов.
                            </Description>
                        </View>
                        <View style={{marginBottom: 25}}>
                            <CustomButton
                                title={'Перейти на главную'}
                                onPress={() => {
                                    setPage(1)
                                    navigation.navigate("Greetings4")
                                }}
                            />
                        </View>
                    </View>
                </MainContainer>
            )
        }
    }

    return (
        <View style={{flex: 1}}>
            {renderPages()}
        </View>
    );
};
export default ThirdDayTutorialScreen;

const styles = StyleSheet.create({
    video_box: {
        width: '100%',
        height: 200,
        borderRadius: 20,
        marginTop: 15
    },
    presentation_box: {
        width: '100%',
        height: 200,
        borderRadius: 20,
        backgroundColor: '#8C64FF',
        flexDirection: 'row',
        justifyContent: "space-between",
        marginTop: 24
    },
})
