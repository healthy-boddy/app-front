/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from "react";
import { makeAutoObservable, runInAction } from "mobx";
import { observer } from "mobx-react-lite";
import { HttpService } from "../../../../../service/http-service";
import { ProgramAssignedToClientArray } from "../interface/interface";
import * as stateCreator from "./state-creators";
import { UsersStates } from "./constructor-state";

export class ClientsProgramsModel {
  private readonly _httpService = new HttpService();

  private _client: number | null | undefined = null;

  private _programInfo: UsersStates = stateCreator.getInitialState();

  public get programInfo() {
    return this._programInfo;
  }

  public get clientId() {
    return this._client;
  }

  public getProgramAssignedById() {
    console.log("getProgramAssignedById", this._client);
    try {
      this._httpService
        .get<ProgramAssignedToClientArray>(
          this._client
            ? `/program/assign/?assigned_to=${this._client}`
            : `/program/assign/`
        )
        .then((res) => {
          runInAction(() => {
            this._programInfo = stateCreator.getHasDataState(res.data);
          });
        });
    } catch (e) {
      console.log(e);
    }
  }

  private constructor(private readonly programId: number | undefined) {
    this._httpService = new HttpService({});
    makeAutoObservable(this, {}, { autoBind: true });
  }

  private static makeModel(clientId: number | undefined) {
    const model = React.useMemo(() => new ClientsProgramsModel(clientId), []);
    useEffect(() => {
      runInAction(() => {
        model._client = clientId;
        model.getProgramAssignedById();
      });
    });

    return model;
  }

  private static MedicalCardPageContext =
    React.createContext<ClientsProgramsModel | null>(null);

  public static Provider(
    props: React.PropsWithChildren<{
      clientId: number | undefined;
    }>
  ) {
    const model = ClientsProgramsModel.makeModel(props.clientId);

    return (
      <ClientsProgramsModel.MedicalCardPageContext.Provider value={model}>
        {props.children}
      </ClientsProgramsModel.MedicalCardPageContext.Provider>
    );
  }

  public static modelClient<P extends object>(
    Component: (props: P & { model: ClientsProgramsModel }) => JSX.Element
  ) {
    const WrappedComponent = observer(Component);
    return function ModelClient(props: P) {
      const model = React.useContext(
        ClientsProgramsModel.MedicalCardPageContext
      );
      if (!model) {
        throw new Error("No model provider");
      }
      return <WrappedComponent {...props} model={model} />;
    };
  }
}
