import { UserService } from './../../user/user.service';
import { Doctypes } from 'src/app/public/doctypes';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FOURNUMS, SIXNUMS } from 'src/app/public/regex';
import { DocumentService } from 'src/app/document.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criminalrecord',
  templateUrl: './criminalrecord.component.html',
  styleUrls: ['./criminalrecord.component.css'],
})
export class CriminalrecordComponent implements OnInit {
  criminalRecorForm!: FormGroup;

  currentUser!: any;

  frontendErrors: {
    passportNumber: string;
    authorityNumber: string;
    filled: string;
  } = {
    filled: '',
    passportNumber: '',
    authorityNumber: '',
  };

  hasErrors: boolean = false;

  constructor(
    private userService: UserService,
    private documentService: DocumentService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.criminalRecorForm = new FormGroup({
      passportNumber: new FormControl('', [Validators.required, Validators.pattern(SIXNUMS)]),
      authorityNumber: new FormControl('', [Validators.required, Validators.pattern(FOURNUMS)]),
      registration: new FormControl('', [Validators.required]),
    });
  }

  onSubmit(): void {
    this.frontendErrors.filled = this.criminalRecorForm.invalid ? 'All fields must be filled' : '';

    this.frontendErrors.passportNumber = this.criminalRecorForm.get('passportNumber')?.invalid
      ? 'Passport number must contain 6 numbers'
      : '';

    this.frontendErrors.authorityNumber = this.criminalRecorForm.get('authorityNumber')?.invalid
      ? 'Authority number must contain 4 numbers'
      : '';

    this.hasErrors = Boolean(...Object.values(this.frontendErrors));

    const formData = new FormData();

    formData.append('userId', this.userService.isAuthorized());
    formData.append('type', Doctypes.CertificateOfNoCriminalRecord);

    for (let field of Object.keys(this.criminalRecorForm.value)) {
      formData.append(field, this.criminalRecorForm.get(field)?.value);
    }

    if (this.criminalRecorForm.valid) {
      this.documentService.createDocument(formData).subscribe((doc) => {
        this.router.navigate([`/preview/${doc}`]);
      });
    }
  }
}
