import { IUser } from './../../../backend/public/types';

import { Injectable } from '@angular/core';

import {HttpClient, HttpErrorResponse} from '@angular/common/http'
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}

  register(user: IUser) {
    return this.http.post('http://localhost:4200/register' , user, {observe: 'response'})
    .pipe(catchError(this.handleError))
  }

  login(user: IUser) {
    return this.http.post('http://localhost:4200/login', user, {observe: 'response'})
    .pipe(catchError(this.handleError))
  }

  getUser(id: string | null) {
    return this.http.get(`http://localhost:4200/user/${id}`)
  }

  private handleError(error: HttpErrorResponse) {
    return throwError(() => error.error.message)
  }
}
