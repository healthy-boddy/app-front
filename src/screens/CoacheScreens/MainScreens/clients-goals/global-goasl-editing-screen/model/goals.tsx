import { makeAutoObservable } from "mobx";
import { HttpService } from "../../../../../../service/http-service";
import { GlobalGoalResponse } from "../interface/interface";
import { ClientResponse } from "../../../../AuthScreens/CalendarScreen/user-list-screen/interface";

export class Goals {
  private readonly _httpService = new HttpService();

  public constructor(public source: GlobalGoalResponse) {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  public editGoals(
    data: string,
    goalId: number,
    client: ClientResponse | null
  ) {
    this._httpService
      .put(`/global_goal/${goalId}/?client=${client?.user.id}`, {
        data: {
          description: data,
          client: client?.user.id,
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
