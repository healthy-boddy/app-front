/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from "react";
import { makeAutoObservable, runInAction } from "mobx";
import { observer } from "mobx-react-lite";
import { HttpService } from "../../../../../service/http-service";
import * as stateCreator from "./state-creators";
import { UsersStates } from "./constructor-state";
import { ConditionsStateArray } from "../interface";

export class ClientConditionModel {
  private readonly _httpService = new HttpService();

  private _client: number | null | undefined = null;

  private _clientConditionState: UsersStates = stateCreator.getInitialState();

  public get clientCondition() {
    return this._clientConditionState;
  }

  public get clientId() {
    return this._client;
  }

  public getProgramAssignedById() {
    console.log("getProgramAssignedById", this._client);
    try {
      this._httpService
        .get<ConditionsStateArray>(`/user/condition/?client=${this._client}`)
        .then((res) => {
          runInAction(() => {
            console.log("RES DATA getProgramAssignedById", res.data);
            this._clientConditionState = stateCreator.getHasDataState(res.data);
          });
        });
    } catch (e) {
      console.log(e);
    }
  }

  private constructor(private readonly programId: number | undefined) {
    this._httpService = new HttpService({});
    makeAutoObservable(this, {}, { autoBind: true });
  }

  private static makeModel(clientId: number | undefined) {
    const model = React.useMemo(() => new ClientConditionModel(clientId), []);
    useEffect(() => {
      runInAction(() => {
        model._client = clientId;
        model.getProgramAssignedById();
      });
    });

    return model;
  }

  private static MedicalCardPageContext =
    React.createContext<ClientConditionModel | null>(null);

  public static Provider(
    props: React.PropsWithChildren<{
      clientId: number | undefined;
    }>
  ) {
    const model = ClientConditionModel.makeModel(props.clientId);

    return (
      <ClientConditionModel.MedicalCardPageContext.Provider value={model}>
        {props.children}
      </ClientConditionModel.MedicalCardPageContext.Provider>
    );
  }

  public static modelClient<P extends object>(
    Component: (props: P & { model: ClientConditionModel }) => JSX.Element
  ) {
    const WrappedComponent = observer(Component);
    return function ModelClient(props: P) {
      const model = React.useContext(
        ClientConditionModel.MedicalCardPageContext
      );
      if (!model) {
        throw new Error("No model provider");
      }
      return <WrappedComponent {...props} model={model} />;
    };
  }
}
