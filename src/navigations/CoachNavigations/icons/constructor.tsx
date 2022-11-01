import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"
import {FC} from "react";
import {SvgIcon} from "../../ClientNavigations/icons/home";

// @ts-ignore
export const Constructor: FC <SvgIcon> = ({color}) => (
    <Svg
        width={21}
        height={20}
    >
        <G clipPath="url(#a)" fill={color}>
            <Path d="M6.127 6.63a.7.7 0 0 0-.533.248L.667 12.68a.7.7 0 0 0 .534 1.153l18.6-.013a.7.7 0 0 0 .533-1.153l-4.058-4.78-.946 1.049 2.958 3.485-15.574.01L6.45 8.03h3.191c.084-.254.158-.507.196-.759.135-.22.28-.434.433-.64H6.127Zm12.355 8.192-1.835.001 1.642 1.934-15.575.011 1.644-1.936-1.838.001-1.853 2.183a.7.7 0 0 0 .534 1.153l18.6-.013a.7.7 0 0 0 .533-1.153l-1.852-2.181Z" />
            <Path d="M18.572.174a.596.596 0 0 0-.841 0l-6.962 6.962a.592.592 0 0 0-.131.197l-.951 3.325c-.044.137.023.196.172.15l3.308-.946a.588.588 0 0 0 .197-.13l6.962-6.963a.596.596 0 0 0 0-.842L18.572.174Zm-1.515 2.357.912.912-5.026 5.026-.912-.912 5.026-5.026Z" />
        </G>
        <Defs>
            <ClipPath id="a">
                <Path fill="#fff" transform="translate(.5)" d="M0 0h20v20H0z" />
            </ClipPath>
        </Defs>
    </Svg>
)

