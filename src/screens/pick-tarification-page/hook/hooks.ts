import { useMemo, useState } from "react";
import { Tariff } from "../tariff-page";

export const usePickTariff = () => {
  const [isActiveTariff, setIsActiveTariff] = useState({
    tariff_one: Tariff.Initial,
    tariff_two: Tariff.Initial,
    tariff_three: Tariff.Initial,
    tariff_four: Tariff.Initial,
  });

  const handlePressOne = () => {
    setIsActiveTariff({
      ...isActiveTariff,
      tariff_one: Tariff.Tariff_one,
      tariff_two: Tariff.Initial,
      tariff_three: Tariff.Initial,
      tariff_four: Tariff.Initial,
    });
  };

  const handlePressTwo = () => {
    setIsActiveTariff({
      ...isActiveTariff,
      tariff_one: Tariff.Initial,
      tariff_two: Tariff.Tariff_two,
      tariff_three: Tariff.Initial,
      tariff_four: Tariff.Initial,
    });
  };

  const handlePressThree = () => {
    setIsActiveTariff({
      ...isActiveTariff,
      tariff_one: Tariff.Initial,
      tariff_two: Tariff.Initial,
      tariff_three: Tariff.Tariff_three,
      tariff_four: Tariff.Initial,
    });
  };

  const handlePressFour = () => {
    setIsActiveTariff({
      ...isActiveTariff,
      tariff_one: Tariff.Initial,
      tariff_two: Tariff.Initial,
      tariff_three: Tariff.Initial,
      tariff_four: Tariff.Tariff_four,
    });
  };

  return useMemo(
    () => ({
      handlePressOne: handlePressOne,
      handlePressTwo: handlePressTwo,
      handlePressThree: handlePressThree,
      handlePressFour: handlePressFour,
      isActiveTariff,
    }),
    [
      isActiveTariff,
      handlePressFour,
      handlePressThree,
      handlePressOne,
      handlePressTwo,
    ]
  );
};
