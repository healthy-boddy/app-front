import React from "react";
import { GlobalGoalsEditingModel } from "./model";
import { GoalsEditingView } from "./view";
import { ClientResponse } from "../../../AuthScreens/CalendarScreen/user-list-screen/interface";

export const GlobalGoalsEditing = ({ route: { params } }: any) => {
  console.log("GlobalGoalsEditing", params);
  const client: ClientResponse = params.data.client;
  return (
    <GlobalGoalsEditingModel.Provider client={client}>
      <GoalsEditingView />
    </GlobalGoalsEditingModel.Provider>
  );
};
