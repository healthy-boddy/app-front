/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from "react";
import { makeAutoObservable, runInAction } from "mobx";
import { observer } from "mobx-react-lite";
import * as stateCreator from "./state-creators";
import { ConstructorState } from "./constructor-state";
import { HttpService } from "../../../../../../service/http-service";
import { GlobalGoalsResArray } from "../../../../../CoacheScreens/AuthScreens/ConstructorScreen/goasl-editing-screen/interface/interface";

export class GoalsDetailsClientModel {
  private readonly _httpService = new HttpService();

  private _goals: ConstructorState = stateCreator.getInitialState();

  private _program: number | null = null;

  private _clientId: number | undefined = undefined;

  public get goals() {
    return this._goals;
  }

  public get program() {
    return this._program;
  }

  public setProgram(programId: number) {
    this._program = programId;
  }

  public getGoals() {
    try {
      this._httpService
        .get<GlobalGoalsResArray>(`/global_goal/?client=${this._clientId}`)
        .then((res) => {
          runInAction(() => {
            this._goals = stateCreator.getHasDataState(res.data);
          });
        });
    } catch (e: any) {
      console.log("Error:", e.response.data);
    }
  }

  private constructor(private readonly clientID: number | undefined) {
    this._httpService = new HttpService({});
    makeAutoObservable(this, {}, { autoBind: true });
  }

  private static makeModel(clientID: number | undefined) {
    const model = React.useMemo(
      () => new GoalsDetailsClientModel(clientID),
      []
    );
    useEffect(() => {
      model._clientId = clientID;
      model.getGoals();
    });
    return model;
  }

  private static MedicalCardPageContext =
    React.createContext<GoalsDetailsClientModel | null>(null);

  public static Provider(
    props: React.PropsWithChildren<{
      clientID: number | undefined;
    }>
  ) {
    const model = GoalsDetailsClientModel.makeModel(props.clientID);

    return (
      <GoalsDetailsClientModel.MedicalCardPageContext.Provider value={model}>
        {props.children}
      </GoalsDetailsClientModel.MedicalCardPageContext.Provider>
    );
  }

  public static modelClient<P extends object>(
    Component: (props: P & { model: GoalsDetailsClientModel }) => JSX.Element
  ) {
    const WrappedComponent = observer(Component);
    return function ModelClient(props: P) {
      const model = React.useContext(
        GoalsDetailsClientModel.MedicalCardPageContext
      );
      if (!model) {
        throw new Error("No model provider");
      }
      return <WrappedComponent {...props} model={model} />;
    };
  }
}
