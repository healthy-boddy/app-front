import React from 'react';
import {TextInput, StyleSheet, View} from "react-native";
import {color2} from "../helpers/colors";

const CustomInput = (props: any) => {
    const {onChangeText, placeholder} = props
    return (
        <View style={styles.input_box}>
            <TextInput onChangeText={onChangeText} placeholder={placeholder} style={styles.input}/>
        </View>
    );
};

export default CustomInput;
const styles = StyleSheet.create({
    input_box: {
        borderRadius: 30,
        backgroundColor: color2,
        paddingVertical: 12,
        paddingLeft: 15
    },
    input:{
        fontSize: 16
    }
})
