import React from 'react';
import Svg, {Path} from "react-native-svg";

const HomeIcon = (props) => {
    return (
        <Svg
            width={21}
            height={20}
            viewBox="0 0 21 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.265.612l7.689 6.06c.345.272.546.688.546 1.127v2.17a1.43 1.43 0 01-1.429 1.433h-.714v7.165A1.43 1.43 0 0116.93 20h-4.086a.2.2 0 01-.2-.2v-5.532a.716.716 0 00-.586-.705l-.128-.012H9.07a.715.715 0 00-.702.588l-.012.129v5.531a.2.2 0 01-.2.2L4.071 20a1.43 1.43 0 01-1.428-1.433v-7.166h-.714A1.43 1.43 0 01.5 9.97v-2.17c0-.44.201-.855.546-1.127L8.735.612a2.85 2.85 0 013.53 0z"
                fill="#7454CF"
            />
        </Svg>
    );
};

export default HomeIcon;
