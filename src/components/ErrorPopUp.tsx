import React from 'react';
import {Text, StyleSheet, View} from "react-native";
import ErrorIcon from "../assets/Icons/ErrorIcon";

const ErrorPopUp = (props: any) => {
    const {error, style} = props
    return (
        <View style={[styles.error_box, style]}>
            <Text style={styles.error_text}>
                {props.error}
            </Text>
            <Text>
                <ErrorIcon/>
            </Text>
        </View>
    );
};

export default ErrorPopUp;
const styles = StyleSheet.create({
    error_box:{
        width: '100%',
        backgroundColor: '#FEEFEF',
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 15,
        borderRadius: 100
    },
    error_text:{
    color: 'red'
    }
})
