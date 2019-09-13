import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser } from '../usersdata.model'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  
  url: string = "http://jsonplaceholder.typicode.com/users";

  getUsers(): Observable<IUser[]>{
    return this.http.get<IUser[]>(this.url);
   }
}
