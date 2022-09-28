import React from 'react';
import {View, StyleSheet, SafeAreaView} from "react-native";

const Container = (props: any) => {
    const {children, containerProp} = props
    return (
        <SafeAreaView style={[styles.container]}>
            <View style={[{flex: 1}, containerProp]}>
                {children}
            </View>
        </SafeAreaView>
    );
};

export default Container;

const styles: any = StyleSheet.create({
    container:{
        flex: 1,
        width: '100%',
        backgroundColor: 'white'
    }
})
