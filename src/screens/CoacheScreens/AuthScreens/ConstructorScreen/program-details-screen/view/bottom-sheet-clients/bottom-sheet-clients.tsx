import React, { FC, RefObject } from "react";
import { Text, View } from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";
import { BottomSheetComponent } from "../../../../../../../components/core/bottom-sheet";
import CustomButton from "../../../../../../../components/CustomButton";
import { useSelector } from "react-redux";
import { ClientBlockForCoach } from "../../../../../../../components/core/client-block-for-coach/client-block-for-coach";
import { useNavigation } from "@react-navigation/native";

interface ButtonSheetPersonalDoctorProps {
  sheetRef: RefObject<BottomSheet>;
  snapPoints: (string | number)[];
  onClose: () => void;
  onPress: () => void;
}

export const BottomSheetClients: FC<ButtonSheetPersonalDoctorProps> = ({
  sheetRef,
  snapPoints,
  onClose,
  onPress,
}) => {
  const user_data = useSelector((store: any) => store.user_data.user_data);
  const navigation: any = useNavigation();
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
          Какому клиенту назначить программу «Любовь к себе»?
        </Text>

        <View style={{ marginTop: 40 }} />

        <ClientBlockForCoach
          onPress={() =>
            navigation.navigate("ClientDetailsPage", {
              data: {
                avatar: user_data.avatar,
                name: user_data.user.username,
                subscription: "Индивидуальный",
                subscriptionDuration: "12",
              },
            })
          }
          url={user_data.avatar}
          name={user_data.user.username}
          progress={"5/6"}
          subscriptionType={"Индивидуальный"}
          subscriptionDuration={"12"}
        />

        <View
          style={{
            marginTop: 46,
          }}
        />
        <CustomButton
          buttonStyles={{ backgroundColor: "#7454CF" }}
          title={"Назначить"}
          onPress={onPress}
        />
        <View
          style={{
            marginTop: 12,
          }}
        />
      </View>
    </BottomSheetComponent>
  );
};
