import React from "react";
import { ClientConditionView } from "./view";
import { ClientConditionModel } from "./model";

export const ClientCondition = ({ route: { params } }: any) => {
  const clientId: number | undefined = params?.clientId;
  return (
    <ClientConditionModel.Provider clientId={clientId}>
      <ClientConditionView />
    </ClientConditionModel.Provider>
  );
};
