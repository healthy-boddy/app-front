import React, {useEffect, useRef, useState} from 'react';
import {View, Text, StyleSheet, TextInput} from "react-native";
import Container from "../../../../components/Container";
import BackButton from "../../../../components/BackButton";
import {color2, color3} from "../../../../helpers/colors";
import ErrorIcon from "../../../../assets/Icons/ErrorIcon";
import {useNavigation} from "@react-navigation/native";
import CustomButton from "../../../../components/CustomButton";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Title from "../../../../components/Title";
import {setUserToken} from "../../../../store/actions/user_token";
import {baseUrl} from "../../../../helpers/url";
import FormattingExample from "../../../../components/FormattingExample";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";

const PinCodeScreen = (props: any) => {
    const navigation: any = useNavigation();
    let [validPin, setValidPin] = useState(true);
    const dispatch = useDispatch();

    let form = useSelector((store: any) => store.auth_data.formData)

    // async function handleSendPin() {
    //     const pinForm = new FormData()
    //     pinForm.append('email_or_phone', form._parts[2][1])
    //     pinForm.append('password', pin)
    //     console.log(pinForm)
    //     try {
    //         const response = await axios.post(baseUrl + '/token/', pinForm, {
    //             headers: {
    //                 'Content-Type': 'multipart/form-data'
    //             },
    //         })
    //         console.log(response, 'rrr')
    //         setValidPin(true)
    //         dispatch(setUserToken(response.data.access))
    //         await AsyncStorage.setItem('userToken', response.data.access)
    //     } catch (error) {
    //         setValidPin(false)
    //         console.log(error)
    //     }
    // }

    async function handleSend(pin: any) {
        const pinForm = new FormData()
        pinForm.append('email_or_phone', form._parts[2][1])
        pinForm.append('password', pin)
        try {
            const response = await axios.post(baseUrl + '/token/', pinForm, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
            })
            console.log(response, 'rrr')
            setValidPin(true)
            dispatch(setUserToken(response.data.access))
            await AsyncStorage.setItem('userToken', response.data.access)
        } catch (error) {
            setValidPin(false)
            console.log(error)
        }
    }

    console.log(props.email_name, 'props-email')

    return (
        <Container containerProp={styles.inlineContainer}>
            <View>
                <BackButton onPress={() => {
                    navigation.navigate('CreateAccount')
                }}/>
            </View>
            <KeyboardAwareScrollView>
                <View style={styles.number_box}>
                    <Title>
                        Введите код подтверждения
                    </Title>
                    <Text style={{marginTop: 10, color: color3}}>
                        Введите код, который мы отправили сообщением на {props?.email_name}
                    </Text>
                </View>
                <View style={{flex: 1}}>
                    <FormattingExample handleSend={handleSend}/>
                </View>
            </KeyboardAwareScrollView>
        </Container>
    );
};

export default PinCodeScreen;
const styles = StyleSheet.create({
    backBtn: {
        marginTop: 35
    },
    inlineContainer: {
        paddingHorizontal: 20,
        paddingTop: 35
    },
    number_box: {
        marginTop: 30
    },
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
    enter_pin_title_box: {
        marginTop: 15,
        flex: 1
    },
    enter_pin_title: {
        color: color3
    },
    error_message: {
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: '#FEEFEF',
        padding: 10,
        borderRadius: 15,
        marginVertical: 5
    },
    input: {
        padding: 15,
        textAlign: 'center'
    }
})


// let pin2Ref = useRef(null)
// let pin3Ref = useRef(null)
// let pin4Ref = useRef(null)
// const [pin1, setPin1] = useState('')
// const [pin2, setPin2] = useState('')
// const [pin3, setPin3] = useState('')
// const [pin4, setPin4] = useState('')
// const pin = pin1 + pin2 + pin3 + pin4

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
{/*    <View>*/
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
