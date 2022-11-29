import React, { FC, RefObject, useEffect, useState } from "react";
import { Image, Text, View } from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";
import { BottomSheetComponent } from "../../../../../../../components/core/bottom-sheet";
import CustomButton from "../../../../../../../components/CustomButton";
import { color1 } from "../../../../../../../helpers/colors";
import Description from "../../../../../../../components/Description";
import { useSelector } from "react-redux";

interface ButtonSheetPersonalDoctorProps {
  sheetRef: RefObject<BottomSheet>;
  snapPoints: (string | number)[];
  onClose: () => void;
  onPressToPick?: () => void;
}

export const BottomSheetClientPicked: FC<ButtonSheetPersonalDoctorProps> = ({
  sheetRef,
  snapPoints,
  onClose,
  onPressToPick,
}) => {
  const user_data = useSelector((store: any) => store.user_data.user_data);
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
        <View
          style={{
            width: 120,
            height: 120,
            alignSelf: "center",
          }}
        >
          <Image
            style={{
              width: "100%",
              height: "100%",
              borderRadius: 100,
            }}
            resizeMode={"cover"}
            source={{ uri: user_data.avatar }}
          />
        </View>

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
          Вы уверены, что хотите назначить программу «Любовь к себе» клиенту
          Анна Аннова?
        </Text>

        <View style={{ marginTop: 16 }} />
        <Description>
          <Text
            style={{
              textAlign: "center",
            }}
          >
            Эта программа сразу отобразится в аккаунте клиента
          </Text>
        </Description>

        <View
          style={{
            marginTop: 46,
          }}
        />
        <CustomButton
          buttonStyles={{ backgroundColor: "#7454CF" }}
          title={"Назначить"}
          onPress={onPressToPick}
        />
        <View
          style={{
            marginTop: 12,
          }}
        />
        <CustomButton
          buttonTitle={{ color: color1 }}
          buttonStyles={{
            backgroundColor: "transparent",
            borderWidth: 2,
            borderColor: color1,
            marginBottom: 25,
          }}
          title={"Удалить задачу"}
          onPress={() => alert("press")}
        />
      </View>
    </BottomSheetComponent>
  );
};
