import React, {useCallback, useEffect, useState} from 'react';
import {View, Text, Platform, Button, TouchableOpacity} from "react-native";
import ClientContainer from "../../ClientScreenComponents/ClientContainer";
import {Title} from "react-native-paper";
import StatusBar from "../../ClientScreenComponents/StatusBar";
import BackButton from "../../../../components/BackButton";
import {useNavigation} from "@react-navigation/native";
import DateTimePicker from "@react-native-community/datetimepicker";
import CustomButton from "../../../../components/CustomButton";
import moment, {Moment} from "moment";
import NumberPlease from 'react-native-number-please';
import {useDispatch, useSelector} from "react-redux";
import {setFormData} from "../../../../store/actions/auth_data";

const EnterAgeScreen = () => {
    const navigation: any = useNavigation();
    const dispatch = useDispatch()
    const [date, setDate] = useState<Date>(new Date());
    const [show, setShow] = useState(Platform.OS === 'ios');
    const [mode, setMode] = useState('date');

    const format2 = "YYYY-MM-DD"

    const onChange = (event: any, selectedDate: any) => {
        console.log({selectedDate, event: event.nativeEvent})
        if (Platform.OS === 'android') {
            setShow(false);
        }
        setDate(selectedDate);
        console.log(selectedDate, 'currentDate')
    };
    let form = useSelector((store: any) => store.auth_data.formData)

    const showMode = (currentMode: string) => {
        if (Platform.OS === 'android') {
            setShow(false);
            setDate(date)
            // for iOS, add a button that closes the picker
        }
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const showTimepicker = () => {
        showMode('time');
    };

    function handleNext() {
        const dateForm = new FormData()
        if (!date) {
            return
        }
        form.append('birthday', moment(date).format(format2))
        navigation.navigate("EnterWeight")
    }

    return (
        <ClientContainer>
            <View>
                <BackButton onPress={() => {
                    navigation.navigate('EnterSex')
                }}/>
            </View>
            <View style={{width: '100%'}}>
                <View style={{alignItems: 'center'}}>
                    <Title>
                        2 из 4
                    </Title>
                </View>
                <StatusBar activeWidth={{width: '50%'}}/>
            </View>
            <View style={{marginVertical: 25, alignItems: 'center'}}>
                <Title>
                    Ваш возраст
                </Title>
                <Text style={{fontWeight: 'bold', marginTop: 10, fontSize: 28}}>
                    {moment(date).format(format2)}
                </Text>
            </View>
            <View style={{flex: 1}}>
                {Platform.OS === 'android' && (
                    <TouchableOpacity onPress={() => {
                        setShow(!show)
                    }}>
                        <Text>
                            Изменить возраст
                        </Text>
                    </TouchableOpacity>
                )}

                {show && <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={'date'}
                    onChange={onChange}
                    maximumDate={new Date()}
                    display={Platform.OS === 'android' ? 'default' : 'spinner'}
                />}
            </View>
            <View style={{marginBottom: 25}}>
                <CustomButton
                    title={'Продолжить'}
                    onPress={handleNext}
                />
            </View>
        </ClientContainer>
    );
};

export default EnterAgeScreen;
