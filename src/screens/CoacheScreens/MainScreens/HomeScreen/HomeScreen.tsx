import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Image} from "react-native";
import MainContainer from "../../../../components/MainContainer";
import {useNavigation} from "@react-navigation/native";
import {useDispatch, useSelector} from "react-redux";
import {color1} from "../../../../helpers/colors";
import {BellIcon} from "../../../../assets/Icons/BellIcon";
import Title from "../../../../components/Title";
import CustomButton from "../../../../components/CustomButton";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {deleteUserBio, deleteUserToken} from "../../../../store/actions/user_token";
import {deleteUserData, setUserData} from "../../../../store/actions/user_data";
import axios from "axios";
import {baseUrl} from "../../../../helpers/url";

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
            <View style={styles.user_data}>
                <View style={{flexDirection: 'row', marginTop: 25}}>
                    <View>
                        <Image style={styles.image} source={{uri: userDate.avatar}}/>
                    </View>
                    <Text style={styles.username}>
                        {userDate?.user?.username}
                    </Text>
                </View>
                <View style={{top: 15}}>
                    <BellIcon fill={"#797979"}/>
                </View>
            </View>
            <View style={{marginTop: 10}}>
                <Title>
                    Добрый день {userDate?.user?.username}
                </Title>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center', flex: 1,}}>
                <Text style={{fontWeight: 'bold', fontSize: 16, marginBottom: 10}}>
                    Завершите регистрацию
                </Text>
                <Text>
                    чтобы получить первых клиентов
                </Text>
                <View style={{width: '100%', marginTop: 25}}>
                    <CustomButton title={'Завершить регистрацию'}/>
                </View>
                <View style={{top: 25, width: 200}}>
                    <CustomButton
                        onPress={logout}
                        title={'Выйти'}
                    />
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


