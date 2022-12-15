/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from "react";
import { makeAutoObservable, runInAction } from "mobx";
import { observer } from "mobx-react-lite";
import * as stateCreator from "./state-creators";
import { ConstructorState } from "./constructor-state";
import { HttpService } from "../../../../../../service/http-service";
import { GoalsResArray } from "../../../../../CoacheScreens/AuthScreens/ConstructorScreen/goasl-editing-screen/interface/interface";

export class GoalsDetailsClientModel {
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
      this._httpService.get<GoalsResArray>(`/global_goal/`).then((res) => {
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
    const model = React.useMemo(() => new GoalsDetailsClientModel(), []);
    useEffect(() => {
      model.getGoals();
    }, []);

    return model;
  }

  private static MedicalCardPageContext =
    React.createContext<GoalsDetailsClientModel | null>(null);

  public static Provider(props: React.PropsWithChildren<{}>) {
    const model = GoalsDetailsClientModel.makeModel();

    return (
      <GoalsDetailsClientModel.MedicalCardPageContext.Provider value={model}>
        {props.children}
      </GoalsDetailsClientModel.MedicalCardPageContext.Provider>
    );
  }

  public static modelClient<P extends object>(
    Component: (props: P & { model: GoalsDetailsClientModel }) => JSX.Element
  ) {
    const WrappedComponent = observer(Component);
    return function ModelClient(props: P) {
      const model = React.useContext(
        GoalsDetailsClientModel.MedicalCardPageContext
      );
      if (!model) {
        throw new Error("No model provider");
      }
      return <WrappedComponent {...props} model={model} />;
    };
  }
}
