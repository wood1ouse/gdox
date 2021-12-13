import { UserService } from './../../user/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  currentUser!: any;
  constructor(public userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.userService.getCurrentUser().subscribe((user) => {
      this.currentUser = user;
    });
  }

  logout(): void {
    this.userService.logout();
    this.router.navigate(['/login']);
  }
}
