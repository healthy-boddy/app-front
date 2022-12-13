/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from "react";
import { makeAutoObservable, runInAction } from "mobx";
import { observer } from "mobx-react-lite";
import * as stateCreator from "./state-creators";
import { HttpService } from "../../../../../../service/http-service";
import { ProgramResponse } from "../../interfaces";
import { TaskResponseArray } from "../editing-screen/interface";
import { ConstructorStates } from "./constructor-state";
import { UserArrays } from "../../../CalendarScreen/user-list-screen/interface";
import { UsersStates } from "../../../CalendarScreen/user-list-screen/model/constructor-state";
import * as clientState from "../../../CalendarScreen/user-list-screen/model/state-creators";
import { ProgramAssignedToClient } from "../../../../MainScreens/client-programs/interface/interface";

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
    try {
      this._httpService
        .get<ProgramResponse>(`/program/${this._programId}/`)
        .then((res) => {
          console.log("res getProgramById", res.data);
          if (res.data) {
            runInAction(() => {
              this._name = res.data.name;
              this._description = res.data.description;
              this._goals_quantity = res.data.goals_quantity;
              this._programId = res.data.id;
            });
          }
        });
    } catch (e: any) {
      alert(e.response.data);
    }
  }

  private getAvailableClients() {
    try {
      this._httpService
        .get<UserArrays>(`/program/${this._programId}/available_clients/`)
        .then((res) => {
          runInAction(() => {
            this._users = clientState.getHasDataState(res.data);
          });
        });
    } catch (e: any) {
      alert(e.response.data);
    }
  }

  public assignProgramToClientById(clientId: number) {
    const data = {
      assigned_to: clientId,
      program: this._programId,
    };
    try {
      this._httpService
        .post<{ assigned_to: number; program: number }>("/program/assign/", {
          data,
        })
        .then((res) => {
          runInAction(() => {
            this.getAvailableClients();
            this.setAssessAssigned(true);
          });
        })
        .catch((err) => {
          console.log("Err", err.response);
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
          console.log("getTasks program page", res.data);
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
    private readonly clientID: number | undefined
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
      model.getAvailableClients();
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
