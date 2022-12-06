import React, {useEffect, useState} from "react";
import {Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View,} from "react-native";
import {color1} from "../../../../helpers/colors";
import CustomButton from "../../../../components/CustomButton";
import {useNavigation} from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ErrorPopUp from "../../../../components/ErrorPopUp";
import {baseUrl} from "../../../../helpers/url";
import {setUserBio} from "../../../../store/actions/user_token";
import {WrapperPage} from "../../../../components/core/wrapper";
import {LargeInput} from "../../../../components/core/LargeInput";
import {FileRows} from "../../../../components/core/FileRows";
import Title from "../../../../components/Title";
import Description from "../../../../components/Description";
import PenIcon from "../../../../assets/Icons/PenIcon";
import {setUserData} from "../../../../store/actions/user_data";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";

const WelcomeScreen = () => {
    const dispatch = useDispatch();
    const navigation: any = useNavigation();
    let tokenFromReducer = useSelector((store: any) => store.user_token.user_token);
    const userData = useSelector((store: any) => store.user_data.user_data);
    console.log(userData, 'userData greetings 5')
    const [education, setEducation] = useState<string>("");
    const [specialisation, setSpecialisation] = useState('')
    const [educationError, setEducationError] = useState(false)
    const [specialisationError, setSpecialisationError] = useState(false)
    const [resume, setResume] = useState<any>("");
    let [userToken, setUserToken] = useState<any>(null);
    let [avatar, setAvatar] = useState<any>([])
    const [valid, setValid] = useState(true);
    let user_data = useSelector((store: any) => store.user_data?.user_data);

    const [certificate, setCertificate] = useState<any>([])

    const [resumeValid, setResumeValid] = useState(true);

    function getUserNewData() {
        axios
            .get(baseUrl + "/me/", {
                headers: {
                    Authorization: "Bearer " + tokenFromReducer,
                },
            }).then((res) => {
            console.log(res.data, 'MEEEEEEEEEEE')
            dispatch(setUserData(res.data));
        })
            .catch((e) => {
                console.log(e.message, "error while getting my profile");
            });
    }

    useEffect(() => {
        AsyncStorage.getItem("userToken").then((r) => setUserToken(r));
    }, []);


    useEffect(() => {
        console.log('certificate', certificate)
    }, [certificate])


    const pickEducationDocument = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        if (!result.cancelled) {
            const data: any = {
                uri: result.uri,
                name: `IMG_` + Date.now() + `.JPG`,
                type: result.type + "/jpeg",
                id: Date.now(),
                lastModified: Date.now(),
            }
            setCertificate(prevItem => [...prevItem, data]);
        }
    };

    async function handleSendCertificates() {
        let AuthStr = "Bearer " + userToken;
        let formData = new FormData()
        for (let i = 0; i <= certificate.length; i++) {
            formData.append('file', certificate[i])

            await fetch(baseUrl + '/coach_certificate/', {
                method: 'POST',
                headers: {
                    Authorization: AuthStr,
                    "Content-Type": "multipart/form-data",
                },
                body: formData,
            }).then((res) => {
                return res.json()
            }).then((res) => {
                console.log(res, 'res')
            })
            navigation.navigate("Greetings4")
        }
    }

    async function handlePostInfo() {
        if (!education) {
            setEducationError(true)
            return false
        }
        setEducationError(false)

        if (!specialisation) {
            setSpecialisationError(true)
            return false
        }
        let AuthStr = "Bearer " + userToken;
        const dataForm = new FormData();
        dataForm.append('education_description', education)
        dataForm.append('specialization', specialisation)
        try {
            const {data} = await axios.put(baseUrl + "/coach/update_me/",
                dataForm,
                {
                    headers: {
                        Authorization: AuthStr,
                        "Content-Type": "multipart/form-data",
                    },
                }
            );
            console.log(data, "sended-all");
            //  dispatch(setUserBio(data.education_description));
        } catch (error) {
            console.log(error);
        }
        setSpecialisationError(false)
        await handleSendCertificates()
        await getUserNewData()
    }

    console.log(certificate, 'photo111')

    const deleteFile = (id: any) => {
        const filteredItem = certificate?.filter(file => file.id !== id);
        setCertificate(filteredItem);
    };

    const pickAvatar = async () => {
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
        }
    };
    return (
        <WrapperPage
            onPressBack={() => navigation.navigate("Greetings4")}
            onPressButton={handlePostInfo}
            buttonTitle={"Продолжить"}
        >
            <KeyboardAwareScrollView showsVerticalScrollIndicator={false}
                                     style={{width: '100%', paddingHorizontal: 16, marginBottom: 25}}
            >
                {!valid && <ErrorPopUp error={"Необходимо заполнить все поля"}/>}
                <View style={{position: "relative", alignItems: 'center'}}>
                    <View>
                        <Image style={styles.image} source={{uri: user_data.user.avatar_thumbnail}}/>
                        <TouchableOpacity onPress={pickAvatar} style={styles.edit_icon}>
                            <PenIcon/>
                        </TouchableOpacity>
                    </View>
                    <Title titlePropStyle={{marginTop: 8}}>
                        Фото в белом халате
                    </Title>
                    <Description textAlign={"center"} marginTop={5}>
                        Требование: портретное фото вас в белом халате или рубашке, на светлом фоне
                    </Description>
                </View>

                <Text style={{
                    marginTop: 40,
                    fontWeight: "600",
                    fontSize: 19,
                    lineHeight: 22.67,
                    color: "#1E1E1E",
                }}>
                    Образование
                </Text>


                {/*<View style={[{*/}
                {/*  marginTop:12,*/}
                {/*  backgroundColor:'#F5F4F8',*/}
                {/*  height:104,*/}
                {/*  borderRadius:12,*/}
                {/*  paddingHorizontal:16,*/}
                {/*  paddingVertical:14*/}
                {/*}, education.length > 1 && {borderColor:'#7454CF', borderWidth:1}]}>*/}
                {/*<TextInput value={education}*/}
                {/*           placeholderTextColor={'#797979'}*/}
                {/*           style={{*/}
                {/*             fontWeight:'400',*/}
                {/*             lineHeight:20,*/}
                {/*             fontSize:16,*/}
                {/*             color:'#1e1e1e'*/}
                {/*           }}*/}
                {/*  onChangeText={setEducation}*/}
                {/*    placeholder={'Например, ПСПбГМУ 2009 г.в.'}/>*/}
                {/*</View>*/}

                <LargeInput
                    setValue={setEducation}
                    value={education}
                    placeholder={'Например, ПСПбГМУ 2009 г.в.'}
                    valueError={educationError}
                />
                {educationError && <Text style={{
                    color: 'red',
                    fontSize: 16,
                    fontWeight: '400',
                    fontStyle: 'normal',
                    marginTop: 5,
                    lineHeight: 20
                }}>Заполните форму</Text>}

                <Text style={{
                    marginTop: 40,
                    fontWeight: "600",
                    fontSize: 19,
                    lineHeight: 22.67,
                    color: "#1E1E1E",
                }}>
                    Дипломы и сертификаты
                </Text>

                <Text
                    style={{
                        marginTop: 8,
                        fontWeight: "400",
                        fontSize: 16,
                        lineHeight: 20,
                        color: "#797979",
                    }}
                >
                    Загрузите файл формата PDF, JPG, PNG
                </Text>
                <View style={{marginTop: 24}}/>
                <CustomButton
                    buttonTitle={{color: "#7454CF"}}
                    buttonStyles={[
                        styles.custom_button_styles,
                        !resumeValid && {borderColor: "red"},
                    ]}
                    title={resume?.name ? resume?.name : "Загрузить файл"}
                    onPress={pickEducationDocument}
                />

                {certificate.map((data, index) => {
                    return (
                        <FileRows
                            key={index}
                            fileName={data.name}
                            onPress={() => deleteFile(data.id)}
                        />
                    )
                })}


                <Text style={{
                    marginTop: 40,
                    fontWeight: "600",
                    fontSize: 19,
                    lineHeight: 22.67,
                    color: "#1E1E1E",
                }}>
                    Специализация
                </Text>

                <View style={{marginTop: 12, marginBottom: 24}}>
                    <LargeInput
                        setValue={setSpecialisation}
                        value={specialisation}
                        placeholder={'Например, Гастроэнтерология'}
                        valueError={specialisationError}
                    />
                    {specialisationError && <Text style={{
                        color: 'red',
                        fontSize: 16,
                        fontWeight: '400',
                        fontStyle: 'normal',
                        marginTop: 5,
                        lineHeight: 20
                    }}>Заполните форму</Text>}
                </View>
            </KeyboardAwareScrollView>
        </WrapperPage>
    );
};

export default WelcomeScreen;
const styles = StyleSheet.create({
    bioInput: {
        borderColor: "red",
        borderWidth: 2,
    },
    inlineContainer: {
        paddingHorizontal: 20,
        paddingTop: 35,
    },
    title_box: {
        marginTop: 25,
    },
    input_box: {
        backgroundColor: "#F5F4F8",
        marginTop: 12,
        borderRadius: 12,
        alignItems: "flex-start",
        paddingHorizontal: 16,
        paddingVertical: 14,
        flexDirection: "row",
        width: "100%",
        maxWidth: Dimensions.get("screen").width - 32,
    },
    button_box: {
        marginVertical: 15,
    },
    custom_button_styles: {
        backgroundColor: "transparent",
        borderWidth: 2,
        borderColor: color1,
        borderRadius: 30,
    },
    btnBgc: {
        backgroundColor: "#7454CF",
    },
    image: {
        width: 120,
        height: 120,
        borderRadius: 100,
        marginTop: 25,
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
});
