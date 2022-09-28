import React from 'react';
import {Text, View, StyleSheet, Pressable, Platform, TouchableOpacity} from "react-native";
import BackIcon from "../assets/Icons/BackIcon";
import {color1} from "../helpers/colors";

const BackButton = (props: any) => {
    const {onPress} = props
    return (
        <TouchableOpacity activeOpacity={0.6} onPress={onPress} style={styles.back}>
            <View>
                <BackIcon/>
            </View>
            <View>
                <Text style={styles.title}>
                    Назад
                </Text>
            </View>
        </TouchableOpacity>
    );
};

export default BackButton;
const styles = StyleSheet.create({
    back:{
        flexDirection: 'row',
        marginTop: Platform.OS === 'android' ? 35 : 0,
        alignItems: "center",

    },
    title:{
        color: color1,
        marginLeft: 10
    }
})
