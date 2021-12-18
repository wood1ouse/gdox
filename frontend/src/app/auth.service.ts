import { IUser } from './../../../backend/public/types';

import { Injectable } from '@angular/core';

import {HttpClient, HttpErrorResponse} from '@angular/common/http'
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}

  register(user: IUser) {
    return this.http.post('register' , user, {observe: 'response'})
    .pipe(catchError(this.handleError))
  }

  login(user: IUser) {
    return this.http.post('login', user, {observe: 'response'})
    .pipe(catchError(this.handleError))
  }

  getUser(id: string | null): Observable<any> {
    return this.http.get(`user/${id}`)
  }

  private handleError(error: HttpErrorResponse) {
    return throwError(() => error.error.message)
  }
}
