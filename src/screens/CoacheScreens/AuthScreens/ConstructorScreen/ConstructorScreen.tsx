import React from 'react';
import {View, Text} from "react-native";
import MainContainer from "../../../../components/MainContainer";
import Title from "../../../../components/Title";
import CustomButton from "../../../../components/CustomButton";
import {useNavigation} from "@react-navigation/native";

const ConstructorScreen = () => {
    const navigation = useNavigation<any>()
    return (
        <MainContainer>
            <View style={{flex: 1, paddingHorizontal: 16}}>
                <View style={{flex: 1}}>
                    <Title>
                        Контструктор программ
                    </Title>
                </View>
                <View style={{marginBottom: 25}}>
                    <CustomButton
                        onPress={() => {
                            navigation.navigate("SelfLove")
                        }}
                        title={'след, экран'}/>
                </View>
            </View>
        </MainContainer>
    );
};

export default ConstructorScreen;
