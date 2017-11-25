import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Item} from "./message";
import {User} from "./models/user";

@Injectable()
export class ApiService {

  constructor(private  http: HttpClient) {
  }



getUsers():Observable<User[]>{
    let res=this.http.get<User[]>('http://localhost:3000/users');
    return res;
}

  getProfile(id:number):Observable<User>{
    let res=this.http.get<User>('http://localhost:3000/profile/'+id);
    return res;
  }

  getMessages(): Observable<Item[]> {
    let res = this.http.get<Item[]>('http://localhost:3000/posts');

    return res;
  }

}