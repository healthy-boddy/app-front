import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from "react-native";
import {color1} from "../helpers/colors";

const CustomButton = (props: any) => {
    const {title, buttonStyles, buttonTitle, disabled, onPress} = props;
    return (
        <TouchableOpacity activeOpacity={0.6} disabled={disabled ? disabled : false} style={[styles.button, buttonStyles]} onPress={onPress}>
            <Text style={[styles.title, buttonTitle]}>
                {title}
            </Text>
        </TouchableOpacity>
    );
};

export default CustomButton;
const styles = StyleSheet.create({
    button: {
        width: '100%',
        height: 50,
        backgroundColor: color1,
        borderRadius: 35,
        justifyContent: "center",

    },
    title:{
        color: '#fff',
        textAlign: "center",
        fontSize: 16
    }
})
