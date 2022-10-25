import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image, SafeAreaView, Dimensions, Platform} from "react-native";
import BackButton from "../../../../components/BackButton";
import {useDispatch, useSelector} from "react-redux";
import PenIcon from "../../../../assets/Icons/PenIcon";
import Title from '../../../../components/Title'
import EmailIcon from "./SingleScreenIcons/EmailIcon";
import NotificationIcon from "./SingleScreenIcons/NotificationIcon";
import SmsIcon from "./SingleScreenIcons/SmsIcon";
import RightIcon from "../../../../assets/Icons/RightIcon";
import {color1} from "../../../../helpers/colors";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {deleteClientData, deleteUserBio, deleteUserToken} from "../../../../store/actions/user_token";
import {deleteUserData} from "../../../../store/actions/user_data";
import {useNavigation} from "@react-navigation/native";
import {BottomSheet} from 'react-native-btr';
import SendMessageIcon from "./SingleScreenIcons/SendMessageIcon";
import ChatMessageIcon from "./SingleScreenIcons/ChatMessageIcon";
import Modal from "react-native-modal";

const deviceWidth = Dimensions.get("window").width;

const UserSinglePage = () => {
    const userData = useSelector((store: any) => store.user_data.user_data);
    const dispatch = useDispatch();
    const navigation = useNavigation();
    let [image, setImage] = useState([]);
    const [visible, setVisible] = useState(false)

    const logOut = async () => {
        await AsyncStorage.removeItem('userToken');
        dispatch(deleteUserToken());
        dispatch(deleteClientData());
        dispatch(deleteUserData());
        dispatch(deleteUserBio())
    }

    const toggleBottomNavigationView = () => {
        setVisible(!visible);
    };

    return (
        <View style={{
            flex: 1,
            width: '100%',
            backgroundColor: "#FFFFFF",
        }}>
            <View style={styles.container}>
                <BackButton onPress={() => { // @ts-ignore
                    navigation.navigate('Main')
                }}/>
                <View style={{position: "relative", alignSelf: 'center'}}>
                    <TouchableOpacity activeOpacity={0.2} style={styles.edit_icon}>
                        <PenIcon/>
                    </TouchableOpacity>
                    <View>
                        {!image ? (
                            <Image
                                style={styles.image}
                                source={require("../../../../assets/images/np_img.png")}
                            />
                        ) : (
                            <Image style={styles.image} source={{uri: userData.avatar}}/>
                        )}
                    </View>
                    <Title titlePropStyle={{
                        textAlign: 'center',
                        marginTop: 12,
                        fontSize: 24,
                        fontWeight: '600'
                    }}>
                        {userData.user.username}
                    </Title>
                </View>
                <View style={{flex: 1, marginTop: 40}}>
                    <TouchableOpacity style={styles.button}>
                        <EmailIcon/>
                        <Text style={styles.button_title}>Имя, номер телефона, email</Text>
                        <View style={{alignItems: 'flex-end'}}>
                            <RightIcon fill={'#797979'}/>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.line}/>

                    <TouchableOpacity style={styles.button}>
                        <NotificationIcon/>
                        <Text style={styles.button_title}>Уведомления</Text>
                        <View style={{alignItems: 'flex-end'}}>
                            <RightIcon fill={'#797979'}/>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.line}/>

                    <TouchableOpacity onPress={toggleBottomNavigationView} style={styles.button}>
                        <SmsIcon/>
                        <Text style={styles.button_title}>Помощь</Text>
                        <View style={{alignItems: 'flex-end'}}>
                            <RightIcon fill={'#797979'}/>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.line}/>
                    <TouchableOpacity onPress={logOut}>
                        <Text style={styles.logOut}>
                            Выйти из учетной записи
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={{flex: 1, width: '100%'}}>
                <Modal
                    style={{
                        flex: 1,
                        justifyContent: 'flex-end',
                        width: '100%',
                        left: 0,
                        marginLeft: 'auto',
                        marginBottom: 'auto'
                    }}
                    isVisible={visible}
                    onBackdropPress={toggleBottomNavigationView}
                    useNativeDriver={true}
                    propagateSwipe={true}
                    animationIn={'fadeInUp'}
                    animationOut={'fadeOutDownBig'}
                    deviceWidth={deviceWidth}
                >
                    <View style={styles.modal}>
                        <View style={styles.modal_line}/>
                        <Text style={{textAlign: 'center', color: '#797979', marginBottom: 30}}>
                            Служба поддержки
                        </Text>

                        <TouchableOpacity style={{
                            flexDirection: 'row'
                        }}>
                            <ChatMessageIcon/>
                            <Text style={styles.modal_text}>
                                Написать на почту
                            </Text>
                        </TouchableOpacity>
                        <View style={{marginVertical: 10}}/>
                        <TouchableOpacity style={{
                            flexDirection: 'row'
                        }}>
                            <SendMessageIcon/>
                            <Text style={styles.modal_text}>
                                Написать в чат
                            </Text>
                        </TouchableOpacity>

                    </View>
                </Modal>
            </View>
        </View>

    );
};

export default UserSinglePage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        backgroundColor: "#FFFFFF",
    },
    edit_icon: {
        position: "absolute",
        alignSelf: "flex-end",
        top: 20,
        zIndex: 1,
        backgroundColor: "#fFF",
        borderRadius: 100,
        padding: 5,
    },
    image: {
        width: 120,
        height: 120,
        borderRadius: 100,
        marginTop: 25,
    },
    button: {
        flexDirection: 'row',
        alignItems: "center"

    },
    button_title: {
        fontSize: 16,
        fontWeight: '400',
        fontStyle: "normal",
        color: '#1E1E1E',
        marginLeft: 8,
        width: 400
    },
    line: {
        height: 2,
        backgroundColor: '#BDBDBD',
        marginVertical: 15,
        width: '1001%'
    },
    logOut: {
        color: color1,
        fontStyle: "normal",
        fontSize: 16,
        fontWeight: '500'
    },
    modal: {
        height: 212,
        backgroundColor: '#fff',
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        paddingHorizontal: 16,
        width: '100%'
    },
    modal_line: {
        height: 4,
        width: 40,
        borderRadius: 30,
        marginVertical: 10,
        alignSelf: 'center',
        backgroundColor: '#C4C3C5',
    },
    modal_text: {
        marginLeft: 12,
        color: color1,
        lineHeight: 21,
        fontWeight: '400',
        fontStyle: "normal",
        fontSize: 18
    }


})
