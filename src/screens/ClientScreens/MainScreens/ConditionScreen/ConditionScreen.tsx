import React, {useEffect, useRef, useState} from "react";
import {View, Text, FlatList, StyleSheet,  ScrollView} from "react-native";
import {useSelector} from "react-redux";
import axios from "axios";
import { AnimatedCircularProgress } from 'react-native-circular-progress';

const ConditionScreen = () => {
<<<<<<< HEAD
  let [characteristics, setCharacteristics] = useState([
    { number: 1.9, state: "Нужна помощь", organ: "Кости" },
    { number: 4.8, state: "Отлично", organ: "Гормоны" },
    { number: 2.3, state: "Хорошо", organ: "Нервная система" },
    { number: 4.8, state: "Отлично", organ: "ЖКТ" },
    { number: 1.8, state: "Нужна помощь", organ: "Дыхание" },
    { number: 2.3, state: "Хорошо", organ: "Сердце" },
    { number: 2.3, state: "Хорошо", organ: "Кровь" },
    { number: 4.8, state: "Отлично", organ: "Печень" },
  ]);
  return (
    <View style={styles.container}>

        <Text
          style={{
            fontWeight: "600",
            lineHeight: 19,
            fontSize: 22.67,
            color: "#1E1E1E",
            textAlign: "center",
            alignSelf: "center",
            marginTop: 61,
          }}
        >
          Мое состояние
        </Text>
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={{
                width: "100%",

            }}
        >
        <View style={styles.content_box}>
          <View style={styles.content}>
            <View
              style={{
                width: "100%",
                paddingHorizontal: 14,
                paddingVertical: 16,
              }}
            >
              <View style={styles.content_top_item}>
                <Pic1 />
                <Text
                  style={[
                    styles.content_item_numbers,
                    characteristics[0].number < 2
                      ? { color: "red" }
                      : { color: "#FF9F0F" },
                    characteristics[0].number >= 4 ? { color: "green" } : null,
                  ]}
                >
                  {characteristics[0].number}
                </Text>
              </View>
              <Text
                style={[
                  styles.content_item_title,
                  characteristics[0].state == "Нужна помощь"
                    ? { color: "red" }
                    : { color: "#FF9F0F" },
                  characteristics[0].state == "Отлично"
                    ? { color: "green" }
                    : null,
                ]}
              >
                {characteristics[0].state}
              </Text>
              <Text style={[styles.content_item_description]}>
                {characteristics[0].organ}
              </Text>
              <Text style={styles.content_item_day}>Сегодня</Text>
            </View>
          </View>
=======
    let tokenFromReducer = useSelector((store: any) => store.user_token.user_token);
    let AuthStr = "Bearer " + tokenFromReducer;
>>>>>>> changes

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
                    console.log(response.data, 'state')
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
            <View style={{flexDirection: 'row', width: '100%'}}>
                <View style={styles.content}>
                    <View
                        style={{
                            width: "100%",
                            paddingHorizontal: 14,
                            paddingVertical: 16,
                        }}>
                        <View style={styles.content_top_item}>
                            <View style={{width: 48, height: 48}}>
                                <AnimatedCircularProgress
                                    size={48}
                                    width={5}
                                    fill={80}
                                    tintColor="#00e0ff"
                                    backgroundColor="grey"
                                    children={()=>(<View><Text>asd</Text></View>)}
                                />
                            </View>

                            <Text
                                style={[
                                    styles.content_item_numbers,
                                    characteristics[1].number < 2
                                        ? {color: "red"}
                                        : {color: "#FF9F0F"},
                                    characteristics[1].number >= 4
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
                                characteristics[1].state == "Нужна помощь"
                                    ? {color: "red"}
                                    : {color: "#FF9F0F"},
                                characteristics[1].state == "Отлично"
                                    ? {color: "#0EC057"}
                                    : null,
                            ]}
                        >
                            {characteristics[1].state}
                        </Text>
                        <Text style={styles.content_item_description}>
                            {item.name}
                        </Text>
                        <Text style={styles.content_item_day}>Сегодня</Text>
                    </View>
                </View>
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <View
                style={{
                    width: "100%",
                    flex: 1
                }}
            >
                <Text
                    style={{
                        fontWeight: "600",
                        lineHeight: 19,
                        fontSize: 22.67,
                        color: "#1E1E1E",
                        textAlign: "center",
                        alignSelf: "center",
                        marginTop: 61,
                    }}
                >
                    Мое состояние
                </Text>
                <View style={styles.content_box}>
                    <FlatList
                        data={conditions}
                        renderItem={renderConditions}
                        extraData={conditions}
                    />
                </View>


            </View>
        </View>
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
        flex: 1,
        width: "100%",
        marginTop: 29,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    content: {
        height: "auto",
        width: "45%",
        backgroundColor: "#F5F4F8",
        borderRadius: 24,

    },
    content_top_item: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingTop: 14,
        width: "auto",
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
        width: 120,
    },
    content_item_day: {
        marginTop: 8,
        color: "#797979",
        fontWeight: "400",
        fontStyle: "normal",
        fontSize: 16,
        lineHeight: 20,
    },
});




{/*<View style={styles.content_box}>*/}
{/*    <View style={styles.content}>*/}
{/*        <View*/}
{/*            style={{*/}
{/*                width: "100%",*/}
{/*                paddingHorizontal: 14,*/}
{/*                paddingVertical: 16,*/}
{/*            }}*/}
{/*        >*/}
{/*            <View style={styles.content_top_item}>*/}
{/*                <Pic1/>*/}
{/*                <Text*/}
{/*                    style={[*/}
{/*                        styles.content_item_numbers,*/}
{/*                        characteristics[0].number < 2*/}
{/*                            ? {color: "red"}*/}
{/*                            : {color: "#FF9F0F"},*/}
{/*                        characteristics[0].number >= 4 ? {color: "green"} : null,*/}
{/*                    ]}*/}
{/*                >*/}
{/*                    {characteristics[0].number}*/}
{/*                </Text>*/}
{/*            </View>*/}
{/*            <Text*/}
{/*                style={[*/}
{/*                    styles.content_item_title,*/}
{/*                    characteristics[0].state == "Нужна помощь"*/}
{/*                        ? {color: "red"}*/}
{/*                        : {color: "#FF9F0F"},*/}
{/*                    characteristics[0].state == "Отлично"*/}
{/*                        ? {color: "green"}*/}
{/*                        : null,*/}
{/*                ]}*/}
{/*            >*/}
{/*                {characteristics[0].state}*/}
{/*            </Text>*/}
{/*            <Text style={[styles.content_item_description]}>*/}
{/*                {characteristics[0].organ}*/}
{/*            </Text>*/}
{/*            <Text style={styles.content_item_day}>Сегодня</Text>*/}
{/*        </View>*/}
{/*    </View>*/}

{/*    <View style={{marginLeft: 14}}/>*/}
{/*    <View style={styles.content}>*/}
{/*        <View*/}
{/*            style={{*/}
{/*                width: "100%",*/}
{/*                paddingHorizontal: 14,*/}
{/*                paddingVertical: 16,*/}
{/*            }}*/}
{/*        >*/}
{/*            <View style={styles.content_top_item}>*/}
{/*                <Pic2/>*/}
{/*                <Text*/}
{/*                    style={[*/}
{/*                        styles.content_item_numbers,*/}
{/*                        characteristics[1].number < 2*/}
{/*                            ? {color: "red"}*/}
{/*                            : {color: "#FF9F0F"},*/}
{/*                        characteristics[1].number >= 4*/}
{/*                            ? {color: "#0EC057"}*/}
{/*                            : null,*/}
{/*                    ]}*/}
{/*                >*/}
{/*                    {characteristics[1].number}*/}
{/*                </Text>*/}
{/*            </View>*/}
{/*            <Text*/}
{/*                style={[*/}
{/*                    styles.content_item_title,*/}
{/*                    characteristics[1].state == "Нужна помощь"*/}
{/*                        ? {color: "red"}*/}
{/*                        : {color: "#FF9F0F"},*/}
{/*                    characteristics[1].state == "Отлично"*/}
{/*                        ? {color: "#0EC057"}*/}
{/*                        : null,*/}
{/*                ]}*/}
{/*            >*/}
{/*                {characteristics[1].state}*/}
{/*            </Text>*/}
{/*            <Text style={styles.content_item_description}>*/}
{/*                {characteristics[1].organ}*/}
{/*            </Text>*/}
{/*            <Text style={styles.content_item_day}>Сегодня</Text>*/}
{/*        </View>*/}
{/*    </View>*/}
{/*</View>*/}

{/*<View style={styles.content_box}>*/}
{/*    <View style={styles.content}>*/}
{/*        <View*/}
{/*            style={{*/}
{/*                width: "100%",*/}
{/*                paddingHorizontal: 14,*/}
{/*                paddingVertical: 16,*/}
{/*            }}*/}
{/*        >*/}
{/*            <View style={styles.content_top_item}>*/}
{/*                <Pic3/>*/}
{/*                <Text*/}
{/*                    style={[*/}
{/*                        styles.content_item_numbers,*/}
{/*                        characteristics[2].number < 2*/}
{/*                            ? {color: "red"}*/}
{/*                            : {color: "#FF9F0F"},*/}
{/*                        characteristics[2].number >= 4 ? {color: "green"} : null,*/}
{/*                    ]}*/}
{/*                >*/}
{/*                    {characteristics[2].number}*/}
{/*                </Text>*/}
{/*            </View>*/}
{/*            <Text*/}
{/*                style={[*/}
{/*                    styles.content_item_title,*/}
{/*                    characteristics[2].state == "Нужна помощь"*/}
{/*                        ? {color: "red"}*/}
{/*                        : {color: "#FF9F0F"},*/}
{/*                    characteristics[2].state == "Отлично"*/}
{/*                        ? {color: "green"}*/}
{/*                        : null,*/}
{/*                ]}*/}
{/*            >*/}
{/*                {characteristics[2].state}*/}
{/*            </Text>*/}
{/*            <Text style={styles.content_item_description}>*/}
{/*                {characteristics[2].organ}*/}
{/*            </Text>*/}
{/*            <Text style={styles.content_item_day}>Сегодня</Text>*/}
{/*        </View>*/}
{/*    </View>*/}
{/*    <View style={{marginLeft: 14}}/>*/}

{/*    <View style={styles.content}>*/}
{/*        <View*/}
{/*            style={{*/}
{/*                width: "100%",*/}
{/*                paddingHorizontal: 14,*/}
{/*                paddingVertical: 16,*/}
{/*            }}*/}
{/*        >*/}
{/*            <View style={styles.content_top_item}>*/}
{/*                <Pic4/>*/}
{/*                <Text*/}
{/*                    style={[*/}
{/*                        styles.content_item_numbers,*/}
{/*                        characteristics[3].number < 2*/}
{/*                            ? {color: "red"}*/}
{/*                            : {color: "#FF9F0F"},*/}
{/*                        characteristics[3].number >= 4*/}
{/*                            ? {color: "#0EC057"}*/}
{/*                            : null,*/}
{/*                    ]}*/}
{/*                >*/}
{/*                    {characteristics[3].number}*/}
{/*                </Text>*/}
{/*            </View>*/}
{/*            <Text*/}
{/*                style={[*/}
{/*                    styles.content_item_title,*/}
{/*                    characteristics[3].state == "Нужна помощь"*/}
{/*                        ? {color: "red"}*/}
{/*                        : {color: "#FF9F0F"},*/}
{/*                    characteristics[3].state == "Отлично"*/}
{/*                        ? {color: "#0EC057"}*/}
{/*                        : null,*/}
{/*                ]}*/}
{/*            >*/}
{/*                {characteristics[3].state}*/}
{/*            </Text>*/}
{/*            <Text style={styles.content_item_description}>*/}
{/*                {characteristics[3].organ}*/}
{/*            </Text>*/}
{/*            <Text style={styles.content_item_day}>Сегодня</Text>*/}
{/*        </View>*/}
{/*    </View>*/}
{/*</View>*/}

{/*<View style={styles.content_box}>*/}
{/*    <View style={styles.content}>*/}
{/*        <View*/}
{/*            style={{*/}
{/*                width: "100%",*/}
{/*                paddingHorizontal: 14,*/}
{/*                paddingVertical: 16,*/}
{/*            }}*/}
{/*        >*/}
{/*            <View style={styles.content_top_item}>*/}
{/*                <Pic5/>*/}
{/*                <Text*/}
{/*                    style={[*/}
{/*                        styles.content_item_numbers,*/}
{/*                        characteristics[4].number < 2*/}
{/*                            ? {color: "red"}*/}
{/*                            : {color: "#FF9F0F"},*/}
{/*                        characteristics[4].number >= 4 ? {color: "green"} : null,*/}
{/*                    ]}*/}
{/*                >*/}
{/*                    {characteristics[4].number}*/}
{/*                </Text>*/}
{/*            </View>*/}
{/*            <Text*/}
{/*                style={[*/}
{/*                    styles.content_item_title,*/}
{/*                    characteristics[4].state == "Нужна помощь"*/}
{/*                        ? {color: "red"}*/}
{/*                        : {color: "#FF9F0F"},*/}
{/*                    characteristics[4].state == "Отлично"*/}
{/*                        ? {color: "green"}*/}
{/*                        : null,*/}
{/*                ]}*/}
{/*            >*/}
{/*                {characteristics[4].state}*/}
{/*            </Text>*/}
{/*            <Text style={styles.content_item_description}>*/}
{/*                {characteristics[4].organ}*/}
{/*            </Text>*/}
{/*            <Text style={styles.content_item_day}>Сегодня</Text>*/}
{/*        </View>*/}
{/*    </View>*/}
{/*    <View style={{marginLeft: 14}}/>*/}

{/*    <View style={styles.content}>*/}
{/*        <View*/}
{/*            style={{*/}
{/*                width: "100%",*/}
{/*                paddingHorizontal: 14,*/}
{/*                paddingVertical: 16,*/}
{/*            }}*/}
{/*        >*/}
{/*            <View style={styles.content_top_item}>*/}
{/*                <Pic6/>*/}
{/*                <Text*/}
{/*                    style={[*/}
{/*                        styles.content_item_numbers,*/}
{/*                        characteristics[5].number < 2*/}
{/*                            ? {color: "red"}*/}
{/*                            : {color: "#FF9F0F"},*/}
{/*                        characteristics[5].number >= 4*/}
{/*                            ? {color: "#0EC057"}*/}
{/*                            : null,*/}
{/*                    ]}*/}
{/*                >*/}
{/*                    {characteristics[5].number}*/}
{/*                </Text>*/}
{/*            </View>*/}
{/*            <Text*/}
{/*                style={[*/}
{/*                    styles.content_item_title,*/}
{/*                    characteristics[5].state == "Нужна помощь"*/}
{/*                        ? {color: "red"}*/}
{/*                        : {color: "#FF9F0F"},*/}
{/*                    characteristics[5].state == "Отлично"*/}
{/*                        ? {color: "#0EC057"}*/}
{/*                        : null,*/}
{/*                ]}*/}
{/*            >*/}
{/*                {characteristics[5].state}*/}
{/*            </Text>*/}
{/*            <Text style={styles.content_item_description}>*/}
{/*                {characteristics[5].organ}*/}
{/*            </Text>*/}
{/*            <Text style={styles.content_item_day}>Сегодня</Text>*/}
{/*        </View>*/}
{/*    </View>*/}
{/*</View>*/}

{/*<View style={styles.content_box}>*/}
{/*    <View style={styles.content}>*/}
{/*        <View*/}
{/*            style={{*/}
{/*                width: "100%",*/}
{/*                paddingHorizontal: 14,*/}
{/*                paddingVertical: 16,*/}
{/*            }}*/}
{/*        >*/}
{/*            <View style={styles.content_top_item}>*/}
{/*                <Pic7/>*/}
{/*                <Text*/}
{/*                    style={[*/}
{/*                        styles.content_item_numbers,*/}
{/*                        characteristics[6].number < 2*/}
{/*                            ? {color: "red"}*/}
{/*                            : {color: "#FF9F0F"},*/}
{/*                        characteristics[6].number >= 4 ? {color: "green"} : null,*/}
{/*                    ]}*/}
{/*                >*/}
{/*                    {characteristics[6].number}*/}
{/*                </Text>*/}
{/*            </View>*/}
{/*            <Text*/}
{/*                style={[*/}
{/*                    styles.content_item_title,*/}
{/*                    characteristics[6].state == "Нужна помощь"*/}
{/*                        ? {color: "red"}*/}
{/*                        : {color: "#FF9F0F"},*/}
{/*                    characteristics[6].state == "Отлично"*/}
{/*                        ? {color: "green"}*/}
{/*                        : null,*/}
{/*                ]}*/}
{/*            >*/}
{/*                {characteristics[6].state}*/}
{/*            </Text>*/}
{/*            <Text style={styles.content_item_description}>*/}
{/*                {characteristics[6].organ}*/}
{/*            </Text>*/}
{/*            <Text style={styles.content_item_day}>Сегодня</Text>*/}
{/*        </View>*/}
{/*    </View>*/}
{/*    <View style={{marginLeft: 14}}/>*/}

{/*    <View style={styles.content}>*/}
{/*        <View*/}
{/*            style={{*/}
{/*                width: "100%",*/}
{/*                paddingHorizontal: 14,*/}
{/*                paddingVertical: 16,*/}
{/*            }}*/}
{/*        >*/}
{/*            <View style={styles.content_top_item}>*/}
{/*                <Pic8/>*/}
{/*                <Text*/}
{/*                    style={[*/}
{/*                        styles.content_item_numbers,*/}
{/*                        characteristics[7].number < 2*/}
{/*                            ? {color: "red"}*/}
{/*                            : {color: "#FF9F0F"},*/}
{/*                        characteristics[7].number >= 4*/}
{/*                            ? {color: "#0EC057"}*/}
{/*                            : null,*/}
{/*                    ]}*/}
{/*                >*/}
{/*                    {characteristics[7].number}*/}
{/*                </Text>*/}
{/*            </View>*/}
{/*            <Text*/}
{/*                style={[*/}
{/*                    styles.content_item_title,*/}
{/*                    characteristics[7].state == "Нужна помощь"*/}
{/*                        ? {color: "red"}*/}
{/*                        : {color: "#FF9F0F"},*/}
{/*                    characteristics[7].state == "Отлично"*/}
{/*                        ? {color: "#0EC057"}*/}
{/*                        : null,*/}
{/*                ]}*/}
{/*            >*/}
{/*                {characteristics[7].state}*/}
{/*            </Text>*/}
{/*            <Text style={styles.content_item_description}>*/}
{/*                {characteristics[7].organ}*/}
{/*            </Text>*/}
{/*            <Text style={styles.content_item_day}>Сегодня</Text>*/}
{/*        </View>*/}
{/*    </View>*/}
{/*</View>*/}
