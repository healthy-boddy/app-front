import React from "react";
import { ClientsProgramsModel } from "./model";
import { ClientsProgramsView } from "./view";

export const ClientProgramsClient = ({ route: { params } }: any) => {
  const clientId: number | undefined = params?.clientId;
  return (
    <ClientsProgramsModel.Provider clientId={clientId}>
      <ClientsProgramsView />
    </ClientsProgramsModel.Provider>
  );
};
