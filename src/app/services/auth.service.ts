import {Injectable} from '@angular/core';
import {User} from "../model/model.user";
import {AppComponent} from "../app.component";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map, tap} from "rxjs/operators";


@Injectable()
export class AuthService {
  constructor(public http: HttpClient) { }
tuser:User;


  public logIn(user: User){
    localStorage.setItem('currentPas',user.password);
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    // creating base64 encoded String from user name and password
    var base64Credential: string = btoa( user.email+ ':' + user.password);
    headers.append("Authorization", "Basic " + base64Credential);

    let options = {
      headers: headers
    };

    return this.http.get(AppComponent.API_URL+"/account/login", { headers: new HttpHeaders({
        'Authorization': "Basic " + base64Credential,
        'Content-Type': 'application/json',
      })}).pipe (
      map (
        // Log the result or error
        data =>{
          console.log('FFFFFFFFFFFFF');
          // console.log('You received data'+JSON.stringify(data));
          if(data.hasOwnProperty('principal')){
            this.tuser=data['principal'];
            console.log(this.tuser);
            if(this.tuser){
              localStorage.setItem('currentUser', JSON.stringify(this.tuser));
              console.log(this.tuser);
            }
          }
         },
        error => console.log(error)
      )
    );

  }



  logOut() {
    // remove user from local storage to log user out
    return this.http.post(AppComponent.API_URL+"logout",{}).pipe(
      map((response: Response) => {
        localStorage.removeItem('currentUser');
      }));

  }
}
