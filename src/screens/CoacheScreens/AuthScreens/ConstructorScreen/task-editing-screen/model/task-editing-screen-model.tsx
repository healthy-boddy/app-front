/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from "react";
import { makeAutoObservable, runInAction } from "mobx";
import { observer } from "mobx-react-lite";
import * as stateCreator from "./state-creators";
import { ConstructorCardState } from "./constructor-state";
import { HttpService } from "../../../../../../service/http-service";

export class TaskEditingModel {
  private readonly _httpService = new HttpService();

  private _taskId: number | undefined = undefined;

  // private getTask() {
  //   try {
  //     this._httpService.get("/program/").then((res) => {
  //       console.log("res getPrograms", res.data);
  //
  //       if (res.data) {
  //         runInAction(() => {
  //           this._programs = stateCreator.getHasDataState(res.data);
  //         });
  //       }
  //     });
  //   } catch (e: any) {
  //     alert(e.response.data);
  //     runInAction(() => {
  //       this._programs = stateCreator.getErrorState(e.response.data);
  //     });
  //   }
  // }

  private constructor(private readonly taskId: number | undefined) {
    this._httpService = new HttpService({});
    makeAutoObservable(this, {}, { autoBind: true });
  }

  private static makeModel(taskId: number | undefined) {
    const model = React.useMemo(() => new TaskEditingModel(taskId), []);
    useEffect(() => {
      if (taskId !== undefined) {
        model._taskId = taskId;
      }
    }, [model]);

    return model;
  }

  private static MedicalCardPageContext =
    React.createContext<TaskEditingModel | null>(null);

  public static Provider(
    props: React.PropsWithChildren<{
      taskId: number | undefined;
    }>
  ) {
    const model = TaskEditingModel.makeModel(props.taskId);

    return (
      <TaskEditingModel.MedicalCardPageContext.Provider value={model}>
        {props.children}
      </TaskEditingModel.MedicalCardPageContext.Provider>
    );
  }

  public static modelClient<P extends object>(
    Component: (props: P & { model: TaskEditingModel }) => JSX.Element
  ) {
    const WrappedComponent = observer(Component);
    return function ModelClient(props: P) {
      const model = React.useContext(TaskEditingModel.MedicalCardPageContext);
      if (!model) {
        throw new Error("No model provider");
      }
      return <WrappedComponent {...props} model={model} />;
    };
  }
}
