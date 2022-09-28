import * as React from "react"
import Svg, { Path } from "react-native-svg"

const BellIcon = (props) => {
    return (
        <Svg
            width={22}
            height={24}
            viewBox="0 0 22 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M11 23.667a3.477 3.477 0 003.288-2.334H7.712A3.476 3.476 0 0011 23.668zm8.46-8.357a1 1 0 01-.293-.707V9.667c0-3.753-2.55-6.915-6.003-7.866A2.322 2.322 0 0011 .333c-.987 0-1.822.607-2.164 1.468-3.454.952-6.003 4.113-6.003 7.866v4.936a1 1 0 01-.293.707L.842 17.01a1.162 1.162 0 00-.342.825V19a1.167 1.167 0 001.167 1.167h18.666A1.167 1.167 0 0021.5 19v-1.166a1.164 1.164 0 00-.342-.825L19.46 15.31z"
                fill="#7454CF"
            />
        </Svg>
    );
};

export default BellIcon;
