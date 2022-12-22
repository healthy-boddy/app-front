/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from "react";
import { makeAutoObservable, runInAction } from "mobx";
import { observer } from "mobx-react-lite";
import { HttpService } from "../../../../../../service/http-service";
import { TaskResponse } from "../../../../../CoacheScreens/MainScreens/client-programs/editing-screen/interface";
import { ProgramAssignedToClient } from "../../../../../CoacheScreens/MainScreens/client-programs/interface/interface";

export class TaskDetailModelClientFlow {
  private readonly _httpService = new HttpService();

  private _taskElement: TaskResponse | undefined = undefined;

  private _program: number | undefined = undefined;
  private _client: number | undefined = undefined;

  private _programId: number | undefined = undefined;
  private _programDetailForClient: ProgramAssignedToClient | undefined =
    undefined;

  public get program() {
    return this._program;
  }

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
    private readonly programID: number,
    private readonly clientID: number
  ) {
    this._httpService = new HttpService({});
    makeAutoObservable(this, {}, { autoBind: true });
  }

  private static makeModel(
    taskData: TaskResponse,
    programID: number,
    clientID: number
  ) {
    const model = React.useMemo(
      () => new TaskDetailModelClientFlow(taskData, programID, clientID),
      []
    );
    useEffect(() => {
      runInAction(() => {
        model._taskElement = taskData;
        model._program = programID;
        model._client = clientID;
      });
    });

    return model;
  }

  private static MedicalCardPageContext =
    React.createContext<TaskDetailModelClientFlow | null>(null);

  public static Provider(
    props: React.PropsWithChildren<{
      taskData: TaskResponse;
      programID: number;
      clientID: number;
    }>
  ) {
    const model = TaskDetailModelClientFlow.makeModel(
      props.taskData,
      props.programID,
      props.clientID
    );

    return (
      <TaskDetailModelClientFlow.MedicalCardPageContext.Provider value={model}>
        {props.children}
      </TaskDetailModelClientFlow.MedicalCardPageContext.Provider>
    );
  }

  public static modelClient<P extends object>(
    Component: (props: P & { model: TaskDetailModelClientFlow }) => JSX.Element
  ) {
    const WrappedComponent = observer(Component);
    return function ModelClient(props: P) {
      const model = React.useContext(
        TaskDetailModelClientFlow.MedicalCardPageContext
      );
      if (!model) {
        throw new Error("No model provider");
      }
      return <WrappedComponent {...props} model={model} />;
    };
  }
}
