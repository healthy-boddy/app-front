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

  private _client: ClientResponse | undefined = undefined;

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
    return this._client;
  }
  public setClientsRouteData(clientData: ClientResponse) {
    this._client = clientData;
  }

  public getGlobalGoals() {
    try {
      this._httpService
        .get<GlobalGoalsResArray>(`/global_goal/`)
        .then((res) => {
          runInAction(() => {
            this._globalGoals = stateCreator.getHasDataState(res.data);
          });
        });
    } catch (e: any) {
      console.log("Error:", e.response.data);
    }
  }

  private constructor() {
    this._httpService = new HttpService({});
    makeAutoObservable(this, {}, { autoBind: true });
  }

  private static makeModel() {
    const model = React.useMemo(() => new GoalsModel(), []);
    useEffect(() => {
      model.getGlobalGoals();
    });

    return model;
  }

  private static MedicalCardPageContext =
    React.createContext<GoalsModel | null>(null);

  public static Provider(props: React.PropsWithChildren<{}>) {
    const model = GoalsModel.makeModel();

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
