/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from "react";
import { makeAutoObservable, runInAction } from "mobx";
import { observer } from "mobx-react-lite";
import * as stateCreator from "./state-creators";
import { ConstructorCardState } from "./constructor-state";
import { HttpService } from "../../../../../../service/http-service";
import { ResponseArrayConstructor } from "../../../../AuthScreens/ConstructorScreen/interfaces";

export class ClientProgramsModel {
  private readonly _httpService = new HttpService();

  private _programs: ConstructorCardState = stateCreator.getInitialState();

  private _client: number | undefined = undefined;

  public get programs() {
    return this._programs;
  }

  public get client() {
    return this._client;
  }

  private getPrograms() {
    console.log("CLIENT", this._client);
    try {
      this._httpService
        .get<ResponseArrayConstructor>(
          `/program/${this._client}/available_programs/`
        )
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

  private constructor(public readonly clientId: number | undefined) {
    this._httpService = new HttpService({});
    makeAutoObservable(this, {}, { autoBind: true });
  }

  private static makeModel(clientId: number | undefined) {
    const model = React.useMemo(() => new ClientProgramsModel(clientId), []);
    useEffect(() => {
      runInAction(() => {
        model._client = clientId;
        model.getPrograms();
      });
    }, [model]);

    return model;
  }

  private static MedicalCardPageContext =
    React.createContext<ClientProgramsModel | null>(null);

  public static Provider(
    props: React.PropsWithChildren<{
      clientId: number | undefined;
    }>
  ) {
    const model = ClientProgramsModel.makeModel(props.clientId);

    return (
      <ClientProgramsModel.MedicalCardPageContext.Provider value={model}>
        {props.children}
      </ClientProgramsModel.MedicalCardPageContext.Provider>
    );
  }

  public static modelClient<P extends object>(
    Component: (props: P & { model: ClientProgramsModel }) => JSX.Element
  ) {
    const WrappedComponent = observer(Component);
    return function ModelClient(props: P) {
      const model = React.useContext(
        ClientProgramsModel.MedicalCardPageContext
      );
      if (!model) {
        throw new Error("No model provider");
      }
      return <WrappedComponent {...props} model={model} />;
    };
  }
}
