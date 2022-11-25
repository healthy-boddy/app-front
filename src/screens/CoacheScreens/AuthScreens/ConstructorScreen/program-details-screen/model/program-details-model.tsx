/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from "react";
import { makeAutoObservable, runInAction } from "mobx";
import { observer } from "mobx-react-lite";
import * as stateCreator from "./state-creators";
import { HttpService } from "../../../../../../service/http-service";
import { ProgramResponse } from "../../interfaces";
import { TaskResponseArray } from "../../editing-screen/interface";
import { ConstructorStates } from "./constructor-state";

export class ProgramDetailsModel {
  private readonly _httpService = new HttpService();

  private _programId: number | undefined = undefined;

  private _tasks: ConstructorStates = stateCreator.getInitialState();

  private _name = "";
  private _description = "";
  private _goals_quantity: number | null = null;

  public get currentProgramId() {
    return this._programId;
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

  private constructor(private readonly programId: number | undefined) {
    this._httpService = new HttpService({});
    makeAutoObservable(this, {}, { autoBind: true });
  }

  private static makeModel(programId: number | undefined) {
    const model = React.useMemo(() => new ProgramDetailsModel(programId), []);
    useEffect(() => {
      if (programId !== undefined) {
        model._programId = programId;
      }

      if (model.programId) {
        model.getProgramById();
        model.getTasks();
      }
    }, [model, programId]);

    return model;
  }

  private static MedicalCardPageContext =
    React.createContext<ProgramDetailsModel | null>(null);

  public static Provider(
    props: React.PropsWithChildren<{
      programId: number | undefined;
    }>
  ) {
    const model = ProgramDetailsModel.makeModel(props.programId);

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
