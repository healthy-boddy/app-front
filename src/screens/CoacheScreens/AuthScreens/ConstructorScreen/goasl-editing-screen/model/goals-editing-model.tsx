/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from "react";
import { makeAutoObservable, runInAction } from "mobx";
import { observer } from "mobx-react-lite";
import * as stateCreator from "./state-creators";
import { ConstructorState } from "./constructor-state";
import { HttpService } from "../../../../../../service/http-service";
import { GoalsResArray } from "../interface/interface";

export class GoalsEditingModel {
  private readonly _httpService = new HttpService();

  private _goals: ConstructorState = stateCreator.getInitialState();

  private getGoals() {
    try {
      this._httpService.get<GoalsResArray>("/program/goal/").then((res) => {
        console.log("Res: data", res.data);
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
    const model = React.useMemo(() => new GoalsEditingModel(), []);
    useEffect(() => {
      model.getGoals();
    }, [model]);

    return model;
  }

  private static MedicalCardPageContext =
    React.createContext<GoalsEditingModel | null>(null);

  public static Provider(props: React.PropsWithChildren<{}>) {
    const model = GoalsEditingModel.makeModel();

    return (
      <GoalsEditingModel.MedicalCardPageContext.Provider value={model}>
        {props.children}
      </GoalsEditingModel.MedicalCardPageContext.Provider>
    );
  }

  public static modelClient<P extends object>(
    Component: (props: P & { model: GoalsEditingModel }) => JSX.Element
  ) {
    const WrappedComponent = observer(Component);
    return function ModelClient(props: P) {
      const model = React.useContext(GoalsEditingModel.MedicalCardPageContext);
      if (!model) {
        throw new Error("No model provider");
      }
      return <WrappedComponent {...props} model={model} />;
    };
  }
}
