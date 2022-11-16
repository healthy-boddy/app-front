import * as React from "react";
import Svg, { Rect, Path } from "react-native-svg";

export const TargetsIcons = () => (
  <Svg width={28} height={28}>
    <Rect width={28} height={28} rx={4} fill="#FF9F0F" />
    <Path
      d="M14 16a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm-5.999-2a5.998 5.998 0 1 1 11.997 0 5.998 5.998 0 0 1-11.997 0ZM14 9.5a4.499 4.499 0 1 0 0 8.999A4.499 4.499 0 0 0 14 9.5ZM4 14C4 8.477 8.477 4 14 4s10 4.477 10 10-4.477 10-10 10S4 19.523 4 14Zm10-8.5a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17Z"
      fill="#fff"
    />
  </Svg>
);
