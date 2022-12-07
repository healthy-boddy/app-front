import React, { FC, RefObject } from "react";
import { Text, View } from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";
import { BottomSheetComponent } from "../../../../../../../components/core/bottom-sheet";
import CustomButton from "../../../../../../../components/CustomButton";
import { color1 } from "../../../../../../../helpers/colors";
import Description from "../../../../../../../components/Description";

interface ButtonSheetPersonalDoctorProps {
  sheetRef: RefObject<BottomSheet>;
  snapPoints: (string | number)[];
  onClose: () => void;
  onPress: () => void;
}

export const BottomSheetDeleteProgram: FC<ButtonSheetPersonalDoctorProps> = ({
  sheetRef,
  snapPoints,
  onClose,
  onPress,
}) => {
  const handlePress = () => {
    sheetRef.current?.close();
    onPress();
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
          Вы уверены, что хотите удалить программу?
        </Text>

        <View style={{ marginTop: 16 }} />
        <Description>
          <Text
            style={{
              textAlign: "center",
            }}
          >
            Если вы удалите программу, она больше не будет отображаться у
            клиента
          </Text>
        </Description>

        <View
          style={{
            marginTop: 48,
          }}
        />
        <CustomButton title={"Удалить"} onPress={handlePress} />
        <View style={{ marginTop: 12 }} />
        <CustomButton
          buttonTitle={{ color: color1 }}
          buttonStyles={{
            backgroundColor: "transparent",
            borderWidth: 2,
            borderColor: color1,
            marginBottom: 25,
          }}
          title={"Назад"}
          onPress={() => sheetRef.current?.close()}
        />
      </View>
    </BottomSheetComponent>
  );
};
