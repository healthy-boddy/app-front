import React, {useEffect} from 'react';
import MainContainer from "../../../../components/MainContainer";
import {Title} from "react-native-paper";
import {SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {ChevronBack} from "../../../../assets/Icons/ChevronBack";

const SaveAnalyz = ({ route: {params} }) => {

    useEffect(()=>{
        console.log('PARAMS', params)
    },[])

    return (
        <SafeAreaView style={{
            alignItems:'center',
            justifyContent:'flex-start',
            flex:1,
            backgroundColor:'#fff',
        }}>
            <View style={{
                width:'100%',
                paddingHorizontal:16,
            }}>

                <View style={{
                    flexDirection:'row',
                    width:'100%',
                    justifyContent:'space-between',
                    height:70,
                    alignItems:'center'
                }}>

                <View style={{
                    flexDirection:'row',
                    alignItems:'center',
                }}>
                    <ChevronBack />
                    <Text style={styles.headerColor}>
                        Назад
                    </Text>

                </View>

                    <TouchableOpacity
                    onPress={()=> console.log('Press')}
                    >
                    <Text style={styles.headerColor}>
                        Изменить
                    </Text>
                    </TouchableOpacity>
                </View>

                <Text style={{
                    color:'#1E1E1E',
                    fontWeight:'400',
                    fontSize:18,
                    lineHeight:21.48,
                }}>
                    22.09.2022
                </Text>

                <Text style={styles.subtitle}>
                    Инвитро, Сампсоньевский, 32
                </Text>

                <View style={{
                    flexDirection:'row',
                    width:'100%',
                    justifyContent:'space-between',
                    alignItems:'center',
                    marginTop:35
                }}>

                    <Text style={[styles.subtitle, {color:'#1E1E1E'}]}>
                        Гемоглобин
                    </Text>

                    <Text style={styles.results}>
                        156 г/дл
                    </Text>

                </View>
                <Text style={[styles.results, {lineHeight: 28, marginTop:39}]}>
                    Введено вручную, {params.params.data}
                </Text>


            </View>

        </SafeAreaView>
    );
};

export default SaveAnalyz;


const styles = StyleSheet.create({
    headerColor:{
        color:'#7454CF',
        fontWeight:'400',
        fontSize:18,
        lineHeight:21.48,
        marginLeft:12
    },
    subtitle:{
        color:'#797979',
        fontWeight:'400',
        fontSize:16,
        lineHeight:20,
        marginTop:8
    },
    results:{
        color:'#1E1E1E',
        fontWeight:'600',
        fontSize:16,
        lineHeight:19.09,
    }
})