import React from 'react';
import Svg, {Path} from "react-native-svg";

const ArrowDown = (props) => {
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
                d="M8 9.488c.308-.009.589-.123.817-.369l6.68-6.838c.193-.193.299-.44.299-.73 0-.58-.457-1.045-1.037-1.045-.282 0-.554.114-.756.316L8.009 6.983 1.997.823a1.094 1.094 0 00-.756-.317C.661.506.204.972.204 1.552c0 .29.106.536.299.73L7.19 9.118c.238.246.501.37.809.37z"
                fill="#C4C3C5"
            />
        </Svg>
    );
};

export default ArrowDown;
