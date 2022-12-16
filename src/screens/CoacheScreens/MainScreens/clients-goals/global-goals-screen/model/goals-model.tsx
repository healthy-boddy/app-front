/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from "react";
import { makeAutoObservable, runInAction } from "mobx";
import { observer } from "mobx-react-lite";
import * as stateCreator from "./state-creators";
import { ConstructorState } from "./constructor-state";
import { HttpService } from "../../../../../../service/http-service";
import { GlobalGoalsResArray } from "../../global-goasl-editing-screen/interface/interface";
import { ClientResponse } from "../../../../AuthScreens/CalendarScreen/user-list-screen/interface";

export class GoalsModel {
  private readonly _httpService = new HttpService();

  private _globalGoals: ConstructorState = stateCreator.getInitialState();

  private _clientData: ClientResponse | undefined = undefined;

  private _successesAssigned = false;

  public get successesAssigned() {
    return this._successesAssigned;
  }
  public setAssessAssigned(state: boolean) {
    this._successesAssigned = state;
  }

  public get globalGoals() {
    return this._globalGoals;
  }

  public get clientsRouteData() {
    return this._clientData;
  }
  public setClientsRouteData(clientData: ClientResponse) {
    this._clientData = clientData;
  }

  public getGlobalGoals() {
    try {
      this._httpService
        .get<GlobalGoalsResArray>(
          `/global_goal/?client=${this._clientData?.user.id}`
        )
        .then((res) => {
          runInAction(() => {
            this._globalGoals = stateCreator.getHasDataState(res.data);
          });
        });
    } catch (e: any) {
      console.log("Error:", e.response.data);
    }
  }

  private constructor(private readonly client: ClientResponse) {
    this._httpService = new HttpService({});
    makeAutoObservable(this, {}, { autoBind: true });
  }

  private static makeModel(client: ClientResponse) {
    const model = React.useMemo(() => new GoalsModel(client), []);
    useEffect(() => {
      model._clientData = client;
      model.getGlobalGoals();
    });

    return model;
  }

  private static MedicalCardPageContext =
    React.createContext<GoalsModel | null>(null);

  public static Provider(
    props: React.PropsWithChildren<{
      client: ClientResponse;
    }>
  ) {
    const model = GoalsModel.makeModel(props.client);

    return (
      <GoalsModel.MedicalCardPageContext.Provider value={model}>
        {props.children}
      </GoalsModel.MedicalCardPageContext.Provider>
    );
  }

  public static modelClient<P extends object>(
    Component: (props: P & { model: GoalsModel }) => JSX.Element
  ) {
    const WrappedComponent = observer(Component);
    return function ModelClient(props: P) {
      const model = React.useContext(GoalsModel.MedicalCardPageContext);
      if (!model) {
        throw new Error("No model provider");
      }
      return <WrappedComponent {...props} model={model} />;
    };
  }
}
