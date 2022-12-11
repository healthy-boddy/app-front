import React from 'react';
import Svg, {Path} from "react-native-svg";

const ShareIcon = (props) => {
    return (
        <Svg
            width={18}
            height={19}
            viewBox="0 0 18 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.705 11.207l7.294-7.293V8.5h2v-8h-8v2h4.586L7.29 9.793l1.415 1.414zm7.298 5.293v-5h-2v5H2v-12h5.002v-2H2a2 2 0 00-2 2v12a2 2 0 002 2h12.003a2 2 0 002-2z"
                fill="#7454CF"
            />
        </Svg>
    );
};

export default ShareIcon;
