import * as React from 'react';
import {View, StyleSheet, Text, TextInput} from "react-native";
import Container from "../../../../components/Container";
import BackButton from "../../../../components/BackButton";
import Title from "../../../../components/Title";
import {useNavigation} from "@react-navigation/native";
import {useEffect, useRef, useState} from "react";
import {color2} from "../../../../helpers/colors";
import axios from "axios";
import {setUserToken} from "../../../../store/actions/user_token";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {useDispatch} from "react-redux";
import {baseUrl} from "../../../../helpers/url";
import FormattingExample from "../../../../components/FormattingExample";


const LoginPin = (props: any) => {
    const dispatch = useDispatch()
    const navigation: any = useNavigation();

    console.log(props.email, 'email_or_phone')

    function handleSend( pin:any ) {
        if (pin.length >= 4){
            const form = new FormData()
            form.append('phone_number', props.phone_number)
            form.append('password', pin)
            if (pin.length === 4) {
                fetch(baseUrl + '/token/', {
                    method: 'post',
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify({
                        email_or_phone: props.email,
                        password: pin
                    })
                }).then((res) => {
                    return res.json()
                }).then(async (res) => {
                    console.log(res, 'resssss')
                    if (res.access) {
                        dispatch(setUserToken(res.access))
                        await AsyncStorage.setItem('userToken', res.access)
                        console.log(res.access, 333)
                    }
                })
            }
        }
    }

    return (
        <Container containerProp={{paddingHorizontal: 20}}>
            <View style={{marginTop: 15}}>
                <BackButton onPress={() => {
                    navigation.navigate("Login")
                }}/>
            </View>
            <View>
                <Title titlePropStyle={{marginTop: 25}}>
                    Введите код подтверждения
                </Title>
                <Text style={{marginTop: 10, color: '#8B8B8B'}}>
                    Введите код, который мы отправили сообщением на {props?.email}
                </Text>
            </View>
            <View style={{flex: 1}}>
                <View style={{flex: 1}}>
                    <FormattingExample handleSend={handleSend}/>
                </View>
            </View>
        </Container>
    );
};

export default LoginPin;

const styles = StyleSheet.create({
    pin_input_box: {
        flexDirection: 'row',
        justifyContent: "space-around",
        marginTop: 20,
        left: -10
    },
    pinInput: {
        width: '20%',
        backgroundColor: color2,
        borderRadius: 15,
        height: 47
    },
    input: {
        padding: 15,
        textAlign: 'center'
    }
})












{/*<View style={styles.pin_input_box}>*/}
{/*    <View style={styles.pinInput}>*/}
{/*        <TextInput*/}
{/*            keyboardType="numeric"*/}
{/*            style={styles.input}*/}
{/*            maxLength={1}*/}
{/*            onChangeText={(pin1: any) => {*/}
{/*                setPin1(pin1)*/}
{/*                if (pin1 != '') {*/}
{/*                    // @ts-ignore*/}
{/*                    pin2Ref.current.focus()*/}
{/*                }*/}
{/*            }}*/}
{/*        />*/}
{/*    </View>*/}
{/*    <View style={styles.pinInput}>*/}
{/*        <TextInput*/}
{/*            keyboardType="numeric"*/}
{/*            style={styles.input}*/}
{/*            maxLength={1}*/}
{/*            ref={pin2Ref}*/}
{/*            onChangeText={(pin2: any) => {*/}
{/*                setPin2(pin2)*/}
{/*                if (pin2 != '') {*/}
{/*                    // @ts-ignore*/}
{/*                    pin3Ref.current.focus()*/}
{/*                }*/}
{/*            }}*/}
{/*        />*/}
{/*    </View>*/}
{/*    <View style={styles.pinInput}>*/}
{/*        <TextInput*/}
{/*            keyboardType="numeric"*/}
{/*            style={styles.input}*/}
{/*            maxLength={1}*/}
{/*            ref={pin3Ref}*/}
{/*            onChangeText={(pin3: any) => {*/}
{/*                setPin3(pin3)*/}
{/*                if (pin3 != '') {*/}
{/*                    // @ts-ignore*/}
{/*                    pin4Ref.current.focus()*/}
{/*                }*/}
{/*            }}*/}
{/*        />*/}
{/*    </View>*/}
{/*    <View style={styles.pinInput}>*/}
{/*        <TextInput*/}
{/*            keyboardType="numeric"*/}
{/*            style={styles.input}*/}
{/*            maxLength={1}*/}
{/*            ref={pin4Ref}*/}
{/*            onChangeText={(pin4: any) => {*/}
{/*                setPin4(pin4)*/}
{/*            }}*/}
{/*        />*/}
{/*    </View>*/}
{/*</View>*/}
