import React, {useState} from 'react';
import {View, StyleSheet, Text, TextInput} from "react-native";
import MainContainer from "../../../../../components/MainContainer";
import BackButton from "../../../../../components/BackButton";
import Title from "../../../../../components/Title";
import Description from "../../../../../components/Description";
import {color1} from "../../../../../helpers/colors";
import CustomButton from "../../../../../components/CustomButton";
import {LargeInput} from "../../../../../components/core/LargeInput";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import {useNavigation} from "@react-navigation/native";
import {useSelector} from "react-redux";

const FirstTutorialScreen = () => {
    const [value, setValue] = useState('')
    const navigation = useNavigation<any>()
    let coachTutorial = useSelector((store: any) => store.auth_data.setTutorialsArray);
    console.log(coachTutorial, 'coachTutorial from first screen')

    return (
        <MainContainer>
            <View>
                <BackButton latter onPress={()=>{navigation.navigate("Greetings4")}}/>
            </View>
            <KeyboardAwareScrollView>
                <View style={{marginTop: 10, flex: 1}}>
                    <Title titlePropStyle={{fontSize: 24}}>Что такое Health Buddy?</Title>
                    <Description marginTop={8} marginBottom={24}>
                        Сервис наставников для раскрытия потенциала здоровья всех возрастов. Сегодня вы познакомитесь с
                        компанией и увидите работу изнутри.
                    </Description>
                    <Text style={styles.description}>
                        Посмотрите краткое видео о продукте
                    </Text>
                    <View style={styles.video_box}>
                        <Text style={{textAlign: 'center', marginTop: 15}}>тут Видео 📽</Text>
                    </View>
                    <Title titlePropStyle={{marginVertical: 10}}>
                        Задание
                    </Title>
                    <Description>
                        Выпишите чек-лист первичной консультации (основные пункты для коммуникации с клиентом)
                    </Description>
                    <View style={styles.input_box}>
                        <LargeInput
                            setValue={setValue}
                            value={value}
                            placeholder={'Напишите ответ'}
                        />
                    </View>
                </View>
            </KeyboardAwareScrollView>
            <View style={{marginBottom: 25}}>
                <CustomButton
                    title={'Продолжить'}
                    onPress={() => {
                        navigation.navigate("SecondTutorial")
                    }}
                />
            </View>
        </MainContainer>
    );
};

export default FirstTutorialScreen;
const styles = StyleSheet.create({
    description: {
        color: '#1E1E1E',
        fontSize: 16,
        fontWeight: '600',
        lineHeight: 19
    },
    video_box: {
        width: '100%',
        height: 200,
        backgroundColor: color1,
        borderRadius: 20,
        marginTop: 20
    },
    input_box: {
        height: 140,
        width: '100%'
    },
    input: {
        backgroundColor: '#F5F4F8',
        height: '100%'
    }
})
