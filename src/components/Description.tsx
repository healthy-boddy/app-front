import React from 'react';
import {Text} from "react-native";

const Description = (props: any) => {
    const {children, marginVertical,marginTop, marginLeft, marginBottom, textAlign} = props
    return (
        <Text style={{
            color: '#797979',
            fontSize: 16,
            fontWeight: '400',
            width: props.width ? props.width : 343,
            lineHeight: 20,
            marginTop: marginTop,
            marginBottom: marginBottom,
            marginVertical: marginVertical,
            marginLeft: marginLeft,
            textAlign: textAlign
        }}
        >
            {children}
        </Text>
    );
};

export default Description;
