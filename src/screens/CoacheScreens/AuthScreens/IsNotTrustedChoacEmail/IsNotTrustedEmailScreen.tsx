import React from 'react';
import {View, Text, StyleSheet} from "react-native";
import MainContainer from "../../../../components/MainContainer";
import Title from "../../../../components/Title";
import Doctor from "../../../../assets/Icons/Doctor";
import CustomButton from "../../../../components/CustomButton";
import {color1} from "../../../../helpers/colors";
import {useNavigation} from "@react-navigation/native";
import {useDispatch} from "react-redux";
import {setUserRole} from "../../../../store/actions/auth_data";

const IsNotTrustedEmailScreen = () => {
    const navigation = useNavigation<any>()
    const dispatch = useDispatch()
    return (
        <MainContainer>
            <View style={{
                paddingHorizontal:16,
                height:'100%'
            }}>
            <View style={{flex: 1}}>
                <Title titlePropStyle={{marginTop: 25}}>
                    Мы не нашли вас в списке верифицированных в бадди
                </Title>
                <Text style={styles.description}>
                    Вы можете написать в службу поддержки, чтобы уточнить информацию либо зайти как клиент.
                </Text>
                <View style={{
                    justifyContent: 'center',
                    alignSelf: 'center',
                    alignItems: 'center',
                    flex: 1
                }}>
                    <Doctor/>
                </View>
                <View style={{marginBottom: 25}}>
                    <CustomButton
                        buttonStyles={{marginBottom: 12}}
                        title={'Войти как клиент'}
                        onPress={()=>{
                            dispatch(setUserRole('client'))
                            navigation.navigate('EnterName')
                        }}
                    />
                    <CustomButton
                        buttonTitle={{color: color1}}
                        buttonStyles={{backgroundColor: 'transparent', borderColor: color1, borderWidth: 2}}
                        title={'Войти как клиент'}
                    />
                </View>
            </View>
            </View>
        </MainContainer>
    );
};

export default IsNotTrustedEmailScreen;

const styles = StyleSheet.create({
    description: {
        fontSize: 16,
        fontWeight: '400',
        lineHeight: 20,
        fontStyle: "normal",
        color: '#797979',
        marginTop: 10
    }
})
