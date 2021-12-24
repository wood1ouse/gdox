import { Doctypes } from 'src/app/public/doctypes';
import { UserService } from './../../user/user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IUser } from './../../../../../backend/public/types';
import { Component, OnInit } from '@angular/core';
import { FOURNUMS, SIXNUMS } from 'src/app/public/regex';
import { Router } from '@angular/router';
import { DocumentService } from 'src/app/document.service';

@Component({
  selector: 'app-drivinglicense',
  templateUrl: './drivinglicense.component.html',
  styleUrls: ['./drivinglicense.component.css'],
})
export class DrivinglicenseComponent implements OnInit {
  currentUser!: IUser;

  drivingLicenseForm!: FormGroup;

  hasErrors: boolean = false;

  frontendErrors: {
    filled: string;
    passportSeries: string;
    passportNumber: string;
    authorityNumber: string;
    medSertificate: string;
  } = {
    filled: '',
    passportSeries: '',
    passportNumber: '',
    authorityNumber: '',
    medSertificate: '',
  };

  constructor(
    private userService: UserService,
    private router: Router,
    private documentService: DocumentService,
  ) {}

  ngOnInit(): void {
    this.drivingLicenseForm = new FormGroup({
      passportSeries: new FormControl('', [Validators.required, Validators.pattern(FOURNUMS)]),
      passportNumber: new FormControl('', [Validators.required, Validators.pattern(SIXNUMS)]),
      authorityNumber: new FormControl('', [Validators.required, Validators.pattern(FOURNUMS)]),
      registration: new FormControl('', [Validators.required]),
      medSertificate: new FormControl('', [Validators.required, Validators.pattern(SIXNUMS)]),
      photo: new FormControl('', [Validators.required]),
    });
  }

  onChange(event: any): void {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        this.drivingLicenseForm.get('photo')?.setValue(event.target.files[0]);
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  onSubmit(): void {
    this.frontendErrors.filled = this.drivingLicenseForm.invalid ? 'All fields must be filled' : '';

    this.frontendErrors.passportSeries = this.drivingLicenseForm.get('passportSeries')?.invalid
      ? 'Passport Series contains first 4 numbers of your Passport'
      : '';

    this.frontendErrors.passportNumber = this.drivingLicenseForm.get('passportNumber')?.invalid
      ? 'Passport Number contains last 6 numbers of your Passport'
      : '';

    this.frontendErrors.authorityNumber = this.drivingLicenseForm.get('authorityNumber')?.invalid
      ? 'Authority number must contains 4 numbers'
      : '';

    this.frontendErrors.medSertificate = this.drivingLicenseForm.get('medSertificate')?.invalid
      ? 'Medical Sertificate contains 4 numbers'
      : '';

    this.hasErrors = Boolean(...Object.values(this.frontendErrors));

    const formData = new FormData();

    formData.append('userId', this.userService.isAuthorized());
    formData.append('type', Doctypes.DrivingLicense);

    for (let field of Object.keys(this.drivingLicenseForm.value)) {
      formData.append(field, this.drivingLicenseForm.get(field)?.value);
    }

    if (this.drivingLicenseForm.valid) {
      this.documentService.createDocument(formData).subscribe((doc) => {
        this.router.navigate([`/preview/${doc}`]);
      });
    }
  }
}
