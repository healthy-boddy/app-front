import React from 'react';
import Svg, {Path} from "react-native-svg";

const XMark = (props) => {
    return (
        <Svg
            width={16}
            height={15}
            viewBox="0 0 16 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M1.189 12.55c-.37.37-.387 1.03.008 1.416.387.386 1.046.378 1.415.009l5.38-5.388 5.387 5.388a1.016 1.016 0 001.415-.01c.378-.395.387-1.036 0-1.414L9.415 7.163l5.38-5.379a1.008 1.008 0 000-1.415c-.396-.378-1.038-.387-1.416-.009L7.991 5.748 2.612.36c-.369-.369-1.037-.386-1.415.01C.811.755.82 1.414 1.19 1.783l5.387 5.38L1.19 12.55z"
                fill="#7454CF"
            />
        </Svg>
    );
};

export default XMark;
