import React from "react";
import { ClientQuizView } from "./view";
import { ClientQuizDetailsModel } from "./model";
import { ClientResponse } from "../../../AuthScreens/CalendarScreen/user-list-screen/interface";
import { Quiz } from "../interface";

export const ClientQuizDetails = ({ route: { params } }: any) => {
  const client: ClientResponse = params.data.client;
  const quiz: Quiz = params.data.quiz;
  return (
    <ClientQuizDetailsModel.Provider client={client} quiz={quiz}>
      <ClientQuizView client={params} />
    </ClientQuizDetailsModel.Provider>
  );
};
