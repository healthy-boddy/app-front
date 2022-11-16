import React from 'react';
import {View, Text} from "react-native";
import {useNavigation} from "@react-navigation/native";
import MainContainer from "../../../../../components/MainContainer";
import BackButton from "../../../../../components/BackButton";
import CustomButton from "../../../../../components/CustomButton";
import {Title} from "react-native-paper";

const SecondThirdTutorialScreen = () => {
    const navigation = useNavigation<any>()
    return (
        <MainContainer>
            <View style={{flex: 1, paddingHorizontal: 16}}>
                <BackButton onPress={() => {
                    navigation.navigate("Greetings4")
                }}/>
                <View style={{flex: 1}}>
                    <Title>Квесты</Title>
                </View>
                <View style={{marginBottom: 25}}>
                    <CustomButton onPress={()=>{
                        navigation.navigate("Greetings4")
                    }} title={'Продолжить'}/>
                </View>
            </View>
        </MainContainer>
    );
};

export default SecondThirdTutorialScreen;
