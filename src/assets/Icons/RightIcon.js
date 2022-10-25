import React from 'react';
import Svg, {Path} from "react-native-svg";

const RightIcon = (props) => {
    return (
        <Svg
            width={8}
            height={15}
            viewBox="0 0 7 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.744 5.494a.845.845 0 010 1.212l-5.25 5.143a.888.888 0 01-1.238 0 .845.845 0 010-1.212L4.888 6.1.256 1.564a.845.845 0 010-1.213.888.888 0 011.238 0l5.25 5.143z"
                fill={props.fill ? props.fill : "#1E1E1E"}
            />
        </Svg>
    );
};

export default RightIcon;
