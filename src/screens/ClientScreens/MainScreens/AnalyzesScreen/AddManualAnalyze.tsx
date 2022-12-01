import React, {useEffect, useState} from "react";
import {
    FlatList, KeyboardAvoidingView,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {DatePicker} from "../../../../components/core/date-picker-modal";
import {CalendarSvg} from "../../../../components/icon/calendar";
import {TextTitle} from "./view/text-title";
import {ChevronRight} from "../../../../components/icon/chevron-right";
import {IconDelete} from "../../../../components/icon/icon-delete";
import {WrapperPage} from "../../../../components/core/wrapper";
import {useSelector} from "react-redux";
import moment from "moment";

type DataType = {
    parameter: string;
    value: string;
    id: number;
};

const AddManualAnalyze = () => {
    const navigation = useNavigation<any>();
    let tokenFromReducer = useSelector((store: any) => store.user_token.user_token);
    let AuthStr = "Bearer " + tokenFromReducer;
    const [analiseDate, setAnaliseDate] = useState<Date>(new Date());
    const [lab, setLab] = useState("");
    const [parameterArray, setParameterArray] = useState([
        {
            id: 1,
            name: "",
            value: "",
        },
    ]);
    let [laboratory, setLaboratory] = useState([])

    function setBirthDate(date: Date) {
        setAnaliseDate(date);
    }

    async function handleGetLaboratory() {
        await fetch('http://92.53.97.238/analysis/laboratory/', {
            method: 'get',
            headers: {
                Authorization: AuthStr,
                "accept": "application/json"
            }
        }).then((res) => {
            return res.json()
        }).then((res) => {
            console.log(res, 'laboratory')
            setLaboratory(res)
        })
    }

    async function handleSaveAnalyzes() {
        console.log(parameterArray)
        fetch('http://92.53.97.238/analysis/', {
            method: 'post',
            headers: {
                Authorization: AuthStr,
                "accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                date: moment(analiseDate).format("YYYY-MM-DD"),
                laboratory: lab,
                name: "Лейкоциты"
            })
        }).then((res) => {
            return res.json()
        }).then((res) => {
            console.log(res, 'handle save analyzes')
            for (let index = 0; index < parameterArray.length; index++) {
                // console.log(parameterArray[index], parameterArray, index, 'ex1')
                // console.log(JSON.stringify({  analyzes: res.id,
                //     ...parameterArray[index]}), 'after fetch')
                fetch('http://92.53.97.238/analysis/indicator/', {
                    method: 'post',
                    headers: {
                        Authorization: AuthStr,
                        "accept": "application/json",
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        ...parameterArray[index],
                        analysis: res.id,
                    })
                }).then((res1) => {
                    return res1.json()
                }).then((res1) => {
                    console.log(res1, 'handle save analyzes 2')
                    navigation.navigate("Analyzes")
                })
            }
        })

    }

    const addMooreParameters = () => {
        setParameterArray((prevData) => [
            ...prevData,
            {name: "", value: "", id: Date.now()},
        ]);
    };

    const deleteItems = (data: any) => {
        console.log(data, 'data')
        const items = parameterArray.filter((item) => item.id != data.id);
        setParameterArray(items);
    };
    useEffect(() => {
        handleGetLaboratory()
    }, [])

    const RenderData = ({item, index}) => {
        return (
            <>
                <View style={{marginTop: 17.5}}/>
                <View style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: "100%",
                }}>
                    <TextTitle title={`Показатель ${index + 1}`}/>

                    <TouchableOpacity onPress={() => deleteItems(item)}>
                        <IconDelete/>
                    </TouchableOpacity>
                </View>

                <View style={styles.inputView}>
                    <TextInput
                        placeholder={"Выбрать показатель"}
                        value={parameterArray[index].name}
                        onChangeText={(val) => handleParameters(index, val, 'name')}
                        style={styles.input}
                    />
                    <ChevronRight/>
                </View>
                <View style={styles.inputView}>
                    <TextInput
                        placeholder={"Ввести результат"}
                        value={parameterArray[index].value}
                        onChangeText={(val) => handleParameters(index, val, 'value')}
                        style={styles.input}
                    />
                </View>
            </>
        );
    };

    const handleParameters = (index, val, key) => {
        parameterArray[index][key] = val
        setParameterArray([...parameterArray])
    }

    const flatFooter = () => {
        return (
            <View>
                <TouchableOpacity onPress={addMooreParameters}>
                    <Text
                        style={{
                            color: "#7454CF",
                            fontSize: 16,
                            lineHeight: 20,
                            fontWeight: "500",
                            marginTop: 32,
                        }}
                    >
                        + Добавить показатель
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    // add photo picker
                >
                    <Text
                        style={{
                            color: "#7454CF",
                            fontSize: 16,
                            lineHeight: 20,
                            fontWeight: "500",
                            marginTop: 32,
                        }}
                    >
                        + Добавить фото анализа
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
    const flatHeader = () => {
        return (
            <View>
                <TextTitle title={"Дата"}/>

                <View
                    style={{
                        marginTop: 9.5,
                    }}
                />
                <DatePicker
                    date={analiseDate}
                    onDateChange={setBirthDate}
                    placeholder="Выбрать дату"
                    icon={<CalendarSvg/>}
                />
                <View
                    style={{
                        marginTop: 17.5,
                    }}
                />

                <TextTitle title={"Лаборатория"}/>

                <View style={styles.inputView}>
                    <TextInput
                        placeholder={"Выбрать лабораторию"}
                        value={lab}
                        onChangeText={setLab}
                        style={styles.input}
                    />
                    <ChevronRight/>
                </View>
            </View>
        )
    }

    return (
        <WrapperPage
            onPressButton={handleSaveAnalyzes}
            buttonTitle={"Сохранить"}
            onPressBack={() => navigation.navigate("AddAnalyzes")}
        >
            <View
                style={{
                    width: "100%",
                    paddingHorizontal: 20,
                    flex: 1,
                }}>
                <View style={{flex: 1}}>
                    {parameterArray !== undefined && (
                        <View style={{flex: 1, marginVertical: 20}}>
                            <FlatList
                                ListHeaderComponent={flatHeader()}
                                ListFooterComponent={flatFooter()}
                                removeClippedSubviews={false}
                                keyExtractor={(item, index) => index.toString()}
                                data={parameterArray}
                                renderItem={RenderData}
                            />
                        </View>
                    )}
                </View>
            </View>
        </WrapperPage>
    );
};

export default AddManualAnalyze;

const styles = StyleSheet.create({
    inputView: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        paddingHorizontal: 16,
        paddingVertical: 16,
        backgroundColor: "#F5F4F8",
        marginTop: 9.5,
        borderRadius: 12,
    },
    input: {
        color: "#484851",
        fontSize: 14,
        lineHeight: 16,
        fontWeight: "400",
        width: '80%'
    },
});
