import React from "react";
import { ClientsProgramsModel } from "./model";
import { ClientsProgramsView } from "./view";

export const ClientProgramsClient = () => {
  // const clientId: number | undefined = route?.params?.clientId;
  return (
    <ClientsProgramsModel.Provider>
      <ClientsProgramsView />
    </ClientsProgramsModel.Provider>
  );
};
