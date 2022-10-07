import React from 'react';
import Svg, {Path, Rect} from "react-native-svg";

const CheckBox = (props) => {
    return (
        <Svg
            width={28}
            height={28}
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Rect x={2} y={2} width={24} height={24} rx={12} fill="#7454CF" />
            <Path
                d="M20.628 9.243a.983.983 0 00-1.43.148l-6.27 8.034-3.266-2.821a.983.983 0 00-1.431.148 1.108 1.108 0 00.14 1.505l4.037 3.487.015.013a.98.98 0 001.431-.148l.005-.005 6.91-8.855a1.108 1.108 0 00-.14-1.506z"
                fill="#fff"
            />
        </Svg>
    );
};

export default CheckBox;
