import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  error: string = ''
  constructor(private authService: AuthService) {}

  loginForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  ngOnInit(): void {}

  onSubmit(): void {
    this.authService.login(this.loginForm.value).subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (error) => {
        this.error = error
      },
    });
  }
}
