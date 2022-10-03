import React from 'react';
import Svg, {Path} from "react-native-svg";

const PropertyIcon = (props) => {
    return (
        <Svg
            width={12}
            height={18}
            viewBox="0 0 12 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M0 0a6.003 6.003 0 003.429 5.417V18h1.714v-6h1.714v6h1.714V5.409A5.981 5.981 0 0012 0h-1.714a4.286 4.286 0 11-8.572 0M6 0c-.951 0-1.714.763-1.714 1.714 0 .952.763 1.715 1.714 1.715s1.714-.763 1.714-1.715C7.714.763 6.951 0 6 0z"
                fill="#7454CF"
            />
        </Svg>
    );
};

export default PropertyIcon;
