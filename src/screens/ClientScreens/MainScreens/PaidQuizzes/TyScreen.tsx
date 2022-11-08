import React from 'react';
import {View, Text, StyleSheet} from "react-native";
import PicIcon from "../../../../assets/Icons/PicIcon";
import {Title} from "react-native-paper";
import CustomButton from "../../../../components/CustomButton";
import {useNavigation} from "@react-navigation/native";

const TyScreen = () => {
    const navigation = useNavigation<any>()
    return (
        <View style={{flex: 1}}>
            <View style={styles.container}>
                <View>
                    <PicIcon/>
                </View>
                <View style={{marginTop: 40}}>
                    <Title>
                        Thank you for your time!
                    </Title>
                    <View/>
                    <View>
                        <Text style={styles.description}>
                            Your coach will contact you soon.
                        </Text>
                    </View>
                </View>
            </View>
            <View style={{paddingBottom: 40, paddingHorizontal: 16}}>
                <CustomButton
                    title={'Go to the Main page'}
                    onPress={()=>{navigation.navigate('Main')}}
                />
            </View>
        </View>
    );
};

export default TyScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#fff'
    },
    description: {
        color: '#797979',
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 20,
        fontStyle: "normal",
        textAlign: "center",
        marginTop: 12
    }
})
