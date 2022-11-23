import React from "react";
import { ConstructorScreenView } from "./view";
import { ConstructorScreenModel } from "./model";

export const ConstructorScreen = () => {
  return (
    <ConstructorScreenModel.Provider>
      <ConstructorScreenView />
    </ConstructorScreenModel.Provider>
  );
};
