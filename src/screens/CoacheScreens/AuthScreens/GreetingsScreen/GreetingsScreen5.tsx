import React, {useEffect, useState} from "react";
import {Dimensions, ScrollView, StyleSheet, Text, View,} from "react-native";
import {color1} from "../../../../helpers/colors";
import CustomButton from "../../../../components/CustomButton";
import {useNavigation} from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";
import {useDispatch} from "react-redux";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ErrorPopUp from "../../../../components/ErrorPopUp";
import {baseUrl} from "../../../../helpers/url";
import {setUserBio} from "../../../../store/actions/user_token";
import {WrapperPage} from "../../../../components/core/wrapper";
import {LargeInput} from "../../../../components/core/LargeInput";
import {FileRows} from "../../../../components/core/FileRows";

const WelcomeScreen = () => {
    const dispatch = useDispatch();
    const navigation: any = useNavigation();
    const [education, setEducation] = useState<string>("");
    const [specialisation, setSpecialisation] = useState('')
    const [resume, setResume] = useState<any>("");
    let [userToken, setUserToken] = useState<any>(null);
    const [valid, setValid] = useState(true);

    const [certificate, setCertificate] = useState<any>([])

    const [resumeValid, setResumeValid] = useState(true);


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


    async function handlePostInfo() {
        let AuthStr = "Bearer " + userToken;
        const dataForm = new FormData();
        dataForm.append('education_description', education)
        dataForm.append('specialization', specialisation)
        console.log(dataForm, 'dataform')
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
            // dispatch(setUserBio(data.bio));
        } catch (error) {
            console.log(error);
        }


        const formData = new FormData();

        certificate.forEach(item => formData.append(item['name'], item));

        console.log(formData, 'form Data form Data form Data')

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


        //     const response = await axios.post(baseUrl + '/coach_certificate/',
        //         {file: certificate},
        //         {headers: {
        //                 Authorization: AuthStr,
        //                 "Content-Type": "multipart/form-data",
        //             }}
        //     )
        //     console.log(response, '\'/user/coach_certificate/\'')
        // }catch (error){
        //     console.log(error)
        // }
    }

    console.log(certificate, 'photo111')

    const deleteFile = (id) => {
        const filteredItem = certificate?.filter(file => file.id !== id);
        setCertificate(filteredItem);
    };

    return (
        <WrapperPage
            onPressBack={() => navigation.navigate("Greetings4")}
            onPressButton={handlePostInfo}
            buttonTitle={"Продолжить"}
        >
            <View
                style={{
                    paddingHorizontal: 16,
                }}
            >
                <ScrollView showsVerticalScrollIndicator={false}>
                    {!valid && <ErrorPopUp error={"Необходимо заполнить все поля"}/>}
                    <Text
                        style={{
                            fontWeight: "600",
                            fontSize: 24,
                            lineHeight: 28,
                            color: "#1E1E1E",
                            textAlign: "left",
                            alignSelf: "flex-start",
                            marginTop: !valid ? 16 : 0,
                        }}
                    >
                        Зарегистрируй профиль наставника
                    </Text>
                    <Text
                        style={{
                            marginTop: 12,
                            fontWeight: "400",
                            fontSize: 16,
                            lineHeight: 20,
                            color: "#797979",
                        }}
                    >
                        Для первичного знакомства с клиентом - это повысит доверие к вам, как к специалисту
                    </Text>

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
                    />

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
                        />

                    </View>

                </ScrollView>
            </View>
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
});
