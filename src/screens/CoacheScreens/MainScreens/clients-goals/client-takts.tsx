import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Text } from "react-native";
import { WrapperWithTitlePage } from "../../../../components/core/wrapper/wrapper-with-title";
import { ClientsEmptyTarget } from "../../icon/clients-empty-target";

export const ClientsTasks = () => {
  const navigation: any = useNavigation();
  return (
    <WrapperWithTitlePage
      title={"Цели"}
      onPressBack={() => navigation.navigate("CalendarPage")}
      onPressButton={() => navigation.navigate("ClientGoalsDetailsPage")}
      buttonTitle={"Поставить цели"}
    >
      <ClientsEmptyTarget />
      <Text
        style={{
          textAlign: "center",
          fontSize: 19,
          lineHeight: 22.67,
          fontWeight: "600",
          color: "#1E1E1E",
        }}
      >
        У этого клиента еще нет ни одной цели
      </Text>
    </WrapperWithTitlePage>
  );
};
