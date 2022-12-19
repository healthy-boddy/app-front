import React from "react";
import { GoalsDetailsClientModel } from "./model";
import { GoalsView } from "./view";

export const GoalsClientDetails = ({ route: { params } }: any) => {
  const clientID = params.clientID;
  return (
    <GoalsDetailsClientModel.Provider clientID={clientID}>
      <GoalsView />
    </GoalsDetailsClientModel.Provider>
  );
};
