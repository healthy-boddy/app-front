import React, {useEffect, useState} from "react";
import {View, StyleSheet, Text, Image, TouchableOpacity, ActivityIndicator, SafeAreaView} from "react-native";
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
import PicCheck from "./HomeScreenIcons/PicCheck";
import PeoplesIcon from "./HomeScreenIcons/PeoplesIcon";

const HomeScreen = () => {
    const navigation: any = useNavigation();
    const isFocused = useIsFocused();
    const dispatch = useDispatch();
    const user_data = useSelector((store: any) => store.user_data.user_data);
    const [userData, setUserData] = useState<any>([]);
    const [freeQuizStatus, setFreeQuizStatus] = useState(false);
    const [paidQuizStatus, setPaidQuizStatus] = useState(false);
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
                    console.log(status.data, 'status')
                    setFreeQuizStatus(status.data.is_free_quiz_passed)
                    setPaidQuizStatus(status.data.is_paid_quiz_passed)
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
        } else if (userCoach && !paidQuizStatus) {
            return (
                <View style={{flex: 1}}>
                    <View style={{flex: 1}}>
                       <View style={{flex: 1, marginTop: 100, alignItems:'center', justifyContent: 'center'}}>
                          <PicCheck/>
                           <View style={{marginTop: 30}}>
                               <Title titlePropStyle={{textAlign: 'center'}}>Ваш Health Buddy найден!</Title>
                               <Text style={{
                                   textAlign: 'center',
                                   color: '#797979',
                                   width: 247,
                                   marginTop: 10
                               }}>
                                   Для консультации с Health buddy, вам необходимо заполнить анкету
                               </Text>
                               <TouchableOpacity
                                   onPress={()=>{navigation.navigate('PaidQuizzes')}}
                                   style={{alignItems:'center', marginVertical: 40}}>
                                   <Text style={{
                                       color: color1
                                   }}>
                                       Заполнить анкету
                                   </Text>
                               </TouchableOpacity>
                           </View>
                       </View>
                        <View style={{flex: 1}}>
                            <TouchableOpacity
                                activeOpacity={0.7}
                                style={styles.coach_box}
                                onPress={()=>{navigation.navigate('CoachSingleScreen')}}
                            >
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
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            )
        }else if (userCoach && paidQuizStatus){
            return (
                <View style={{flex: 1}}>
                  <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                      <PeoplesIcon/>
                      <Title titlePropStyle={{
                          textAlign: 'center',
                          width: 343,
                          marginTop: 20
                      }}>
                          Ваш Health Buddy свяжется с вами в течение 24 часов
                      </Title>
                      <Text style={{
                          marginTop: 20,
                          color: '#797979',
                          textAlign:'center',
                          fontSize: 16
                      }}>
                          Он назначит консультацию, на которой вы вместе определите цели и план работ
                      </Text>
                  </View>
                    <View style={{flex: 1}}>
                        <TouchableOpacity
                            activeOpacity={0.7}
                            style={styles.coach_box}
                            onPress={()=>{navigation.navigate('CoachSingleScreen')}}
                        >
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
                        </TouchableOpacity>
                    </View>
                </View>
            )
    }}

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
                <SafeAreaView style={styles.header}>
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
                </SafeAreaView>
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
        // marginTop: 52,
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

