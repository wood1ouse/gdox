import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class UserGuard implements CanActivate {
  constructor(private router: Router, private userService: UserService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!this.userService.isAuthorized()) {
      this.router.navigate(['/login']);
      return false;
    } else if (route.paramMap.get('id') !== this.userService.isAuthorized()) {
      this.router.navigate([`/user/${this.userService.isAuthorized()}`]);
    }

    return true;
  }
}
