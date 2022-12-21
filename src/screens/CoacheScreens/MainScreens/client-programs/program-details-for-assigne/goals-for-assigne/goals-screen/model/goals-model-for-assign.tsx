/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from "react";
import { makeAutoObservable, runInAction } from "mobx";
import { observer } from "mobx-react-lite";
import * as stateCreator from "./state-creators";
import { ConstructorState } from "./constructor-state";
import { GoalsResArray } from "../../goasl-editing-screen/interface/interface";
import { HttpService } from "../../../../../../../../service/http-service";

export class GoalsModelForAssign {
  private readonly _httpService = new HttpService();

  private _goals: ConstructorState = stateCreator.getInitialState();

  private _program: number | null = null;
  private _client: number | undefined = undefined;

  public get goals() {
    return this._goals;
  }

  public get client() {
    return this._client;
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
        .get<GoalsResArray>(`/program/goal/?program=${this._program}`)
        .then((res) => {
          console.log("getGoals assign res", res.status, res.data.length);
          runInAction(() => {
            this._goals = stateCreator.getHasDataState(res.data);
          });
        });
    } catch (e: any) {
      console.log("Error:", e.response.data);
    }
  }

  private constructor(
    private readonly programId: number,
    private readonly clientID: number
  ) {
    this._httpService = new HttpService({});
    makeAutoObservable(this, {}, { autoBind: true });
  }

  private static makeModel(programId: number, clientID: number) {
    const model = React.useMemo(
      () => new GoalsModelForAssign(programId, clientID),
      []
    );
    useEffect(() => {
      model._program = programId;
      model._client = clientID;
      model.getGoals();
    });

    useEffect(() => {
      model.getGoals();
    });

    return model;
  }

  private static MedicalCardPageContext =
    React.createContext<GoalsModelForAssign | null>(null);

  public static Provider(
    props: React.PropsWithChildren<{
      programId: number;
      clientID: number;
    }>
  ) {
    const model = GoalsModelForAssign.makeModel(
      props.programId,
      props.clientID
    );

    return (
      <GoalsModelForAssign.MedicalCardPageContext.Provider value={model}>
        {props.children}
      </GoalsModelForAssign.MedicalCardPageContext.Provider>
    );
  }

  public static modelClient<P extends object>(
    Component: (props: P & { model: GoalsModelForAssign }) => JSX.Element
  ) {
    const WrappedComponent = observer(Component);
    return function ModelClient(props: P) {
      const model = React.useContext(
        GoalsModelForAssign.MedicalCardPageContext
      );
      if (!model) {
        throw new Error("No model provider");
      }
      return <WrappedComponent {...props} model={model} />;
    };
  }
}
