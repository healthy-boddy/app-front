import React, {useState} from 'react';
import {Platform, SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import BackIcon from "../../../../assets/Icons/BackIcon";
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
        <SafeAreaView style={{
            flex:1,
            alignItems:'center',
            backgroundColor:'#fff',
        }}>
            {/*// todo: add a component with the same header*/}
            <View style={{
                flexDirection: 'row',
                alignItems:'center',
                justifyContent:'space-between',
                width:'100%',
                paddingHorizontal:16,
                marginTop:12
            }}>
                    <TouchableOpacity
                        activeOpacity={0.6}
                        onPress={()=>{navigation.navigate('Analyzes')}}
                        style={styles.back}
                    >
                            <BackIcon/>
                            <Text style={styles.title}>Back</Text>
                    </TouchableOpacity>
                    <Text style={styles.description}>Add analysis</Text>
                <View style={{
                    width:'25%',
                    height:20,
                }} />
            </View>
            <View style={{marginTop: 30, width:'100%', paddingHorizontal:16}}>
                <TouchableOpacity
                    onPress={handleAddManualAnalyzesScreen}
                    style={styles.item_box}>
                    <Text style={{
                        fontWeight:'600',
                        fontSize:18,
                        lineHeight:21.48,
                        color:'#1E1E1E'
                    }}>
                        Enter manually
                    </Text>
                    <Text style={{
                        fontWeight:'400',
                        fontSize:16,
                        lineHeight:20,
                        color:'#797979',
                        marginTop:4
                    }}>
                        Results will be displayed in the app immediately
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={pickAnalyze}
                    style={[styles.item_box, {marginTop: 16}]}>
                    <Text style={{
                        fontWeight:'600',
                        fontSize:18,
                        lineHeight:21.48,
                        color:'#1E1E1E'
                    }}>
                        Upload PDF
                    </Text>
                    <Text style={{
                        fontWeight:'400',
                        fontSize:16,
                        lineHeight:20,
                        color:'#797979',
                        marginTop:4
                    }}>
                        May take some time for digitization
                    </Text>
                </TouchableOpacity>
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
        fontWeight: '400',
        fontStyle: 'normal',
    },
    item_box: {
        width: '100%',
        backgroundColor: '#F5F4F8',
        borderRadius: 20,
        paddingHorizontal: 16,
        paddingVertical: 16,
    },
    item_description:{
        color: '#797979',
        fontSize: 16,
        fontWeight: '400',
        fontStyle: 'normal'
    }

})
