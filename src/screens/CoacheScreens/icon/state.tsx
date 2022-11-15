import * as React from "react";
import Svg, { Rect, Path } from "react-native-svg";

export const StateClient = () => (
  <Svg width={28} height={28}>
    <Rect width={28} height={28} rx={4} fill="#FFC429" />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.982 4.115a2.1 2.1 0 1 1 2.97 2.97 2.1 2.1 0 0 1-2.97-2.97Zm-.896 9.3-2.02 2.777a1.05 1.05 0 1 1-1.698-1.235l4.192-5.764a1.055 1.055 0 0 1 .87-.443h2.074a1.046 1.046 0 0 1 .87.443l4.192 5.764a1.05 1.05 0 1 1-1.698 1.235l-2.02-2.776.766 9.953a1.05 1.05 0 1 1-2.094.162l-.531-6.906h-1.044l-.531 6.905a1.05 1.05 0 0 1-2.094-.16l.766-9.954Z"
      fill="#fff"
    />
  </Svg>
);
