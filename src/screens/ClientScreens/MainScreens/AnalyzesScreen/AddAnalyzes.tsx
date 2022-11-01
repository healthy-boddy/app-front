import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Platform} from "react-native";
import MainContainer from "../../../../components/MainContainer";
import BackIcon from "../../../../assets/Icons/BackIcon";
import {color3} from "../../../../helpers/colors";
import Title from "../../../../components/Title";
import {useNavigation} from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";

const AddAnalyzes = () => {
    const navigation = useNavigation<any>()
    const [analyze, setAnalyze] = useState<any>([])

    const pickAnalyze = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.cancelled) {
            setAnalyze({
                uri: result.uri,
                name: `IMG_` + Date.now() + `.JPG`,
                type: result.type + "/jpeg",
            });
        }
    };
    const handleAddManualAnalyzesScreen =()=>{
        navigation.navigate('AddManual')
    }

    return (
        <MainContainer>
            <View style={{flexDirection: 'row'}}>
                <View>
                    <TouchableOpacity
                        activeOpacity={0.6}
                        onPress={()=>{navigation.navigate('Analyzes')}}
                        style={styles.back}
                    >
                        <View>
                            <BackIcon/>
                        </View>
                        <View>
                            <Text style={styles.title}>Назад</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{marginTop: 35, width: '60%'}}>
                    <Text style={styles.description}>Добавить анализ</Text>
                </View>
            </View>
            <View style={{marginTop: 30}}>
                <TouchableOpacity
                    onPress={handleAddManualAnalyzesScreen}
                    style={styles.item_box}>
                    <Title>
                        Ввести вручную
                    </Title>
                    <Text>
                        Результаты сразу появятся в приложении
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={pickAnalyze}
                    style={[styles.item_box, {marginTop: 16}]}>
                    <Title>
                        Загрузить PDF
                    </Title>
                    <Text>
                        Потребуется немного времени для оцифровки
                    </Text>
                </TouchableOpacity>
            </View>
        </MainContainer>
    );
};

export default AddAnalyzes;
const styles = StyleSheet.create({
    back: {
        flexDirection: "row",
        marginTop: Platform.OS === "android" ? 35 : 0,
        alignItems: "center",
    },
    title: {
        color: "#7454CF",
        marginLeft: 10,
        fontSize: 18,
        fontWeight: "400",
        lineHeight: 21.48,
    },
    description: {
        textAlign: "center",
        fontSize: 18,
        fontWeight: '400',
        fontStyle: 'normal'
    },
    item_box: {
        width: '100%',
        height: 70,
        backgroundColor: '#F5F4F8',
        borderRadius: 20,
        paddingHorizontal: 18,
        paddingVertical: 12
    },
    item_description:{
        color: '#797979',
        fontSize: 16,
        fontWeight: '400',
        fontStyle: 'normal'
    }

})
