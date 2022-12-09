import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text, FlatList} from "react-native";
import MainContainer from "../../../../components/MainContainer";
import BackButton from "../../../../components/BackButton";
import {useIsFocused, useNavigation} from "@react-navigation/native";
import Description from "../../../../components/Description";
import Title from '../../../../components/Title';
import AsyncStorage from "@react-native-async-storage/async-storage";
import {useDispatch, useSelector} from "react-redux";
import {baseUrl2} from "../../../../helpers/url";

const AnalyseSingleScreen = ({routes}) => {
    const navigation = useNavigation<any>();
    const lab = useSelector(store => store.laboratory.lab);
    const isFocused = useIsFocused();
    const analyzeFromStorage = useSelector(store => store.laboratory.lab);
    const [activeAnalyzeId, setActiveAnalyzeId] = useState(analyzeFromStorage?.id);
    let tokenFromReducer = useSelector((store: any) => store.user_token.user_token);
    let AuthStr = "Bearer " + tokenFromReducer;
    let [indicators, setIndicators] = useState([])
    let [analyse, setAnalyse] = useState([])

    function handleGetAnalyseIndicators() {
        fetch(baseUrl2 + `/analysis/indicator?analysis=${activeAnalyzeId}`, {
            method: 'get',
            headers: {
                "accept": "application/json",
                "content-type": "application/json",
                Authorization: AuthStr,
            }
        }).then((res) => {
            return res.json()
        }).then((res) => {
            setIndicators(res)
            // console.log(res, 'handleGetAnalyseIndicators')
        })
    }

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
    useEffect(() => {
        setActiveAnalyzeId(analyzeFromStorage?.id)
    }, [analyzeFromStorage])

    useEffect(() => {
        if (isFocused) {
            handleGetAnalyseIndicators()
            handleGetAnalyse()
        }
    }, [isFocused, analyzeFromStorage])


    console.log(isFocused, activeAnalyzeId)

    const renderItem = ({item}) => {
        return (
            <View style={styles.item_box}>
                <Text style={styles.item_title}>{item.unit_info.indicator_name}</Text>
                <Text style={styles.item_indicator}>{item.value} {item.unit_info.unit_name}</Text>
            </View>
        )
    }
    return (
        <MainContainer>
            <View style={{paddingHorizontal: 16, flex: 1}}>
                <View>
                    <BackButton
                        onPressEditAnalyse={() => {
                            navigation.navigate('EditAnalyse', {lab: routes?.params?.lab})
                        }}
                        editAnalyse
                        onPress={() => {
                            navigation.navigate("Analyzes")
                        }}/>
                </View>
                <View style={{marginTop: 16}}>
                    <Text>
                        {analyse?.date}
                    </Text>
                    <Description marginTop={8}>Инвитро, Сампсоньевский, 32</Description>
                </View>
                <View style={styles.items}>
                    <FlatList
                        data={indicators}
                        renderItem={renderItem}
                    />
                    <Title titlePropStyle={{fontSize: 16}}>
                        {/*Оцифровано по документу*/}
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
