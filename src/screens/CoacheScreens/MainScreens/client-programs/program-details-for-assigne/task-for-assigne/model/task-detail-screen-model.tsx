/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from "react";
import { makeAutoObservable, runInAction } from "mobx";
import { observer } from "mobx-react-lite";
import { HttpService } from "../../../../../../../service/http-service";
import { TaskResponse } from "../../../editing-screen/interface";
import { ProgramAssignedToClient } from "../../../interface/interface";

export class TaskDetailForAssignModel {
  private readonly _httpService = new HttpService();

  private _taskElement: TaskResponse | undefined = undefined;

  private _programId: number | undefined = undefined;
  private _client: number | undefined = undefined;
  private _programDetailForClient: ProgramAssignedToClient | undefined =
    undefined;

  public get currentProgramId() {
    return this._programId;
  }
  public get client() {
    return this._client;
  }

  public get programDetailForClient() {
    return this._programDetailForClient;
  }

  public completeTask() {
    const dataArray = {
      task: this._taskElement?.id,
      client: this._client,
    };
    console.log("dataArray", dataArray);
    try {
      this._httpService
        .post("program/task/complete/", {
          data: dataArray,
        })
        .then((res) => {
          console.log("RES completeTask", res.status);
        })
        .catch((error) => console.log("ERROR", error.response.data));
    } catch (e: any) {
      console.log(e.response);
    }
  }

  private constructor(
    private readonly taskData: TaskResponse,
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
    taskData: TaskResponse,
    programId: number | undefined,
    programAssignedToClient: ProgramAssignedToClient | undefined,
    clientID: number | undefined
  ) {
    const model = React.useMemo(
      () =>
        new TaskDetailForAssignModel(
          taskData,
          programId,
          programAssignedToClient,
          clientID
        ),
      []
    );
    useEffect(() => {
      runInAction(() => {
        model._taskElement = taskData;
        model._programId = programId;
        model._programDetailForClient = programAssignedToClient;
        model._client = clientID;
      });
    });

    return model;
  }

  private static MedicalCardPageContext =
    React.createContext<TaskDetailForAssignModel | null>(null);

  public static Provider(
    props: React.PropsWithChildren<{
      taskData: TaskResponse;
      programId: number | undefined;
      programAssignedToClient: ProgramAssignedToClient | undefined;
      clientID: number | undefined;
    }>
  ) {
    const model = TaskDetailForAssignModel.makeModel(
      props.taskData,
      props.programId,
      props.programAssignedToClient,
      props.clientID
    );

    return (
      <TaskDetailForAssignModel.MedicalCardPageContext.Provider value={model}>
        {props.children}
      </TaskDetailForAssignModel.MedicalCardPageContext.Provider>
    );
  }

  public static modelClient<P extends object>(
    Component: (props: P & { model: TaskDetailForAssignModel }) => JSX.Element
  ) {
    const WrappedComponent = observer(Component);
    return function ModelClient(props: P) {
      const model = React.useContext(
        TaskDetailForAssignModel.MedicalCardPageContext
      );
      if (!model) {
        throw new Error("No model provider");
      }
      return <WrappedComponent {...props} model={model} />;
    };
  }
}
