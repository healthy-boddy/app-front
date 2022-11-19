import React, {useState} from 'react';
import {View, StyleSheet, Text} from "react-native";
import MainContainer from "../../../../../components/MainContainer";
import BackButton from "../../../../../components/BackButton";
import CustomButton from "../../../../../components/CustomButton";
import {useNavigation} from "@react-navigation/native";
import Title from "../../../../../components/Title";
import Description from "../../../../../components/Description";
import {color1} from "../../../../../helpers/colors";
import {LargeInput} from "../../../../../components/core/LargeInput";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import {useSelector} from "react-redux";
import {WebView} from "react-native-webview";

const SecondFirstTutorialScreen = () => {
    const navigation = useNavigation<any>()
    const [value, setValue] = useState('')

    let pdfAndVideo = useSelector((store: any) => store?.auth_data?.setVideoEndPresentationArray);
    let tokenFromReducer = useSelector((store: any) => store.user_token.user_token);
    let AuthStr = "Bearer " + tokenFromReducer;

    async function handleSendCheckList() {
        let checkListForm = new FormData()
        checkListForm.append('initial_consultation_checklist', value)
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
            console.log(res, 'handleSendCheckList day 2')
        })
        navigation.navigate("SecondTwoTutorial")
    }

    return (
        <MainContainer>
            <View style={{flex: 1, paddingHorizontal: 16}}>
                <BackButton onPress={() => {
                    navigation.navigate("Greetings4")
                }}/>
                <KeyboardAwareScrollView style={{flex: 1, marginTop: 16}}>
                    <Title titlePropStyle={{fontSize: 24}}>
                        Переходим к знакомству с клиентом
                    </Title>
                    <Description>
                        Сегодня вы узнаете:
                    </Description>
                    <Description marginLeft={10}>
                        {`\u2022 путь клиента,`}{"\n"}
                        {`\u2022 алгоритм первичной консультации,`}{"\n"}
                    </Description>
                    <Title titlePropStyle={{fontSize: 16}}>
                        Посмоторите видео от старшего сервис-менеджера Александры Щербаковой
                    </Title>
                    <View style={styles.video_box}>
                        <WebView source={{uri: pdfAndVideo.coach_second_day_video_url}} />
                    </View>
                    <Title titlePropStyle={{fontSize: 16, marginTop: 24}}>
                        Задание
                    </Title>
                    <Description>
                        Выпишите чек-лист первичной консультации (основные пункты для коммуникации с клиентом)
                    </Description>
                    <LargeInput
                        setValue={setValue}
                        value={value}
                        placeholder={'Напишите ответ'}
                    />
                </KeyboardAwareScrollView>
                <View style={{marginBottom: 25}}>
                    <CustomButton
                        title={'Продолжить'}
                        onPress={handleSendCheckList}
                    />
                </View>
            </View>
        </MainContainer>
    );
};
export default SecondFirstTutorialScreen;

const styles = StyleSheet.create({
    video_box: {
        width: '100%',
        height: 200,
        borderRadius: 20,
        marginTop: 24
    }
})