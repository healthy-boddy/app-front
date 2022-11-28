import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Text } from "react-native";
import { ClientsEmptyPrograms } from "../../icon/clients-empty-programms";
import { WrapperWithTitlePage } from "../../../../components/core/wrapper/wrapper-with-title";

export const ClientsPrograms = () => {
  const navigation: any = useNavigation();
  return (
    <WrapperWithTitlePage
      title={"Программы"}
      onPressBack={() => navigation.navigate("CalendarPage")}
      onPressButton={() => navigation.navigate("ConstructorScreen")}
      buttonTitle={"Назначить программу"}
    >
      <ClientsEmptyPrograms />
      <Text
        style={{
          textAlign: "center",
          fontSize: 19,
          lineHeight: 22.67,
          fontWeight: "600",
          color: "#1E1E1E",
        }}
      >
        У этого клиента еще нет ни одной Прокграммы
      </Text>
    </WrapperWithTitlePage>
  );
};
