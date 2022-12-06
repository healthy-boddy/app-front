import * as React from "react";
import Svg, { Rect, Defs, Pattern, Use, Image } from "react-native-svg";

export const ImagePerson = () => (
  <Svg width={106} height={258} fill="none">
    <Rect width={106} height={258} rx={12} fill="url(#a)" />
    <Defs>
      <Pattern
        id="a"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <Use xlinkHref="#b" transform="matrix(.0006 0 0 .00024 -.009 0)" />
      </Pattern>
      <Image
        id="b"
        width={1712}
        height={4096}
      />
    </Defs>
  </Svg>
);