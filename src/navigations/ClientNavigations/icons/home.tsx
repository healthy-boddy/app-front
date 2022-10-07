import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { FC } from "react";

export interface SvgIcon {
  color: string;
}

export const HomeSvg: FC<SvgIcon> = ({ color }) => (
  <Svg width={21} height={20} fill="none">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m12.64.612 7.689 6.06c.345.272.546.688.546 1.127v2.17a1.43 1.43 0 0 1-1.429 1.433h-.714v7.165A1.43 1.43 0 0 1 17.304 20h-4.086a.2.2 0 0 1-.2-.2v-5.532a.716.716 0 0 0-.586-.705l-.128-.012H9.446a.715.715 0 0 0-.702.588l-.012.129v5.531a.2.2 0 0 1-.2.2L4.446 20a1.43 1.43 0 0 1-1.428-1.433v-7.166h-.714A1.43 1.43 0 0 1 .875 9.97v-2.17c0-.44.201-.855.546-1.127L9.11.612a2.85 2.85 0 0 1 3.53 0Z"
      fill={color}
    />
  </Svg>
);
