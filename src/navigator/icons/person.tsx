import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { FC } from "react";
import { IconInterface } from "./house";

export const Person: FC<IconInterface> = ({
  color,
  width = 21,
  height = 20,
}) => (
  <Svg width={width} height={height}>
    <Path
      d="M4 1a6.003 6.003 0 0 0 3.429 5.417V19h1.714v-6h1.714v6h1.714V6.409A5.981 5.981 0 0 0 16 1h-1.714a4.286 4.286 0 1 1-8.572 0M10 1c-.951 0-1.714.763-1.714 1.714 0 .952.763 1.715 1.714 1.715s1.714-.763 1.714-1.715C11.714 1.763 10.951 1 10 1Z"
      fill={color}
    />
  </Svg>
);
