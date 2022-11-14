import React, {useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import MainContainer from "../../../../components/MainContainer";
import BackButton from "../../../../components/BackButton";
import {useNavigation} from "@react-navigation/native";
import {subYears} from "date-fns";
import {DatePicker} from "../../../../components/core/date-picker-modal";
import {CalendarSvg} from "../../../../components/icon/calendar";
import {TextTitle} from "./view/text-title";
import {ChevronRight} from "../../../../components/icon/chevron-right";
import {IconDelete} from "../../../../components/icon/icon-delete";

const AddManualAnalyze = () => {
    const navigation = useNavigation<any>()

    const [analiseDate, setAnaliseDate] = useState<Date>(new Date())
    const [lab, setLab] = useState('')
    const [parameterArray, setParameterArray] = useState([
        {parameter: 'Выбрать показатель',
            value: '0', id: 1}
    ])

function setBirthDate(date: Date) {
    setAnaliseDate(date)
    }

    const addMooreParameters = () =>{
        setParameterArray(prevData=> [...prevData, {parameter: '', value: '', id: Date.now()}])
    }

    const deleteItems = (id: number) =>{
        const items = parameterArray.filter(data => data.id != id)
        setParameterArray(items)
    }

    return (
       <SafeAreaView style={{
           flex:1,
           alignItems:'center',
           justifyContent:'flex-start',
           backgroundColor:'#fff',
           width:'100%'
       }}>


           <View style={{
               width:'100%',
               paddingHorizontal:20,
           }}>
               <ScrollView
                   showsVerticalScrollIndicator={false}
               >
               <BackButton onPress={()=>{navigation.navigate('AddAnalyzes')}}/>

               <TextTitle title={'Дата'}/>

            <View style={{
                marginTop:9.5
            }}/>

               <DatePicker
                   date={analiseDate}
                   onDateChange={setBirthDate}
                   placeholder="Выбрать дату"
                   icon={<CalendarSvg />}
               />

               <View style={{
                   marginTop:17.5
               }}/>

               <TextTitle title={'Лаборатория'}/>


               <View style={styles.inputView}>
                   <TextInput
                   placeholder={'Выбрать лабораторию'}
                   value={lab}
                   onChangeText={setLab}
                   style={styles.input}
                   />
                   <ChevronRight />
               </View>

               {parameterArray.map((data, index)=>{

                   return (
                       <>

                           <View style={{marginTop:17.5}}/>
                           <View style={{
                               flexDirection:'row',
                               justifyContent:'space-between',
                               width:'100%'
                           }}>

                           <TextTitle title={`Показатель ${index + 1}`}/>

                               <TouchableOpacity onPress={()=>deleteItems(data.id)}>
                               <IconDelete />
                               </TouchableOpacity>
                           </View>

                       <View style={styles.inputView}>
                           <TextInput
                               placeholder={'Выбрать показатель'}
                               value={data.parameter}
                               onChangeText={(text)=> setParameterArray([ {parameter: text, value: ''}])}
                               style={styles.input}
                           />
                           <ChevronRight />
                       </View>

                   <View style={styles.inputView}>
                       <TextInput
                           placeholder={'Ввести результат'}
                           value={data.parameter}
                           onChangeText={(text)=> setParameterArray([ {parameter: text, value: ''}])}
                           style={styles.input}
                       />
                       <ChevronRight />
                   </View>
                       </>
                   )
               })}


               <TouchableOpacity
               onPress={addMooreParameters}
               >
                   <Text style={{
                       color: '#7454CF',
                       fontSize: 16,
                       lineHeight: 20,
                       fontWeight:'500',
                       marginTop:32
                   }}>+ Добавить показатель</Text>
               </TouchableOpacity>

                   <TouchableOpacity
                       // add photo picker
                   >
                       <Text style={{
                           color: '#7454CF',
                           fontSize: 16,
                           lineHeight: 20,
                           fontWeight:'500',
                           marginTop:32
                       }}>+ Добавить фото анализа</Text>
                   </TouchableOpacity>
               </ScrollView>

           </View>


       </SafeAreaView>
    );
};

export default AddManualAnalyze;


const styles = StyleSheet.create({
    inputView:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        width:'100%',
        paddingHorizontal:16,
        paddingVertical:16,
        backgroundColor:'#F5F4F8',
        marginTop:9.5,
        borderRadius:12
    },
    input: {
        color: '#484851',
        fontSize: 14,
        lineHeight: 16,
        fontWeight:'400'
    }
})