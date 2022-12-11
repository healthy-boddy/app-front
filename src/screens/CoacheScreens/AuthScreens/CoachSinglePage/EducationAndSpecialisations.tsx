import React from 'react';
import {View, Text, ScrollView, Image, TouchableOpacity} from "react-native";
import MainContainer from "../../../../components/MainContainer";
import BackButton from "../../../../components/BackButton";
import {useNavigation} from "@react-navigation/native";
import {useSelector} from "react-redux";
import Title from "../../../../components/Title";

const EducationAndSpecialisations = () => {
    const navigation = useNavigation<any>()
    let user_data = useSelector((store: any) => store.user_data?.user_data);

    console.log(user_data, 'user_data')
    return (
        <MainContainer>
            <ScrollView style={{width: '100%'}} showsVerticalScrollIndicator={false}>
                <View style={{height: 101}}>
                    <BackButton
                        onPress={() => {
                            navigation.navigate("CoachSingleScreen")
                        }}
                    />
                </View>
                <View>
                    <Title>
                        Образование
                    </Title>
                    <Text style={{
                        lineHeight: 20,
                        fontSize: 16,
                        fontWeight: '400',
                        fontStyle: 'normal',
                        color: '#1E1E1E',
                        marginTop: 8
                    }}>
                        {user_data?.education_description}
                    </Text>
                    <Title titlePropStyle={{marginTop: 24}}>
                        Дипломы и сертификаты
                    </Title>
                    <View style={{height: 120, width: '100%', marginTop: 16}}>
                        <ScrollView horizontal={true} style={{flexDirection: 'row'}}>
                            {user_data?.certificates.map((item) => (
                                <TouchableOpacity key={item.id} style={{marginRight: 16}}>
                                    <Image style={{width: 150, height: 105}} source={{uri: item.file}}/>
                                </TouchableOpacity>
                            ))}
                        </ScrollView>
                    </View>
                    <Title titlePropStyle={{marginTop: 24, marginBottom: 8}}>
                        Специализация
                    </Title>
                    <Text style={{
                        lineHeight: 20,
                        fontSize: 16,
                        fontWeight: '400',
                        fontStyle: 'normal',
                        color: '#1E1E1E',
                        marginTop: 8
                    }}>
                        {user_data?.specialization}
                    </Text>
                </View>
            </ScrollView>
        </MainContainer>
    );
};

export default EducationAndSpecialisations;
