import * as React from "react";
import Svg, { Path, Defs, Pattern, Use, Image } from "react-native-svg";

export const LargeIconPerson = () => (
  <Svg width={256} height={588} fill="none">
    <Path fill="url(#a)" d="M0 0h256v588H0z" />
    <Defs>
      <Pattern
        id="a"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <Use xlinkHref="#b" transform="matrix(.00056 0 0 .00024 -.007 0)" />
      </Pattern>
      <Image
        id="b"
        width={1712}
        height={4096}
      />
    </Defs>
  </Svg>
);