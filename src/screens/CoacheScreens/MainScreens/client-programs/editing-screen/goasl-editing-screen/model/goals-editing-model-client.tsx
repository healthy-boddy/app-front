/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from "react";
import { makeAutoObservable, runInAction } from "mobx";
import { observer } from "mobx-react-lite";
import * as stateCreator from "./state-creators";
import { ConstructorState } from "./constructor-state";
import { GoalsResArray, GoalsResponseProps } from "../interface/interface";
import { Goals } from "./goals";
import { HttpService } from "../../../../../../../service/http-service";
import { ProgramAssignedToClient } from "../../../interface/interface";

export class GoalsEditingModelClient {
  private readonly _httpService = new HttpService();

  private _goals: ConstructorState = stateCreator.getInitialState();

  private _program: number | null = null;

  private _arrayForDelete: Array<number> = [];

  private _programDetailForClient: ProgramAssignedToClient | undefined =
    undefined;
  private _programId: number | undefined = undefined;
  private _client: number | undefined = undefined;

  public get programDetailForClient() {
    return this._programDetailForClient;
  }
  public get client() {
    return this._client;
  }

  public get programID() {
    return this._programId;
  }

  public get program() {
    return this._program;
  }

  public get goals() {
    return this._goals;
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
              runInAction(() => {
                this.getGoals();
                console.log(
                  `Successfully deleted goal № ${deleteId}`,
                  res.status
                );
              });
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
              runInAction(() => {
                this.getGoals();
              });
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

  private constructor(
    private readonly programId: number | undefined,
    private readonly programAssignedToClient:
      | ProgramAssignedToClient
      | undefined,
    private readonly clientID: number | undefined
  ) {
    this._httpService = new HttpService({});
    makeAutoObservable(this, {}, { autoBind: true });
  }

  private static makeModel(
    programId: number | undefined,
    programAssignedToClient: ProgramAssignedToClient | undefined,
    clientID: number | undefined
  ) {
    const model = React.useMemo(
      () =>
        new GoalsEditingModelClient(
          programId,
          programAssignedToClient,
          clientID
        ),
      []
    );
    useEffect(() => {
      model._programId = programId;
      model._programDetailForClient = programAssignedToClient;
      model._client = clientID;
      model.getGoals();
    }, [model]);

    return model;
  }

  private static MedicalCardPageContext =
    React.createContext<GoalsEditingModelClient | null>(null);

  public static Provider(
    props: React.PropsWithChildren<{
      programId: number | undefined;
      programAssignedToClient: ProgramAssignedToClient | undefined;
      clientID: number | undefined;
    }>
  ) {
    const model = GoalsEditingModelClient.makeModel(
      props.programId,
      props.programAssignedToClient,
      props.clientID
    );

    return (
      <GoalsEditingModelClient.MedicalCardPageContext.Provider value={model}>
        {props.children}
      </GoalsEditingModelClient.MedicalCardPageContext.Provider>
    );
  }

  public static modelClient<P extends object>(
    Component: (props: P & { model: GoalsEditingModelClient }) => JSX.Element
  ) {
    const WrappedComponent = observer(Component);
    return function ModelClient(props: P) {
      const model = React.useContext(
        GoalsEditingModelClient.MedicalCardPageContext
      );
      if (!model) {
        throw new Error("No model provider");
      }
      return <WrappedComponent {...props} model={model} />;
    };
  }
}
