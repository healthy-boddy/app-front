import React from 'react';
import Svg, { Path } from "react-native-svg"

const DoubleChecked = (props) => {
    return (
        <Svg
            width={19}
            height={10}
            viewBox="0 0 19 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M10.455.455A1.125 1.125 0 0112.06 2.03L6.075 9.515a1.125 1.125 0 01-1.62.03L.486 5.576a1.125 1.125 0 111.59-1.59l3.141 3.14L10.425.487a.378.378 0 01.03-.033zm-1.38 7.71l1.38 1.38a1.124 1.124 0 001.618-.03l5.988-7.485A1.125 1.125 0 1016.425.488l-5.21 6.637-.727-.729-1.415 1.769h.002z"
                fill="#7454CF"
            />
        </Svg>
    );
};
export default DoubleChecked;
