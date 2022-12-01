import React from "react";
import { UserListModel } from "./model";
import { CalendarScreen } from "../index";

export const UserList = ({ route }: any) => {
  const programId: number | undefined = route?.params?.programId;
  return (
    <UserListModel.Provider programId={programId}>
      <CalendarScreen />
    </UserListModel.Provider>
  );
};
