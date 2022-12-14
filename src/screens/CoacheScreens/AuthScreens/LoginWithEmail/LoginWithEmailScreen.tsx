import React, {useState} from "react";
import {
    View,
    StyleSheet,
    Text, ActivityIndicator,

} from "react-native";
import Title from "../../../../components/Title";
import axios from "axios";
import {baseUrl} from "../../../../helpers/url";
import {useNavigation} from "@react-navigation/native";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import {color1} from "../../../../helpers/colors";
import CustomInput from "../../../../components/CustomInput";
import {WrapperPage} from "../../../../components/core/wrapper";
import MainContainer from "../../../../components/MainContainer";
import CustomButton from "../../../../components/CustomButton";
import BackButton from "../../../../components/BackButton";

const LoginWithEmailScreen = (props: any) => {
    const navigation: any = useNavigation();
    const [email, setEmail] = useState("");
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)

    async function handleSendEmail() {
        setLoading(true)
        let form = new FormData();
        form.append("email", email);

        try {
            const response1 = await axios.post(baseUrl + "/send_pin/", form, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            console.log(response1, "sended-pin");
            if (response1.status === 200) {
                console.log("OK");
                setError(false)
                setLoading(false)
                navigation.navigate("LoginPin", {
                    email: email,
                });
            }
        } catch (error: any) {
            console.log(error.request.response, 'error');
            if (error.request.response === '{"non_field_errors":["User not found"]}') {
                setError(true)
            }
        }
    }

    return (
        <MainContainer>
            <BackButton onPress={() => {
                navigation.navigate("Login");
            }}/>
            <KeyboardAwareScrollView
                contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}
                showsVerticalScrollIndicator={false}
                scrollEnabled={false}
                style={{width: "100%", marginTop: 16}}
            >
                {loading && <ActivityIndicator color={color1} size={'large'}/>}
                <Title>Введите свой Email</Title>
                <Text
                    style={{
                        marginTop: 8,
                        color: "#8B8B8B",
                        fontSize: 16,
                        fontWeight: "400",
                        lineHeight: 20,
                    }}
                >
                    Мы отправим письмо с кодом подтверждения на ваш Email
                </Text>
                <View style={{flex: 1, width: '100%'}}>
                    <View style={[{marginTop: 30, width: '100%'}, error &&
                    {
                        borderColor: 'red',
                        borderWidth: 1,
                        borderRadius: 10
                    }
                    ]}>
                        <CustomInput
                            placeholder={"Введите почту"}
                            onChangeText={setEmail}
                            value={email}
                        />
                    </View>
                    {error && <Text style={{
                        fontSize: 14,
                        color: 'red',
                        fontWeight: '400'
                    }}>
                        Пользователь с таким email не найден
                    </Text>}
                </View>
                <View style={{marginBottom: 40}}>
                    <CustomButton
                        disabled={loading}
                        onPress={handleSendEmail}
                        title={'Продолжить'}/>
                </View>
            </KeyboardAwareScrollView>
        </MainContainer>
    );
};

export default LoginWithEmailScreen;

const styles = StyleSheet.create({
    inlineContainer: {
        paddingHorizontal: 20,
        paddingTop: 35,
    },
    input: {
        width: "100%",
        borderRadius: 40,
        backgroundColor: "#e5e5e8",
        marginTop: 25,
        padding: 10,
    },
    text: {
        color: color1,
        fontWeight: "bold",
        marginHorizontal: 3,
        fontSize: 16,
    },
});
