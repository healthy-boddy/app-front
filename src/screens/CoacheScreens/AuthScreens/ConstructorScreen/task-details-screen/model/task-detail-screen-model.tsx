/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from "react";
import { makeAutoObservable, runInAction } from "mobx";
import { observer } from "mobx-react-lite";
import * as stateCreator from "./state-creators";
import { ConstructorCardState } from "./constructor-state";
import { HttpService } from "../../../../../../service/http-service";
import { TaskResponse } from "../../program-details-screen/editing-screen/interface";

export class TaskDetailModel {
  private readonly _httpService = new HttpService();

  private _taskElement: TaskResponse | undefined = undefined;

  private _program: number | undefined = undefined;

  public get program() {
    return this._program;
  }

  private constructor(
    private readonly taskData: TaskResponse,
    private readonly programID: number
  ) {
    this._httpService = new HttpService({});
    makeAutoObservable(this, {}, { autoBind: true });
  }

  private static makeModel(taskData: TaskResponse, programID: number) {
    const model = React.useMemo(
      () => new TaskDetailModel(taskData, programID),
      []
    );
    useEffect(() => {
      model._taskElement = taskData;
      model._program = programID;
    });

    return model;
  }

  private static MedicalCardPageContext =
    React.createContext<TaskDetailModel | null>(null);

  public static Provider(
    props: React.PropsWithChildren<{
      taskData: TaskResponse;
      programID: number;
    }>
  ) {
    const model = TaskDetailModel.makeModel(props.taskData, props.programID);

    return (
      <TaskDetailModel.MedicalCardPageContext.Provider value={model}>
        {props.children}
      </TaskDetailModel.MedicalCardPageContext.Provider>
    );
  }

  public static modelClient<P extends object>(
    Component: (props: P & { model: TaskDetailModel }) => JSX.Element
  ) {
    const WrappedComponent = observer(Component);
    return function ModelClient(props: P) {
      const model = React.useContext(TaskDetailModel.MedicalCardPageContext);
      if (!model) {
        throw new Error("No model provider");
      }
      return <WrappedComponent {...props} model={model} />;
    };
  }
}
