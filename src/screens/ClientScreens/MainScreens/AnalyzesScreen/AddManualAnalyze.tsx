import React from 'react';
import {View, Text} from "react-native";
import MainContainer from "../../../../components/MainContainer";
import BackButton from "../../../../components/BackButton";
import {useNavigation} from "@react-navigation/native";
import Title from "../../../../components/Title";
import CustomButton from "../../../../components/CustomButton";

const AddManualAnalyze = () => {
    const navigation = useNavigation<any>()
    return (
        <MainContainer>
            <View>
                <BackButton onPress={()=>{navigation.navigate('AddAnalyzes')}}/>
            </View>
            <View style={{flex: 1}}>
                <Title>
                    В Ручную
                </Title>
            </View>
            <View style={{marginBottom: 25}}>
                <CustomButton
                    onPress={()=>{
                    navigation.navigate("SaveAnalyzesScreen")}}
                    title={'Сохранить'}/>
            </View>
        </MainContainer>
    );
};

export default AddManualAnalyze;
