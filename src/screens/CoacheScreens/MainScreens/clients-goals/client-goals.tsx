import React from "react";
import { ClientGoalsView } from "./view";
import { GoalsModel } from "./global-goals-screen/model";
import { ClientResponse } from "../../AuthScreens/CalendarScreen/user-list-screen/interface";

export const ClientGoals = ({ route: { params } }: any) => {
  const client: ClientResponse = params.data.client;
  return (
    <GoalsModel.Provider client={client}>
      <ClientGoalsView />
    </GoalsModel.Provider>
  );
};
