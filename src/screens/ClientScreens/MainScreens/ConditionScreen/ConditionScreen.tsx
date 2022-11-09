import React, {useEffect, useState} from "react";
import {View, Text, FlatList, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView} from "react-native";
import {useSelector} from "react-redux";
import axios from "axios";
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import MainContainer from "../../../../components/MainContainer";
import EmptyStateIcon from "./CondationIcons/EmptyStateIcon";
import {color1} from "../../../../helpers/colors";
import UnicIcon from "./CondationIcons/UnicIcon";

const ConditionScreen = () => {
    let tokenFromReducer = useSelector((store: any) => store.user_token.user_token);
    let AuthStr = "Bearer " + tokenFromReducer;

    let [characteristics, setCharacteristics] = useState([
        {number: 1.9, state: "Нужна помощь", organ: "Кости"},
        {number: 4.8, state: "Отлично", organ: "Гормоны"},
        {number: 2.3, state: "Хорошо", organ: "Нервная система"},
        {number: 4.8, state: "Отлично", organ: "ЖКТ"},
        {number: 1.8, state: "Нужна помощь", organ: "Дыхание"},
        {number: 2.3, state: "Хорошо", organ: "Сердце"},
        {number: 2.3, state: "Хорошо", organ: "Кровь"},
        {number: 4.8, state: "Отлично", organ: "Печень"},
    ]);

    let [conditions, setConditions] = useState<any>([])

    useEffect(() => {
        try {
            (async () => {
                await axios.get('http://92.53.97.238/user/condition/', {
                    headers: {
                        Authorization: AuthStr,
                        "accept": "application/json",
                        "Content-type": "application/json"
                    }
                }).then((response) => {
                    //  console.log(response.data, 'state')
                    setConditions(response.data.condition)
                })

            })();
        } catch (error) {
            console.log(error, 'condition error')
        }
    }, [])

    console.log(conditions, 'conditions')

    const renderConditions = ({item}: any) => {
        return (
            <>
                <View style={{
                    width:'50%',
                    alignItems:'center',

                }}>
                <View style={{
                paddingHorizontal:16,
                paddingVertical:16,
                backgroundColor:'#F5F4F8',
                borderRadius:24,
                width:160,
                    height:270,
                marginVertical:15,
                alignItems:'flex-start',
            }}>



                <View style={{
                    justifyContent:'center',
                    flexDirection:'row'
                }}>
                    <View style={{width: 48, height: 48}}>
                        <AnimatedCircularProgress
                            size={48}
                            width={5}
                            fill={
                                item.status === 'great' ? 95 :
                                    item.status === 'good' ? 50 :
                                        item.status === 'need_help' ? 15 : 0
                            }
                            rotation={1}
                            // @ts-ignore
                            tintColor={
                                item.status === 'great' ? '#0EC057'
                                    : item.status === 'need_help' ? '#E81313'
                                        : item.status === 'good' ? '#FF9F0F'
                                            : null
                            }
                            backgroundColor={
                                item.status === 'great' ? '#B0E9C7' :
                                    item.status === 'good' ? '#FFE9B1' : '#FFD2D2'
                            }
                            children={() => (
                                <View>
                                    <UnicIcon
                                        fill={item.status === 'great' ? '#0EC057'
                                            : item.status === 'need_help' ? '#E81313'
                                                : item.status === 'good' ? '#FF9F0F'
                                                    : null}/>
                                </View>)}
                        />
                    </View>

                    <Text
                        style={[
                            styles.content_item_numbers,
                            item.status == "need_help"
                                ? {color: "#E81313"}
                                : {color: "#FF9F0F"},
                            item.status == "great"
                                ? {color: "#0EC057"}
                                : null,
                        ]}
                    >
                        {item?.value}
                    </Text>
                </View>

                <Text
                    style={[
                        styles.content_item_title,
                        item.status == "need_help"
                            ? {color: "#E81313"}
                            : {color: "#FF9F0F"},
                        item.status == "great"
                            ? {color: "#0EC057"}
                            : null,
                    ]}
                >
                    {item.status === 'need_help' ? 'Need help' : item.status === 'good' ? 'Good' : 'Excellent'}
                </Text>

                <Text style={styles.content_item_description}>
                {item.name}
            </Text>
            <Text style={styles.content_item_day}>Today</Text>

                </View>
            </View>
            </>
        )
    }
    return (
        <MainContainer>
            {/*//todo: page make as analysis */}
            <SafeAreaView style={{
                paddingHorizontal:20,
                height:'100%',
                marginTop:35,
            }}>
            <Text
                style={{
                    fontSize:32,
                    fontWeight:'600',
                    lineHeight:34,
                    color:'#000',
                }}
            >
                My condition
            </Text>

            {conditions.length ?
                <View style={styles.content_box}>
                    <FlatList
                        data={conditions}
                        renderItem={renderConditions}
                        extraData={conditions}
                        showsVerticalScrollIndicator={false}
                        keyExtractor={item => item.max}
                        numColumns={2}
                        style={{marginBottom:60}}
                        contentContainerStyle={{
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            width: '100%',
                    }}
                    />

                </View>
                :
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <EmptyStateIcon/>
                    <Text style={styles.empty_state_title}>
                        The dynamics of the body's condition will be displayed here
                    </Text>
                    <Text style={styles.description}>
                        Available by Health Buddy subscription
                    </Text>
                    <TouchableOpacity style={{paddingTop: 15}}>
                        <Text style={{
                            color: color1,
                            fontSize: 16,
                            fontWeight: '500',
                            marginTop:20
                        }}>
                            Subscribe
                        </Text>
                    </TouchableOpacity>
                </View>}
            </SafeAreaView>
        </MainContainer>

    );
};

export default ConditionScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: "center",
        backgroundColor: "#FFFFFF",
        alignItems: "center",
        paddingBottom: 25,
    },
    content_box: {
        marginTop: 29,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 16,
    },
    content: {
        height: "auto",
        width: "50%",
        alignItems:"center",
        justifyContent:'center'

    },
    content_top_item: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingTop: 14,
    },
    content_item_numbers: {
        fontSize: 40,
        color: "#E81313",
        fontWeight: "700",
        fontStyle: "normal",
        lineHeight: 48,
        marginLeft: 12,
    },
    content_item_title: {
        color: "#E81313",
        fontWeight: "400",
        fontStyle: "normal",
        fontSize: 16,
        marginTop: 12,
    },
    content_item_description: {
        fontWeight: "600",
        fontSize: 19,
        lineHeight: 23,
        color: "#1E1E1E",
        marginTop: 20,
        width: 'auto',
    },
    content_item_day: {
        marginTop: 8,
        color: "#797979",
        fontWeight: "400",
        fontStyle: "normal",
        fontSize: 16,
        lineHeight: 20,
    },
    description: {
        color: '#797979',
        fontSize: 16,
        fontStyle: "normal",
        fontWeight: '400',
        textAlign: "center",
        marginTop:10

    },
    empty_state_title: {
        color: '#1E1E1E',
        width: 343,
        fontWeight: '600',
        fontSize: 19,
        textAlign: "center",
        marginTop: 10
    }
});
