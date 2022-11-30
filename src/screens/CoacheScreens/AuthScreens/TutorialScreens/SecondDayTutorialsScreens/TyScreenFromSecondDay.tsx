import React from 'react';
import {useNavigation} from "@react-navigation/native";
import MainContainer from "../../../../../components/MainContainer";
import {TouchableOpacity, View} from "react-native";
import XMark from "../ThirdDayTutorialScreen/icons/xMark";
import HpMark from "../ThirdDayTutorialScreen/icons/HpMark";
import Title from "../../../../../components/Title";
import Description from "../../../../../components/Description";

const TyScreenFromSecondDay = () => {
    const navigation = useNavigation<any>()
    return (
        <MainContainer>
            <TouchableOpacity
                onPress={()=>{
                    navigation.navigate('Greetings4')
                }}
                style={{alignSelf: 'flex-end', paddingTop: 30}}>
                <XMark/>
            </TouchableOpacity>
            <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
                <HpMark/>
                <Title titlePropStyle={{textAlign: 'center', marginBottom: 25, marginTop: 40}}>
                    Команда Health Buddy{"\n"}
                    поздравляет вас!
                </Title>
                <Description textAlign={"center"}>
                    Вы успешно прошли второй день
                    обучения. Следующий урок будет
                    доступен через 24 часа.
                </Description>
                <Description textAlign={"center"} marginTop={30}>
                    До встречи!
                </Description>
            </View>
        </MainContainer>
    );
};

export default TyScreenFromSecondDay;
