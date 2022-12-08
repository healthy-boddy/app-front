/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from "react";
import { makeAutoObservable, runInAction } from "mobx";
import { observer } from "mobx-react-lite";
import * as stateCreator from "./state-creators";
import { ConstructorState } from "./constructor-state";
import { GoalsResArray } from "../../goasl-editing-screen/interface/interface";
import { HttpService } from "../../../../../../../service/http-service";
import { ProgramAssignedToClient } from "../../../interface/interface";

export class GoalsModelClient {
  private readonly _httpService = new HttpService();

  private _goals: ConstructorState = stateCreator.getInitialState();

  private _program: number | null = null;

  private _programDetailForClient: ProgramAssignedToClient | undefined =
    undefined;
  private _programId: number | undefined = undefined;
  private _client: number | undefined = undefined;

  public get currentProgramId() {
    return this._programId;
  }
  public get client() {
    return this._client;
  }

  public get programDetailForClient() {
    return this._programDetailForClient;
  }

  public get goals() {
    return this._goals;
  }

  public get program() {
    return this._program;
  }

  public setProgram(programIdData: number) {
    this._program = programIdData;
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
    private readonly programId: number | undefined,
    private readonly programAssignedToClient:
      | ProgramAssignedToClient
      | undefined,
    private readonly clientID: number | undefined
  ) {
    this._httpService = new HttpService({});
    makeAutoObservable(this, {}, { autoBind: true });
  }

  private static makeModel(
    programId: number | undefined,
    programAssignedToClient: ProgramAssignedToClient | undefined,
    clientID: number | undefined
  ) {
    const model = React.useMemo(
      () => new GoalsModelClient(programId, programAssignedToClient, clientID),
      []
    );
    useEffect(() => {
      model._programId = programId;
      model._programDetailForClient = programAssignedToClient;
      model._client = clientID;
      model.getGoals();
    }, []);

    useEffect(() => {
      model.getGoals();
    });

    return model;
  }

  private static MedicalCardPageContext =
    React.createContext<GoalsModelClient | null>(null);

  public static Provider(
    props: React.PropsWithChildren<{
      programId: number | undefined;
      programAssignedToClient: ProgramAssignedToClient | undefined;
      clientID: number | undefined;
    }>
  ) {
    const model = GoalsModelClient.makeModel(
      props.programId,
      props.programAssignedToClient,
      props.clientID
    );

    return (
      <GoalsModelClient.MedicalCardPageContext.Provider value={model}>
        {props.children}
      </GoalsModelClient.MedicalCardPageContext.Provider>
    );
  }

  public static modelClient<P extends object>(
    Component: (props: P & { model: GoalsModelClient }) => JSX.Element
  ) {
    const WrappedComponent = observer(Component);
    return function ModelClient(props: P) {
      const model = React.useContext(GoalsModelClient.MedicalCardPageContext);
      if (!model) {
        throw new Error("No model provider");
      }
      return <WrappedComponent {...props} model={model} />;
    };
  }
}
