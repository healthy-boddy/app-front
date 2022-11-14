import React from 'react';
import {Text} from "react-native";


interface TextTitleProps {
    title: string
}

export const TextTitle: React.FC <TextTitleProps> = ({title}) => {
    return (
        <Text style={{
            fontSize:14,
            lineHeight:17,
            color:'#1E1E1E',
            fontWeight:'400'
        }}>{title}</Text>
    );
};
