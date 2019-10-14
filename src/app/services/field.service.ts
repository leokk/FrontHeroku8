import {Injectable} from '@angular/core';
import {AppComponent} from "../app.component";
import {Observable} from "rxjs";
import {Question} from "../model/model.Question";
import {Answer} from "../model/model.Answer";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class FieldService {
  constructor(public http: HttpClient) {
  }

  getFieldList(id: number): Observable<any> {
    return this.http.get(AppComponent.API_URL + `/account/field/${id}`);
  }

  putFieldList(id: number, quest: Question): Observable<any> {
    return this.http.post(AppComponent.API_URL + `/account/field/${id}`, quest);
  }

  deleteFieldList(id: number): Observable<any> {
    return this.http.delete(AppComponent.API_URL + `/account/field/${id}`);
  }

  createQuestion(question: Question, id: number) {
    return this.http.post(AppComponent.API_URL + `/account/field/create/${id}`, question)
  }

  createResponse(answer: Answer[], id: number) {
    return this.http.post(AppComponent.API_URL + `/account/response/create/${id}`, answer)
  }

  getData(id: number): Observable<any> {
    return this.http.get(AppComponent.API_URL + `/account/response/${id}`)
  }

  findAllQuestions(id: number): Observable<any> {
    return this.http.get(AppComponent.API_URL + `/account/field/${id}`)
  }

  findAllAnswers(id: number): Observable<any> {
    return this.http.get(AppComponent.API_URL + `/account/response/${id}`)
  }

}
