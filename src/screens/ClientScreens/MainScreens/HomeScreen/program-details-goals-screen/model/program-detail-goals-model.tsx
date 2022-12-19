/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from "react";
import { makeAutoObservable, runInAction } from "mobx";
import { observer } from "mobx-react-lite";
import * as stateCreator from "./state-creators";
import { ConstructorState } from "./constructor-state";
import { HttpService } from "../../../../../../service/http-service";
import { GoalsResArray } from "../../../../../CoacheScreens/AuthScreens/ConstructorScreen/goasl-editing-screen/interface/interface";

export class ProgramDetailGoalsModel {
  private readonly _httpService = new HttpService();

  private _goals: ConstructorState = stateCreator.getInitialState();

  private _program: number | null = null;

  private _clientID: number | undefined = undefined;

  public get goals() {
    return this._goals;
  }

  public get program() {
    return this._program;
  }

  public get clientId() {
    return this._clientID;
  }

  public setProgram(programId: number) {
    this._program = programId;
  }

  public getGoals() {
    try {
      this._httpService
        .get<GoalsResArray>(`/program/goal/?program=${this._program}`)
        .then((res) => {
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
      () => new ProgramDetailGoalsModel(programId, clientID),
      []
    );
    useEffect(() => {
      model._program = programId;
      model._clientID = clientID;
      model.getGoals();
    });

    useEffect(() => {
      model.getGoals();
    });

    return model;
  }

  private static MedicalCardPageContext =
    React.createContext<ProgramDetailGoalsModel | null>(null);

  public static Provider(
    props: React.PropsWithChildren<{
      programId: number;
      clientID: number;
    }>
  ) {
    const model = ProgramDetailGoalsModel.makeModel(
      props.programId,
      props.clientID
    );

    return (
      <ProgramDetailGoalsModel.MedicalCardPageContext.Provider value={model}>
        {props.children}
      </ProgramDetailGoalsModel.MedicalCardPageContext.Provider>
    );
  }

  public static modelClient<P extends object>(
    Component: (props: P & { model: ProgramDetailGoalsModel }) => JSX.Element
  ) {
    const WrappedComponent = observer(Component);
    return function ModelClient(props: P) {
      const model = React.useContext(
        ProgramDetailGoalsModel.MedicalCardPageContext
      );
      if (!model) {
        throw new Error("No model provider");
      }
      return <WrappedComponent {...props} model={model} />;
    };
  }
}
