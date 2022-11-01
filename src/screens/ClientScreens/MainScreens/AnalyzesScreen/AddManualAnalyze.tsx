import React from 'react';
import {View} from "react-native";
import MainContainer from "../../../../components/MainContainer";
import BackButton from "../../../../components/BackButton";
import {useNavigation} from "@react-navigation/native";

const AddManualAnalyze = () => {
    const navigation = useNavigation<any>()
    return (
        <MainContainer>
            <View>
                <BackButton onPress={()=>{navigation.navigate('AddAnalyzes')}}/>
            </View>
        </MainContainer>
    );
};

export default AddManualAnalyze;
