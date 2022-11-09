import React from 'react';
import {Text, View} from "react-native";
import MainContainer from "../../../../components/MainContainer";
import CustomButton from "../../../../components/CustomButton";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {deleteClientData, deleteUserToken} from "../../../../store/actions/user_token";
import {deleteUserData} from "../../../../store/actions/user_data";
import {useDispatch} from "react-redux";
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
                    height:'100%',
                }}>
                    <Text style={{
                        fontSize:32,
                        fontWeight:'600',
                        lineHeight:34,
                        color:'#000',
                        marginTop:24
                    }}>
                        Analysis
                    </Text>
                <View style={{alignItems: 'center', flex: 1, justifyContent: 'center', bottom:40}}>
                    <BigIcon/>
                    <Text  style={{
                        fontSize:20,
                        fontWeight:'600',
                        lineHeight:32,
                        color:'#000',
                        marginTop:4,
                        textAlign:'center',
                        marginHorizontal:40
                    }}>
                        This is where your medical records will be stored
                    </Text>
                    <Text style={{
                        fontSize:18,
                        fontWeight:'400',
                        lineHeight:21,
                        color:'#797979',
                        marginTop:20,
                        textAlign:'center'
                    }}>
                        You don't have any analysis results yet
                    </Text>
                </View>
                <View style={{marginBottom: 25}}>
                    <CustomButton
                        title={'Add analyse'}
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
