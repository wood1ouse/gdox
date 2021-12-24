import { Doctypes } from 'src/app/public/doctypes';
import { DoctypeValidatorService } from './../doctype-validator.service';
import { IUser } from './../../../../../backend/public/types';
import { UserService } from './../../user/user.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TAXCODE } from 'src/app/public/regex';
import { DocumentService } from 'src/app/document.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-passport',
  templateUrl: './passport.component.html',
  styleUrls: ['./passport.component.css'],
})
export class PassportComponent implements OnInit {
  currentUser!: IUser;

  passportForm!: FormGroup;

  frontendErrors: { filled: string; taxCode: string; bornDate: string } = {
    filled: '',
    taxCode: '',
    bornDate: '',
  };

  hasErrors: boolean = false;

  constructor(
    private userService: UserService,
    private validator: DoctypeValidatorService,
    private documentService: DocumentService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.userService.getCurrentUser().subscribe((user) => {
      this.currentUser = user;

      this.passportForm = new FormGroup({
        gender: new FormControl('', [Validators.required]),
        firstName: new FormControl(user.firstName, [Validators.required]),
        lastName: new FormControl(user.lastName),
        taxCode: new FormControl('', [Validators.required, Validators.pattern(TAXCODE)]),
        bornCountry: new FormControl('', [Validators.required]),
        bornCity: new FormControl('', [Validators.required]),
        bornDate: new FormControl('', [this.validator.dateValidator]),
        photo: new FormControl('', [Validators.required]),
      });
    });
  }

  onChange(event: any): void {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        this.passportForm.get('photo')?.setValue(event.target.files[0]);
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  onSubmit(): void {
    this.frontendErrors.filled = this.passportForm.invalid ? 'All fields must be filled' : '';

    this.frontendErrors.taxCode = this.passportForm.get('taxCode')?.invalid
      ? 'Tax code must have length of 10'
      : '';

    this.frontendErrors.bornDate = this.passportForm.get('bornDate')?.invalid
      ? 'You must be at least 14 years'
      : '';

    this.hasErrors = Boolean(...Object.values(this.frontendErrors));

    const formData = new FormData();

    formData.append('userId', this.userService.isAuthorized());
    formData.append('type', Doctypes.Passport);

    for (let field of Object.keys(this.passportForm.value)) {
      if (field === 'bornDate') {
        formData.append(field, this.passportForm.get(field)?.value.toLocaleDateString());
      } else {
        formData.append(field, this.passportForm.get(field)?.value);
      }
    }

    if (this.passportForm.valid) {
      this.documentService.createDocument(formData).subscribe((doc) => {
        this.router.navigate([`/preview/${doc}`]);
      });
    }
  }
}
