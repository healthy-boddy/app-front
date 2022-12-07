import React, { FC, RefObject } from "react";
import { Image, Text, View } from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";
import { BottomSheetComponent } from "../../../../../../components/core/bottom-sheet";
import Description from "../../../../../../components/Description";
import CustomButton from "../../../../../../components/CustomButton";
import { color1 } from "../../../../../../helpers/colors";

interface ButtonSheetPersonalDoctorProps {
  sheetRef: RefObject<BottomSheet>;
  snapPoints: (string | number)[];
  onClose: () => void;
  onPressDone: () => void;
  onPressInProgress: () => void;
  description: string;
}

export const BottomSheetGoalStatus: FC<ButtonSheetPersonalDoctorProps> = ({
  sheetRef,
  snapPoints,
  onClose,
  onPressInProgress,
  onPressDone,
  description,
}) => {
  const handlePressDone = () => {
    sheetRef.current?.close();
    onPressDone();
  };
  const handlePressInProgress = () => {
    sheetRef.current?.close();
    onPressInProgress();
  };
  return (
    <BottomSheetComponent
      onClose={onClose}
      sheetRef={sheetRef}
      snapPoints={snapPoints}
    >
      <View
        style={{
          height: 212,
          backgroundColor: "#fff",
          borderTopLeftRadius: 24,
          borderTopRightRadius: 24,
          paddingHorizontal: 16,
          width: "100%",
        }}
      >
        <Text
          style={{
            marginTop: 16,
            fontWeight: "600",
            fontSize: 19,
            lineHeight: 22.67,
            textAlign: "center",
            color: "#1E1E1E",
          }}
        >
          Какое действие выполнить с данной целью?
        </Text>

        <View style={{ marginTop: 16 }} />
        <Description>
          <Text
            style={{
              textAlign: "center",
            }}
          >
            {description ?? ""}
          </Text>
        </Description>

        <View
          style={{
            marginTop: 48,
          }}
        />
        <CustomButton
          title={"Отметить “В процессе”"}
          onPress={handlePressInProgress}
        />
        <View style={{ marginTop: 12 }} />
        <CustomButton
          buttonTitle={{ color: color1 }}
          buttonStyles={{
            backgroundColor: "transparent",
            borderWidth: 2,
            borderColor: color1,
            marginBottom: 25,
          }}
          title={"Отметить выполненной"}
          onPress={handlePressDone}
        />
      </View>
    </BottomSheetComponent>
  );
};
