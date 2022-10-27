import React, {useState} from 'react';
import {Dimensions, TouchableOpacity, Image, SafeAreaView, StyleSheet, Text, View,} from "react-native";
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
        console.log(visible)
    };

    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: "#FFFFFF",
            width: '100%',
        }}>
            <View

                style={styles.container}>
                <BackButton onPress={() => { // @ts-ignore
                    navigation.navigate('Main')
                }}/>
                <View style={{position: "relative", alignItems: 'center'}}>
                    <View>
                        {!image ? (
                            <Image
                                style={styles.image}
                                source={require("../../../../assets/images/np_img.png")}
                            />
                        ) : (
                            <Image style={styles.image} source={{ uri: userData.avatar }} />
                        )}
                        <TouchableOpacity style={styles.edit_icon}>
                            <PenIcon />
                        </TouchableOpacity>
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
                <View style={{ marginTop: 40, flex: 1}} />
                    <TouchableOpacity style={styles.button}>
                        <EmailIcon/>
                        <Text style={styles.button_title}>Имя, номер телефона, email</Text>
                        <View style={{alignItems: 'flex-end'}}>
                            <RightIcon fill={'#797979'}/>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.line}/>

                    <TouchableOpacity
                        onPress={()=>{
                            console.log('notifications')}}
                        style={styles.button}>
                        <NotificationIcon/>
                        <Text style={styles.button_title}>Уведомления</Text>
                        <View style={{alignItems: 'flex-end'}}>
                            <RightIcon fill={'#797979'}/>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.line}/>
                    <TouchableOpacity onPress={toggleBottomNavigationView}
                                      style={styles.button}>
                        <SmsIcon/>
                        <Text style={styles.button_title}>Помощь</Text>
                        <View style={{alignItems: 'flex-end'}}>
                            <RightIcon fill={'#797979'}/>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.line}/>
                    <TouchableOpacity
                        onPress={logOut}
                        style={{
                            marginTop:9
                        }}>
                        <Text style={styles.logOut}>
                            Выйти из учетной записи
                        </Text>
                    </TouchableOpacity>
            </View>

            <View style={{flex: 1, width: '100%'}}>
                <Modal
                    style={{
                        flex: 1,
                        justifyContent: 'flex-end',
                        width: '100%',
                        left: 0,
                        marginLeft: 'auto',
                        marginBottom: 'auto',
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
                        <Text style={{
                            fontWeight:'400',
                            fontSize:16,
                            lineHeight:20,
                            textAlign: 'center', color: '#797979',
                            marginBottom: 30}}>
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
        </SafeAreaView>

    );
};

export default UserSinglePage;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        backgroundColor: "#fff",
    },
    edit_icon: {
        position: "absolute",
        alignSelf: "flex-end",
        zIndex: 1,
        backgroundColor: "#fff",
        borderRadius: 100,
        padding: 5,
        top: 20
    },
    image: {
        width: 120,
        height: 120,
        borderRadius: 100,
        marginTop: 25,
    },
    button: {
        flexDirection: 'row',
        alignItems: "center",
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
        width: '100%'
    },
    logOut: {
        color: color1,
        fontStyle: "normal",
        fontSize: 16,
        fontWeight: '500',
        lineHeight:20
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
