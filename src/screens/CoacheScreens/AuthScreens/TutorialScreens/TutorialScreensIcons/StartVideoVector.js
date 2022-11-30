import React from 'react';
import Svg, { Path } from "react-native-svg"

const StartVideoVector = (props) => {
    return (
        <Svg
            width={45}
            height={45}
            viewBox="0 0 45 45"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M43.564 24.432c1.924-.916 1.905-2.434 0-3.375L3.473.398C1.59-.533.025.225 0 2.08v40.817c-.022 1.852 1.509 2.629 3.407 1.724l40.157-20.19z"
                fill="#fff"
            />
        </Svg>
    );
};

export default StartVideoVector;
