import React from 'react';
import {View, Text} from "react-native";
import MainContainer from "../../../../../components/MainContainer";
import BackButton from "../../../../../components/BackButton";
import CustomButton from "../../../../../components/CustomButton";
import {useNavigation} from "@react-navigation/native";
import Title from "../../../../../components/Title";
import Description from "../../../../../components/Description";

const ThirdTutorialScreen = () => {
    const navigation = useNavigation<any>()
    return (
        <MainContainer>
            <View>
                <BackButton latter onPress={() => {
                    navigation.navigate("SecondTutorial")
                }}/>
            </View>
            <View style={{flex: 1, marginTop: 10,}}>
                <Title>
                    Цель проекта Health Buddy
                </Title>
                <Description marginTop={8} marginBottom={24}>
                    Мотивация клиента на командную работу для восстановления ресурса организма через коучинговые
                    методики.
                </Description>
                <Title titlePropStyle={{marginBottom: 8}}>
                    Задание
                </Title>
                <Description>
                    Посмотрите презентацию, чтобы узнать о:
                </Description>
                <Description marginLeft={10}>
                    {`\u2022 принципах сервиса,`}{"\n"}
                    {`\u2022 клиентских программах;`}{"\n"}
                    {`\u2022 тарифах`}{"\n"}
                </Description>
                <View>

                </View>
            </View>
            <View style={{marginBottom: 25}}>
                <CustomButton title={"Продолжить"}/>
            </View>
        </MainContainer>
    );
};

export default ThirdTutorialScreen;
