/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from "react";
import { makeAutoObservable, runInAction } from "mobx";
import { observer } from "mobx-react-lite";
import * as stateCreator from "./state-creators";
import { HttpService } from "../../../../../../service/http-service";
import { ConstructorStates } from "./constructor-state";
import { ProgramResponse } from "../../../../AuthScreens/ConstructorScreen/interfaces";
import { UserArrays } from "../../../../AuthScreens/CalendarScreen/user-list-screen/interface";
import { ProgramAssignedToClient } from "../../interface/interface";
import { TaskResponseArray } from "../../../../AuthScreens/ConstructorScreen/program-details-screen/editing-screen/interface";

export class ProgramDetailsClientModel {
  private readonly _httpService = new HttpService();

  private _tasks: ConstructorStates = stateCreator.getInitialState();

  private _programDetailForClient: ProgramAssignedToClient | undefined =
    undefined;
  private _programId: number | undefined = undefined;
  private _clientID: number | undefined = undefined;

  private _name = "";
  private _description = "";
  private _goals_quantity: number | null = null;

  private _tasksComplete: ConstructorStates = stateCreator.getInitialState();

  public get currentProgramId() {
    return this._programId;
  }
  public get client() {
    return this._clientID;
  }

  public get programDetailForClient() {
    return this._programDetailForClient;
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

  public get tasksComplete() {
    return this._tasksComplete;
  }

  private getProgramById() {
    console.log("getProgramById", this._programId);
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

  public deleteAssignedProgram(navigate: () => void) {
    try {
      this._httpService
        .delete(`/program/assign/${this._programDetailForClient}/`)
        .then((res) => {
          if (this._clientID) {
            navigate();
          }
          console.log("res getProgramById", res.status);
        })
        .catch((e) => {
          console.log(e.response);
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
            // this._users = clientState.getHasDataState(res.data);
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
          this.getAvailableClients();
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

  private getCompleteTasks() {
    try {
      this._httpService
        .get<TaskResponseArray>(
          `program/task/complete/?program=${this._programId}`
        )
        .then((res) => {
          console.log("getCompleteTasks res data", res.data);
          if (res.data) {
            runInAction(() => {
              this._tasksComplete = stateCreator.getHasDataState(res.data);
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
      () =>
        new ProgramDetailsClientModel(
          programId,
          programAssignedToClient,
          clientID
        ),
      []
    );
    useEffect(() => {
      model._programId = programId;
      model._programDetailForClient = programAssignedToClient;
      model._clientID = clientID;
      model.getProgramById();
      model.getTasks();
      model.getAvailableClients();
      model.getCompleteTasks();
    });

    return model;
  }

  private static MedicalCardPageContext =
    React.createContext<ProgramDetailsClientModel | null>(null);

  public static Provider(
    props: React.PropsWithChildren<{
      programId: number | undefined;
      programAssignedToClient: ProgramAssignedToClient | undefined;
      clientID: number | undefined;
    }>
  ) {
    const model = ProgramDetailsClientModel.makeModel(
      props.programId,
      props.programAssignedToClient,
      props.clientID
    );

    return (
      <ProgramDetailsClientModel.MedicalCardPageContext.Provider value={model}>
        {props.children}
      </ProgramDetailsClientModel.MedicalCardPageContext.Provider>
    );
  }

  public static modelClient<P extends object>(
    Component: (props: P & { model: ProgramDetailsClientModel }) => JSX.Element
  ) {
    const WrappedComponent = observer(Component);
    return function ModelClient(props: P) {
      const model = React.useContext(
        ProgramDetailsClientModel.MedicalCardPageContext
      );
      if (!model) {
        throw new Error("No model provider");
      }
      return <WrappedComponent {...props} model={model} />;
    };
  }
}
