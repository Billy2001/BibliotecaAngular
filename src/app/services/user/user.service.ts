import { Injectable } from '@angular/core';
import {HttpHeaders, HttpClient} from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  endpoint='http://localhost:3800/api/';
  httpoptions={
    headers: new HttpHeaders({
      'content-Type':'application/json'
    })
  }
  constructor(
    private http:HttpClient
  ) { }

  private extractData(res:Response){
    let body=res;
    return body ||[]||{};
  }

  saveUser(user_to_register){
    let params = JSON.stringify(user_to_register);
    return this.http.post(this.endpoint +'crearUser',params,this.httpoptions).pipe(
      map(this.extractData)
    )
  }
  
}
