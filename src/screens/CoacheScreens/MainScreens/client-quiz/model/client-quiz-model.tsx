/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from "react";
import { makeAutoObservable } from "mobx";
import { observer } from "mobx-react-lite";
import { HttpService } from "../../../../../service/http-service";
import { ClientResponse } from "../../../AuthScreens/CalendarScreen/user-list-screen/interface";

export class ClientQuizModel {
  private readonly _httpService = new HttpService();

  private _client: ClientResponse | undefined = undefined;

  public get client() {
    return this._client;
  }

  private constructor(private client: ClientResponse) {
    this._httpService = new HttpService({});
    makeAutoObservable(this, {}, { autoBind: true });
  }

  private static makeModel(client: ClientResponse) {
    const model = React.useMemo(() => new ClientQuizModel(client), []);
    useEffect(() => {}, [model]);

    return model;
  }

  private static MedicalCardPageContext =
    React.createContext<ClientQuizModel | null>(null);

  public static Provider(
    props: React.PropsWithChildren<{
      client: ClientResponse;
    }>
  ) {
    const model = ClientQuizModel.makeModel(props.client);

    return (
      <ClientQuizModel.MedicalCardPageContext.Provider value={model}>
        {props.children}
      </ClientQuizModel.MedicalCardPageContext.Provider>
    );
  }

  public static modelClient<P extends object>(
    Component: (props: P & { model: ClientQuizModel }) => JSX.Element
  ) {
    const WrappedComponent = observer(Component);
    return function ModelClient(props: P) {
      const model = React.useContext(ClientQuizModel.MedicalCardPageContext);
      if (!model) {
        throw new Error("No model provider");
      }
      return <WrappedComponent {...props} model={model} />;
    };
  }
}
