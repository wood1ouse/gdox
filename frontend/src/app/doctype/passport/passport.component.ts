import { IUser } from './../../../../../backend/public/types';
import { UserService } from './../../user/user.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TAXCODE } from 'src/app/public/regex';

@Component({
  selector: 'app-passport',
  templateUrl: './passport.component.html',
  styleUrls: ['./passport.component.css'],
})
export class PassportComponent implements OnInit {
  currentUser!: IUser;
  passportForm!: FormGroup;
  frontendErrors: { filled: string; taxCode: string } = {
    filled: '',
    taxCode: '',
  };
  hasErrors: boolean = false
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getCurrentUser().subscribe((user) => {
      this.currentUser = user;

      this.passportForm = new FormGroup({
        gender: new FormControl(''),
        firstName: new FormControl(user.firstName),
        lastName: new FormControl(user.lastName),
        taxCode: new FormControl('', [
          Validators.required,
          Validators.pattern(TAXCODE),
        ]),
        bornCountry: new FormControl('', [Validators.required]),
        bornCity: new FormControl('', [Validators.required]),
        bornDate: new FormControl('', [Validators.required]),
        photo: new FormControl('', [Validators.required]),
      });
    });
  }

  onSubmit(): void {
    if (this.passportForm.invalid) {
      this.frontendErrors.filled = 'All fields must be filled';

      if (this.passportForm.get('taxCode')?.invalid) {
        this.frontendErrors.taxCode = 'Tax code must have length of 10';
      } else {
        this.frontendErrors.taxCode = '';
      }

    } else {
      this.frontendErrors.filled = '';
    }

    this.hasErrors = Boolean(...Object.values(this.frontendErrors))

    

  }

}
