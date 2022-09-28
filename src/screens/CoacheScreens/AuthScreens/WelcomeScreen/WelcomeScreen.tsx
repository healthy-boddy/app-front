import React from 'react';
import {View, Text, StyleSheet} from "react-native";
import AppLogo from "../../../../assets/Icons/AppLogo";
import Container from "../../../../components/Container";
import {color1} from "../../../../helpers/colors";
import CustomButton from "../../../../components/CustomButton";
import {useNavigation} from "@react-navigation/native";

const WelcomeScreen : React.FC = (props) => {
    const navigation: any = useNavigation();
    return (
        <Container containerProp={styles.inlineContainer}>
            <View style={{flex: 1}}>
                <View style={{flex: 1, justifyContent: 'center'}}>
                    <View style={styles.logo}>
                        <AppLogo/>
                    </View>
                    <View>
                        <Text style={styles.welcome}>
                            Добро пожаловать
                        </Text>
                    </View>
                </View>
                <View style={styles.buttons_box}>
                    <View>
                        <CustomButton
                            title={'Зарегистрироваться'}
                            buttonStyles={{marginVertical: 15}}
                            onPress={()=>{navigation.navigate('EnterName')}}
                        />
                        <CustomButton
                            title={'Войти'}
                            buttonStyles={styles.loginBtn}
                            buttonTitle={{color: color1}}
                            onPress={()=>{navigation.navigate('Login')}}
                        />
                    </View>
                </View>
            </View>
        </Container>

    );
};

export default WelcomeScreen;
const styles = StyleSheet.create({

    inlineContainer: {
        paddingHorizontal: 20,
        paddingTop: 35
    },
    welcome: {
        textAlign: "center",
        fontSize: 24,
        fontWeight: "bold",
        color: color1,
        marginTop: 25
    },
    logo_title: {
        textAlign: 'center',
        color: color1,
        fontSize: 32,
    },
    logo: {
        alignItems: 'center'
    },
    buttons_box: {
        marginBottom: 20
    },
    loginBtn:{
        backgroundColor: 'transparent',
        borderColor: color1,
        borderWidth: 2
    }
})
