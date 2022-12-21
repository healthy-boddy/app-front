import React, { FC, ReactNode, Ref } from "react";
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import { styles } from "./bottom-sheet-styles";

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
  >
    <BottomSheetScrollView showsVerticalScrollIndicator={false}>
      {children}
    </BottomSheetScrollView>
  </BottomSheet>
);
