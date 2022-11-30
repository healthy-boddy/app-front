import React from 'react';
import {View, Linking, StyleSheet, Text, Dimensions, Platform, TouchableOpacity, Image} from "react-native";
import MainContainer from "../../../../../components/MainContainer";
import BackButton from "../../../../../components/BackButton";
import CustomButton from "../../../../../components/CustomButton";
import {useNavigation} from "@react-navigation/native";
import Title from "../../../../../components/Title";
import Description from "../../../../../components/Description";
import {useSelector} from "react-redux";
import Pdf from 'react-native-pdf';
import PresentationPreView from "../TutorialScreensIcons/PresentationPreView";
import VideoPreViewVector from "../TutorialScreensIcons/VideoPreViewVector";

const source = {uri: 'http://samples.leanpub.com/thereactnativebook-sample.pdf', cache: true};
const resourceType = 'base64';

const ThirdTutorialScreen = () => {
    const navigation = useNavigation<any>()
    let pdfAndVideo = useSelector((store: any) => store?.auth_data?.setVideoEndPresentationArray);

    async function openPdf() {
        await Linking.openURL(pdfAndVideo.coach_first_day_presentation_url);
    }

    return (
        <MainContainer>
            <View style={{
                flex: 1,
                paddingHorizontal: 16
            }}>
                <View>
                    <BackButton latter onPress={() => {
                        navigation.navigate("FirstTutorial")
                    }} onPressLetter={() => {
                        navigation.navigate("Greetings4")
                    }}/>
                </View>
                <View style={{flex: 1, marginTop: 10,}}>
                    <Title>
                        Цель проекта Health Buddy
                    </Title>
                    <Description marginTop={8} marginBottom={24}>
                        Мотивация клиента на командную работу для восстановления ресурса организма через коучинговые
                        методики.
                    </Description>
                    <Title titlePropStyle={{marginBottom: 8}}>
                        Задание
                    </Title>
                    <Description>
                        Посмотрите презентацию, чтобы узнать о:
                    </Description>
                    <Description marginLeft={10}>
                        {`\u2022 принципах сервиса,`}{"\n"}
                        {`\u2022 клиентских программах;`}{"\n"}
                        {`\u2022 тарифах`}{"\n"}
                    </Description>
                    <View style={styles.presentation_box}>
                        <View>
                            <VideoPreViewVector/>
                        </View>
                        <TouchableOpacity onPress={openPdf} style={{
                            alignSelf: 'flex-end',
                            marginBottom: 20,
                            backgroundColor: 'rgba(255, 255, 255, 0.4)',
                            paddingVertical: 8,
                            paddingHorizontal: 15,
                            borderRadius: 20,
                            marginRight: 20
                        }}>
                            <Text style={{color: '#FFFFFF'}}>Смотреть презентацию</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{marginBottom: 25}}>
                    <CustomButton onPress={() => {
                        navigation.navigate("SecondTutorial")
                    }} title={"Продолжить"}/>
                </View>
            </View>
        </MainContainer>
    );
};

export default ThirdTutorialScreen;

const styles = StyleSheet.create({
    presentation_box: {
        width: '100%',
        height: 200,
        borderRadius: 20,
        backgroundColor: '#8C64FF',
        flexDirection: 'row',
        justifyContent: "space-between"
    },
    presentation: {},
    pdf: {
        flex: 1,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    }

})
