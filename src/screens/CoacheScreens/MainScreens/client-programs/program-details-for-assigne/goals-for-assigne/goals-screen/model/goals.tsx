import { makeAutoObservable } from "mobx";
import { GoalsResponseProps } from "../../goasl-editing-screen/interface/interface";
import { HttpService } from "../../../../../../../../service/http-service";

export class Goals {
  private readonly _httpService = new HttpService();

  public constructor(public source: GoalsResponseProps) {
    makeAutoObservable(this, {}, { autoBind: true });
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
