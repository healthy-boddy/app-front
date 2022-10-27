import React, {useEffect, useState} from 'react';
import {View, Text, Image, StyleSheet, ScrollView, TouchableOpacity} from "react-native";
import MainContainer from "../../../../components/MainContainer";
import BackButton from "../../../../components/BackButton";
import axios from "axios";
import {baseUrl} from "../../../../helpers/url";
import {useSelector} from "react-redux";
import DocxIcon from "./CoachSingleIcons/DocxIcon";
import EducationIcon from "./CoachSingleIcons/EducationIcon";
import ArrowDown from "./CoachSingleIcons/ArrowDown";
import ArrowUp from "./CoachSingleIcons/ArrowUp";
import ReviewsIcon from "./CoachSingleIcons/ReviewsIcon";
import {useNavigation} from "@react-navigation/native";

const CoachSingleScreen = () => {
    let tokenFromReducer = useSelector((store: any) => store.user_token.user_token);
    const navigation = useNavigation<any>()
    const [coach, setCoach] = useState<any>([])
    const [educationVisible, setEducationVisible] = useState(false)
    const [reviewsVisible, setReviewsVisible] = useState(false)
    useEffect(() => {
        axios.get(baseUrl + '/quiz_status/', {
            headers: {
                Authorization: "Bearer " + tokenFromReducer,
            },
        }).then((status) => {
            setCoach(status.data.coach)
        })
    }, [])

    return (
        <MainContainer>
            <ScrollView>
                <View style={{flexDirection: 'row', alignItems: 'center', height: 50}}>
                    <View style={{width: 150}}>
                        <BackButton onPress={()=>{navigation.navigate('Main')}}/>
                    </View>
                    <View style={{alignItems: 'center', top: 20}}>
                        <Text style={{textAlign: 'center'}}>Мой Health Buddy</Text>
                    </View>
                </View>
                <View style={{marginTop: 55, alignItems: 'center'}}>
                    <Image
                        source={{uri: coach?.avatar}}
                        style={styles.coach_avatar}
                    />
                    <Text style={styles.coach_name}>
                        {coach?.user?.username}
                    </Text>
                </View>
                <View style={{flexDirection: 'row', marginTop: 30, alignItems: 'center'}}>
                    <Text>
                        <DocxIcon/>
                    </Text>
                    <Text style={styles.specialisation_title}>
                        Специализация
                    </Text>
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
                        setEducationVisible(!educationVisible)
                    }}
                >
                    <View style={{flexDirection: 'row'}}>
                        <Text>
                            <EducationIcon/>
                        </Text>
                        <Text style={styles.specialisation_title}>
                            Оброзование
                        </Text>
                    </View>
                    <Text style={{alignItems: 'flex-end'}}>
                        {educationVisible ? <ArrowDown/> : <ArrowUp/>}
                    </Text>
                </TouchableOpacity>
                <View>
                    {educationVisible &&
                        <Text style={styles.education_description}>
                            {coach?.education_description}
                        </Text>}
                </View>
                <View style={styles.line}/>

                <TouchableOpacity
                    style={styles.education_btn}
                    activeOpacity={0.7}
                    onPress={() => {
                        setReviewsVisible(!reviewsVisible)
                    }}
                >
                    <View style={{flexDirection: 'row'}}>
                        <Text>
                            <ReviewsIcon/>
                        </Text>
                        <Text style={styles.specialisation_title}>
                            Отзывы
                        </Text>
                    </View>
                    <Text style={{alignItems: 'flex-end'}}>
                        {reviewsVisible ? <ArrowDown/> : <ArrowUp/>}
                    </Text>
                </TouchableOpacity>
            </ScrollView>
        </MainContainer>
    );
};

export default CoachSingleScreen;

const styles = StyleSheet.create({
    coach_avatar: {
        width: 186,
        height: 186,
        borderRadius: 24,
        borderWidth: 1,
        borderColor: 'solid'
    },
    coach_name: {
        fontSize: 24,
        fontWeight: "600",
        marginTop: 16,
        lineHeight: 28,
        fontStyle: "normal"
    },
    specialisation_title: {
        fontWeight: '600',
        fontStyle: "normal",
        fontSize: 19,
        marginLeft: 14,
        lineHeight: 23
    },
    specialisation_description: {
        fontWeight: '400',
        fontSize: 16,
        fontStyle: "normal",
        lineHeight: 20,
        marginTop: 14,
        color: '#1E1E1E'
    },
    education_btn: {
        flexDirection: 'row',
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    line: {
        width: '100%',
        height: 1,
        backgroundColor: '#BDBDBD',
        marginTop: 15
    },
    education_description: {
        marginTop: 14,
        color: '#1E1E1E',
        fontSize: 16,
        fontWeight: '400',
        fontStyle: 'normal',
        lineHeight: 20
    }
})
