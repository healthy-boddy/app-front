import React from "react";
import { ClientGoalsView } from "./view";
import { GoalsModel } from "./global-goals-screen/model";
import { ClientResponse } from "../../AuthScreens/CalendarScreen/user-list-screen/interface";

export const ClientGoals = ({ route: { params } }: any) => {
  const client: ClientResponse = params.data.client;
  console.log("client", client);
  return (
    <GoalsModel.Provider>
      <ClientGoalsView client={client} />
    </GoalsModel.Provider>
  );
};
