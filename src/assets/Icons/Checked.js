import * as React from "react"
import Svg, { Path } from "react-native-svg"

const Checked = (props) => {
    return (
        <Svg
            width={17}
            height={13}
            viewBox="0 0 17 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.745 9.366c.01.01.026.01.036 0L14.433.714a1.01 1.01 0 111.428 1.428L5.787 12.216a.034.034 0 01-.048 0L.714 7.191a1.01 1.01 0 011.428-1.428l3.603 3.603z"
                fill="#E2E2E2"
            />
        </Svg>
    );
};

export default Checked;
