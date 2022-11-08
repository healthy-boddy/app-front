import React, {useEffect, useState} from "react";
import {View, Text, StyleSheet, SafeAreaView} from "react-native";
import {useNavigation} from "@react-navigation/native";
import Doctor from "../../../../assets/Icons/Doctor";
import {useDispatch, useSelector} from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
    deleteUserBio,
    deleteUserToken,
} from "../../../../store/actions/user_token";
import {deleteUserData} from "../../../../store/actions/user_data";
import {WrapperPage} from "../../../../components/core/wrapper";
import MainContainer from "../../../../components/MainContainer";
import CustomButton from "../../../../components/CustomButton";

const GreetingsScreen = (props: any) => {
    const navigation: any = useNavigation();
    let user_data = useSelector((store: any) => store.user_data?.user_data);
    console.log(user_data, "from greeting screen");


    return (
        <MainContainer>
            <SafeAreaView style={{
                flex:1,
                paddingVertical: 35,
            }}>
                    <Text
                        style={{
                            fontWeight: "600",
                            fontSize: 24,
                            lineHeight: 28,
                            color: "#1E1E1E",
                            textAlign: "left",
                            alignSelf: "flex-start",
                        }}
                    >
                        Hello, {user_data?.user?.username} !
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
                        We found you in the list of verified buddies!
                    </Text>
                <View style={styles.image_box}>
                    <Doctor/>
                </View>
                <CustomButton
                    onPress={() => navigation.navigate("Greetings2")}
                    title={'Great! Next'}
                />
            </SafeAreaView>
        </MainContainer>
    );
};

export default GreetingsScreen;
const styles = StyleSheet.create({
    inlineContainer: {
        paddingHorizontal: 20,
        paddingTop: 25,
    },
    title_box: {
        marginTop: 25,
    },
    image_box: {
        alignItems: "center",
        marginTop: 52,
        flex: 1,
        paddingTop: 45
    },
});
