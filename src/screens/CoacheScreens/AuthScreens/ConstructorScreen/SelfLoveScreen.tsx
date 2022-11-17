import React from 'react';
import MainContainer from "../../../../components/MainContainer";
import Title from "../../../../components/Title";
import {useNavigation} from "@react-navigation/native";
import BackButton from "../../../../components/BackButton";
import {View} from "react-native";
import CustomButton from "../../../../components/CustomButton";

const SelfLoveScreen = () => {
    const navigation = useNavigation<any>()
    return (
        <MainContainer>
            <View style={{flex: 1, paddingHorizontal: 16}}>
                <View style={{flex: 1}}>
                    <BackButton onPress={()=>{navigation.navigate('ConstructorPage')}}/>
                    <Title>
                        Любовь к себе
                    </Title>
                </View>
                <View style={{marginBottom: 25}}>
                    <CustomButton
                        title={'след экран'}
                        onPress={()=>{navigation.navigate('Editing')}}
                    />
                </View>
            </View>
        </MainContainer>
    );
};

export default SelfLoveScreen;
