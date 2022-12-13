import React, {useEffect, useState} from "react";
import {
    View,
    Text,
    SafeAreaView,
    Image,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
} from "react-native";
import BackButton from "../../../../components/BackButton";
import PenIcon from "../../../../assets/Icons/PenIcon";
import Title from "../../../../components/Title";
import EmailIcon from "../../../ClientScreens/MainScreens/UserSinglePage/SingleScreenIcons/EmailIcon";
import RightIcon from "../../../../assets/Icons/RightIcon";
import NotificationIcon from "../../../ClientScreens/MainScreens/UserSinglePage/SingleScreenIcons/NotificationIcon";
import SmsIcon from "../../../ClientScreens/MainScreens/UserSinglePage/SingleScreenIcons/SmsIcon";
import Modal from "react-native-modal";
import CustomButton from "../../../../components/CustomButton";
import {color1} from "../../../../helpers/colors";
import ChatMessageIcon from "../../../ClientScreens/MainScreens/UserSinglePage/SingleScreenIcons/ChatMessageIcon";
import SendMessageIcon from "../../../ClientScreens/MainScreens/UserSinglePage/SingleScreenIcons/SendMessageIcon";
import {useDispatch, useSelector} from "react-redux";
import {useIsFocused, useNavigation} from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
    deleteClientData,
    deleteUserBio,
    deleteUserToken,
} from "../../../../store/actions/user_token";
import {
    deleteUserData,
    setUserData,
} from "../../../../store/actions/user_data";
import * as ImagePicker from "expo-image-picker";
import EducationIcon from "../../../../assets/Icons/EducationIcon";
import axios from "axios";
import {baseUrl} from "../../../../helpers/url";
import * as MailComposer from "expo-mail-composer";
import MainContainer from "../../../../components/MainContainer";

const deviceWidth = Dimensions.get("window").width;

const CoachSinglePage = () => {
    const userData = useSelector((store: any) => store.user_data?.user_data);
    let tokenFromReducer = useSelector(
        (store: any) => store.user_token?.user_token
    );
    const isFocused = useIsFocused();

    const dispatch = useDispatch();
    const navigation = useNavigation<any>();
    const [visible, setVisible] = useState(false);
    let [avatar, setAvatar] = useState<any>(null);
    let [logOutModalVisible, setLogOutModalVisible] = useState(false);
    let form = new FormData();
    let [user_data_form_axios, setUserDataFromAxios] = useState([]);

    console.log(avatar, "avatar");

    function getUserNewData() {
        axios
            .get(baseUrl + "/me/", {
                headers: {
                    Authorization: "Bearer " + tokenFromReducer,
                },
            })
            .then((res) => {
                console.log(res.data, "MEEEEEEEEEEE");
                setUserDataFromAxios(res.data);
                dispatch(setUserData(res.data));
            })
            .catch((e) => {
                console.log(e.message, "error while getting my profile");
            });
    }

    useEffect(() => {
        getUserNewData();
    }, [isFocused]);

    const logOut = async () => {
        setLogOutModalVisible(!logOutModalVisible);
    };
    const toggleLogOutModalView = () => {
        setLogOutModalVisible(!logOutModalVisible);
    };
    const toggleBottomNavigationView = () => {
        setVisible(!visible);
    };

    const handleLogOut = async () => {
        await AsyncStorage.removeItem("userToken");
        dispatch(deleteUserToken());
        dispatch(deleteClientData());
        dispatch(deleteUserData());
        dispatch(deleteUserBio());
    };

    const pickImage = async () => {
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
                id: Date.now(),
                lastModified: Date.now(),
            });
        }
    };

    function handleSendNewProfileImage() {
        let AuthStr = "Bearer " + tokenFromReducer;
        form.append("avatar", avatar);
        fetch(`http://92.53.97.238/user/coach/update_me/`, {
            method: "PUT",
            headers: {
                Authorization: AuthStr,
                "Content-Type": "multipart/form-data",
                accept: "application/json",
            },
            body: form,
        })
            .then((res) => {
                return res.json();
            })
            .then((res) => {
                console.log(res, "updated coach avatar");
            });
        console.log(form, "form");
    }

    useEffect(() => {
        if (!avatar) {
            // console.log('', avatar)
        } else {
            handleSendNewProfileImage();
            setTimeout(() => {
                getUserNewData();
            }, 100);
        }
    }, [avatar]);

    async function sendEmailAsync() {
        let result = await MailComposer.composeAsync({
            recipients: ["support@longlifelab.ru"],
            subject: "Email subject!!!!",
            // body: 'This is the body of the email ✅',
        });
        alert(result.status);
    }

    return (
        <MainContainer>
            <View style={[styles.container]}>
                <BackButton
                    onPress={() => {
                        // @ts-ignore
                        navigation.navigate("Greetings4");
                    }}
                />
                <View
                    style={{
                        position: "relative",
                        alignItems: "center",
                    }}
                >
                    <View>
                        {!user_data_form_axios?.user?.avatar ? (
                            <Image style={styles.image} source={{ uri: avatar?.uri }} />
                        ) : (
                            <Image
                                style={styles.image}
                                source={{ uri: user_data_form_axios?.user?.avatar_thumbnail }}
                            />
                        )}
                        <TouchableOpacity onPress={pickImage} style={styles.edit_icon}>
                            <PenIcon />
                        </TouchableOpacity>
                    </View>
                    <Title
                        titlePropStyle={{
                            textAlign: "center",
                            marginTop: 12,
                            fontSize: 24,
                            fontWeight: "600",
                        }}
                    >
                        {userData.user.username}
                    </Title>
                </View>
                <View style={{ marginTop: 40 }} />
                {/*<TouchableOpacity*/}
                {/*    onPress={() => {*/}
                {/*        console.log('notifications')*/}
                {/*    }}*/}
                {/*    style={styles.button}>*/}
                {/*    <NotificationIcon/>*/}
                {/*    <Text style={styles.button_title}>Уведомления</Text>*/}
                {/*    <View style={{alignItems: 'flex-end'}}>*/}
                {/*        <RightIcon fill={'#797979'}/>*/}
                {/*    </View>*/}
                {/*</TouchableOpacity>*/}

                {/*<View style={styles.line}/>*/}
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        navigation.navigate("CoachEditData");
                    }}
                >
                    <EmailIcon />
                    <Text style={styles.button_title}>Имя, номер телефона, email</Text>
                    <View style={{ alignItems: "flex-end" }}>
                        <RightIcon fill={"#797979"} />
                    </View>
                </TouchableOpacity>
                <View style={styles.line} />

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        navigation.navigate("EducationAndSpecialisationsScreen");
                    }}
                >
                    <EducationIcon />
                    <Text style={styles.button_title}>Образование и специализация</Text>
                    <View style={{ alignItems: "flex-end" }}>
                        <RightIcon fill={"#797979"} />
                    </View>
                </TouchableOpacity>
                <View style={styles.line} />
                <TouchableOpacity
                    onPress={toggleBottomNavigationView}
                    style={styles.button}
                >
                    <SmsIcon />
                    <Text style={styles.button_title}>Помощь</Text>
                    <View style={{ alignItems: "flex-end" }}>
                        <RightIcon fill={"#797979"} />
                    </View>
                </TouchableOpacity>
                <View style={styles.line} />

                <TouchableOpacity
                    onPress={logOut}
                    style={{
                        marginTop: 9,
                    }}
                >
                    <Text style={styles.logOut}>Выйти из учетной записи</Text>
                </TouchableOpacity>
            </View>
            <Modal
                style={{
                    flex: 1,
                    justifyContent: "flex-end",
                    width: "100%",
                    left: 0,
                    marginLeft: "auto",
                    marginBottom: "auto",
                }}
                isVisible={logOutModalVisible}
                onBackdropPress={toggleLogOutModalView}
                useNativeDriver={true}
                propagateSwipe={true}
                animationIn={"fadeInUp"}
                animationOut={"fadeOutDownBig"}
                deviceWidth={deviceWidth}
            >
                <View style={[styles.modal, { height: 290 }]}>
                    <Text
                        style={{
                            fontWeight: "600",
                            fontSize: 19,
                            lineHeight: 20,
                            textAlign: "center",
                            color: "#1E1E1E",
                            marginTop: 40,
                            marginBottom: 48,
                        }}
                    >
                        Вы уверены, что хотите выйти из аккаунта?
                    </Text>
                    <View style={{ marginBottom: 12 }}>
                        <CustomButton
                            title={"Остаться"}
                            onPress={() => {
                                setLogOutModalVisible(false);
                            }}
                        />
                    </View>
                    <View>
                        <CustomButton
                            buttonStyles={{
                                backgroundColor: "white",
                                borderColor: color1,
                                borderWidth: 2,
                            }}
                            buttonTitle={{ color: color1 }}
                            title={"Выйти"}
                            onPress={handleLogOut}
                        />
                    </View>
                    <View style={{ marginVertical: 10 }} />
                </View>
            </Modal>

            <View style={{ flex: 1, width: "100%" }}>
                <Modal
                    style={{
                        flex: 1,
                        justifyContent: "flex-end",
                        width: "100%",
                        left: 0,
                        marginLeft: "auto",
                        marginBottom: "auto",
                    }}
                    isVisible={visible}
                    onBackdropPress={toggleBottomNavigationView}
                    useNativeDriver={true}
                    propagateSwipe={true}
                    animationIn={"fadeInUp"}
                    animationOut={"fadeOutDownBig"}
                    deviceWidth={deviceWidth}
                >
                    <View style={styles.modal}>
                        <View style={styles.modal_line} />
                        <Text
                            style={{
                                fontWeight: "400",
                                fontSize: 16,
                                lineHeight: 20,
                                textAlign: "center",
                                color: "#797979",
                                marginBottom: 30,
                            }}
                        >
                            Служба поддержки
                        </Text>

                        <TouchableOpacity
                            onPress={sendEmailAsync}
                            style={{
                                flexDirection: "row",
                                marginVertical: 8,
                                paddingHorizontal: 16,
                            }}
                        >
                            <ChatMessageIcon />
                            <Text style={styles.modal_text}>Написать на почту</Text>
                        </TouchableOpacity>
                        <View style={{ marginVertical: 10 }} />
                        {/*<TouchableOpacity style={{*/}
                        {/*    flexDirection: 'row',*/}
                        {/*    paddingHorizontal: 16*/}
                        {/*}}>*/}
                        {/*    <SendMessageIcon/>*/}
                        {/*    <Text style={styles.modal_text}>*/}
                        {/*        Написать в чат*/}
                        {/*    </Text>*/}
                        {/*</TouchableOpacity>*/}
                    </View>
                </Modal>
            </View>
        </MainContainer>
)};

export default CoachSinglePage;
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        flex: 1,
        height: "100%",
    },
    edit_icon: {
        position: "absolute",
        alignSelf: "flex-end",
        zIndex: 1,
        backgroundColor: "#fff",
        borderRadius: 100,
        padding: 5,
        top: 20,
    },
    image: {
        width: 120,
        height: 120,
        borderRadius: 100,
        marginTop: 25,
    },
    button: {
        flexDirection: "row",
        alignItems: "center",
    },
    button_title: {
        fontSize: 16,
        fontWeight: "400",
        fontStyle: "normal",
        color: "#1E1E1E",
        marginLeft: 8,
        width: 400,
    },
    line: {
        height: 1,
        backgroundColor: "#E2E2E2",
        marginVertical: 15,
        width: "100%",
    },
    logOut: {
        color: color1,
        fontStyle: "normal",
        fontSize: 16,
        fontWeight: "500",
        lineHeight: 20,
    },
    modal: {
        height: 145,
        backgroundColor: "#fff",
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        paddingHorizontal: 16,
        width: "100%",
    },
    modal_line: {
        height: 4,
        width: 40,
        borderRadius: 30,
        marginVertical: 10,
        alignSelf: "center",
        backgroundColor: "#C4C3C5",
    },
    modal_text: {
        marginLeft: 12,
        color: color1,
        lineHeight: 21,
        fontWeight: "400",
        fontStyle: "normal",
        fontSize: 18,
    },
    logOut_text: {
        fontWeight: "600",
        fontSize: 19,
        fontStyle: "normal",
        lineHeight: 23,
    },
    logOut_box: {
        width: "100%",
        height: 210,
        backgroundColor: "#fff",
        alignItems: "center",
        borderRadius: 20,
        paddingTop: 40,
    },
    log_out_buttons: {
        flexDirection: "row",
        width: "100%",
        marginTop: 32,
        justifyContent: "space-evenly",
    },
});
