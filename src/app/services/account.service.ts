import {Injectable} from '@angular/core';
import {User} from "../model/model.user";
import {AppComponent} from "../app.component";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class AccountService {
  constructor(public http: HttpClient) {
  }

  createAccount(user: User) {
    return this.http.post(AppComponent.API_URL + '/account/register', user);
  }

  editAccount(user: User) {
    return this.http.post(AppComponent.API_URL + '/account/edit', user);
  }
  addDonation(user: User,payment:number) {
    return this.http.post(AppComponent.API_URL + `/account/manager/payment/${payment}`, user);
  }

  editServiceAccount(user: User, id: number) {
    return this.http.post(AppComponent.API_URL + `/account/edit/${id}`, user);
  }

  changePass(user: User) {
    return this.http.post(AppComponent.API_URL + '/account/changePas', user);
  }

  public getDataFromBackend() {
    return this.http.get(AppComponent.API_URL + '/account/Test')
  }

  public sendData(str: string) {
    return this.http.post(AppComponent.API_URL + '/account/Test', str)
  }

  public getUserList() {
    return this.http.get(AppComponent.API_URL + `/account/manager/`)
  }

  getPaymentByUser(id: number) {
    return this.http.get(AppComponent.API_URL + `/account/manager/payment/${id}`)
  }
}
