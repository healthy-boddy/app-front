import React, {useState} from 'react';
import {Dimensions, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View,} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {useNavigation} from "@react-navigation/native";
import Modal from "react-native-modal";
import * as ImagePicker from "expo-image-picker";
import BackButton from "../../../components/BackButton";
import PenIcon from "../../../assets/Icons/PenIcon";
import Title from "../../../components/Title";
import EmailIcon from "../../ClientScreens/MainScreens/UserSinglePage/SingleScreenIcons/EmailIcon";
import RightIcon from "../../../assets/Icons/RightIcon";
import NotificationIcon from "../../ClientScreens/MainScreens/UserSinglePage/SingleScreenIcons/NotificationIcon";
import SmsIcon from "../../ClientScreens/MainScreens/UserSinglePage/SingleScreenIcons/SmsIcon";
import CustomButton from "../../../components/CustomButton";
import {color1} from "../../../helpers/colors";
import ChatMessageIcon from "../../ClientScreens/MainScreens/UserSinglePage/SingleScreenIcons/ChatMessageIcon";
import SendMessageIcon from "../../ClientScreens/MainScreens/UserSinglePage/SingleScreenIcons/SendMessageIcon";
import {deleteUserBio, deleteUserToken} from "../../../store/actions/user_token";
import {deleteUserData} from "../../../store/actions/user_data";

const deviceWidth = Dimensions.get("window").width;

export const CoachSinglePage = () => {
    const userData = useSelector((store: any) => store.user_data.user_data);
    let tokenFromReducer = useSelector((store: any) => store.user_token.user_token);

    const dispatch = useDispatch();
    const navigation = useNavigation();
    const [visible, setVisible] = useState(false)
    const [avatar, setAvatar] = useState<any>(null)
    const [logOutModalVisible, setLogOutModalVisible] = useState(false)

    const logOut = async () => {
        setLogOutModalVisible(!logOutModalVisible)
    }

    const toggleBottomNavigationView = () => {
        setVisible(!visible);
    };

    const handleLogOut = async ()=>{
        await AsyncStorage.removeItem('userToken');
        dispatch(deleteUserToken());
        dispatch(deleteUserBio());
        dispatch(deleteUserData());
    }

    const pickImage = async () => {
        let AuthStr = "Bearer " + tokenFromReducer;
        let form  = new FormData()
        form.append('avatar', avatar)

        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.cancelled) {
            setAvatar({
                uri: result.uri,
                name: `IMG_` + Date.now() + `.JPG`,
                type: result.type + "/jpeg",
            });
            await fetch(`http://92.53.97.238/user/coach/update_me/`,{
                method: 'PUT',
                headers: {
                    Authorization: AuthStr,
                    "Content-Type": "multipart/form-data",
                },
                body: form
            }).then((res) => {
                return res.json()
            }).then((res)=>{
                console.log(res, 'updated')
            })
        }
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
                    navigation.goBack()
                }}/>
                <View style={{position: "relative", alignItems: 'center'}}>
                    <View>
                        {avatar ? (
                            <Image
                                style={styles.image}
                                source={{uri: avatar.uri}}
                            />
                        ) : (
                            <Image style={styles.image} source={{ uri: userData.avatar }} />
                        )}
                        <TouchableOpacity onPress={pickImage} style={styles.edit_icon}>
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
                    onPress={()=>{}}
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
            <Modal
                isVisible={logOutModalVisible}
                useNativeDriver={true}
            >
                <View style={styles.logOut_box}>
                    <Text style={styles.logOut_text}>
                        Вы уверены, что хотите выйти из аккаунта?
                    </Text>
                    <View style={styles.log_out_buttons}>
                        <View style={{width: '40%'}}>
                            <CustomButton
                                title={'Остаться'}
                                onPress={()=>{setLogOutModalVisible(false)}}
                            />
                        </View>
                        <View style={{width: '40%'}}>
                            <CustomButton
                                buttonStyles={{backgroundColor: 'transparent', borderColor:color1, borderWidth: 2,}}
                                buttonTitle={{color: color1}}
                                title={'Выйти'}
                                onPress={handleLogOut}
                            />
                        </View>
                    </View>
                </View>
            </Modal>
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
    },
    logOut_text:{
        fontWeight: '600',
        fontSize: 19,
        fontStyle: 'normal',
        lineHeight: 23
    },
    logOut_box:{
        width: '100%',
        height: 210,
        backgroundColor: '#fff',
        alignItems: "center",
        borderRadius: 20,
        paddingTop: 40
    },
    log_out_buttons:{
        flexDirection: 'row',
        width: '100%',
        marginTop: 32,
        justifyContent: 'space-evenly'
    },

})
