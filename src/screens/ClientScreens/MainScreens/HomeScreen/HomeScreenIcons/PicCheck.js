import React from 'react';
import Svg, { Path } from "react-native-svg"

const PicCheck = (props) => {
    return (
        <Svg
            width={121}
            height={120}
            viewBox="0 0 121 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M54.782 66.925a.071.071 0 01-.101 0l-9.656-9.778a2.82 2.82 0 00-4.047 3.927L54.664 75.43a.093.093 0 00.134 0l25.693-26.369a2.876 2.876 0 00-4.108-4.028L54.782 66.925z"
                fill="#7454CF"
            />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14 59.5C14 85.181 34.819 106 60.5 106S107 85.181 107 59.5 86.181 13 60.5 13 14 33.819 14 59.5zm4 0C18 36.028 37.028 17 60.5 17S103 36.028 103 59.5 83.972 102 60.5 102 18 82.972 18 59.5z"
                fill="#7454CF"
            />
        </Svg>
    );
};

export default PicCheck;
