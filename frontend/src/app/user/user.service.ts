import { AuthService } from './../auth.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class UserService {

  constructor(private authService: AuthService) {}

  setCurrentUser(user: any): void {
    localStorage.setItem('currentUser', user._id);
  }

  isAuthorized() {
    return localStorage.getItem('currentUser')
  }

  getCurrentUser(): Observable<any> {
    return this.authService.getUser(localStorage.getItem('currentUser'))
  }
}
