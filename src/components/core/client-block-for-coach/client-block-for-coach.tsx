import React, {FC} from 'react';
import {Image, Text, TouchableOpacity, View} from "react-native";
import {WrapperClientData} from "../wrapper-client-data";
//import {MoneyIcon} from "../../icon/money-icon";
import {ChevronRight} from "../../icon/chevron-right";
import {IconDelete} from "../../icon/icon-delete";

interface ClientBlockForCoachProps {
    onPress: ()=> void,
    url: string,
    name: string,
    progress: string,
    subscriptionDuration: string,
    subscriptionType: string
}

export const ClientBlockForCoach: FC <ClientBlockForCoachProps> = ({url,onPress, name, progress, subscriptionType, subscriptionDuration}) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={{
            backgroundColor:'#F5F4F8',
            alignItems:'flex-start',
            justifyContent:'center',
            paddingHorizontal:16,
            paddingVertical:20,
            borderRadius:24
        }}>

            <View style={{
                flexDirection:'row',
                alignItems:'center',
                justifyContent:'space-between',
                width:'100%'
            }}>

                <View style={{
                    flexDirection:'row'
                }}>

                    <View style={{
                        height:56,
                        width:56,
                        alignItems:'center'
                    }}>

                        <Image
                            style={{
                                width:'100%',
                                height:'100%',
                                borderRadius:50
                            }}
                            resizeMode='cover'
                            source={{uri: url}}
                        />
                    </View>

                    <View style={{
                        alignItems:'flex-start',
                        marginLeft:8,
                    }}>



                        <View style={{
                            flexDirection:'row',
                        }}>
                            <Text style={{
                                color:'#1E1E1E',
                                fontSize:16,
                                lineHeight:19.09,
                                fontWeight:'600'
                            }}>{name}</Text>
                            <Text style={{
                                color:'#797979',
                                fontSize:16,
                                lineHeight:19.09,
                                fontWeight:'600',
                                marginLeft:8
                            }}>{progress}</Text>
                        </View>

                        <View style={{
                            flexDirection:'row',
                            alignItems:'center'
                        }}>
                            <WrapperClientData
                                //icon={<MoneyIcon/>}
                                icon={<IconDelete/>}
                                title={subscriptionType} />
                            <View style={{marginLeft:8}}/>
                            <WrapperClientData borderRadiusColor={'#F2C0FF'}
                                             //  icon={<MoneyIcon/>}
                                               icon={<IconDelete/>}
                                               title={subscriptionDuration} />
                        </View>

                    </View>
                </View>

                <View style={{
                    width:24,
                    height:24,
                    alignItems:'center'
                }}>
                    <ChevronRight  color={'#1E1E1E'}/>
                </View>

            </View>
        </TouchableOpacity>
    );
};
