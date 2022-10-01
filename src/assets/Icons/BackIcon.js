import React from 'react';
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg"
import {color1} from "../../helpers/colors/";

const BackIcon = (props) => {
    return (
        <Svg
            width={10}
            height={18}
            viewBox="0 0 12 22"
            fill={color1}
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M9.621 20.996c.258.258.586.399.973.399a1.38 1.38 0 001.394-1.383 1.42 1.42 0 00-.433-1.008l-8.203-8.016 8.203-7.992c.27-.27.433-.633.433-1.008A1.38 1.38 0 0010.594.605c-.387 0-.715.141-.973.399L.504 9.91c-.328.305-.48.68-.492 1.09 0 .41.164.762.492 1.078l9.117 8.918z"
                fill="url(#paint0_linear_306_6373)"
            />
            <Defs>
                <LinearGradient
                    id="paint0_linear_306_6373"
                    x1={11.7967}
                    y1={20.5192}
                    x2={-5.64262}
                    y2={10.7589}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#7454CF" />
                    <Stop offset={0.95948} stopColor="#7454CF" />
                </LinearGradient>
            </Defs>
        </Svg>
    );
};

export default BackIcon;
