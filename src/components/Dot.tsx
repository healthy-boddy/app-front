import React from 'react';
import {Text}  from "react-native";
import Svg, { Path } from "react-native-svg"

const Dot = (props: any) => {
    return (
        <Text style={{width: 2}}>
            <Svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                {...props}
            >
                <Path d="M14 12a2 2 0 11-4 0 2 2 0 014 0z" fill="#797979" />
            </Svg>
        </Text>

    );
};

export default Dot;
