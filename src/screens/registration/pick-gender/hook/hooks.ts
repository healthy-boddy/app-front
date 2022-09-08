import { useMemo, useState } from "react";
import { Gender } from "../pick-gender";

export const usePickGender = () => {
  const [isActive, setIsActive] = useState({
    man: Gender.Initial,
    woman: Gender.Initial,
  });

  const handlePressMale = () => {
    setIsActive({
      ...isActive,
      man: Gender.Man,
      woman: Gender.Initial,
    });
  };

  const handlePressFemale = () => {
    setIsActive({
      ...isActive,
      man: Gender.Initial,
      woman: Gender.Woman,
    });
  };

  return useMemo(
    () => ({
      handlePressFemale: handlePressFemale,
      handlePressMale: handlePressMale,
      isActive,
    }),
    [handlePressFemale, handlePressMale, isActive]
  );
};
