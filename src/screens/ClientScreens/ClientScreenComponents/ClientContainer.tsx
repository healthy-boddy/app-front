import React from 'react';
import {View, StyleSheet} from "react-native";

const ClientContainer = (props: any) => {
    const {children, containerProp} = props
    return (
        <View style={[styles.container, containerProp]}>
            {children}
        </View>
    );
};
export default ClientContainer;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        width: '100%',
        paddingHorizontal: 25,
        paddingTop: 35,
        backgroundColor: '#FFFFFF'
    }
})
