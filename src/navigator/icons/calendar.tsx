import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { FC } from "react";
import { IconInterface } from "./house";

export const Calendar: FC<IconInterface> = ({
  color,
  width = 21,
  height = 20,
}) => (
  <Svg width={width} height={height}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18 8H3V6h15v2ZM7 0c.552 0 1 .373 1 .833v3.334C8 4.627 7.552 5 7 5s-1-.373-1-.833V.833C6 .373 6.448 0 7 0ZM14 0c.552 0 1 .373 1 .833v3.334c0 .46-.448.833-1 .833s-1-.373-1-.833V.833c0-.46.448-.833 1-.833Z"
      fill={color}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 4.55A2.55 2.55 0 0 1 4.55 2h11.9A2.55 2.55 0 0 1 19 4.55v11.9A2.55 2.55 0 0 1 16.45 19H4.55A2.55 2.55 0 0 1 2 16.45V4.55Zm2.55-.85a.85.85 0 0 0-.85.85v11.9c0 .47.38.85.85.85h11.9c.47 0 .85-.38.85-.85V4.55a.85.85 0 0 0-.85-.85H4.55Z"
      fill={color}
    />
    <Path
      d="M12.736 10.325a.426.426 0 0 0-.152-.229.462.462 0 0 0-.71.198l-1.434 4.094L9.11 11.54a.436.436 0 0 0-.17-.187.467.467 0 0 0-.497.009.433.433 0 0 0-.162.192l-.787 1.874H6v.857h1.495c.37 0 .699-.212.836-.539l.39-.93 1.367 2.928A.452.452 0 0 0 10.5 16h.022a.463.463 0 0 0 .25-.087.43.43 0 0 0 .155-.206l1.31-3.746.441 1.676c.049.185.161.35.32.468a.927.927 0 0 0 .553.18H15v-.856h-1.449l-.815-3.104Z"
      fill={color}
    />
  </Svg>
);
