/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from "react";
import { makeAutoObservable, runInAction } from "mobx";
import { observer } from "mobx-react-lite";
import * as stateCreator from "./state-creators";
import { ConstructorState } from "./constructor-state";
import { HttpService } from "../../../../../../service/http-service";
import { GoalsResArray } from "../../../../AuthScreens/ConstructorScreen/goasl-editing-screen/interface/interface";

export class GoalsModel {
  private readonly _httpService = new HttpService();

  private _goals: ConstructorState = stateCreator.getInitialState();

  private _program: number | null = null;

  public get goals() {
    return this._goals;
  }

  public get program() {
    return this._program;
  }

  public setProgram(programId: number) {
    this._program = programId;
  }

  public getGoals() {
    try {
      this._httpService.get<GoalsResArray>(`/program/goal/`).then((res) => {
        runInAction(() => {
          this._goals = stateCreator.getHasDataState(res.data);
        });
      });
    } catch (e: any) {
      console.log("Error:", e.response.data);
    }
  }

  private constructor() {
    this._httpService = new HttpService({});
    makeAutoObservable(this, {}, { autoBind: true });
  }

  private static makeModel() {
    const model = React.useMemo(() => new GoalsModel(), []);
    useEffect(() => {
      model.getGoals();
    }, [model]);

    return model;
  }

  private static MedicalCardPageContext =
    React.createContext<GoalsModel | null>(null);

  public static Provider(props: React.PropsWithChildren<{}>) {
    const model = GoalsModel.makeModel();

    return (
      <GoalsModel.MedicalCardPageContext.Provider value={model}>
        {props.children}
      </GoalsModel.MedicalCardPageContext.Provider>
    );
  }

  public static modelClient<P extends object>(
    Component: (props: P & { model: GoalsModel }) => JSX.Element
  ) {
    const WrappedComponent = observer(Component);
    return function ModelClient(props: P) {
      const model = React.useContext(GoalsModel.MedicalCardPageContext);
      if (!model) {
        throw new Error("No model provider");
      }
      return <WrappedComponent {...props} model={model} />;
    };
  }
}
