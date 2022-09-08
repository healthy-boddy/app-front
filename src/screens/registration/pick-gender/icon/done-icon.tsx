import * as React from "react";
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";
import { FC } from "react";
import { IconInterface } from "../../../../navigator/icons/house";

export const DoneIcon: FC<IconInterface> = ({ color = "#8C64FF" }) => (
  <Svg width={16} height={16}>
    <Path
      d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0ZM6.14 12.8l-.005-.005-.005.005L2.4 8.96l1.874-1.91 1.86 1.915 5.6-5.765L13.6 5.12 6.14 12.8Z"
      fill="url(#a)"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={15.744}
        y1={15.326}
        x2={0.004}
        y2={0.035}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor={color} />
        <Stop offset={0.959} stopColor={color} />
      </LinearGradient>
    </Defs>
  </Svg>
);
