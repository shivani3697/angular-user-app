import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Iusers } from './users';
import { Observable } from 'rxjs';

@Injectable()
export class DetailsService {

  private _url: string = "/assets/data/users.json";
  constructor(private http:HttpClient) { }

  getUserDetails(): Observable<Iusers[]>{
    return this.http.get<Iusers[]>(this._url);
  }
}
