import { makeAutoObservable } from "mobx";
import { HttpService } from "../../../../../../service/http-service";
import {
  GlobalGoalResponse,
  GlobalStatus,
} from "../../global-goasl-editing-screen/interface/interface";

export class Goals {
  private readonly _httpService = new HttpService();

  public constructor(public source: GlobalGoalResponse) {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  private _successesAssigned = false;

  public get successesAssigned() {
    return this._successesAssigned;
  }
  public setAssessAssigned(state: boolean) {
    this._successesAssigned = state;
  }

  public get id() {
    return this.source.id;
  }

  public get goalsDescription() {
    return this.source.description;
  }

  public get status() {
    return this.source.status;
  }

  public setPickGoal(id: number) {}
  //
  // public get pickedGoal() {
  //   return this._pickedGoal;
  // }

  public async assignStatusToGlobalGoal(
    getGoals?: () => void,
    status?: GlobalStatus
  ) {
    const addFilteredArray = {
      status,
      client: this.source.client,
      description: this.source.description,
    };
    this._httpService
      .put<GlobalGoalResponse>(`/global_goal/${this.source.id}/`, {
        data: addFilteredArray,
      })
      .then((res) => {
        console.log("createNewGoal GLOBAL", res.status);
        if (res.data && getGoals) {
          getGoals();
          this.setAssessAssigned(true);
        }
      })
      .catch((e) => {
        console.warn(e.response);
      });
  }
  catch(e: any) {
    console.log("Error:", e.response.data);
  }

  public setGoalsDescription(value: string) {
    // todo: add additional checks for NaN
    this.source.description = value;
  }
}
