import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Pressable} from "react-native";
import ClientContainer from "../../ClientScreenComponents/ClientContainer";
import BackIcon from "../../../../assets/Icons/BackIcon";
import StatusBar from "../../ClientScreenComponents/StatusBar";
import {RadioButton, Title} from "react-native-paper";
import {color1, color2} from "../../../../helpers/colors";
import CustomButton from "../../../../components/CustomButton";
import {useNavigation} from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {deleteUserBio, deleteUserToken} from "../../../../store/actions/user_token";
import {deleteUserData} from "../../../../store/actions/user_data";
import {useDispatch, useSelector} from "react-redux";
import ErrorPopUp from "../../../../components/ErrorPopUp";
import {setFormData} from "../../../../store/actions/auth_data";

const EnterSexScreen = () => {
    const dispatch = useDispatch()
    const navigation: any = useNavigation();

    const genderItems = [
        {gender: 'Мужской', value: 'male', key: 1},
        {gender: 'Женский', value: 'female', key: 2},
    ]
    const [gender, setGender] = useState('');
    const [radioGender, setRadioGender] = useState('');
    const [genderVerify, setGenderVerify] = useState(false)


    function handleNavigate() {
        let form = new FormData()
        if (!gender) {
            setGenderVerify(true)
            return
        }
        form.append('gender', gender)
        dispatch(setFormData(form))
        setGenderVerify(false)
        navigation.navigate('EnterAge')
    }

    const logout = async () => {
        await AsyncStorage.removeItem('userToken');
        dispatch(deleteUserToken());
        dispatch(deleteUserBio());
        dispatch(deleteUserData());
    }

    return (
        <ClientContainer>
            <Pressable onPress={logout} style={{marginTop: 25}}>
                <BackIcon/>
            </Pressable>
            <View style={{width: '100%'}}>
                <View style={{alignItems: 'center'}}>
                    {genderVerify && <ErrorPopUp style={{marginTop: 15}} error={'Выберите пол'}/>}
                    <Title>
                        1 из 4
                    </Title>
                </View>
                <StatusBar/>
            </View>
            <View style={{marginVertical: 25,}}>
                <Title>
                    Пол
                </Title>
            </View>
            <View style={{flex: 1}}>
                {genderItems.map((item) => (
                    <TouchableOpacity key={item.key} style={styles.roleBox} onPress={() => {
                        setGender(item.value)
                        setRadioGender(item.gender)
                    }}>
                        <Text style={styles.roleItem}>
                            {item.gender}
                        </Text>
                        <Text>
                            <RadioButton
                                value="first"
                                status={radioGender === item.gender ? 'checked' : 'unchecked'}
                                uncheckedColor={color1}
                                color={color1}
                            />
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>
            <View style={{marginBottom: 25}}>
                <CustomButton onPress={handleNavigate} title={'Продолжить'}/>
            </View>
        </ClientContainer>
    );
};
export default EnterSexScreen;

const styles = StyleSheet.create({
    roleBox: {
        width: '100%',
        backgroundColor: color2,
        marginBottom: 10,
        borderRadius: 30,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 10,
        paddingHorizontal: 15
    },
    roleItem: {
        top: 7,
        fontSize: 16
    }
})
