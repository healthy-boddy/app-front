import React, {useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity, FlatList, ScrollView} from "react-native";
import ClientContainer from "../../ClientScreenComponents/ClientContainer";
import BackButton from "../../../../components/BackButton";
import {RadioButton, Title} from "react-native-paper";
import StatusBar from "../../ClientScreenComponents/StatusBar";
import {useNavigation} from "@react-navigation/native";
import {color1, color2, color3} from "../../../../helpers/colors";
import CustomButton from "../../../../components/CustomButton";
import Checked from "../../../../assets/Icons/Checked";
import {useDispatch} from "react-redux";
import {isLogged} from "../../../../store/actions/is_logged";

const EnterRateScreen = () => {
    const navigation: any = useNavigation();
    const dispatch = useDispatch()
    const data = [
        {
            title: 'Стандарт',
            includedAnalyzes: '46-159',
            ScopeOfConsultations: '9-98',
            EscortFreeze: '1 мес.',
            price: 'от 45 000 руб'
        },
        {
            title: 'Премиум',
            includedAnalyzes: 'до 250',
            ScopeOfConsultations: '∞',
            EscortFreeze: '2 мес.',
            price: 'от 45 000 руб'
        },
    ]
    function handleMainScreen(){
        dispatch(isLogged(true))
    }
    return (
        <ClientContainer>
            <View style={{flex: 1}}>
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
                <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
                    <View style={{flex: 1, paddingHorizontal: 25,}}>
                        <View style={styles.item_box}>
                            <View style={styles.item_title_box}>
                                <Title>Стандарт</Title>
                            </View>
                            <View style={styles.item_param_box}>
                                <Text>
                                    Объем включенных анализов
                                </Text>
                                <Text style={styles.item_param_item}>
                                    46-159
                                </Text>
                            </View>
                            <View style={styles.item_param_box}>
                                <Text>
                                    Объем консультаций
                                </Text>
                                <Text style={styles.item_param_item}>
                                    9-98
                                </Text>
                            </View>
                            <View style={styles.item_param_box}>
                                <Text>
                                    Заморозка сопровождения
                                </Text>
                                <Text style={styles.item_param_item}>
                                    1 мес.
                                </Text>
                            </View>
                            <View style={styles.price_box}>
                                <Title>
                                    от 44 900 руб.
                                </Title>
                            </View>
                            <View style={{marginVertical: 14}}>
                                <CustomButton buttonStyles={{backgroundColor: '#7454CF'}} title={"Подробнее"}/>
                            </View>
                        </View>
                    </View>

                    <View style={styles.premium_box}>
                        <View style={[styles.item_box, {backgroundColor: '#E5DDFD', borderWidth: 0}]}>
                            <View style={styles.item_title_box}>
                                <Title>Премиум</Title>
                            </View>
                            <View style={styles.item_param_box}>
                                <Text>
                                    Объем включенных анализов
                                </Text>
                                <Text style={styles.item_param_item}>
                                    до 250
                                </Text>
                            </View>
                            <View style={styles.item_param_box}>
                                <Text>
                                    Объем консультаций
                                </Text>
                                <Text style={styles.item_param_item}>
                                    ∞
                                </Text>
                            </View>
                            <View style={styles.item_param_box}>
                                <Text>
                                    Заморозка сопровождения
                                </Text>
                                <Text style={styles.item_param_item}>
                                    2 мес.
                                </Text>
                            </View>
                            <View style={styles.price_box}>
                                <Title>
                                    от 180 900 руб.
                                </Title>
                            </View>
                            <View style={{marginVertical: 14}}>
                                <CustomButton buttonStyles={{backgroundColor: '#7454CF'}} title={"Подробнее"}/>
                            </View>
                        </View>
                    </View>
                    <View>
                        <CustomButton
                            buttonTitle={{color: color1}}
                            buttonStyles={{
                                backgroundColor: 'transparent',
                                borderWidth: 2,
                                borderColor: color1,
                                marginBottom: 25
                        }}
                            title={'Бессплатный старт 5 дней'}
                            onPress={handleMainScreen}
                        />
                    </View>
                </ScrollView>
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
    item_box: {
        width: '100%',
        borderRadius: 20,
        borderWidth: 2,
        borderColor: color1,
        paddingHorizontal: 20,
    },
    item_title_box: {
        marginTop: 20,
        marginBottom: 36
    },
    item_param_box: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16
    },
    item_param_item: {
        fontWeight: "bold"
    },
    price_box: {
        marginBottom: 24
    },
    premium_box:{
        flex: 1,
        paddingHorizontal: 25,
        marginTop: 16,
        marginBottom: 45
    }

})


// import React, {useState} from 'react';
// import {View, StyleSheet, Text, TouchableOpacity, FlatList} from "react-native";
// import ClientContainer from "../../ClientScreenComponents/ClientContainer";
// import BackButton from "../../../../components/BackButton";
// import {RadioButton, Title} from "react-native-paper";
// import StatusBar from "../../ClientScreenComponents/StatusBar";
// import {useNavigation} from "@react-navigation/native";
// import {color1, color2} from "../../../../helpers/colors";
// import CustomButton from "../../../../components/CustomButton";
// import Checked from "../../../../assets/Icons/Checked";
//
// const EnterRateScreen = () => {
//     const navigation: any = useNavigation();
//     const [standard, setStandard] = useState<boolean>(true)
//
//     let standardData = [
//         {title: 'Объем включенных анализов', key: 1, checked: false},
//         {title: 'Объем консультаций', key: 2, checked: false},
//         {title: 'Персональный нутрициолог', key: 3, checked: true},
//         {title: 'Персональный психотерапевт', key: 4, checked: true},
//         {title: 'Ведение консилиумом врачей', key: 5, checked: false},
//         {title: 'Полный генетический тест, констультация и расшифровка блоков', key: 6, checked: false},
//         {title: 'Выезд медсестры', key: 7, checked: false},
//         {title: 'Персональный остеопат', key: 8, checked: false},
//         {title: 'Диагностика внутренних органов', key: 9, checked: false},
//         {title: 'Безлимитные консультации по вопросам здоровья семьи', key: 10, checked: false},
//         {title: 'Срочные консультации в ночное время', key: 11, checked: false},
//         {title: 'Консьерж: помощь зарубежом, запись в клиники, покупка БАДов', key: 12, checked: false},
//         {title: 'Подарочный бокс от партнеров', key: 13, checked: false},
//         {title: 'Заморозка сопровождения', key: 14, checked: false},
//
//     ]
//     let premiumData = [
//         {title: 'Объем включенных анализов', key: 1, checked: true},
//         {title: 'Объем консультаций', key: 2, checked: true},
//         {title: 'Персональный нутрициолог', key: 3, checked: true},
//         {title: 'Персональный психотерапевт', key: 4, checked: true},
//         {title: 'Ведение консилиумом врачей', key: 6, checked: true},
//         {title: 'Полный генетический тест, констультация и расшифровка блоков', key: 7, checked: true},
//         {title: 'Выезд медсестры', key: 8, checked: true},
//         {title: 'Персональный остеопат', key: 9, checked: true},
//         {title: 'Диагностика внутренних органов', key: 10, checked: true},
//         {title: 'Безлимитные консультации по вопросам здоровья семьи', key: 11, checked: true},
//         {title: 'Срочные консультации в ночное время', key: 12, checked: true},
//         {title: 'Консьерж: помощь зарубежом, запись в клиники, покупка БАДов', key: 13, checked: true},
//         {title: 'Подарочный бокс от партнеров', key: 14, checked: true},
//         {title: 'Заморозка сопровождения', key: 15, checked: true},
//
//     ]
//     const standardPrice = [
//         {price: '44 900 р.', title: '3 месяца', value: '3', key: 1},
//         {price: '74 900 р.', title: '6 месяцев', value: '6', key: 2},
//         {price: '124 900 р.', title: '12 месяцев', value: '12', key: 3},
//     ]
//
//     let [checkedTariff, setCheckedTariff] = useState('')
//
//     const renderStandardItem = ({item}: any) => {
//         return (
//             <View key={item.key} style={styles.item_box_style}>
//                 <Text key={item.key} style={{marginVertical: 10}}>
//                     {item.title}
//                 </Text>
//                 <Text>
//                     {item.checked ? <Checked/> : <Text style={{color: '#8B8B8B'}}>x</Text>}
//                 </Text>
//             </View>
//         )
//     }
//
//     const renderPremiumItem = ({item}: any) => {
//         return (
//             <View key={item.key} style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
//                 <Text key={item.key} style={{marginVertical: 10}}>
//                     {item.title}
//                 </Text>
//                 <Text>
//                     {item.checked ? <Checked/> : <Text style={{color: '#8B8B8B'}}>x</Text>}
//                 </Text>
//             </View>
//         )
//     }
//     const renderStandardItemFooter = () => {
//         return (
//             <View>
//                 {standardPrice?.map((item) => (
//                     <View style={styles.price_box} key={item.key}>
//                         <View>
//                             <Text>
//                                 {item.title}
//                             </Text>
//                             <Text>
//                                 {item.price}
//                             </Text>
//                         </View>
//                         <View>
//                             <RadioButton
//                                 value="first"
//                                 status={checkedTariff === item.value ? 'checked' : 'unchecked'}
//                                 uncheckedColor={color1}
//                                 color={color1}
//                             />
//                         </View>
//                     </View>
//                 ))}
//                 <View>
//                     <CustomButton
//                         title={'Оплатить'}
//                     />
//                     <CustomButton
//                         buttonTitle={{color: color1}}
//                         buttonStyles={styles.button_style}
//                         title={'Бессплатный старт 5 дней'}
//                     />
//                 </View>
//             </View>
//         )
//     }
//
//     return (
//         <ClientContainer>
//             <View>
//                 <BackButton onPress={() => {
//                     navigation.navigate('EnterWeight')
//                 }}/>
//             </View>
//             <View style={{width: '100%'}}>
//                 <View style={{alignItems: 'center'}}>
//                     <Title>
//                         4 из 4
//                     </Title>
//                 </View>
//                 <StatusBar activeWidth={{width: '100%'}}/>
//             </View>
//             <View style={{marginVertical: 25}}>
//                 <Title>
//                     Выберите тариф
//                 </Title>
//                 <Text style={{marginTop: 10, color: '#8B8B8B'}}>
//                     Выберите подходящий для вас вариант и мы сразу с вами свяжимся.
//                 </Text>
//             </View>
//             <View style={styles.title_box}>
//                 <TouchableOpacity activeOpacity={0.6} onPress={() => {
//                     setStandard(true)
//                 }}>
//                     <Text style={[styles.title_box_text, standard && {
//                         color: color1,
//                         borderBottomWidth: 2,
//                         borderBottomColor: color1
//                     }]}>
//                         Стандарт
//                     </Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity activeOpacity={0.6} onPress={() => {
//                     setStandard(false)
//                 }}>
//                     <Text style={[styles.title_box_text, !standard && {
//                         color: color1,
//                         borderBottomWidth: 2,
//                         borderBottomColor: color1
//                     }]}>
//                         Премиум
//                     </Text>
//                 </TouchableOpacity>
//             </View>
//             <View style={{flex: 1, marginTop: 15, width: '100%',}}>
//                 {standard ? <FlatList
//                         showsVerticalScrollIndicator={false}
//                         data={standardData}
//                         renderItem={renderStandardItem}
//                         extraData={standardData}
//                         ListFooterComponent={renderStandardItemFooter}
//                     /> :
//                     <FlatList
//                         data={premiumData}
//                         renderItem={renderPremiumItem}
//                         ListFooterComponent={renderStandardItemFooter}
//
//                     />}
//             </View>
//         </ClientContainer>
//     );
// };
//
// export default EnterRateScreen;
//
// const styles = StyleSheet.create({
//     title_box: {
//         flexDirection: 'row',
//         justifyContent: 'space-around',
//     },
//     title_box_text: {
//         fontWeight: 'bold',
//         fontSize: 18,
//
//     },
//     price_box: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         backgroundColor: color2,
//         marginVertical: 10,
//         padding: 10,
//         borderRadius: 20
//     },
//     button_style: {
//         marginVertical: 15,
//         backgroundColor: 'transparent',
//         borderWidth: 2,
//         borderColor: color1
//     },
//     item_box_style: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         justifyContent: 'space-between'
//     }
// })
