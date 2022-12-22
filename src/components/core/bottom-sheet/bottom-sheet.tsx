import React, { FC, ReactNode, Ref, useMemo } from "react";
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetScrollView,
} from "@gorhom/bottom-sheet";
import { styles } from "./bottom-sheet-styles";
import { BottomSheetBackdropProps } from "@gorhom/bottom-sheet";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import BottomSheetBackdropContainer from "@gorhom/bottom-sheet/lib/typescript/components/bottomSheetBackdropContainer";

interface BottomSheetProps {
  children: ReactNode;
  sheetRef?: Ref<BottomSheet>;
  snapPoints: Array<string | number>;
  onClose: () => void;
}

export const BottomSheetComponent: FC<BottomSheetProps> = ({
  children,
  sheetRef,
  snapPoints,
  onClose,
}) => (
  <BottomSheet
    onClose={onClose}
    handleIndicatorStyle={styles.bottomSheetStylesIndicator}
    enablePanDownToClose
    ref={sheetRef}
    snapPoints={snapPoints}
    index={-1}
    style={[styles.container]}
    // backdropComponent={CustomBackdrop}
  >
    <BottomSheetScrollView showsVerticalScrollIndicator={false}>
      {children}
    </BottomSheetScrollView>
  </BottomSheet>
);

// const CustomBackdrop = ({ animatedIndex, style }: BottomSheetBackdropProps) => {
//   // animated variables
//   const containerAnimatedStyle = useAnimatedStyle(() => ({
//     opacity: interpolate(
//       animatedIndex.value,
//       [0, 1],
//       [0, 1],
//       Extrapolate.CLAMP
//     ),
//   }));
//
//   // styles
//   const containerStyle = useMemo(
//     () => [
//       style,
//       {
//         backgroundColor: "#a8b5eb",
//       },
//       containerAnimatedStyle,
//     ],
//     [style, containerAnimatedStyle]
//   );
//
//   return <Animated.View style={containerStyle} />;
// };
