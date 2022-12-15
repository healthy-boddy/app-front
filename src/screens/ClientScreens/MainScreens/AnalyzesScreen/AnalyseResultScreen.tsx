import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, FlatList} from "react-native";
import {useSelector} from "react-redux";
import {baseUrl2} from "../../../../helpers/url";
import {useIsFocused, useNavigation} from "@react-navigation/native";
import MainContainer from "../../../../components/MainContainer";
import BackButton from "../../../../components/BackButton";
import Description from "../../../../components/Description";

const AnalyseResultScreen = () => {
    let tokenFromReducer = useSelector((store: any) => store.user_token.user_token);
    let AuthStr = "Bearer " + tokenFromReducer;
    let [analysesIndicators, setAnalysesIndicators] = useState([
        {
            id: 1,
            name: "",
            value: "",
            filteredUnits: []
        },
    ])

    const navigation = useNavigation<any>()
    const [firstIndicators, setFirstIndicators] = useState([])
    const isFocused = useIsFocused();
    const analyzeFromStorage = useSelector(store => store.laboratory.lab);
    const savedAnalyseId = useSelector(store => store.laboratory.analyseId);
    const [analyseId, setAnalyseId] = useState(savedAnalyseId)
    const [activeAnalyzeId, setActiveAnalyzeId] = useState(analyzeFromStorage?.id);
    const [analyse, setAnalyse] = useState([])
    console.log(analyseId, 'singl')

    function handleGetAnalyseIndicators() {
        fetch(baseUrl2 + `/analysis/indicator?analysis=${analyseId}`, {
            method: 'get',
            headers: {
                "accept": "application/json",
                "content-type": "application/json",
                Authorization: AuthStr,
            }
        }).then((res) => {
            return res.json()
        }).then((res) => {
            setAnalysesIndicators(res)
            console.log(res, 'response 2')
        })
    }
    useEffect(() => {
        setAnalyseId(savedAnalyseId)
    }, [savedAnalyseId])

    function handleGetAnalyse() {
        fetch(baseUrl2 + `/analysis/${activeAnalyzeId}`, {
            method: 'get',
            headers: {
                "accept": "application/json",
                "content-type": "application/json",
                Authorization: AuthStr,
            }
        }).then((res) => {
            return res.json()
        }).then((res) => {
            setAnalyse(res)
            console.log(res, 'handleGetAnalyse')
        })
    }

    console.log(analysesIndicators, 'ex')

    useEffect(() => {
        if (isFocused) {
            handleGetAnalyseIndicators()
            handleGetAnalyse()
        }
    }, [isFocused, analyzeFromStorage])
    const renderItem = ({item}: any) => {
        return (
            <View style={styles.item_box}>
                <Text style={styles.item_title}>{item?.unit_info?.indicator_name}</Text>
                <Text style={styles.item_indicator}>{item?.value} {item?.unit_info?.unit_name}</Text>
            </View>
        )
    }
    return (
        <MainContainer>
            <View>
                <BackButton
                    onPress={()=>{
                    navigation.navigate('Analyzes')
                }} editAnalyse/>
            </View>
            <View style={{flex: 1}}>
                <Text style={{fontSize: 18, fontWeight: '400', fontStyle: 'normal'}}>
                    {analyse?.date}
                </Text>
                <Description marginTop={10}>
                    {analyse?.laboratory_name}
                </Description>
                <View style={{flex: 1, marginTop: 35}}>
                    <FlatList
                        data={analysesIndicators}
                        renderItem={renderItem}
                    />
                </View>

            </View>

        </MainContainer>
    );
};

export default AnalyseResultScreen;
const styles = StyleSheet.create({
    item_box: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 30
    },
    item_title: {
        fontSize: 16,
        fontWeight: '400',
        lineHeight: 20,
        fontStyle: 'normal'
    },
    item_indicator: {
        fontSize: 16,
        fontWeight: '600',
        fontStyle: 'normal',
        lineHeight: 19
    },
})
