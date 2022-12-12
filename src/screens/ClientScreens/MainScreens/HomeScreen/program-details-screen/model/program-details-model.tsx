/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from "react";
import { makeAutoObservable, runInAction } from "mobx";
import { observer } from "mobx-react-lite";
import * as stateCreator from "./state-creators";
import { HttpService } from "../../../../../../service/http-service";
import { ConstructorStates } from "./constructor-state";
import { ProgramAssignedToClient } from "../../../../../CoacheScreens/MainScreens/client-programs/interface/interface";
import { UsersStates } from "../../../../../CoacheScreens/MainScreens/client-programs/model/constructor-state";
import * as clientState from "./state-creators";
import { ProgramResponse } from "../../../../../CoacheScreens/AuthScreens/ConstructorScreen/interfaces";
import { TaskResponseArray } from "../../../../../CoacheScreens/MainScreens/client-programs/editing-screen/interface";

export class ProgramDetailsModel {
  private readonly _httpService = new HttpService();
  private _tasks: ConstructorStates = stateCreator.getInitialState();

  private _name = "";
  private _description = "";
  private _goals_quantity: number | null = null;
  private _programDetailForClient: ProgramAssignedToClient | undefined =
    undefined;
  private _programId: number | undefined = undefined;
  private _client: number | undefined = undefined;

  private _successesAssigned = false;

  public get programDetailForClient() {
    return this._programDetailForClient;
  }
  public get client() {
    return this._client;
  }

  public get successesAssigned() {
    return this._successesAssigned;
  }
  public setAssessAssigned(state: boolean) {
    this._successesAssigned = state;
  }

  public get currentProgramId() {
    return this._programId;
  }

  private _users: UsersStates = clientState.getInitialState();

  public get users() {
    return this._users;
  }

  public get name() {
    return this._name;
  }
  public get description() {
    return this._description;
  }

  public get goalsQuantity() {
    return this._goals_quantity;
  }

  public get tasks() {
    return this._tasks;
  }

  public setName(name: string) {
    this._name = name;
  }

  public setDescription(data: string) {
    this._description = data;
  }

  private getProgramById() {
    console.log("this._client", this._client);
    try {
      this._httpService
        .get<Array<ProgramResponse>>(
          `/program/assign/?assigned_to=${this._client}`
        )
        .then((res) => {
          res.data.map((response) => {
            console.log("NAME getProgramById", response);
            runInAction(() => {
              this._name = response?.program_info?.name;
              this._description = response?.program_info?.description;
              this._goals_quantity = response?.program_info?.goals_quantity;
              this._programId = response.id;
            });
          });
        });
    } catch (e: any) {
      alert(e.response.data);
    }
  }

  private getTasks() {
    try {
      this._httpService
        .get<TaskResponseArray>(`program/task/?program=${this._programId}`)
        .then((res) => {
          if (res.data) {
            runInAction(() => {
              this._programId = res.data[0].program;
              this._tasks = stateCreator.getHasDataState(res.data);
            });
          }
        });
    } catch (e: any) {
      alert(e.response.data);
      runInAction(() => {
        this._tasks = stateCreator.getErrorState(e.response.data);
      });
    }
  }

  // private async getUsers() {
  //   try {
  //     await this._httpService
  //       .get<UserArrays>("/user/coach/client/")
  //       .then((res) => {
  //         runInAction(() => {
  //           this._users = clientState.getHasDataState(res.data);
  //         });
  //       });
  //   } catch (e: any) {
  //     console.log("Error getUsers", e.response);
  //   }
  // }

  private constructor(
    private readonly programId: number | undefined,
    private readonly programAssignedToClient:
      | ProgramAssignedToClient
      | undefined,
    public readonly clientID: number | undefined
  ) {
    this._httpService = new HttpService({});
    makeAutoObservable(this, {}, { autoBind: true });
  }

  private static makeModel(
    programId: number | undefined,
    programAssignedToClient?: ProgramAssignedToClient | undefined,
    clientID?: number | undefined
  ) {
    const model = React.useMemo(
      () =>
        new ProgramDetailsModel(programId, programAssignedToClient, clientID),
      []
    );
    useEffect(() => {
      model._programId = programId;
      model._programDetailForClient = programAssignedToClient;
      model._client = clientID;
      model.getProgramById();
      model.getTasks();
    });

    return model;
  }

  private static MedicalCardPageContext =
    React.createContext<ProgramDetailsModel | null>(null);

  public static Provider(
    props: React.PropsWithChildren<{
      programId: number | undefined;
      programAssignedToClient?: ProgramAssignedToClient | undefined;
      clientID?: number | undefined;
    }>
  ) {
    const model = ProgramDetailsModel.makeModel(
      props.programId,
      props.programAssignedToClient,
      props.clientID
    );

    return (
      <ProgramDetailsModel.MedicalCardPageContext.Provider value={model}>
        {props.children}
      </ProgramDetailsModel.MedicalCardPageContext.Provider>
    );
  }

  public static modelClient<P extends object>(
    Component: (props: P & { model: ProgramDetailsModel }) => JSX.Element
  ) {
    const WrappedComponent = observer(Component);
    return function ModelClient(props: P) {
      const model = React.useContext(
        ProgramDetailsModel.MedicalCardPageContext
      );
      if (!model) {
        throw new Error("No model provider");
      }
      return <WrappedComponent {...props} model={model} />;
    };
  }
}
