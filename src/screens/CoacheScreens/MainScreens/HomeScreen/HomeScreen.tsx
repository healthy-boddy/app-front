import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from "react-native";
import MainContainer from "../../../../components/MainContainer";
import {useNavigation} from "@react-navigation/native";
import {useDispatch, useSelector} from "react-redux";
import {BellIcon} from "../../../../assets/Icons/BellIcon";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {deleteUserBio, deleteUserToken} from "../../../../store/actions/user_token";
import {deleteUserData} from "../../../../store/actions/user_data";
import axios from "axios";
import {baseUrl} from "../../../../helpers/url";
import {TimeSvg} from "../../../../navigations/CoachNavigations/icons/time-svg";

const HomeScreen = () => {
    const dispatch = useDispatch()
    const navigation: any = useNavigation();
    let AuthToken = useSelector((store: any) => store.user_token.user_token)
    const [userDate, setUserDate] = useState<any>([])
    console.log(AuthToken, 'from home screen')

    useEffect(() => {
        axios
            .get(baseUrl + "/me/", {
                headers: {
                    Authorization: "Bearer " + AuthToken,
                },
            }).then((res) => {
            setUserDate(res.data)
        })
            .catch((e) => {
                console.log(e.message, "error while getting my profile");
            });
    }, [])

    console.log(userDate, 'userDate')

    const logout = async () => {
        await AsyncStorage.removeItem('userToken');
        dispatch(deleteUserToken());
        dispatch(deleteUserBio());
        dispatch(deleteUserData());
    }
    return (
        <MainContainer>
            <View style={{
                height:'100%',
                paddingHorizontal:16
            }}>
            <View style={styles.user_data}>
                <View style={{flexDirection: 'row', marginTop: 25}}>
                    <TouchableOpacity
                    onPress={()=>navigation.navigate('CoachProfile')}
                    >
                        <Image style={styles.image} source={{uri: userDate.avatar}}/>
                    </TouchableOpacity>
                    <Text style={styles.username}>
                        {userDate?.user?.username}
                    </Text>
                </View>
                <View style={{top: 15}}>
                    {/*<BellIcon fill={"#797979"}/>*/}
                </View>
            </View>

                <View style={{
                    alignItems:'center',
                    justifyContent:'center',
                    flex:1
                }}>
                <TimeSvg />
                    <Text style={{
                        marginTop:24,
                        color:'#1E1E1E',
                        fontSize:19,
                        lineHeight:22.67,
                        fontWeight:'600',
                        textAlign:'center'
                    }}>
                        Завершите регистрацию
                    </Text>

                    <Text style={{
                        marginTop:12,
                        color:'#797979',
                        fontSize:16,
                        lineHeight:20,
                        fontWeight:'400',
                        textAlign:'center',
                        paddingHorizontal:75
                    }}>
                        После регистрации вы сможете получить первых клиентов
                    </Text>


                    <TouchableOpacity
                        style={{
                            marginTop:40
                        }}
                        onPress={()=> console.log('Pressed')}
                        >
                        <Text style={{
                            color:'#7454CF',
                            fontSize:16,
                            lineHeight:20,
                            fontWeight:'500',
                            textAlign:'center',
                        }}>
                            Завершить регистрацию
                        </Text>
                    </TouchableOpacity>

                </View>
            </View>
        </MainContainer>
    );
};
export default HomeScreen;

const styles = StyleSheet.create({
    user_data: {
        flexDirection: "row",
        width: '100%',
        justifyContent: "space-between",
        alignItems: "center"
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 50
    },
    username: {
        marginLeft: 15,
        top: 15,
        fontSize: 16,
    }
})


