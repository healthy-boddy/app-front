import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"

export const IconDelete = () => (
    <Svg
        width={20}
        height={20}
    >
        <Rect width={20} height={20} rx={10} fill="#E81313" />
        <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.312 9.323a.677.677 0 1 0 0 1.354h9.375a.677.677 0 0 0 0-1.354H5.312Z"
            fill="#fff"
        />
    </Svg>
)

