import React from 'react';
import {View, Text} from "react-native";
import MainContainer from "../../../../../components/MainContainer";
import BackButton from "../../../../../components/BackButton";
import CustomButton from "../../../../../components/CustomButton";
import {useNavigation} from "@react-navigation/native";

const TutorialQuestionsScreen = () => {
    const navigation = useNavigation<any>()
    return (
        <MainContainer>
            <View style={{
                flex: 1,
                paddingHorizontal: 16
            }}>
                <BackButton
                    latter
                    onPress={()=>{
                        navigation.navigate("SecondTutorial")
                    }}
                />
                <Text style={{flex: 1}}>
                    Квесты
                </Text>
                <View style={{marginBottom: 25}}>
                    <CustomButton
                        onPress={()=>{
                            navigation.navigate("Greetings4")
                        }}
                        title={'Продолжить'}/>
                </View>
            </View>
        </MainContainer>
    );
};

export default TutorialQuestionsScreen;
