import React from "react";
import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {useNavigation} from "@react-navigation/native";
import Title from "../../../../components/Title";
import MainContainer from "../../../../components/MainContainer";
import {useDispatch, useSelector} from "react-redux";
import {BellIcon} from "../../../../assets/Icons/BellIcon";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {deleteUserBio, deleteUserToken} from "../../../../store/actions/user_token";
import {deleteUserData} from "../../../../store/actions/user_data";

const GreetingsScreen4 = (props: any) => {
    const navigation: any = useNavigation();
    const dispatch = useDispatch()
    let user_data = useSelector((store: any) => store.user_data?.user_data);

    console.log(user_data)

    const handleLogOut = async () => {
        await AsyncStorage.removeItem("userToken");
        dispatch(deleteUserToken());
        dispatch(deleteUserBio());
        dispatch(deleteUserData());
    }

    return (
        <MainContainer
            onPressBack={() => navigation.navigate("Greetings3")}
            onPressButton={() => navigation.navigate("Greetings5")}
            buttonTitle={"Continue"}
        >
            <View style={{
                paddingHorizontal:16
            }}>
            <View style={styles.header}>
                <TouchableOpacity
                    activeOpacity={0.2}
                    onLongPress={handleLogOut}
                    style={{flexDirection: 'row', alignItems: 'center'}}
                >
                    <View>
                        <Image style={{
                            width: 40,
                            height: 40,
                            borderRadius: 100,
                            marginRight: 10
                        }} source={{uri: user_data.avatar}}
                        />
                    </View>
                    <Text style={styles.user_name}>
                        {user_data.user.username}
                    </Text>
                </TouchableOpacity>
                <View>
                    <BellIcon/>
                </View>
            </View>
            <View style={{marginVertical: 16}}>
                <Title>My training</Title>
            </View>
            <TouchableOpacity style={styles.day_question}>
                <Title titlePropStyle={{marginBottom: 4}}>Day 1</Title>
                <Text style={styles.day_questions_description}>
                    {`\u2022  Familiarity with the product`}{'\n'}
                    {`\u2022 Product training with a methodologist`}
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.day_question}>
                <Title titlePropStyle={{marginBottom: 4}}>Day 2</Title>
                <Text style={styles.day_questions_description}>
                    {`\u2022 Customer's path`}{'\n'}
                    {`\u2022 Algorithm of the initial consultation`}{'\n'}
                    консультации
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.day_question}>
                <Title titlePropStyle={{marginBottom: 4}}>Day 3</Title>
                <Text style={styles.day_questions_description}>
                    {`\u2022 Long-term client management`}{'\n'}
                    {`\u2022 Setting goals and objectives`}
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.day_question}>
                <Title titlePropStyle={{marginBottom: 4}}>Fill out your profile</Title>
                <Text style={styles.day_questions_description}>
                    This will make you more trustworthy specialist for the initial acquaintance with the client
                </Text>
            </TouchableOpacity>
            </View>
        </MainContainer>
    );
};
export default GreetingsScreen4;

const styles = StyleSheet.create({
    inlineContainer: {
        paddingHorizontal: 20,
        paddingTop: 35,
    },
    header: {
        flexDirection: 'row',
        justifyContent: "space-between",
        width: '100%',
        alignItems: "center"
    },
    day_question: {
        width: '100%',
        borderRadius: 12,
        backgroundColor: '#F5F4F8',
        paddingHorizontal: 16,
        paddingVertical: 12,
        marginBottom: 16
    },
    day_questions_description:{
        fontWeight: '400',
        fontSize: 16,
        fontStyle: 'normal',
        lineHeight: 20,
        color: '#797979'
    },
    user_name:{
        color: '#1E1E1E',
        fontStyle: "normal",
        fontSize: 16,
        fontWeight: '600',
        lineHeight: 19
    }
});
