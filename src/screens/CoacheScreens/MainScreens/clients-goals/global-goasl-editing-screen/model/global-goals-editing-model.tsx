/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from "react";
import { makeAutoObservable, runInAction } from "mobx";
import { observer } from "mobx-react-lite";
import * as stateCreator from "./state-creators";
import { ConstructorState } from "./constructor-state";
import { HttpService } from "../../../../../../service/http-service";
import {
  GlobalGoalResponse,
  GlobalGoalsResArray,
  GlobalStatus,
} from "../interface/interface";
import { Goals } from "./goals";
import { ClientResponse } from "../../../../AuthScreens/CalendarScreen/user-list-screen/interface";

export class GlobalGoalsEditingModel {
  private readonly _httpService = new HttpService();

  private _goals: ConstructorState = stateCreator.getInitialState();

  private _arrayForDelete: Array<number> = [];

  private _clientData: ClientResponse | undefined = undefined;

  public get goals() {
    return this._goals;
  }

  public get client() {
    return this._clientData;
  }

  public addObjectsForDelete(arr: Array<number>, id: number) {
    this._arrayForDelete = arr;
    const filteredArray = this.goals.data?.filter(
      (data) => data.source.id !== id
    );
    // this._goals = stateCreator.getHasDataState(filteredArray.source);
    const newArray = filteredArray.map((data: Goals) => data.source);
    this._goals = stateCreator.getHasDataState(newArray);
  }

  public addNewProgram = () => {
    const description = "";
    const newObj = {
      description,
      id: Date.now(),
    };
    this._goals = stateCreator.addArrayForEditing(
      this._goals.data,
      new Goals(newObj)
    );
  };

  public deleteGoal() {
    if (this._arrayForDelete.length > 0) {
      this._arrayForDelete.map((deleteId) => {
        console.log("deleteId", deleteId);
        try {
          this._httpService
            .delete(`/global_goal/${deleteId}/`)
            .then((res) => {
              console.log(
                `Successfully deleted goal № ${deleteId}`,
                res.status
              );
              this.getGoals();
            })
            .catch((er) => {
              console.log(er.response);
            });
        } catch (e: any) {
          console.log("Error:", e.response.data);
        }
      });
    }
  }

  public async createNewGoal(onNavigatePress?: () => void) {
    if (this._goals.data) {
      const newArr = this._goals.data.filter(
        (data: GlobalGoalResponse) => data.id > 100000
      );
      const formatData: { description: string; program: number | null } =
        await newArr.map((el: Goals) => {
          const addFilteredArray = {
            description: el.source.description,
            status: GlobalStatus.New,
            client: this._clientData?.user.id,
          };

          console.log("addFilteredArray", addFilteredArray);

          this._httpService
            .post<GlobalGoalResponse>(
              `/global_goal/?client=${this._clientData?.user.id}`,
              {
                data: addFilteredArray,
              }
            )
            .then((res) => {
              console.log("createNewGoal GLOBAL", res.status);
              this.getGoals();
              if (res.data && onNavigatePress) {
                onNavigatePress();
              }
            })
            .catch((e) => {
              console.warn(e);
            });
        });
      return formatData;
    } else return;
  }
  catch(e: any) {
    console.log("Error:", e.response.data);
  }

  public getGoals() {
    try {
      this._httpService
        .get<GlobalGoalsResArray>(
          `/global_goal/?client=${this._clientData?.user.id}`
        )
        .then((res) => {
          console.log("GET: data goals", res.data);
          runInAction(() => {
            this._goals = stateCreator.getHasDataState(res.data);
          });
        });
    } catch (e: any) {
      console.log("Error:", e.response.data);
    }
  }

  public handlePress(onNavigatePress: () => void) {
    this.createNewGoal(onNavigatePress);
    this.deleteGoal();
  }

  private constructor(private client: ClientResponse) {
    this._httpService = new HttpService({});
    makeAutoObservable(this, {}, { autoBind: true });
  }

  private static makeModel(client: ClientResponse) {
    const model = React.useMemo(() => new GlobalGoalsEditingModel(client), []);
    useEffect(() => {
      model._clientData = client;
      model.getGoals();
    });

    return model;
  }

  private static MedicalCardPageContext =
    React.createContext<GlobalGoalsEditingModel | null>(null);

  public static Provider(
    props: React.PropsWithChildren<{
      client: ClientResponse;
    }>
  ) {
    const model = GlobalGoalsEditingModel.makeModel(props.client);

    return (
      <GlobalGoalsEditingModel.MedicalCardPageContext.Provider value={model}>
        {props.children}
      </GlobalGoalsEditingModel.MedicalCardPageContext.Provider>
    );
  }

  public static modelClient<P extends object>(
    Component: (props: P & { model: GlobalGoalsEditingModel }) => JSX.Element
  ) {
    const WrappedComponent = observer(Component);
    return function ModelClient(props: P) {
      const model = React.useContext(
        GlobalGoalsEditingModel.MedicalCardPageContext
      );
      if (!model) {
        throw new Error("No model provider");
      }
      return <WrappedComponent {...props} model={model} />;
    };
  }
}
