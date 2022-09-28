import React from 'react';
import {View, Text, StyleSheet} from "react-native";
import {color1} from "../../../helpers/colors";

const StatusBar = (props: any) => {
    const {activeWidth} = props
    return (
        <View style={styles.status_bar_parent}>
            <View style={[styles.active_status, activeWidth]}/>
        </View>
    );
};

export default StatusBar;

const styles = StyleSheet.create({
    status_bar_parent:{
        width: '100%',
        backgroundColor: '#dadae0',
        height: 9,
        marginTop: 25,
        borderRadius: 20
    },
    active_status:{
        width: '25%',
        backgroundColor: color1,
        height: 9,
        borderTopLeftRadius:  20,
        borderBottomLeftRadius:  20
    }
})
