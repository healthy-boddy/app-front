import { makeAutoObservable } from "mobx";
import { HttpService } from "../../../../../../service/http-service";
import { GoalsResponseProps } from "../interface/interface";

export class Goals {
  private readonly _httpService = new HttpService();

  public constructor(public source: GoalsResponseProps) {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  public editGoals(data: string, goalId: number, program: number | undefined) {
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
