import React from 'react';
import Svg, { Rect, Path, Defs, LinearGradient, Stop } from "react-native-svg"

const PenIcon = (props) => {
    return (
        <Svg
            width={35}
            height={35}
            viewBox="0 0 29 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Rect
                x={0.5}
                width={28}
                height={28}
                rx={14}
                fill="url(#paint0_linear_334_618)"
            />
            <Path
                d="M21.8 7.979a.687.687 0 010 .97l-1.433 1.434-2.748-2.748 1.433-1.434a.687.687 0 01.971 0L21.8 7.977v.002zm-2.404 3.373l-2.748-2.747-9.359 9.36a.687.687 0 00-.166.27L6.017 21.55a.344.344 0 00.435.434l3.316-1.106a.686.686 0 00.269-.165l9.359-9.36v-.002z"
                fill="#fff"
            />
            <Defs>
                <LinearGradient
                    id="paint0_linear_334_618"
                    x1={28.052}
                    y1={26.8211}
                    x2={0.506734}
                    y2={0.0610884}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor='#7454CF' />
                    <Stop offset={0.95948} stopColor="#7454CF" />
                </LinearGradient>
            </Defs>
        </Svg>
    );
};

export default PenIcon;
