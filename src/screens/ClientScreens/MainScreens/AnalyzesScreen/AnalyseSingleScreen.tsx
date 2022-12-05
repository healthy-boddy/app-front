import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text} from "react-native";
import MainContainer from "../../../../components/MainContainer";
import BackButton from "../../../../components/BackButton";
import {useIsFocused, useNavigation} from "@react-navigation/native";
import Description from "../../../../components/Description";
import Title from '../../../../components/Title';
import AsyncStorage from "@react-native-async-storage/async-storage";
import {useDispatch, useSelector} from "react-redux";

const AnalyseSingleScreen = ({routes}) => {
    const navigation = useNavigation<any>();
    const lab = useSelector(store => store.laboratory.lab);
    const isFocused = useIsFocused();

    return (
        <MainContainer>
            <View style={{paddingHorizontal: 16, flex: 1}}>
                <View>
                    <BackButton
                        onPressEditAnalyse={()=>{
                            navigation.navigate('EditAnalyse', {lab: routes?.params?.lab})
                        }}
                        editAnalyse
                        onPress={() => {
                        navigation.navigate("Analyzes")
                    }}/>
                </View>
                <View style={{marginTop: 16}}>
                    <Text>
                        22.09.2022
                    </Text>
                    <Description marginTop={8}>Инвитро, Сампсоньевский, 32</Description>
                </View>
                <View style={styles.items}>
                    <View style={styles.item_box}>
                        <Text style={styles.item_title}>Лейкоциты</Text>
                        <Text style={styles.item_indicator}>4,81 тыс/мкл</Text>
                    </View>
                    <View style={styles.item_box}>
                        <Text style={styles.item_title}>Эритроциты</Text>
                        <Text style={styles.item_indicator}>5,39 млн/мкл</Text>
                    </View>
                    <View style={styles.item_box}>
                        <Text style={styles.item_title}>Гемоглобин</Text>
                        <Text style={styles.item_indicator}>156 г/дл</Text>
                    </View>
                    <View style={styles.item_box}>
                        <Text style={styles.item_title}>Гематокрит</Text>
                        <Text style={styles.item_indicator}>47,4 %</Text>
                    </View>
                </View>
                <View>
                    <Title titlePropStyle={{fontSize: 16}}>
                        Оцифровано по документу
                    </Title>
                </View>
            </View>
        </MainContainer>
    );
};

export default AnalyseSingleScreen;
const styles = StyleSheet.create({
    items: {
        marginTop: 35
    },
    item_box: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 30
    },
    item_title:{
        fontSize: 16,
        fontWeight: '400',
        lineHeight: 20,
        fontStyle: 'normal'
    },
    item_indicator:{
        fontSize: 16,
        fontWeight: '600',
        fontStyle: 'normal',
        lineHeight: 19
    },
})
