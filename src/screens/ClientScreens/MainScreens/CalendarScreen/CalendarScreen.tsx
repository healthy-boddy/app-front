import React from 'react';
import {View, Text} from "react-native";
import MainContainer from "../../../../components/MainContainer";
import CustomButton from "../../../../components/CustomButton";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {deleteUserBio, deleteUserToken} from "../../../../store/actions/user_token";
import {deleteUserData} from "../../../../store/actions/user_data";
import {useDispatch} from "react-redux";

const CalendarScreen = () => {
    const dispatch = useDispatch()
    const logout = async () => {
        await AsyncStorage.removeItem('userToken');
        dispatch(deleteUserToken());
        dispatch(deleteUserBio());
        dispatch(deleteUserData());
    }

    return (
        <MainContainer>
            <View style={{top: '20%'}}>
                <CustomButton title={"выйти"} onPress={logout}/>
            </View>
        </MainContainer>
    );
};

export default CalendarScreen;
