import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import MainContainer from "../../../../components/MainContainer";
import BackButton from "../../../../components/BackButton";
import {useIsFocused, useNavigation} from "@react-navigation/native";
import {baseUrl2} from "../../../../helpers/url";
import {useSelector} from "react-redux";
import {TextTitle} from "./view/text-title";
import {IconDelete} from "../../../../components/icon/icon-delete";
import CustomButton from "../../../../components/CustomButton";
import {color1} from "../../../../helpers/colors";
import {DatePicker} from "../../../../components/core/date-picker-modal";
import {CalendarSvg} from "../../../../components/icon/calendar";
import AsyncStorage from "@react-native-async-storage/async-storage";
import moment from "moment";

type ParameterType = {
    name: string;
    value: string;
    id: number;
    filteredUnits?: Array<any>;
};
const EditAnalyseScreen = ({}) => {
    const navigation = useNavigation<any>()
    const isFocused = useIsFocused();
    let tokenFromReducer = useSelector((store: any) => store.user_token.user_token);
    let AuthStr = "Bearer " + tokenFromReducer;
    let [laboratory, setLaboratory] = useState([])
    let [analysesIndicators, setAnalysesIndicators] = useState([
        {
            id: 1,
            name: "",
            value: "",
            filteredUnits: []
        },
    ])
    const [firstIndicators, setFirstIndicators] = useState([])
    const [firstLabName, setFirstLabName] = useState('')
    let [filteredLaboratory, setFilteredLaboratory] = useState<any>([])
    const [lab, setLab] = useState("");
    const [analiseDate, setAnaliseDate] = useState<Date>(new Date());
    let [labId, setLabId] = useState('')
    const [labUnits, setLabUnits] = useState([]);

    const analyzeFromStorage = useSelector(store => store.laboratory.lab);
    const [activeAnalyzeId, setActiveAnalyzeId] = useState(analyzeFromStorage?.id);
    const [isLabChanged, setIsLabChanged] = useState(false);
    console.log(activeAnalyzeId, 'editi')
    function setBirthDate(date: Date) {
        setAnaliseDate(date);
    }
    async function handleGetLaboratory() {
        await fetch(baseUrl2 + '/analysis/laboratory/', {
            method: 'get',
            headers: {
                Authorization: AuthStr,
                "accept": "application/json"
            }
        }).then((res) => {
            return res.json()
        }).then(async (res) => {
            //console.log(res, 'laboratory')
            setLaboratory(res)
            const currentLab = res.find(item => item.id === analyzeFromStorage?.laboratory);
            if (currentLab) {
                setFirstLabName(currentLab.name);
                onLabPress(currentLab, true)
            }
        })
    }

    useEffect(() => {
        setActiveAnalyzeId(analyzeFromStorage?.id)
    }, [analyzeFromStorage])

    const deleteItems = (data: any) => {
        console.log(data, 'data')
        const items = analysesIndicators.filter((item) => item.id != data.id);
        setAnalysesIndicators(items);
    };

    const addMooreParameters = () => {
        setAnalysesIndicators((prevData) => [
            ...prevData,
            {name: "", value: "", id: Date.now(), filteredUnits: []},
        ]);
    };

    const handleFilterLabs = (item) => {
        if (!isLabChanged) {
            setIsLabChanged(true)
        }
        if (item.length >= 1){
            const a = laboratory.filter((labName) => myInclude(labName.name, item))
            setFilteredLaboratory(a)
        }else {
            setFilteredLaboratory([])
        }
        setLab(item)
    }
    function handleGetAnalyseIndicators() {
        // console.log(baseUrl2 + `/analysis/indicator?analysis=${activeAnalyzeId}`, '333')
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
            const a = res.map(item => ({
                ...item,
                name: item?.unit_info?.indicator_name || ''
            }))
            setAnalysesIndicators(a);
            console.log(a, 'aaaaaaa')
            setFirstIndicators(a);
        })
    }

    const myInclude = (big: string, small: string) => {
        return big.toLowerCase().includes(small.toLowerCase());
    }
    const handleParameters = (index, val, key, deleteFilteredUnits = false) => {
        analysesIndicators[index][key] = val;
        analysesIndicators.forEach(item => item.filteredUnits = []);
        if (!deleteFilteredUnits && val.length >= 1 && key !== 'value') {
            analysesIndicators[index].filteredUnits = labUnits.filter(item => myInclude(item.indicator_name, val));
        }
        setAnalysesIndicators([...analysesIndicators])
    }

    const onLabPress = (lab, isFirstTime = false) => {
        if (!isFirstTime){
            setAnalysesIndicators([{
                id: 1,
                name: "",
                value: "",
                filteredUnits: []
            }]);
        }
        setLab(lab.name)
        setLabId(lab.id)
        setLabUnits(lab.units)
        setFilteredLaboratory(null)
    }
    useEffect(() => {
        if (isFocused) {
            handleGetLaboratory()
            handleGetAnalyseIndicators()
        }
    }, [isFocused])

    const saveAnalyz = () => {
        for (let index = 0; index < firstIndicators.length; index++) {
            const el = firstIndicators[index];
            fetch(`http://92.53.97.238/analysis/indicator/${el.id}/`, {
                method: 'delete',
                headers: {
                    Authorization: AuthStr,
                    "accept": "application/json",
                    "Content-Type": "application/json"
                },
            }).then(res => {
                console.log(res, 'after deleting')
            })
        }
        if (isLabChanged) {
            console.log('lab name has changed')
            deleteAnalyze();
            fetch(baseUrl2 + '/analysis/', {
                method: 'post',
                headers: {
                    Authorization: AuthStr,
                    "accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    date: moment(analiseDate).format("YYYY-MM-DD"),
                    laboratory: +labId,
                })
            }).then((res) => {
                return res.json()
            }).then(res => {
                createIndicators(res.id)
            })
        } else {
            createIndicators(activeAnalyzeId)
        }
    }

    const deleteAnalyze = () => {
        fetch(baseUrl2 + `/analysis/${activeAnalyzeId}/`, {
            method: 'delete',
            headers: {
                Authorization: AuthStr,
                "accept": "application/json",
                "Content-Type": "application/json"
            }
        }).then((res) => {
            return res.json()
        }).then(res => {
            console.log('analyze deleted', res)
        })
    }

    const createIndicators = analyzeId => {
        for (let index = 0; index < analysesIndicators.length; index++) {
            const el = analysesIndicators[index];
            console.log(labUnits, el.name)
            const unit = labUnits.find(item => item.indicator_name === el.name);
            const requestBody = {
                unit: unit?.id || el?.unit_info?.id,
                value: +el.value,
                analysis: analyzeId,
            };
            console.log({requestBody})
            fetch(`http://92.53.97.238/analysis/indicator/`, {
                method: 'post',
                headers: {
                    Authorization: AuthStr,
                    "accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(requestBody)
            }).then((res1) => {
                return res1.json()
            }).then((res1) => {
                console.log(res1, 'handle edit analyzes 2')
                setIsLabChanged(false)
                navigation.navigate("Analyzes")
            }).catch(e => {
                console.log('error', e)
            })
        }
    }

    const flatHeader = () => {
        return (
            <View>
                <TextTitle title={"Дата"}/>

                <View style={{marginTop: 9.5,}}/>
                <DatePicker
                    date={analiseDate}
                    onDateChange={setBirthDate}
                    placeholder="Выбрать дату"
                    icon={<CalendarSvg/>}
                />
                <View style={{marginTop: 17.5}}/>

                <TextTitle title={"Лаборатория"}/>

                <View style={styles.inputView}>
                    <TextInput
                        placeholder={"Выбрать лабораторию"}
                        value={lab}
                        onChangeText={handleFilterLabs}
                        style={styles.input}
                    />
                </View>
                <View style={{width: '100%', backgroundColor: 'white', marginTop: 10}}>
                    {filteredLaboratory?.map((lab: any) => (
                        <TouchableOpacity key={lab.id} onPress={() => onLabPress(lab)}>
                            <Text style={styles.laboratory_title}>
                                {lab?.name}
                            </Text>
                            <View style={styles.line}/>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
        )
    }
    const flatFooter = () => {
        return (
            <View>
                <View style={{flex: 1}}>
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
                </View>
            </View>
        )
    }
    const renderItems = ({item, index}: any) => {
        return (
            <View>
                <View/>
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
                        onChangeText={(val) => handleParameters(index, val, 'name')}
                        value={analysesIndicators[index]?.name}
                        placeholder={"Выбрать показатель"}
                        style={styles.input}
                    />
                </View>
                {item.filteredUnits?.map((unit: any) => (
                    <TouchableOpacity key={unit.id} onPress={() => handleParameters(index, unit?.indicator_name, 'name', true)}>
                        <Text style={styles.laboratory_title}>
                            {unit?.indicator_name}
                        </Text>
                        <View style={styles.line}/>
                    </TouchableOpacity>
                ))}
                <View style={styles.inputView}>
                    <TextInput
                        onChangeText={(val) => handleParameters(index, val, 'value')}
                        value={analysesIndicators[index]?.value.toString()}
                        placeholder={"Ввести результат"}
                        style={styles.input}
                    />
                </View>
            </View>
        )
    }

    return (
        <MainContainer>
            <View style={{paddingHorizontal: 16, flex: 1}}>
                <BackButton
                    saveAnalyse
                    onPress={() => {
                        setIsLabChanged(false)
                        navigation.navigate("Analyzes")
                    }}
                    onPressSave={saveAnalyz}
                />
                <View style={{
                    flex: 1,
                    marginVertical: 20
                }}>
                    <FlatList
                        contentContainerStyle={{}}
                        data={analysesIndicators}
                        renderItem={renderItems}
                        ListFooterComponent={flatFooter()}
                        ListHeaderComponent={flatHeader()}
                        showsVerticalScrollIndicator={false}
                        removeClippedSubviews={false}

                    />
                </View>
                <View style={{marginBottom: 25}}>
                    <CustomButton
                        buttonTitle={{
                            color: color1
                        }}
                        buttonStyles={{
                            backgroundColor: 'white',
                            borderWidth: 2,
                            borderColor: color1
                        }}
                        onPress={() => {
                            deleteAnalyze()
                            setIsLabChanged(false)
                            navigation.navigate("Analyzes")
                        }}
                        title={'Удалить анализ'}
                    />
                </View>
            </View>
        </MainContainer>
    );
};

export default EditAnalyseScreen;
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
    line: {
        width: '100%',
        height: 1,
        backgroundColor: '#E2E2E2'
    },
    laboratory_title: {
        fontSize: 18,
        fontWeight: '400',
        lineHeight: 21,
        paddingVertical: 8,
        paddingHorizontal: 16
    }
})
