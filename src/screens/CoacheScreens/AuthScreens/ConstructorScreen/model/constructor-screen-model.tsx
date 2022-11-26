/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from "react";
import { makeAutoObservable, runInAction } from "mobx";
import { observer } from "mobx-react-lite";
import * as stateCreator from "./state-creators";
import { HttpService } from "../../../../../service/http-service";
import { ProgramResponse, ResponseArrayConstructor } from "../interfaces";
import { ConstructorCardState } from "./constructor-state";

export class ConstructorScreenModel {
  private readonly _httpService = new HttpService();

  private _programs: ConstructorCardState = stateCreator.getInitialState();

  public get programs() {
    return this._programs;
  }

  private getPrograms() {
    try {
      this._httpService
        .get<ResponseArrayConstructor>("/program/")
        .then((res) => {
          if (res.data) {
            runInAction(() => {
              this._programs = stateCreator.getHasDataState(res.data);
            });
          }
        });
    } catch (e: any) {
      alert(e.response.data);
      runInAction(() => {
        this._programs = stateCreator.getErrorState(e.response.data);
      });
    }
  }

  private constructor() {
    this._httpService = new HttpService({});
    makeAutoObservable(this, {}, { autoBind: true });
  }

  private static makeModel() {
    const model = React.useMemo(() => new ConstructorScreenModel(), []);
    useEffect(() => {
      model.getPrograms();
    }, [model]);

    return model;
  }

  private static MedicalCardPageContext =
    React.createContext<ConstructorScreenModel | null>(null);

  public static Provider(props: React.PropsWithChildren<{}>) {
    const model = ConstructorScreenModel.makeModel();

    return (
      <ConstructorScreenModel.MedicalCardPageContext.Provider value={model}>
        {props.children}
      </ConstructorScreenModel.MedicalCardPageContext.Provider>
    );
  }

  public static modelClient<P extends object>(
    Component: (props: P & { model: ConstructorScreenModel }) => JSX.Element
  ) {
    const WrappedComponent = observer(Component);
    return function ModelClient(props: P) {
      const model = React.useContext(
        ConstructorScreenModel.MedicalCardPageContext
      );
      if (!model) {
        throw new Error("No model provider");
      }
      return <WrappedComponent {...props} model={model} />;
    };
  }
}
