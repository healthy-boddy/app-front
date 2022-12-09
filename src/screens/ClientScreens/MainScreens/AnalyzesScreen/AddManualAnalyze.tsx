import React, {useEffect, useState} from "react";
import {
    FlatList,
    KeyboardAvoidingView,
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
import {useDispatch, useSelector} from "react-redux";
import moment from "moment";
import {baseUrl2} from "../../../../helpers/url";
import {setLab} from "../../../../store/actions/laboratory";
import * as ImagePicker from "expo-image-picker";
import CustomButton from "../../../../components/CustomButton";
import MainContainer from "../../../../components/MainContainer";
import BackButton from "../../../../components/BackButton";

type ParameterType = {
    name: string;
    value: string;
    id: number;
    filteredUnits?: Array<any>;
};

const AddManualAnalyze = () => {
    const navigation = useNavigation<any>();
    const dispatch = useDispatch();
    let tokenFromReducer = useSelector((store: any) => store.user_token.user_token);
    let AuthStr = "Bearer " + tokenFromReducer;
    const [analiseDate, setAnaliseDate] = useState<Date>(new Date());
    const [lab, setLab1] = useState("");
    const [parameterArray, setParameterArray] = useState<Array<ParameterType>>([
        {
            id: 1,
            name: "",
            value: "",
            filteredUnits: []
        },
    ]);
    let [laboratory, setLaboratory] = useState([])
    let [filteredLaboratory, setFilteredLaboratory] = useState<any>([])
    let [labId, setLabId] = useState('')
    const [labUnits, setLabUnits] = useState([]);
    let [filteredAnalysesIndicator, setFilteredAnalysesIndicator] = useState([])
    const [photo, setPhoto] = useState<any>([])
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
        }).then((res) => {
            console.log(res, 'laboratory')
            setLaboratory(res)
        })
    }

    async function handleSaveAnalyzes() {
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
        }).then((res) => {
            dispatch(setLab(res))
            console.log(res, 'handle save analyzes')
            for (let index = 0; index < parameterArray.length; index++) {
                // console.log(parameterArray[index], parameterArray, index, 'ex1')
                // console.log(JSON.stringify({  analyzes: res.id,
                //     ...parameterArray[index]}), 'after fetch')
                const unit = labUnits.find(item => item.indicator_name === parameterArray[index].name);
                console.log({unit})
                console.log({
                    unit: unit?.id || 0,
                    value: +parameterArray[index].value,
                    analysis: res.id,
                }, 100001)
                fetch('http://92.53.97.238/analysis/indicator/', {
                    method: 'post',
                    headers: {
                        Authorization: AuthStr,
                        "accept": "application/json",
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        unit: unit?.id || 0,
                        value: parameterArray[index].value,
                        analysis: res.id,
                    })
                }).then((res1) => {
                    return res1.json()
                }).then((res1) => {
                    console.log(res1, 'handle save analyzes 2')
                    setParameterArray([])
                    setLab1('')
                    navigation.navigate("AnalyseResult")
                })
            }
        })
    }

    useEffect(() => {
        handleGetLaboratory().then(()=>{})
    }, [])

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
    const handleFilterLabs = (item) => {
        let a
        if (item.length >= 3){
            a = laboratory.filter((labName) => myInclude(labName.name, item))
            setFilteredLaboratory(a)
        }else {
            setFilteredLaboratory([])
        }
        setLab1(item)
    }

    const handleParameters = (index, val, key, deleteFilteredUnits = false) => {
        parameterArray[index][key] = val;
        parameterArray.forEach(item => item.filteredUnits = []);
        if (!deleteFilteredUnits && val.length >= 3) {
            parameterArray[index].filteredUnits = labUnits.filter(item => myInclude(item.indicator_name, val));
        }
        setParameterArray([...parameterArray])
    }

    const onLabPress = lab => {
        setLab1(lab.name)
        setLabId(lab.id)
        setLabUnits(lab.units)
        setFilteredLaboratory(null)
    }

    const myInclude = (big: string, small: string) => {
        return big.toLowerCase().includes(small.toLowerCase());
    }
    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.cancelled) {
            setPhoto({
                uri: result.uri,
                name: `IMG_` + Date.now() + `.JPG`,
                type: result.type + "/jpeg",
                id: Date.now(),
                lastModified: Date.now(),
            });
        }
    };
    console.log(photo, 'avatar')
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
                        placeholder={"Ввести результат"}
                        value={parameterArray[index].value}
                        onChangeText={(val) => handleParameters(index, val, 'value')}
                        style={styles.input}
                    />
                </View>
            </>
        );
    };

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

                <TouchableOpacity onPress={pickImage}>
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
                <View style={{marginVertical: 25}}>
                    <CustomButton onPress={handleSaveAnalyzes} title={'Сохранить'}/>
                </View>
            </View>
        )
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

    return (
        <MainContainer>
            <View
                style={{
                    flex: 1,
                    width: "100%",
                    paddingHorizontal: 16,
                }}>
                <View>
                    <BackButton onPress={() => navigation.navigate("AddAnalyzes")}/>
                </View>
                <KeyboardAvoidingView style={{flex: 1}}>
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
                </KeyboardAvoidingView>
            </View>
        </MainContainer>
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
});
