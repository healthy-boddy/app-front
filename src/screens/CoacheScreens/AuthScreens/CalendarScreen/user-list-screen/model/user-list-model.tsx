/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from "react";
import { makeAutoObservable, runInAction } from "mobx";
import { observer } from "mobx-react-lite";
import { HttpService } from "../../../../../../service/http-service";
import { UserArrays } from "../interface";
import { UsersStates } from "./constructor-state";
import * as stateCreator from "./state-creators";

export class UserListModel {
  private readonly _httpService = new HttpService();

  private _users: UsersStates = stateCreator.getInitialState();

  public get users() {
    return this._users;
  }

  public async getUsers() {
    try {
      await this._httpService
        .get<UserArrays>("/user/coach/client/")
        .then((res) => {
          runInAction(() => {
            this._users = stateCreator.getHasDataState(res.data);
          });
        });
    } catch (e: any) {
      console.log("Error getUsers", e.response);
    }
  }

  private constructor(private readonly programId: number | undefined) {
    this._httpService = new HttpService({});
    makeAutoObservable(this, {}, { autoBind: true });
  }

  private static makeModel(programId: number | undefined) {
    const model = React.useMemo(() => new UserListModel(programId), []);
    useEffect(() => {
      model.getUsers();
    });

    return model;
  }

  private static MedicalCardPageContext =
    React.createContext<UserListModel | null>(null);

  public static Provider(
    props: React.PropsWithChildren<{
      programId: number | undefined;
    }>
  ) {
    const model = UserListModel.makeModel(props.programId);

    return (
      <UserListModel.MedicalCardPageContext.Provider value={model}>
        {props.children}
      </UserListModel.MedicalCardPageContext.Provider>
    );
  }

  public static modelClient<P extends object>(
    Component: (props: P & { model: UserListModel }) => JSX.Element
  ) {
    const WrappedComponent = observer(Component);
    return function ModelClient(props: P) {
      const model = React.useContext(UserListModel.MedicalCardPageContext);
      if (!model) {
        throw new Error("No model provider");
      }
      return <WrappedComponent {...props} model={model} />;
    };
  }
}
