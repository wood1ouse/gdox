import { IUser } from './../../../backend/public/types';

import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}

  register(user: IUser) {
    return this.http.post('http://localhost:4200/register' , user)
  }
}
