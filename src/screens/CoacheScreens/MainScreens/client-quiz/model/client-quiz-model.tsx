/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from "react";
import { makeAutoObservable, runInAction } from "mobx";
import { observer } from "mobx-react-lite";
import { HttpService } from "../../../../../service/http-service";
import { ClientResponse } from "../../../AuthScreens/CalendarScreen/user-list-screen/interface";
import { QuizArray } from "../interface";
import { QuizState } from "./constructor-state";
import * as stateCreator from "./state-creators";

export class ClientQuizModel {
  private readonly _httpService = new HttpService();

  private _clientData: ClientResponse | undefined = undefined;

  private _quiz: QuizState = stateCreator.getInitialState();

  public get quiz() {
    return this._quiz;
  }
  public get clientData() {
    return this._clientData;
  }

  private getQuiz() {
    console.log(this.client);
    try {
      this._httpService
        .get<QuizArray>(`/quiz/response/?user=${this._clientData?.user.id}`)
        .then((res) => {
          runInAction(() => {
            console.log("RES GET QUIZ", res.data);
            this._quiz = stateCreator.getHasDataState(res.data);
          });
        });
    } catch (e: any) {
      console.log(e.response);
    }
  }

  private constructor(private client: ClientResponse) {
    this._httpService = new HttpService({});
    makeAutoObservable(this, {}, { autoBind: true });
  }

  private static makeModel(client: ClientResponse) {
    const model = React.useMemo(() => new ClientQuizModel(client), []);
    useEffect(() => {
      model._clientData = client;
      model.getQuiz();
    });

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
