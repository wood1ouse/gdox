import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Component } from '@angular/core';
import { UserService } from '../user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  error: string = '';

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private router: Router,
  ) {}

  loginForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  onSubmit(): void {
    this.authService.login(this.loginForm.value).subscribe({
      next: (response) => {
        this.userService.setCurrentUser(response.body);
        this.userService.getCurrentUser().subscribe((user) => {
          this.router.navigate([`/user/${user._id}`]);
        });
      },
      error: (error) => {
        this.error = error;
      },
    });
  }
}
