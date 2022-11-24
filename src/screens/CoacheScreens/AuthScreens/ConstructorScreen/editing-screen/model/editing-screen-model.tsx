/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from "react";
import { makeAutoObservable, runInAction } from "mobx";
import { observer } from "mobx-react-lite";
import * as stateCreator from "./state-creators";
import { ConstructorStates } from "./constructor-state";
import { HttpService } from "../../../../../../service/http-service";
import { TaskResponseArray } from "../interface";
import { ProgramResponse } from "../../interfaces";

export class EditingScreenModel {
  private readonly _httpService = new HttpService();

  private _tasks: ConstructorStates = stateCreator.getInitialState();

  private _name = "";
  private _description = "";
  private _program: number | undefined = undefined;
  // private _date = null;
  // private _button_text = "";
  // private _button_link = "";

  public get name() {
    return this._name;
  }
  public get description() {
    return this._description;
  }
  public get program() {
    return this._program;
  }

  public get tasks() {
    return this._tasks;
  }

  // public get date() {
  //   return this._date;
  // }
  // public get buttonText() {
  //   return this._button_text;
  // }
  // public get buttonLink() {
  //   return this._button_link;
  // }

  //string setter

  public setName(name: string) {
    this._name = name;
  }

  public setDescription(data: string) {
    this._description = data;
  }

  // public setButtonText(data: string) {
  //   this._button_text = data;
  // }
  //
  // public setButtonLink(data: string) {
  //   this._button_link = data;
  // }
  //
  // public setProgram(program: number) {
  //   this._program = program;
  // }

  private getTasks() {
    try {
      this._httpService
        .get<TaskResponseArray>(`program/task/?program=${this._program}`)
        .then((res) => {
          if (res.data) {
            runInAction(() => {
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

  private getProgramById() {
    try {
      this._httpService
        .get<ProgramResponse>(`/program/${this._program}/`)
        .then((res) => {
          if (res.data) {
            runInAction(() => {
              this._name = res.data.name;
              this._description = res.data.description;
            });
          }
        });
    } catch (e: any) {
      alert(e.response.data);
    }
  }

  public postTask() {
    try {
      this._httpService
        .post("/program/task/", {
          data: this.formatData(),
        })
        .then((res) => {
          console.log("Res status post task", res.status);
        });
    } catch (e: any) {
      console.log("Error post task", e.response.data.message);
    }
  }

  private formatData() {
    return {
      program: this.program,
      name: this.name,
      description: this.description,
      // date: this.date,
      // button_text: this.buttonText,
      // button_link: this.buttonLink,
    };
  }

  private constructor(private readonly programId: number | undefined) {
    this._httpService = new HttpService({});
    makeAutoObservable(this, {}, { autoBind: true });
  }

  private static makeModel(programId: number | undefined) {
    const model = React.useMemo(() => new EditingScreenModel(programId), []);
    useEffect(() => {
      if (programId !== undefined) {
        model._program = programId;
        model.getProgramById();
      }
      model.getTasks();
    }, [model]);

    return model;
  }

  private static MedicalCardPageContext =
    React.createContext<EditingScreenModel | null>(null);

  public static Provider(
    props: React.PropsWithChildren<{
      programId: number | undefined;
    }>
  ) {
    const model = EditingScreenModel.makeModel(props.programId);

    return (
      <EditingScreenModel.MedicalCardPageContext.Provider value={model}>
        {props.children}
      </EditingScreenModel.MedicalCardPageContext.Provider>
    );
  }

  public static modelClient<P extends object>(
    Component: (props: P & { model: EditingScreenModel }) => JSX.Element
  ) {
    const WrappedComponent = observer(Component);
    return function ModelClient(props: P) {
      const model = React.useContext(EditingScreenModel.MedicalCardPageContext);
      if (!model) {
        throw new Error("No model provider");
      }
      return <WrappedComponent {...props} model={model} />;
    };
  }
}
