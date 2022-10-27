import React from 'react';
import Svg, {Path, Rect} from "react-native-svg";

const PicIcon = (props) => {
    return (
        <Svg
            width={93}
            height={93}
            viewBox="0 0 93 93"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Rect
                x={2}
                y={2}
                width={89}
                height={89}
                rx={44.5}
                fill="#fff"
                stroke="#7454CF"
                strokeWidth={4}
            />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M41.181 54.425a.071.071 0 00.101 0l21.602-21.892a2.876 2.876 0 014.108 4.028l-25.693 26.37a.093.093 0 01-.134 0L27.477 48.573a2.82 2.82 0 014.047-3.927l9.657 9.778z"
                fill="#7454CF"
            />
        </Svg>
    );
};

export default PicIcon;
