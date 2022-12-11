import React, {useState} from 'react';
import {View, Text} from "react-native";
import MainContainer from "../../../../components/MainContainer";
import BackButton from "../../../../components/BackButton";
import {useNavigation} from "@react-navigation/native";
import {useSelector} from "react-redux";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import CustomInput from "../../../../components/CustomInput";
import Description from "../../../../components/Description";
import {baseUrl2} from "../../../../helpers/url";

const CoachEditDataScreen = () => {
    const navigation = useNavigation<any>()
    const userData = useSelector((store: any) => store.user_data?.user_data);
    let tokenFromReducer = useSelector((store: any) => store.user_token.user_token);
    const form = new FormData()
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

    async function updateUserDate() {
        name ? form.append('username', name) : null
        phone ? form.append('phone_number', phone) : null
        email ? form.append('email', email) : null

        fetch(baseUrl2 + '/user/coach/update_me/', {
            method: 'put',
            headers: {
                Authorization: "Bearer " + tokenFromReducer,
                "Content-Type": "multipart/form-data"
            },
            body: form
        }).then((res) => {
            return res.json()
        }).then((res) => {
            setName('')
          //  setEmail('')
          //  setPhone('')
            console.log(res, 'coach update')
          navigation.navigate("CoachSingleScreen")
        })
    }

    return (
        <MainContainer>
            <View style={{height: 101}}>
                <BackButton
                    saveDate
                    onPress={() => {
                        navigation.navigate("CoachSingleScreen")
                    }}
                    onPressSaveDate={updateUserDate}
                />
            </View>
            <KeyboardAwareScrollView>
                <View>
                    <CustomInput
                        placeholder={'Имя'}
                        value={name}
                        onChangeText={(name: string) => {
                            setName(name)
                        }}
                    />
                    <Description marginTop={8} marginBottom={32}>
                        Укажите своё имя
                    </Description>
                </View>
                <View>
                    <CustomInput
                        input_style={{borderBottomLeftRadius: 0, borderBottomRightRadius: 0}}
                        placeholder={'Номер телефона'}
                        value={phone}
                        onChangeText={(phone: string) => {
                            setPhone(phone)
                        }}
                    />
                    <View style={{height: 1, backgroundColor: '#E2E2E2'}}/>
                    <CustomInput
                        input_style={{borderTopLeftRadius: 0, borderTopRightRadius: 0}}
                        placeholder={'Email'}
                        value={email}
                        onChangeText={(email: string) => {
                            setEmail(email)
                        }}
                    />
                </View>
                <Description marginTop={8}>
                    Укажите свои телефон и email, они оба могут использоваться для входа в приложение
                </Description>
            </KeyboardAwareScrollView>
        </MainContainer>
    );
};

export default CoachEditDataScreen;
