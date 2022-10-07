import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { FC } from "react";
import { SvgIcon } from "./home";

export const PersonSvg: FC<SvgIcon> = ({ color }) => (
  <Svg width={13} height={18}>
    <Path
      d="M.625 0a6.003 6.003 0 0 0 3.429 5.417V18h1.714v-6h1.714v6h1.714V5.409A5.981 5.981 0 0 0 12.625 0h-1.714a4.286 4.286 0 1 1-8.572 0m4.286 0c-.951 0-1.714.763-1.714 1.714 0 .952.763 1.715 1.714 1.715s1.714-.763 1.714-1.715C8.34.763 7.576 0 6.625 0Z"
      fill={color}
    />
  </Svg>
);
