import React from "react";
import { ClientProgramsView } from "./view";
import { ClientProgramsModel } from "./model";

export const ClientProgramsScreen = ({ route: { params } }: any) => {
  const clientId = params.data.clientID;
  return (
    <ClientProgramsModel.Provider clientId={clientId}>
      <ClientProgramsView />
    </ClientProgramsModel.Provider>
  );
};
