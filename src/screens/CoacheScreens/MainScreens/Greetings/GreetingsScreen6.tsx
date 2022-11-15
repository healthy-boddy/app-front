import React, {useRef} from 'react';
import {View, Text, StyleSheet, TextInput, ScrollView} from 'react-native'
import Container from "../../../../components/Container";
import BackButton from "../../../../components/BackButton";
import {useNavigation} from "@react-navigation/native";
import {Video} from "expo-av";
import {color2} from "../../../../helpers/colors";
import CustomButton from "../../../../components/CustomButton";
import Title from "../../../../components/Title";

const GreetingsScreen6 = () => {
    const navigation: any = useNavigation();
    const video = useRef(null);
    const [status, setStatus] = React.useState({});
    return (
        <Container containerProp={styles.inlineContainer}>
            <ScrollView>
                <View style={{marginBottom: 20}}>
                    <BackButton onPress={() => {
                        //  navigation.navigate('Greetings5')
                    }}/>
                </View>
                <View>
                    <Title>
                        Теперь переходим к знакомству с клиентом
                    </Title>
                    <Text style={styles.description}>
                        Видео о пути клиента от старшего сервис-менеджера Александрой Щербаковой
                    </Text>
                </View>
                <View style={styles.video_box}>
                    <Video
                        ref={video}
                        resizeMode={'contain'}
                        style={styles.video}
                        source={{uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'}}
                        useNativeControls
                        isLooping
                        onPlaybackStatusUpdate={status => setStatus(() => status)}
                    />
                </View>
                <View style={{flex: 1}}>
                    <View>
                        <Title titlePropStyle={{marginTop: 15, marginBottom: 10}}>
                            Задание
                        </Title>
                        <Text style={styles.description}>
                            Выписать чек-лист первичной консультации (основные пункты для коммуникации с клиентом)
                        </Text>
                    </View>
                    <View style={styles.input_box}>
                        <TextInput
                            placeholder={'Написать'}
                            multiline={true}
                        />
                    </View>
                </View>
            </ScrollView>
            <View style={{marginBottom: 25}}>
                <CustomButton onPress={() => {
                    navigation.navigate("Greetings7")
                }} title={'Продолжить'}/>
            </View>
        </Container>
    );
};

export default GreetingsScreen6;

const styles = StyleSheet.create({
    inlineContainer: {
        paddingHorizontal: 20,
        paddingTop: 35
    },
    video_box: {
        borderRadius: 10,
        flex: 1
    },
    video: {
        width: '100%',
        height: 250,
        marginVertical: 15,
        borderRadius: 20
    },
    input_box: {
        backgroundColor: color2,
        padding: 10,
        borderRadius: 15,
        marginVertical: 15,
        flex: 1
    },
    description: {
        color: '#797979',
        fontSize: 16,
        fontWeight: '400',
        width: 343,
        lineHeight: 20
    }
})
