import React from 'react';
import {TextInput, View} from "react-native";

export const LargeInput = ({value, setValue, placeholder, valueError}) => {
    console.log(valueError, 'largeinputS')
    return (
        <View style={[{
            marginTop: 12,
            backgroundColor: '#F5F4F8',
            height: 104,
            borderRadius: 12,
            paddingHorizontal: 16,
            paddingVertical: 14
        }, value.length > 1 && {borderColor: '#7454CF', borderWidth: 1},
            valueError && {
                borderColor: 'red',
                borderWidth: 1,
                borderRadius: 12,
                marginTop: 12,
                backgroundColor: '#F5F4F8',
                height: 104,
                paddingHorizontal: 16,
                paddingVertical: 14
            }]}>
            <TextInput
                autoCorrect={false}
                autoCapitalize='none'
                value={value}
                placeholderTextColor={'#797979'}
                style={[{
                    fontWeight: '400',
                    lineHeight: 20,
                    fontSize: 16,
                    color: '#1e1e1e'
                }]}
                multiline={true}
                onChangeText={setValue}
                placeholder={placeholder}/>
        </View>
    );
};
