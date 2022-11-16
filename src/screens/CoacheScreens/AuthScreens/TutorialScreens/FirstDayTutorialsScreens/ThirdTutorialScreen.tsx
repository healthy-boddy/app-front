import React from 'react';
import {View, StyleSheet, Text} from "react-native";
import MainContainer from "../../../../../components/MainContainer";
import BackButton from "../../../../../components/BackButton";
import CustomButton from "../../../../../components/CustomButton";
import {useNavigation} from "@react-navigation/native";
import Title from "../../../../../components/Title";
import Description from "../../../../../components/Description";
import {color1} from "../../../../../helpers/colors";

const ThirdTutorialScreen = () => {
    const navigation = useNavigation<any>()
    return (
        <MainContainer>
            <View style={{
                flex: 1,
                paddingHorizontal: 16
            }}>
                <View>
                    <BackButton latter onPress={() => {
                        navigation.navigate("FirstTutorial")
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
                    <View style={styles.presentation_box}>
                        <Text style={{textAlign: 'center'}}>презентация тут</Text>
                    </View>
                </View>
                <View style={{marginBottom: 25}}>
                    <CustomButton onPress={() => {
                        navigation.navigate("SecondTutorial")
                    }} title={"Продолжить"}/>
                </View>
            </View>
        </MainContainer>
    );
};

export default ThirdTutorialScreen;

const styles = StyleSheet.create({
    presentation_box: {
        width: '100%',
        height: 200,
        backgroundColor: color1,
        borderRadius: 20
    },
    presentation: {}
})
