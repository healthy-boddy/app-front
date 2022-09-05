import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { FC } from "react";
import { IconInterface } from "./house";

export const Chat: FC<IconInterface> = ({ color, width = 17, height = 16 }) => (
  <Svg width={width} height={height}>
    <Path
      d="M13.055 11.906h-1v2.903a8.538 8.538 0 0 1-.073-.064l-.08-.07-.093-.053-4.623-2.589-.228-.127H3.145c-.791 0-1.302-.233-1.612-.54C1.223 11.062 1 10.57 1 9.828V3.024c0-.745.223-1.217.523-1.505C1.828 1.225 2.339 1 3.145 1h10.718c.762 0 1.277.22 1.596.523.311.296.541.77.541 1.501v6.803c0 .729-.228 1.226-.542 1.54-.316.313-.815.539-1.54.539h-.863Zm-1.003 3.297v-.002.002Z"
      stroke={color}
      strokeWidth={2}
    />
  </Svg>
);
