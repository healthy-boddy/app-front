import React, { FC } from "react";
import Svg, { Path } from "react-native-svg";

export interface IconInterface {
  width?: number;
  height?: number;
  color: string;
}

export const HomeIcon: FC<IconInterface> = ({
  width = 24,
  height = 21,
  color = "#1C1C1E",
}) => (
  <Svg width={width} height={height}>
    <Path
      d="M.358 10.159c0 .49.377.913.98.913.291 0 .555-.16.79-.348l9.342-7.845c.264-.226.565-.226.829 0l9.332 7.844c.226.189.49.349.782.349.555 0 .979-.348.979-.895a.973.973 0 0 0-.367-.781l-2.647-2.223V3.256c0-.424-.273-.687-.696-.687h-1.3c-.414 0-.697.263-.697.687v1.648l-4.463-3.748c-.82-.687-1.855-.687-2.675 0L.735 9.396a.984.984 0 0 0-.377.762Zm3.06 8.465c0 1.356.848 2.176 2.251 2.176H18.09c1.394 0 2.25-.82 2.25-2.176v-7.156L12.46 4.865c-.367-.32-.81-.31-1.168 0L3.42 11.467v7.157Zm10.934.405H9.408v-6.027c0-.442.292-.725.734-.725h3.485c.442 0 .725.283.725.725v6.027Z"
      fill={color}
    />
  </Svg>
);
