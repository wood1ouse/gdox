import { MEDIUMPASSWORD, STRONGPASSWORD } from './../public/regex';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  filledError: boolean = false;
  backendErrors: string = '';
  passwordState: string = 'weak';

  registerForm: FormGroup = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(private authService: AuthService, private router: Router) {
    this.registerForm.get('password')?.valueChanges.subscribe((p) => {
      if (p.match(STRONGPASSWORD)) {
        this.passwordState = 'strong';
      } else if (p.match(MEDIUMPASSWORD)) {
        this.passwordState = 'medium';
      } else this.passwordState = 'weak';
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (
      (this.registerForm.valid && this.passwordState === 'medium') ||
      this.passwordState === 'strong'
    ) {
      this.authService.register(this.registerForm.value).subscribe({
        next: () => {
          this.router.navigate(['/login']);
        },
        error: (error) => {
          this.filledError = false;
          this.backendErrors = error;
        },
      });
    } else {
      this.filledError = true;
    }
  }
}
