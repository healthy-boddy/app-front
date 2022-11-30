import React from 'react';
import Svg, {
    G,
    Rect,
    Path,
    Defs,
    LinearGradient,
    Stop,
    ClipPath
} from "react-native-svg";

const VideoPreView = (props) => {
    return (
        <Svg
            width={343}
            height={200}
            viewBox="0 0 343 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <G clipPath="url(#clip0_1543_24082)">
                <Rect
                    width={343}
                    height={200}
                    rx={16}
                    fill="url(#paint0_linear_1543_24082)"
                />
                <Path
                    d="M-2.479 74.612c15.135 0 27.404 12.198 27.404 27.245a27.024 27.024 0 01-2.076 10.42 27.153 27.153 0 01-5.938 8.832l26.801 37.224a27.508 27.508 0 018.617-1.394c3.04 0 5.957.513 8.69 1.422l16.138-23.604a6.71 6.71 0 014.287-2.797 6.736 6.736 0 015.021 1.034 6.66 6.66 0 012.817 4.261 6.621 6.621 0 01-1.04 4.993l-15.944 23.32c4.599 4.872 7.435 11.408 7.435 18.615 0 15.048-12.27 27.245-27.404 27.245-15.135 0-27.404-12.197-27.404-27.245 0-7.23 2.854-13.786 7.478-18.664L5.357 127.956a27.495 27.495 0 01-7.836 1.146 27.45 27.45 0 01-9.115-1.577l-25.175 39.292a27.037 27.037 0 016.291 17.366c0 15.048-12.27 27.245-27.404 27.245s-27.404-12.197-27.404-27.245c0-15.046 12.27-27.244 27.404-27.244 3.634 0 7.096.719 10.27 1.996l24.857-38.797c-4.415-4.835-7.127-11.235-7.127-18.281 0-15.047 12.269-27.245 27.403-27.245zM162.167-7.713c15.136 0 27.404 12.197 27.404 27.245 0 15.046-12.269 27.244-27.403 27.244-3.334 0-6.514-.621-9.47-1.705l-25.077 39.14c4.075 4.756 6.547 10.91 6.547 17.645 0 15.049-12.269 27.248-27.404 27.248s-27.403-12.199-27.403-27.246c0-7.186 2.82-13.704 7.394-18.574l-27.088-37.62a27.512 27.512 0 01-7.71 1.112c-2.722 0-5.347-.408-7.827-1.142l-17 24.863a6.683 6.683 0 01-1.863 1.824 6.724 6.724 0 01-5.04.956 6.722 6.722 0 01-2.408-1.015 6.682 6.682 0 01-1.834-1.853 6.642 6.642 0 01-.961-5.01 6.645 6.645 0 011.02-2.394l16.545-24.2a27.149 27.149 0 01-5.954-8.839 27.02 27.02 0 01-2.082-10.435c0-15.047 12.268-27.244 27.404-27.244 15.135 0 27.404 12.197 27.404 27.245 0 7.56-3.103 14.398-8.106 19.335L98.03 76.051a27.424 27.424 0 018.734-1.439c3.502 0 6.839.678 9.917 1.869l24.955-38.948c-4.264-4.803-6.872-11.093-6.872-18.002 0-15.048 12.269-27.245 27.404-27.245h-.001z"
                    fill="#fff"
                    opacity={0.8}
                />
                <Path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M196.564 106.432c1.924-.916 1.905-2.434 0-3.375l-40.091-20.658c-1.883-.932-3.448-.174-3.473 1.682v40.816c-.022 1.853 1.509 2.63 3.407 1.725l40.157-20.19z"
                    fill="#fff"
                />
            </G>
            <Defs>
                <LinearGradient
                    id="paint0_linear_1543_24082"
                    x1={337.512}
                    y1={191.579}
                    x2={163.807}
                    y2={-97.8316}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#8C64FF" />
                    <Stop offset={0.95948} stopColor="#B49AFF" />
                </LinearGradient>
                <ClipPath id="clip0_1543_24082">
                    <Rect width={343} height={200} rx={16} fill="#fff" />
                </ClipPath>
            </Defs>
        </Svg>
    );
};

export default VideoPreView;
