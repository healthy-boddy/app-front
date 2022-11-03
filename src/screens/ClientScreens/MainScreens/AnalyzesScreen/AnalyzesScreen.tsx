import React from 'react';
import {View, Text} from "react-native";
import MainContainer from "../../../../components/MainContainer";
import CustomButton from "../../../../components/CustomButton";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {deleteClientData, deleteUserBio, deleteUserToken} from "../../../../store/actions/user_token";
import {deleteUserData} from "../../../../store/actions/user_data";
import {useDispatch} from "react-redux";
import Title from "../../../../components/Title";
import BigIcon from "./AnalyzesScreenIcons/BigIcon";
import {useNavigation} from "@react-navigation/native";

const AnalyzesScreen = () => {
    const dispatch = useDispatch()
    const navigation = useNavigation<any>()
    const logout = async () => {
        await AsyncStorage.removeItem('userToken');
        dispatch(deleteUserToken());
        dispatch(deleteClientData());
        dispatch(deleteUserData());
    }

    return (
        <MainContainer>
            <View style={{flex: 1, paddingTop: 12}}>
                <View style={{
                    paddingHorizontal:16,
                    height:'100%'
                }}>
                    <Text style={{
                        fontSize:24,
                        fontWeight:'600',
                        lineHeight:28,
                        color:'#000'
                    }}>
                        Анализы
                    </Text>
                <View style={{alignItems: 'center', flex: 1, justifyContent: 'center'}}>
                    <BigIcon/>
                </View>
                <View style={{marginBottom: 25}}>
                    <CustomButton
                        title={'Добавить анализ'}
                        onPress={()=>{
                            navigation.navigate('AddAnalyzes')
                        }}
                    />
                </View>
            </View>
            </View>
        </MainContainer>
    );
};

export default AnalyzesScreen;
