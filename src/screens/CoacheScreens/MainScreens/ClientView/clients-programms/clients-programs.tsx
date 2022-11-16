import React from "react";
import { useNavigation } from "@react-navigation/native";
import { WrapperWithTitlePage } from "../../../../../components/core/wrapper/wrapper-with-title";
import { ClientsEmptyProgramms } from "../../../icon/clients-empty-programms";
import { Text } from "react-native";

export const ClientsPrograms = () => {
  const navigation: any = useNavigation();
  return (
    <WrapperWithTitlePage
      title={"Программы"}
      onPressBack={() => navigation.navigate("CalendarPage")}
      onPressButton={() => navigation.navigate("CreateProgramsPage")}
      buttonTitle={"Назначить программу"}
    >
      <ClientsEmptyProgramms />
      <Text
        style={{
          textAlign: "center",
          fontSize: 19,
          lineHeight: 22.67,
          fontWeight: "600",
          color: "#1E1E1E",
        }}
      >
        У этого клиента еще нет ни одной Программы
      </Text>
    </WrapperWithTitlePage>
  );
};
