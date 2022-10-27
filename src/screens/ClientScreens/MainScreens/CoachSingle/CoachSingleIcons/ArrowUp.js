import React from 'react';
import Svg, {Path} from "react-native-svg";

const ArrowUp = (props) => {
    return (
        <Svg
            width={16}
            height={10}
            viewBox="0 0 16 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M.503 8.063L7.19 1.224c.229-.246.501-.36.809-.36.308 0 .589.122.817.36l6.68 6.837c.193.194.299.44.299.73a1.03 1.03 0 01-1.037 1.046c-.282 0-.554-.106-.756-.317l-5.994-6.16-6.012 6.16a1.042 1.042 0 01-.756.317A1.03 1.03 0 01.204 8.792c0-.281.106-.536.299-.73z"
                fill="#C4C3C5"
            />
        </Svg>
    );
};

export default ArrowUp;
