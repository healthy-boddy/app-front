import React, {useState} from "react";
import {
    Platform,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import BackIcon from "../../../../assets/Icons/BackIcon";
import {useNavigation} from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";

const AddAnalyzes = () => {
    const navigation = useNavigation<any>();
    const [analyze, setAnalyze] = useState<any>([]);

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
    const handleAddManualAnalyzesScreen = () => {
        navigation.navigate("AddManual");
    };

    return (
        <SafeAreaView
            style={{
                flex: 1,
                alignItems: "center",
                backgroundColor: "#fff",
            }}
        >
            <View
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "100%",
                    paddingHorizontal: 16,
                    height: 90
                }}
            >
                <TouchableOpacity
                    activeOpacity={0.6}
                    onPress={() => {
                        navigation.navigate("Analyzes");
                    }}
                    style={styles.back}
                >
                    <BackIcon/>
                    <Text style={styles.title}>Назад</Text>
                </TouchableOpacity>
                <Text style={styles.description}>Добавить анализ</Text>
                <View
                    style={{
                        width: "25%",
                    }}
                />
            </View>
            <View style={{marginTop: 30, width: "100%", paddingHorizontal: 16}}>
                <TouchableOpacity
                    onPress={handleAddManualAnalyzesScreen}
                    style={styles.item_box}
                >
                    <Text
                        style={{
                            fontWeight: "600",
                            fontSize: 20,
                            lineHeight: 24,
                            color: "#1E1E1E",
                        }}
                    >
                        Ввести вручную
                    </Text>
                    <Text
                        style={{
                            fontWeight: "400",
                            fontSize: 18,
                            lineHeight: 24,
                            color: "#797979",
                        }}
                    >
                        Результаты сразу появятся в приложении
                    </Text>
                </TouchableOpacity>

                {/*<TouchableOpacity*/}
                {/*  onPress={pickAnalyze}*/}
                {/*  style={[styles.item_box, { marginTop: 16 }]}*/}
                {/*>*/}
                {/*  <Text*/}
                {/*    style={{*/}
                {/*      fontWeight: "600",*/}
                {/*      fontSize: 20,*/}
                {/*      lineHeight: 24,*/}
                {/*      color: "#1E1E1E",*/}
                {/*    }}*/}
                {/*  >*/}
                {/*    Загрузить PDF*/}
                {/*  </Text>*/}
                {/*  <Text*/}
                {/*    style={{*/}
                {/*      fontWeight: "400",*/}
                {/*      fontSize: 18,*/}
                {/*      lineHeight: 24,*/}
                {/*      color: "#797979",*/}
                {/*    }}*/}
                {/*  >*/}
                {/*    Потребуется немного времени для оцифровки*/}
                {/*  </Text>*/}
                {/*</TouchableOpacity>*/}

            </View>
        </SafeAreaView>
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
        fontWeight: "400",
        fontStyle: "normal",
        alignItems: 'center',
        marginTop: Platform.OS === 'android' ? 35 : 0
        //todo: На IOS-e вместе 0 ставить сколько нужно
    },
    item_box: {
        width: "100%",
        backgroundColor: "#F5F4F8",
        borderRadius: 20,
        paddingHorizontal: 16,
        paddingVertical: 12,
    },
    item_description: {
        color: "#797979",
        fontSize: 16,
        fontWeight: "400",
        fontStyle: "normal",
    },
});
