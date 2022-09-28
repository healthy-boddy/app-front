import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from "react-native";
import Container from "../../../../components/Container";
import BackButton from "../../../../components/BackButton";
import {useNavigation} from "@react-navigation/native";
import Doctor from "../../../../assets/Icons/Doctor";
import CustomButton from "../../../../components/CustomButton";
import Title from "../../../../components/Title";
import {useDispatch, useSelector} from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {deleteUserBio, deleteUserToken} from "../../../../store/actions/user_token";
import {deleteUserData} from "../../../../store/actions/user_data";

const GreetingsScreen = (props: any) => {
    const dispatch = useDispatch()
    const navigation: any = useNavigation();
    let user_data = useSelector((store: any) => store.user_data?.user_data)
    console.log(user_data, 'from greeting screen')

    const logout = async () => {
      await AsyncStorage.removeItem('userToken');
      dispatch(deleteUserToken());
      dispatch(deleteUserBio());
      dispatch(deleteUserData());
    }

    return (
        <Container containerProp={styles.inlineContainer}>
            <View>
                <BackButton onPress={()=>{navigation.navigate("First")}}/>
            </View>
            <View style={styles.title_box}>
                <Title>
                    Здравствуйте, {user_data?.user?.username} !
                </Title>
                <Text style={{marginTop: 15}}>
                    Мы вас нашли в списке верифицированных в бадди.
                </Text>
            </View>
            <View style={styles.image_box}>
                <Doctor/>
            </View>
            <View style={{marginBottom: 25}}>
                <CustomButton onPress={()=>{navigation.navigate('Greetings2')}} title={"Продолжить"}/>
            </View>
        </Container>
    );
};

export default GreetingsScreen;
const styles = StyleSheet.create({
    inlineContainer: {
        paddingHorizontal: 20,
        paddingTop: 35
    },
    title_box: {
        marginTop: 25
    },
    image_box:{
        alignItems: "center",
        marginTop: 52,
        flex: 1
    }
})
