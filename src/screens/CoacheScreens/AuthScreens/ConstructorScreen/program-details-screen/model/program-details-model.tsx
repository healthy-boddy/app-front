/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from "react";
import { makeAutoObservable, runInAction } from "mobx";
import { observer } from "mobx-react-lite";
import * as stateCreator from "./state-creators";
import { ConstructorCardState } from "./constructor-state";
import { HttpService } from "../../../../../../service/http-service";

export class ProgramDetailsModel {
  private readonly _httpService = new HttpService();

  // private getPrograms() {
  //   try {
  //     this._httpService.post("/program/").then((res) => {
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

  private constructor() {
    this._httpService = new HttpService({});
    makeAutoObservable(this, {}, { autoBind: true });
  }

  private static makeModel() {
    const model = React.useMemo(() => new ProgramDetailsModel(), []);
    useEffect(() => {}, [model]);

    return model;
  }

  private static MedicalCardPageContext =
    React.createContext<ProgramDetailsModel | null>(null);

  public static Provider(props: React.PropsWithChildren<{}>) {
    const model = ProgramDetailsModel.makeModel();

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
