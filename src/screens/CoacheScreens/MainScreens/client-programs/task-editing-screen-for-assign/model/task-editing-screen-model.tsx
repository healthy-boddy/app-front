/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from "react";
import { makeAutoObservable, runInAction } from "mobx";
import { observer } from "mobx-react-lite";
import { HttpService } from "../../../../../../service/http-service";
import { TaskResponse } from "../../editing-screen/interface";

export class TaskEditingForAssignModel {
  private readonly _httpService = new HttpService();

  private _taskData: TaskResponse | undefined = undefined;

  private _name = "";
  private _description = "";
  private _date: number | null = null;
  private _button_text = "";
  private _button_link = "";
  private _program: number | null = null;

  public get name() {
    return this._name;
  }
  public get description() {
    return this._description;
  }
  public get date() {
    return this._date;
  }
  public get buttonText() {
    return this._button_text;
  }
  public get buttonLink() {
    return this._button_link;
  }

  public get program() {
    return this._button_link;
  }

  public setName(data: string) {
    this._name = data;
  }
  public setDescription(desc: string) {
    this._description = desc;
  }

  public setButtonText(buttonText: string) {
    this._button_text = buttonText;
  }
  public setButtonLink(buttonLink: string) {
    this._button_link = buttonLink;
  }

  public deleteProgramById() {
    console.log("TASK ID", this._taskData);
    try {
      this._httpService
        .delete(`/program/task/${this._taskData?.id}/`)
        .then((res) => {
          console.log(`successfully deleted task ${this._taskData}`);
        });
    } catch (er: any) {
      console.log("Error", er.response.data.message);
    }
  }

  public saveTask() {
    console.log("this.this._taskId()", this._taskData?.id);
    try {
      this._httpService
        .put(`/program/task/${this._taskData?.id}/`, {
          data: this.formatData(),
        })
        .then((res) => {
          console.log("success!", res.status);
        })
        .catch((e) => {
          console.warn("ERROR", e.response);
        });
    } catch (e: any) {}
  }

  private formatData() {
    return {
      name: this._name,
      description: this._description,
      date: this._date,
      button_text: this._button_text,
      button_link: this._button_link,
      program: this._program,
    };
  }

  // private getTasks() {
  //   try {
  //     this._httpService
  //       .get<TaskResponseArray>(`/program/task/?task=${this._taskId?.id}`)
  //       .then((responseArray) => {
  //         responseArray.data.map((res) => {
  //           runInAction(() => {
  //             this._name = res.name;
  //             this._description = res.description;
  //             this._date = res.date;
  //             this._button_text = res.button_text;
  //             this._button_link = res.button_link;
  //             this._program = res.program;
  //           });
  //         });
  //       });
  //   } catch (e: any) {
  //     alert(e.response.data);
  //   }
  // }

  private constructor(private readonly task: TaskResponse | undefined) {
    this._httpService = new HttpService({});
    makeAutoObservable(this, {}, { autoBind: true });
  }

  private static makeModel(task: TaskResponse | undefined) {
    const model = React.useMemo(() => new TaskEditingForAssignModel(task), []);
    useEffect(() => {
      runInAction(() => {
        if (task) {
          model._taskData = task;
          model._name = task.name;
          model._description = task.description;
          model._date = task.date;
          model._button_text = task.button_text;
          model._button_link = task.button_link;
          model._program = task.program;
        }
      });
    });

    return model;
  }

  private static MedicalCardPageContext =
    React.createContext<TaskEditingForAssignModel | null>(null);

  public static Provider(
    props: React.PropsWithChildren<{
      task: TaskResponse | undefined;
    }>
  ) {
    const model = TaskEditingForAssignModel.makeModel(props.task);

    return (
      <TaskEditingForAssignModel.MedicalCardPageContext.Provider value={model}>
        {props.children}
      </TaskEditingForAssignModel.MedicalCardPageContext.Provider>
    );
  }

  public static modelClient<P extends object>(
    Component: (props: P & { model: TaskEditingForAssignModel }) => JSX.Element
  ) {
    const WrappedComponent = observer(Component);
    return function ModelClient(props: P) {
      const model = React.useContext(
        TaskEditingForAssignModel.MedicalCardPageContext
      );
      if (!model) {
        throw new Error("No model provider");
      }
      return <WrappedComponent {...props} model={model} />;
    };
  }
}
