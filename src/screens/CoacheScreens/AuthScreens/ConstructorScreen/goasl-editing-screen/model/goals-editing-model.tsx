/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from "react";
import { makeAutoObservable, runInAction } from "mobx";
import { observer } from "mobx-react-lite";
import * as stateCreator from "./state-creators";
import { ConstructorState } from "./constructor-state";
import { HttpService } from "../../../../../../service/http-service";
import { GoalsResArray, GoalsResponseProps } from "../interface/interface";
import { Goals } from "./goals";

export class GoalsEditingModel {
  private readonly _httpService = new HttpService();

  private _goals: ConstructorState = stateCreator.getInitialState();

  private _program: number | null = null;

  private _arrayForDelete: Array<number> = [];

  public get goals() {
    return this._goals;
  }

  public get program() {
    return this._program;
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
      program: this._program,
    };
    this._goals = stateCreator.addArrayForEditing(
      this._goals.data,
      new Goals(newObj)
    );
  };

  public deleteGoal() {
    if (this._arrayForDelete.length > 0) {
      this._arrayForDelete.map((deleteId) => {
        try {
          this._httpService
            .delete(`/program/goal/${deleteId}/`)
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

  public async createNewGoal() {
    if (this._goals.data) {
      const newArr = this._goals.data.filter(
        (data: GoalsResponseProps) => data.id > 100000
      );
      const formatData: { description: string; program: number | null } =
        await newArr.map((el: Goals) => {
          const addFilteredArray = {
            description: el.source.description,
            program: this._program,
          };

          this._httpService
            .post<GoalsResponseProps>("/program/goal/", {
              data: addFilteredArray,
            })
            .then(() => {
              this.getGoals();
            })
            .catch((e) => {
              console.warn(e.response);
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
      this._httpService.get<GoalsResArray>("/program/goal/").then((res) => {
        console.log("GET: data goals", res.data);
        runInAction(() => {
          this._goals = stateCreator.getHasDataState(res.data);
          this._program = res.data[0].program;
        });
      });
    } catch (e: any) {
      console.log("Error:", e.response.data);
    }
  }

  public handlePress() {
    this.createNewGoal();
    this.deleteGoal();
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
