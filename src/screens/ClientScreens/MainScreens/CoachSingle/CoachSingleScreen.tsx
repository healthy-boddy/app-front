import React, {useEffect, useState} from "react";
import {
    Image,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import axios from "axios";
import {baseUrl} from "../../../../helpers/url";
import {useSelector} from "react-redux";
import DocxIcon from "./CoachSingleIcons/DocxIcon";
import EducationIcon from "./CoachSingleIcons/EducationIcon";
import ArrowDown from "./CoachSingleIcons/ArrowDown";
import ArrowUp from "./CoachSingleIcons/ArrowUp";
import ReviewsIcon from "./CoachSingleIcons/ReviewsIcon";
import {useNavigation} from "@react-navigation/native";
import BackIcon from "../../../../assets/Icons/BackIcon";

const CoachSingleScreen = () => {
    let tokenFromReducer = useSelector(
        (store: any) => store.user_token.user_token
    );
    const navigation = useNavigation<any>();
    const [coach, setCoach] = useState<any>([]);
    const [educationVisible, setEducationVisible] = useState(false);
    const [reviewsVisible, setReviewsVisible] = useState(false);
    const [reviews, setReviews] = useState<any>([])
    useEffect(() => {
        axios
            .get(baseUrl + "/client/quiz_status/", {
                headers: {
                    Authorization: "Bearer " + tokenFromReducer,
                },
            })
            .then((status) => {
                setCoach(status.data.coach);
            });
        axios.get(baseUrl + "/coach_review/", {
            headers: {
                Authorization: "Bearer " + tokenFromReducer,
            },
        }).then((res) => {
            setReviews(res.data)
            console.log(res.data, '/coach_review/618')
        })
    }, []);

    console.log(coach, "coach");

    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: "#fff",
            }}
        >
            <View
                style={{
                    justifyContent: "space-between",
                    flexDirection: "row",
                    alignItems: "center",
                    height: 48,
                    paddingHorizontal: 16
                }}
            >
                <TouchableOpacity
                    activeOpacity={0.6}
                    onPress={() => {
                        navigation.navigate("Main");
                    }}
                    style={{
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "row",
                    }}
                >
                    <BackIcon/>
                    <Text
                        style={{
                            color: "#7454CF",
                            marginLeft: 10,
                            fontSize: 18,
                            fontWeight: "400",
                            lineHeight: 21.48,
                        }}
                    >
                        Назад
                    </Text>
                </TouchableOpacity>
                <Text
                    style={{
                        color: "#1E1E1E",
                        fontWeight: "400",
                        fontSize: 18,
                        lineHeight: 21.48,
                    }}
                >
                    My Health Buddy
                </Text>
                <View
                    style={{
                        width: 50,
                        height: 30,
                    }}
                />
            </View>
            <ScrollView
                style={{
                    width: "100%",
                    paddingHorizontal: 16,
                }}
            >
                <ScrollView
                    style={{width: '100%'}}
                    showsVerticalScrollIndicator={false}>
                    <View
                        style={{
                            marginTop: 32,
                            height: 186,
                            width: 186,
                            alignSelf: "center",
                            shadowColor: "rgba(0, 0, 0, 0.06)",
                            shadowOffset: {width: 4, height: 4},
                            shadowOpacity: 0.2,
                            shadowRadius: 3,
                        }}
                    >
                        <Image
                            source={{uri: coach?.user?.avatar_thumbnail}}
                            style={styles.coach_avatar}
                        />
                        {/*<Text style={styles.specialities_description}>*/}
                        {/*    {coach?.specialities[0]?.name}*/}
                        {/*</Text>*/}
                    </View>
                    <Text style={styles.coach_name}>{coach?.user?.username}</Text>
                    <View
                        style={{
                            flexDirection: "row",
                            marginTop: 30,
                            alignItems: "center",
                        }}
                    >
                        <DocxIcon/>
                        <Text style={styles.specialisation_title}>Специализация</Text>
                    </View>
                    <View>
                        <Text style={styles.specialisation_description}>
                            {coach?.specialization}
                        </Text>
                    </View>
                    <View style={styles.line}/>
                    <TouchableOpacity
                        style={styles.education_btn}
                        activeOpacity={0.7}
                        onPress={() => {
                            setEducationVisible(!educationVisible);
                        }}
                    >
                        <View style={{flexDirection: "row"}}>
                            <EducationIcon/>
                            <Text style={styles.specialisation_title}>Образование</Text>
                        </View>
                        <Text style={{alignItems: "flex-end"}}>
                            {educationVisible ? <ArrowDown/> : <ArrowUp/>}
                        </Text>
                    </TouchableOpacity>
                    <View>
                        {educationVisible && (
                            <View>
                                <Text style={styles.education_description}>
                                    {coach?.education_description}
                                </Text>
                                <View style={{height: 120, width: '100%', marginTop: 16}}>
                                    <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}
                                                style={{flexDirection: 'row'}}>
                                        {coach?.certificates.map((item) => (
                                            <View key={item.id} style={{marginRight: 16}}>
                                                <Image style={{width: 150, height: 105}} source={{uri: item.file}}/>
                                            </View>
                                        ))}
                                    </ScrollView>
                                </View>
                            </View>
                        )}
                        <View style={styles.line}/>
                    </View>
                    <TouchableOpacity
                        style={[styles.education_btn, {marginBottom: 5}]}
                        activeOpacity={0.7}
                        onPress={() => {
                            setReviewsVisible(!reviewsVisible);
                        }}
                    >
                        <View style={{flexDirection: "row"}}>
                            <ReviewsIcon/>
                            <Text style={styles.specialisation_title}>Отзывы</Text>
                        </View>
                        <Text style={{alignItems: "flex-end"}}>
                            {reviewsVisible ? <ArrowDown/> : <ArrowUp/>}
                        </Text>
                    </TouchableOpacity>
                    {reviewsVisible && (
                        <View>
                            <View style={{height: '100%', width: '100%', marginTop: 16}}>
                                {reviews?.map((item) => (
                                    <TouchableOpacity key={item.id} style={{marginRight: 16}}>
                                        {coach?.user.id === item.coach &&
                                            <View style={{flex: 1}}>
                                                <Text style={{
                                                    fontWeight: '600',
                                                    fontSize: 16,
                                                    lineHeight: 20
                                                }}>
                                                    {item.name}
                                                </Text>
                                                <Text style={{
                                                    marginVertical: 5,
                                                    fontSize: 16
                                                }}>{item.text}</Text>
                                            </View>}
                                    </TouchableOpacity>
                                ))}
                            </View>
                        </View>
                    )}
                    <View style={[styles.line, {marginTop: 0}]}/>
                </ScrollView>
            </ScrollView>
        </SafeAreaView>
    );
};

export default CoachSingleScreen;

const styles = StyleSheet.create({
    coach_avatar: {
        width: "100%",
        height: "100%",
        resizeMode: "stretch",
        borderRadius: 24,
    },
    coach_name: {
        fontSize: 24,
        fontWeight: "600",
        marginTop: 16,
        lineHeight: 28,
        fontStyle: "normal",
        alignSelf: "center",
    },
    specialisation_title: {
        fontWeight: "600",
        fontStyle: "normal",
        fontSize: 19,
        marginLeft: 14,
        lineHeight: 23,
    },
    specialisation_description: {
        fontWeight: "400",
        fontSize: 16,
        fontStyle: "normal",
        lineHeight: 20,
        marginTop: 14,
        color: "#1E1E1E",
    },
    education_btn: {
        flexDirection: "row",
        // marginTop: 16,
        alignItems: "center",
        justifyContent: "space-between",
    },
    line: {
        width: "100%",
        height: 1,
        backgroundColor: "#E2E2E2",
        marginVertical: 16,
    },
    education_description: {
        marginTop: 14,
        color: "#1E1E1E",
        fontSize: 16,
        fontWeight: "400",
        fontStyle: "normal",
        lineHeight: 20,
    },
    specialities_description: {
        color: "#797979",
        fontStyle: "normal",
        fontSize: 16,
        lineHeight: 20,
        fontWeight: "400",
    },
});
