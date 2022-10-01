import * as React from 'react';
import {View, StyleSheet, Text, TextInput} from "react-native";
import Container from "../../../../components/Container";
import BackButton from "../../../../components/BackButton";
import Title from "../../../../components/Title";
import {useNavigation} from "@react-navigation/native";
import {useEffect, useRef, useState} from "react";
import {color1, color2, color3} from "../../../../helpers/colors";
import axios from "axios";
import {setUserToken} from "../../../../store/actions/user_token";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {useDispatch} from "react-redux";
import {baseUrl} from "../../../../helpers/url";
import FormattingExample from "../../../../components/FormattingExample";
import CustomButton from "../../../../components/CustomButton";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";


const LoginPin = (props: any) => {
    const dispatch = useDispatch()
    const navigation: any = useNavigation();

    const [resendPin, setResendPin] = useState(false)

    const [time, setTime] = React.useState(25);

    useEffect(() => {
        const timerId = setInterval(() => {
            setTime((prev) => --prev)
            if (time < 1) {
                setResendPin(true)
                clearInterval(timerId);
            }
        }, 1000);
        if (resendPin) {
            clearInterval(timerId);
        }
        return () => {
            clearInterval(timerId);
        };
    }, [time]);

    console.log(props.email, 'email_or_phone')

    async function handleReSendPin() {
        let form = new FormData()
        form.append('email', props.email)
        try {
            const response1 = await axios.post(baseUrl + '/send_pin/', form, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
            })
            console.log(response1, 'sended-pin')
            if (response1.status === 200) {
                console.log('OK')
                navigation.navigate('LoginPin', {
                    email: props.email,
                })
            }
        } catch (error) {
            console.log(error)
        }
        setTime(25)
        setResendPin(false)
    }

    function handleSend(pin: any) {
        if (pin.length >= 4) {
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
            <View style={{flex: 1}}>
                <KeyboardAwareScrollView>
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
                    <View style={{}}>
                        <FormattingExample handleSend={handleSend}/>
                    </View>
                    <View style={{marginTop: 30}}>
                        {!resendPin ? <Text style={{color: color3}}>
                            Получить новый код можно 00 : {time}
                        </Text> : <CustomButton
                            title={'Получить новый код'}
                            onPress={handleReSendPin}
                        />
                        }
                    </View>
                </KeyboardAwareScrollView>
            </View>
            <Text style={{marginBottom: 25, color: color3, textAlign: 'center'}}>
                Не приходит код? <Text style={{color: color1}}>Напишите нам</Text>
            </Text>
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


{/*<View style={styles.pin_input_box}>*/
}
{/*    <View style={styles.pinInput}>*/
}
{/*        <TextInput*/
}
{/*            keyboardType="numeric"*/
}
{/*            style={styles.input}*/
}
{/*            maxLength={1}*/
}
{/*            onChangeText={(pin1: any) => {*/
}
{/*                setPin1(pin1)*/
}
{/*                if (pin1 != '') {*/
}
{/*                    // @ts-ignore*/
}
{/*                    pin2Ref.current.focus()*/
}
{/*                }*/
}
{/*            }}*/
}
{/*        />*/
}
{/*    </View>*/
}
{/*    <View style={styles.pinInput}>*/
}
{/*        <TextInput*/
}
{/*            keyboardType="numeric"*/
}
{/*            style={styles.input}*/
}
{/*            maxLength={1}*/
}
{/*            ref={pin2Ref}*/
}
{/*            onChangeText={(pin2: any) => {*/
}
{/*                setPin2(pin2)*/
}
{/*                if (pin2 != '') {*/
}
{/*                    // @ts-ignore*/
}
{/*                    pin3Ref.current.focus()*/
}
{/*                }*/
}
{/*            }}*/
}
{/*        />*/
}
{/*    </View>*/
}
{/*    <View style={styles.pinInput}>*/
}
{/*        <TextInput*/
}
{/*            keyboardType="numeric"*/
}
{/*            style={styles.input}*/
}
{/*            maxLength={1}*/
}
{/*            ref={pin3Ref}*/
}
{/*            onChangeText={(pin3: any) => {*/
}
{/*                setPin3(pin3)*/
}
{/*                if (pin3 != '') {*/
}
{/*                    // @ts-ignore*/
}
{/*                    pin4Ref.current.focus()*/
}
{/*                }*/
}
{/*            }}*/
}
{/*        />*/
}
{/*    </View>*/
}
{/*    <View style={styles.pinInput}>*/
}
{/*        <TextInput*/
}
{/*            keyboardType="numeric"*/
}
{/*            style={styles.input}*/
}
{/*            maxLength={1}*/
}
{/*            ref={pin4Ref}*/
}
{/*            onChangeText={(pin4: any) => {*/
}
{/*                setPin4(pin4)*/
}
{/*            }}*/
}
{/*        />*/
}
{/*    </View>*/
}
{/*</View>*/
}
