import React, {useEffect, useState} from "react";
import {View, StyleSheet, Text, Image, TouchableOpacity, ActivityIndicator} from "react-native";
import MainContainer from "../../../../components/MainContainer";
import {useDispatch, useSelector} from "react-redux";
import {BellIcon} from "../../../../assets/Icons/BellIcon";
import CustomButton from "../../../../components/CustomButton";
import {useIsFocused, useNavigation} from "@react-navigation/native";
import {baseUrl} from "../../../../helpers/url";
import axios from "axios";
import LoadingAnimation from "../../ClientScreenComponents/LoadingAnimation";
import Title from "../../../../components/Title";
import RightIcon from "../../../../assets/Icons/RightIcon";
import {color1} from "../../../../helpers/colors";

const HomeScreen = () => {
    const navigation: any = useNavigation();
    const isFocused = useIsFocused();
    const dispatch = useDispatch();
    const user_data = useSelector((store: any) => store.user_data.user_data);
    const [userData, setUserData] = useState<any>([]);
    const [freeQuizStatus, setFreeQuizStatus] = useState(false);
    const [userCoach, setUserCoach] = useState<any>(false);
    let tokenFromReducer = useSelector((store: any) => store.user_token.user_token);
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false)
        }, 2000)
    })
    const coach = [{
        name: 'Наталья Заварзина',
        description: 'Мой Health Buddy',
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS24WWpVB9X7t5-QZ8uFCH3QY65_-mO0f4M218TzwbU2WPJaG_kElCLJdK4LP_gNd-Vj0U&usqp=CAU'
    }]

    useEffect(() => {
        axios
            .get(baseUrl + "/me/", {
                headers: {
                    Authorization: "Bearer " + tokenFromReducer,
                },
            })
            .then((res) => {
                //  console.log(res.data, "eee");
                setUserData(res.data)
            })
    }, [])

    useEffect(() => {
                axios.get(baseUrl + '/quiz_status/', {
                    headers: {
                        Authorization: "Bearer " + tokenFromReducer,
                    },
                }).then((status) => {
                 //   console.log(status.data, 'status')
                    setFreeQuizStatus(status.data.is_free_quiz_passed)
                    setUserCoach(status.data.coach)
                 //   console.log(userCoach, 'userCoach')
                })
    }, [isFocused])


    const returnViews = () => {
        if (!freeQuizStatus) {
            return (
                <View style={{flex: 1}}>
                    <View style={{marginTop: 20}}>
                        <Text
                            style={{
                                lineHeight: 28,
                                fontSize: 24,
                                color: "#1E1E1E",
                                fontWeight: "600",
                            }}
                        >
                            Найдите своего наставника
                        </Text>
                        <Text
                            style={{
                                lineHeight: 20,
                                fontSize: 16,
                                color: "#797979",
                                fontWeight: "400",
                            }}
                        >
                            Пройдите опрос, чтобы мы подобрали для вас наиболее подходящего
                            наставника. Это займет около 30 минут.
                        </Text>
                    </View>
                    <View style={{flex: 1}}>
                        <Image
                            source={require("../../AuthScreens/OnBoarding/OnBoardingImages/blob1.png")}/>
                    </View>

                    <View style={{marginBottom: 40}}>
                        <CustomButton
                            onPress={() => {
                                navigation.navigate("Questions");
                            }}
                            title={"Пройти опрос"}
                        />
                    </View>
                </View>
            )
        } else if (freeQuizStatus && !userCoach) {
            return (
                <View style={{flex: 1}}>
                    <LoadingAnimation
                        circleLength={1000}
                        imgSource={require("../../AuthScreens/OnBoarding/OnBoardingImages/blob1.png")}
                    />
                    <Title titlePropStyle={{textAlign: 'center'}}>
                        Подбираем коуча
                    </Title>
                    <Text style={styles.subTitle}>
                        Может занять до 5 минут..
                    </Text>
                </View>
            )
        } else if (userCoach) {
            return (
                <View style={{flex: 1}}>
                    <View style={{flex: 1}}>
                        <Title titlePropStyle={{
                            marginTop: 15,
                            fontSize: 24,
                            lineHeight: 28
                        }}>Мы подобрали для вас Health Buddy</Title>
                        <Text style={styles.description}>
                            Осталось совсем чуть-чуть! Чтобы начать программу по восстановлению
                            и сохранению здоровья, вам необходимо заполнить анкету для консультации с коучем.
                        </Text>
                        <View style={{flex: 1}}>
                            <View style={styles.coach_box}>
                                {coach.map((item) => (
                                    <View style={{
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        justifyContent: 'space-between'
                                    }}>
                                        <View style={{
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                        }}>
                                            <View>
                                                <Image
                                                    style={styles.coach_avatar}
                                                    source={{uri: userCoach.avatar}}/>
                                            </View>
                                            <View style={{paddingLeft: 12}}>
                                                <Text style={styles.coach_name}>{userCoach.user.username}</Text>
                                                <Text style={styles.coach_description}>Мой Health Buddy</Text>
                                            </View>
                                        </View>

                                        <View style={{}}>
                                            <RightIcon/>
                                        </View>
                                    </View>
                                ))}
                            </View>
                        </View>
                        <View style={{marginBottom: 40}}>
                            <CustomButton title={'Заполнить анкету'}/>
                        </View>
                    </View>
                </View>
            )
        }
    }

    return (
        <MainContainer>
            <View
                style={{
                    paddingHorizontal: 16,
                    height: "100%",
                }}
            >
                {loading && <ActivityIndicator
                    size={'large'}
                    color={color1}
                    style={{height: '100%'}}
                />}
                <View style={styles.header}>
                    <TouchableOpacity
                        style={{flexDirection: "row", alignItems: "center",}}
                        onPress={()=>{navigation.navigate('UserSingle')}}
                    >
                        {!userData.avatar ? <Image
                                source={require("../../../../assets/images/np_img.png")}
                                style={styles.image}
                            />
                            :
                            <Image
                                source={{uri: userData.avatar}}
                                style={styles.image}
                            />}
                        <Text
                            style={{
                                lineHeight: 19.09,
                                fontSize: 16,
                                color: "#1E1E1E",
                                fontWeight: "600",
                            }}
                        >
                            {user_data.user.username}
                        </Text>
                    </TouchableOpacity>
                    <BellIcon/>
                </View>
                {returnViews()}
            </View>


        </MainContainer>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 52,
        alignItems: "center",
    },
    image: {
        width: 40,
        height: 40,
        marginRight: 8,
        borderRadius: 32
    },
    subTitle: {
        textAlign: 'center',
        marginTop: 12,
        color: '#797979',
        fontWeight: '400',
        fontSize: 16,
        fontStyle: 'normal'
    },
    description: {
        width: 334,
        fontSize: 16,
        fontStyle: "normal",
        fontWeight: '400',
        color: '#1E1E1E',
        marginTop: 8,
        lineHeight: 20
    },
    coach_box: {
        width: '100%',
        height: 96,
        backgroundColor: '#F5F4F8',
        marginTop: 24,
        borderRadius: 24,
        paddingVertical: 20,
        paddingLeft: 16,
        paddingRight: 25
    },
    coach_avatar: {
        backgroundColor: 'red',
        width: 56,
        height: 56,
        borderRadius: 50
    },
    coach_name: {
        color: '#1E1E1E',
        fontSize: 16,
        fontWeight: '600',
        fontStyle: "normal",
        lineHeight: 19
    },
    coach_description: {
        color: '#797979',
        fontSize: 14,
        fontWeight: '400',
        fontStyle: "normal",
        lineHeight: 19
    },
});

