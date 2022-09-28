import React from 'react';
import {View, Text, StyleSheet} from "react-native";
import Container from "../../../../components/Container";
import BackButton from "../../../../components/BackButton";
import DoctorBooks from "../../../../assets/Icons/DoctorBooks";
import CustomButton from "../../../../components/CustomButton";
import {useNavigation} from "@react-navigation/native";
import Title from "../../../../components/Title";

const GreetingsScreen2 = () => {
    const navigation: any = useNavigation();
    return (
        <Container containerProp={styles.inlineContainer}>
           <View>
               <BackButton onPress={()=>{navigation.navigate('Greetings')}}/>
           </View>
            <View style={styles.title_box}>
                <Title>
                    Мы желаем вам легкой{"\n"}адаптации в компании
                </Title>
                <Text style={{marginTop: 15}}>
                    Давай договорился задавать вопросы и быть открытыми.{"\n"}
                    {"\n"}
                    Фиксируй вопросы и отправляй в чат-бот по мере прохождения заданий , мы ответим на твои вопросы и проведем дополнительный инструктаж.
                </Text>
            </View>
            <View style={styles.image_box}>
                <DoctorBooks/>
            </View>
            <View style={{marginBottom: 25}}>
                <CustomButton onPress={()=>{navigation.navigate("Greetings3")}} title={"Продолжить"} />
            </View>
        </Container>
    );
};

export default GreetingsScreen2;
const styles = StyleSheet.create({
    inlineContainer: {
        paddingHorizontal: 20,
        paddingTop: 35
    },
    title_box: {
        marginTop: 25
    },
    image_box:{
        alignItems: "center",
        marginTop: 52,
        flex: 1
    }
})
