import React from 'react';
import Svg, { Circle, Path } from "react-native-svg"

const Pic3 = (props) => {
    return (
        <Svg
            width={48}
            height={48}
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Circle
                cx={24}
                cy={24}
                r={20.6868}
                stroke="#FFE9B1"
                strokeWidth={6.62637}
            />
            <Path
                d="M24 0a24 24 0 016.56 47.086l-1.785-6.283A17.468 17.468 0 0024 6.533V0z"
                fill="#FF9F0F"
            />
            <Path
                d="M18.684 14.833c-.256.003-.525.084-.817.223-.629.3-.873 1.157-.222 2.087 1.046 1.494 1.951 1.26 3.29 2.776.299.337.53 1.302.223 1.598-.399.386-1.276.393-2.846-.621-.952-.616-.85-1.708-1.668-2.243-.5-.327-1.4-.322-1.69.2-.289.522-.04 1.49.512 1.843.753.481 1.444.098 2.446.732 2.483 1.573 2.724 3.466.356 5.596-.998.897-1.86.436-2.869 1.154-.644.46-.64 1.267-.355 1.666.278.39.9.883 1.578.4 1.057-.754 1.136-1.766 2.18-2.554a1.26 1.26 0 011.734.2c.49.59.253 2.691-.868 5.129 1.208-1.712 2.387-3.373 3.402-4.13 1.141-.85 2.119.699 2.735 2.143-.165-1.698-.564-3.34.957-2.81.337.119.766.427 1.178.756 1.47 1.172 1.025 2.43 2.134 3.597.59.62 1.688.788 2.157.333.47-.455.46-1.353-.178-1.954-1.055-.995-2.54-1.41-3.513-2.442-1.888-2.005 2.12-1.917 4.536-1.71-3.269-.972-4.951-1.737-5.358-2.665-.233-.53-.02-1.732 1-2.33 1.549-.91 1.973-.347 3.469-1.045.941-.439 1.14-1.46.867-2.042-.267-.57-1.01-1.218-2.001-.755-1.591.741-1.33 2.408-2.846 3.241-1.433.788-2.069-1.253-1.646-5.972-.936 4.175-1.49 5.324-2.935 5.528-.447.064-1.543-.374-1.934-1.065-.973-1.72-.619-2.492-1.712-4.041-.388-.55-.794-.807-1.245-.822h-.051zm4.923 6.616a1.3 1.3 0 011.274 1.028.482.482 0 10.339.208 1.033 1.033 0 11.598 1.966 2.03 2.03 0 01-.168 2.684 2.037 2.037 0 01-2.877 0 2.026 2.026 0 01-.58-1.684.997.997 0 01-1.18-1.585 1 1 0 011.679.481 2.04 2.04 0 01.326-.294.624.624 0 00.657.358.989.989 0 00.063.842.712.712 0 10.54.448.987.987 0 001.021-1.633.99.99 0 00-1.092-.209.625.625 0 00-1.236-.174 1.3 1.3 0 01.636-2.436z"
                fill="#FF9F0F"
            />
        </Svg>
    );
};

export default Pic3;
