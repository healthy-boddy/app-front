import React, { FC, ReactNode } from "react";
import { Header } from "../header/header";
import { SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";

interface ComponentHeaderWrapperInterface {
  children: ReactNode;
}

export const ComponentHeaderWrapper: FC<ComponentHeaderWrapperInterface> = ({
  children,
}) => {
  const navigation = useNavigation();
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "flex-start",
      }}
    >
      <Header onPress={() => navigation.goBack()} />

      {children}
    </SafeAreaView>
  );
};
