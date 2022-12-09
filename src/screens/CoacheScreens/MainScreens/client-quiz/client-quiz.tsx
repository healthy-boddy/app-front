import React from "react";
import { ClientQuizView } from "./view";
import { ClientResponse } from "../../AuthScreens/CalendarScreen/user-list-screen/interface";
import { ClientQuizModel } from "./model";

export const ClientQuiz = ({ route: { params } }: any) => {
  const client: ClientResponse = params.data.client;
  return (
    <ClientQuizModel.Provider client={client}>
      <ClientQuizView client={params} />
    </ClientQuizModel.Provider>
  );
};
