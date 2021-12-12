import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup = new FormGroup({
    "firstName": new FormControl(),
    "lastName": new FormControl(),
    "email": new FormControl(),
    "password": new FormControl(),
  })

  constructor(private authService: AuthService) { }

  ngOnInit(): void {

  }

  onSubmit(): void {
    this.authService.register(this.registerForm.value).subscribe()

  }

}
