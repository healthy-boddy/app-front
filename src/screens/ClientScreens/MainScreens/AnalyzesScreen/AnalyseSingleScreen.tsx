import React, {useEffect, useState} from 'react';
import {View, StyleSheet, TouchableOpacity, Image, Text, FlatList} from "react-native";
import MainContainer from "../../../../components/MainContainer";
import BackButton from "../../../../components/BackButton";
import {useIsFocused, useNavigation} from "@react-navigation/native";
import Description from "../../../../components/Description";
import Title from '../../../../components/Title';
import {useSelector} from "react-redux";
import {baseUrl2} from "../../../../helpers/url";
import ShareIcon from "./AnalyzesScreenIcons/ShareIcon";
import XMark from "../../../CoacheScreens/AuthScreens/TutorialScreens/ThirdDayTutorialScreen/icons/xMark";
import * as Sharing from 'expo-sharing';
import {shareAsync} from "expo-sharing";

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
    const [visible, setIsVisible] = useState(false);

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
        if (isFocused) {
            handleGetAnalyseIndicators()
            handleGetAnalyse()
        }
    }, [analyzeFromStorage, isFocused])

    useEffect(() => {
        setActiveAnalyzeId(analyzeFromStorage?.id)
    }, [analyzeFromStorage])

    console.log(isFocused, activeAnalyzeId)

    const renderItem = ({item}) => {
        return (
            <View style={styles.item_box}>
                <Text style={styles.item_title}>{item.unit_info?.indicator_name}</Text>
                <Text style={styles.item_indicator}>{item.value} {item.unit_info?.unit_name}</Text>
            </View>
        )
    }
    const handleShareImage = async () => {
        console.log(222)
        // if (!(await Sharing.isAvailableAsync())) {
        //     alert("Tú dispositivo no soporta esta funcionalidad");
        //     return;
        // }
        // await Sharing.shareAsync('http://92.53.97.238/media/IMG_1670761773570.JPG').catch((error) => {
        //     console.log(error);
        // });
    };

    return (
        <MainContainer>
            <View style={{flex: 1}}>
                {visible &&
                    <View style={{
                        width: '100%',
                        height: '100%',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <View style={{
                            flexDirection: 'row',
                            width: '100%',
                            justifyContent: 'space-between',
                            marginTop: 50
                        }}>
                            <TouchableOpacity
                                onPress={handleShareImage}
                            >
                                <ShareIcon/>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>{setIsVisible(false)}}>
                                <XMark/>
                            </TouchableOpacity>
                        </View>
                        <View style={{
                            flex: 1,
                            width: '100%',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Image
                                style={{width: '100%', height: 300}}
                                source={{uri: analyse?.photo}}/>
                        </View>
                    </View>}
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
                    <Description marginTop={8}>{analyse?.laboratory_name}</Description>
                </View>
                <View style={styles.items}>
                    <FlatList
                        data={indicators}
                        renderItem={renderItem}
                    />
                    {analyse?.photo &&
                        <View>
                            <Title titlePropStyle={{fontSize: 16, marginBottom: 14}}>
                                Оцифровано по документу
                            </Title>
                            <TouchableOpacity onPress={() => {
                                setIsVisible(true)
                            }}>
                                <Image
                                    style={{width: 150, height: 150, borderRadius: 5}}
                                    source={{uri: analyse?.photo}}/>
                            </TouchableOpacity>
                        </View>
                    }
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
