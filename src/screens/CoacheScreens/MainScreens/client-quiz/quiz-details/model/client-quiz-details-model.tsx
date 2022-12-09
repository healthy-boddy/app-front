/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from "react";
import { makeAutoObservable, runInAction } from "mobx";
import { observer } from "mobx-react-lite";
import { QuizAnswersState } from "./constructor-state";
import * as stateCreator from "./state-creators";
import { HttpService } from "../../../../../../service/http-service";
import { ClientResponse } from "../../../../AuthScreens/CalendarScreen/user-list-screen/interface";
import { Quiz, QuizAnswersText } from "../../interface";

export class ClientQuizDetailsModel {
  private readonly _httpService = new HttpService();

  private _clientData: ClientResponse | undefined = undefined;

  private _quizAnswerText: QuizAnswersState = stateCreator.getInitialState();
  private _quizData: Quiz | null = null;

  public get clientData() {
    return this._clientData;
  }

  public get quizData() {
    return this._quizData;
  }

  public get quizAnswerText() {
    return this._quizAnswerText;
  }

  private getQuizDetails() {
    try {
      this._httpService
        .get<QuizAnswersText>(`/quiz/response/${this._quizData?.id}/answer/`)
        .then((res) => {
          runInAction(() => {
            this._quizAnswerText = stateCreator.getHasDataState(res.data);
          });
        });
    } catch (e: any) {
      console.log(e.response);
    }
  }

  private constructor(private client: ClientResponse, private quiz: Quiz) {
    this._httpService = new HttpService({});
    makeAutoObservable(this, {}, { autoBind: true });
  }

  private static makeModel(client: ClientResponse, quiz: Quiz) {
    const model = React.useMemo(
      () => new ClientQuizDetailsModel(client, quiz),
      []
    );
    useEffect(() => {
      runInAction(() => {
        model._quizData = quiz;
        model._clientData = client;
        model.getQuizDetails();
      });
    });

    return model;
  }

  private static MedicalCardPageContext =
    React.createContext<ClientQuizDetailsModel | null>(null);

  public static Provider(
    props: React.PropsWithChildren<{
      client: ClientResponse;
      quiz: Quiz;
    }>
  ) {
    const model = ClientQuizDetailsModel.makeModel(props.client, props.quiz);

    return (
      <ClientQuizDetailsModel.MedicalCardPageContext.Provider value={model}>
        {props.children}
      </ClientQuizDetailsModel.MedicalCardPageContext.Provider>
    );
  }

  public static modelClient<P extends object>(
    Component: (props: P & { model: ClientQuizDetailsModel }) => JSX.Element
  ) {
    const WrappedComponent = observer(Component);
    return function ModelClient(props: P) {
      const model = React.useContext(
        ClientQuizDetailsModel.MedicalCardPageContext
      );
      if (!model) {
        throw new Error("No model provider");
      }
      return <WrappedComponent {...props} model={model} />;
    };
  }
}
