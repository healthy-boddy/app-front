import React from 'react';
import {Text, TouchableOpacity, View} from "react-native";
import {File} from "../icon/file";
import {IconDelete} from "../icon/icon-delete";

export const FileRows = ({onPress, fileName}) => {
    return (
        <View style={{
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'space-between',
            width:'100%',
            marginTop:24
        }}>
            <View style={{
                alignItems:'center',
                flexDirection:'row'
            }}>
                <File />

                <Text style={{
                    fontWeight: "400",
                    fontSize: 16,
                    lineHeight: 20,
                    color: "#797979",
                }}>
                    {fileName}
                </Text>
            </View>

            <TouchableOpacity onPress={onPress}>
                <IconDelete />
            </TouchableOpacity>
        </View>
    );
};
