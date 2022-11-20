import React from 'react';
import Svg, {Path} from "react-native-svg";

const MoneySvg = (props) => {
    return (
        <Svg
            width={13}
            height={14}
            viewBox="0 0 13 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M6.5.5A6.5 6.5 0 1013 7 6.512 6.512 0 006.5.5zm0 12A5.5 5.5 0 1112 7a5.507 5.507 0 01-5.5 5.5zM9 8.25A1.756 1.756 0 017.25 10H7v.5a.5.5 0 01-1 0V10H5a.5.5 0 010-1h2.25a.75.75 0 100-1.5h-1.5a1.75 1.75 0 110-3.5H6v-.5a.5.5 0 111 0V4h1a.5.5 0 010 1H5.75a.75.75 0 000 1.5h1.5A1.756 1.756 0 019 8.25z"
                fill="#000"
            />
        </Svg>
    );
};

export default MoneySvg;
