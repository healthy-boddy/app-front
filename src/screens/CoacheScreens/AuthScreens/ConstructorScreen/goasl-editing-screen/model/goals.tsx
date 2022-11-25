import { makeAutoObservable } from "mobx";
import { HttpService } from "../../../../../../service/http-service";
import { GoalsResponseProps } from "../interface/interface";

export class Goals {
  private readonly _httpService = new HttpService();

  public constructor(public source: GoalsResponseProps) {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  public editGoals(data: string, goalId: number, program: number | null) {
    console.log("goal id", goalId);
    this._httpService
      .put(`/program/goal/${goalId}/`, {
        data: {
          program: program,
          description: data,
        },
      })
      .then((res) => {
        console.log("res editGoals ", res.status);
      })
      .catch((er) => {
        console.log(er.response);
      });
  }

  public deleteGoal(id: number, getGoals: () => void) {
    try {
      this._httpService
        .delete(`/program/goal/${id}/`)
        .then((res) => {
          console.log(`Successfully deleted goal № ${id}`, res.status);
          getGoals();
        })
        .catch((er) => {
          console.log(er.response);
        });
    } catch (e: any) {
      console.log("Error:", e.response.data);
    }
  }

  public get id() {
    return this.source.id;
  }

  public get goalsDescription() {
    return this.source.description;
  }

  public setGoalsDescription(value: string) {
    // todo: add additional checks for NaN
    this.source.description = value;
  }
}
