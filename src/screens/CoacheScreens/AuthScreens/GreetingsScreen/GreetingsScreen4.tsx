import React, {useRef} from 'react';
import {View, StyleSheet, Text, Button, ScrollView, TextInput} from "react-native";
import Container from "../../../../components/Container";
import BackButton from "../../../../components/BackButton";
import {Video} from 'expo-av';
import {color2} from "../../../../helpers/colors";
import CustomButton from "../../../../components/CustomButton";
import {useNavigation} from "@react-navigation/native";
import Title from "../../../../components/Title";

const GreetingsScreen4 = (props: any) => {
    const navigation: any = useNavigation();
    const video = useRef(null);
    const [status, setStatus] = React.useState({});

    return (
        <Container containerProp={styles.inlineContainer}>
            <View style={{marginBottom: 10}}>
                <BackButton  onPress={()=>{navigation.navigate('Greetings3')}}/>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View>
                    <View style={styles.title_box}>
                        <Title>
                            Приветствуем тебя в{"\n"}команде Health Buddy
                        </Title>
                        <Title titlePropStyle={{fontSize: 20}}>
                            План обучения:
                        </Title>
                        <Text style={{marginTop: 15}}>
                            Что такое Health Buddy — сегодня ты познакомишься с компанией и увидишь работу
                            изнутри;{"\n"}
                            {"\n"}
                            Мы-сервис наставников для раскрытия потенциала здоровья всех возрастов;
                        </Text>
                        <Title titlePropStyle={{fontSize: 20}}>
                            Задание
                        </Title>
                        <Text style={{marginTop: 10}}>
                            посмотри краткое видео о продукте, чтобы ближе познакомиться с сервисом
                        </Text>
                    </View>
                    <View style={styles.video_box}>
                        <Video
                            ref={video}
                            style={styles.video}
                            source={{uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'}}
                            useNativeControls
                            resizeMode={"contain"}
                            isLooping
                            onPlaybackStatusUpdate={status => setStatus(() => status)}
                        />
                    </View>
                    <View>
                        <Title titlePropStyle={{fontSize: 20}}>
                            Напиши пять тезисов , которые{"\n"}отличают нас от конкурентов
                        </Title>
                    </View>
                    <View style={styles.input_box}>
                        <TextInput
                            placeholder={"Написать"}
                            style={styles.input}
                            multiline={true}
                        />
                    </View>
                    <View style={styles.button_box}>
                        <CustomButton onPress={()=>{navigation.navigate('Greetings5')}} title={"Продолжить"}/>
                    </View>
                </View>
            </ScrollView>
        </Container>
    );
};
export default GreetingsScreen4;

const styles = StyleSheet.create({
    inlineContainer: {
        paddingHorizontal: 20,
        paddingTop: 35
    },
    title_box: {
        marginTop: 25
    },
    tutorial: {
        fontWeight: 'bold',
        fontSize: 16,
        marginTop: 12
    },
    video_box: {

    },
    video: {
        width: '100%',
        height: 250,
        marginVertical: 15
    },
    input_box:{
        backgroundColor: color2,
        maxHeight: 200,
        borderRadius: 10,
        padding: 15,
        marginVertical: 15
    },
    input:{
        maxHeight: '100%',

    },
    button_box:{
        marginTop: 25,
        marginBottom: 40
    }

})
