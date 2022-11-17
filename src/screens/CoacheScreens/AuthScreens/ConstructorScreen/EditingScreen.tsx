import React from 'react';
import {View} from "react-native";
import MainContainer from "../../../../components/MainContainer";
import BackButton from "../../../../components/BackButton";
import {useNavigation} from "@react-navigation/native";

const EditingScreen = () => {
    const navigation = useNavigation<any>()
    return (
        <MainContainer>
            <View style={{flex: 1, paddingHorizontal: 16}}>
                <View style={{flex: 1}}>
                    <BackButton onPress={()=>{navigation.navigate("SelfLove")}}/>
                </View>
            </View>
        </MainContainer>
    );
};

export default EditingScreen;
