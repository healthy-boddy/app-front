import React, { FC, useEffect } from "react";
import { Text, TouchableOpacity } from "react-native";
import { Tariff } from "./tarif-page";

interface TariffBlockInterface {
  title: string;
  isActiveTariff?: Tariff;
  onPress: () => void;
}

export const TariffBlock: FC<TariffBlockInterface> = ({
  title,
  isActiveTariff,
  onPress,
}) => {
  useEffect(() => {
    console.log("tariff11", isActiveTariff);
  }, [isActiveTariff]);
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        {
          width: "100%",
          height: "auto",
          borderRadius: 24,
          borderWidth: 2,
          borderColor: "#E9E9E9",
          alignItems: "center",
          justifyContent: "center",
          paddingHorizontal: 25,
          paddingVertical: 68,
        },
        isActiveTariff === Tariff.Tariff_one && { borderColor: "#7454CF" },
        isActiveTariff === Tariff.Tariff_two && { borderColor: "#7454CF" },
        isActiveTariff === Tariff.Tariff_three && { borderColor: "#7454CF" },
        isActiveTariff === Tariff.Tariff_four && { borderColor: "#7454CF" },
      ]}
    >
      <Text
        style={[
          {
            fontWeight: "600",
            lineHeight: 19,
            fontSize: 16,
            textAlign: "center",
            color: "#BCBCBD",
          },
          isActiveTariff === Tariff.Tariff_one && { color: "#000000" },
          isActiveTariff === Tariff.Tariff_two && { color: "#000000" },
          isActiveTariff === Tariff.Tariff_three && { color: "#000000" },
          isActiveTariff === Tariff.Tariff_four && { color: "#000000" },
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};
