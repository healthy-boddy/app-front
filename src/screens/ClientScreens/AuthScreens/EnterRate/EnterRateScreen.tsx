import React, {useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity, FlatList} from "react-native";
import ClientContainer from "../../ClientScreenComponents/ClientContainer";
import BackButton from "../../../../components/BackButton";
import {RadioButton, Title} from "react-native-paper";
import StatusBar from "../../ClientScreenComponents/StatusBar";
import {useNavigation} from "@react-navigation/native";
import {color1, color2} from "../../../../helpers/colors";
import CustomButton from "../../../../components/CustomButton";
import Checked from "../../../../assets/Icons/Checked";

const EnterRateScreen = () => {
    const navigation: any = useNavigation();
    const [standard, setStandard] = useState<boolean>(true)

    let standardData = [
        {title: 'Объем включенных анализов', key: 1, checked: false},
        {title: 'Объем консультаций', key: 2, checked: false},
        {title: 'Персональный нутрициолог', key: 3, checked: true},
        {title: 'Персональный психотерапевт', key: 4, checked: true},
        {title: 'Ведение консилиумом врачей', key: 5, checked: false},
        {title: 'Полный генетический тест, констультация и расшифровка блоков', key: 6, checked: false},
        {title: 'Выезд медсестры', key: 7, checked: false},
        {title: 'Персональный остеопат', key: 8, checked: false},
        {title: 'Диагностика внутренних органов', key: 9, checked: false},
        {title: 'Безлимитные консультации по вопросам здоровья семьи', key: 10, checked: false},
        {title: 'Срочные консультации в ночное время', key: 11, checked: false},
        {title: 'Консьерж: помощь зарубежом, запись в клиники, покупка БАДов', key: 12, checked: false},
        {title: 'Подарочный бокс от партнеров', key: 13, checked: false},
        {title: 'Заморозка сопровождения', key: 14, checked: false},

    ]
    let premiumData = [
        {title: 'Объем включенных анализов', key: 1, checked: true},
        {title: 'Объем консультаций', key: 2, checked: true},
        {title: 'Персональный нутрициолог', key: 3, checked: true},
        {title: 'Персональный психотерапевт', key: 4, checked: true},
        {title: 'Ведение консилиумом врачей', key: 6, checked: true},
        {title: 'Полный генетический тест, констультация и расшифровка блоков', key: 7, checked: true},
        {title: 'Выезд медсестры', key: 8, checked: true},
        {title: 'Персональный остеопат', key: 9, checked: true},
        {title: 'Диагностика внутренних органов', key: 10, checked: true},
        {title: 'Безлимитные консультации по вопросам здоровья семьи', key: 11, checked: true},
        {title: 'Срочные консультации в ночное время', key: 12, checked: true},
        {title: 'Консьерж: помощь зарубежом, запись в клиники, покупка БАДов', key: 13, checked: true},
        {title: 'Подарочный бокс от партнеров', key: 14, checked: true},
        {title: 'Заморозка сопровождения', key: 15, checked: true},

    ]
    const standardPrice = [
        {price: '44 900 р.', title: '3 месяца', value: '3', key: 1},
        {price: '74 900 р.', title: '6 месяцев', value: '6', key: 2},
        {price: '124 900 р.', title: '12 месяцев', value: '12', key: 3},
    ]

    let [checkedTariff, setCheckedTariff] = useState('')

    const renderStandardItem = ({item}: any) => {
        return (
            <View key={item.key} style={styles.item_box_style}>
                <Text key={item.key} style={{marginVertical: 10}}>
                    {item.title}
                </Text>
                <Text>
                    {item.checked ? <Checked/> : <Text style={{color: '#8B8B8B'}}>x</Text>}
                </Text>
            </View>
        )
    }

    const renderPremiumItem = ({item}: any) => {
        return (
            <View key={item.key} style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                <Text key={item.key} style={{marginVertical: 10}}>
                    {item.title}
                </Text>
                <Text>
                    {item.checked ? <Checked/> : <Text style={{color: '#8B8B8B'}}>x</Text>}
                </Text>
            </View>
        )
    }
    const renderStandardItemFooter = () => {
        return (
            <View>
                {standardPrice?.map((item) => (
                    <View style={styles.price_box} key={item.key}>
                        <View>
                            <Text>
                                {item.title}
                            </Text>
                            <Text>
                                {item.price}
                            </Text>
                        </View>
                        <View>
                            <RadioButton
                                value="first"
                                status={checkedTariff === item.value ? 'checked' : 'unchecked'}
                                uncheckedColor={color1}
                                color={color1}
                            />
                        </View>
                    </View>
                ))}
                <View>
                    <CustomButton
                        title={'Оплатить'}
                    />
                    <CustomButton
                        buttonTitle={{color: color1}}
                        buttonStyles={styles.button_style}
                        title={'Бессплатный старт 5 дней'}
                    />
                </View>
            </View>
        )
    }

    return (
        <ClientContainer>
            <View>
                <BackButton onPress={() => {
                    navigation.navigate('EnterWeight')
                }}/>
            </View>
            <View style={{width: '100%'}}>
                <View style={{alignItems: 'center'}}>
                    <Title>
                        4 из 4
                    </Title>
                </View>
                <StatusBar activeWidth={{width: '100%'}}/>
            </View>
            <View style={{marginVertical: 25}}>
                <Title>
                    Выберите тариф
                </Title>
                <Text style={{marginTop: 10, color: '#8B8B8B'}}>
                    Выберите подходящий для вас вариант и мы сразу с вами свяжимся.
                </Text>
            </View>
            <View style={styles.title_box}>
                <TouchableOpacity activeOpacity={0.6} onPress={() => {
                    setStandard(true)
                }}>
                    <Text style={[styles.title_box_text, standard && {
                        color: color1,
                        borderBottomWidth: 2,
                        borderBottomColor: color1
                    }]}>
                        Стандарт
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.6} onPress={() => {
                    setStandard(false)
                }}>
                    <Text style={[styles.title_box_text, !standard && {
                        color: color1,
                        borderBottomWidth: 2,
                        borderBottomColor: color1
                    }]}>
                        Премиум
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={{flex: 1, marginTop: 15, width: '100%',}}>
                {standard ? <FlatList
                        showsVerticalScrollIndicator={false}
                        data={standardData}
                        renderItem={renderStandardItem}
                        extraData={standardData}
                        ListFooterComponent={renderStandardItemFooter}
                    /> :
                    <FlatList
                        data={premiumData}
                        renderItem={renderPremiumItem}
                        ListFooterComponent={renderStandardItemFooter}

                    />}
            </View>
        </ClientContainer>
    );
};

export default EnterRateScreen;

const styles = StyleSheet.create({
    title_box: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    title_box_text: {
        fontWeight: 'bold',
        fontSize: 18,

    },
    price_box: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: color2,
        marginVertical: 10,
        padding: 10,
        borderRadius: 20
    },
    button_style: {
        marginVertical: 15,
        backgroundColor: 'transparent',
        borderWidth: 2,
        borderColor: color1
    },
    item_box_style: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
})
