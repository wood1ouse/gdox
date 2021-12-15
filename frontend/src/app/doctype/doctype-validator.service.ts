import { AbstractControl, FormControl } from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DoctypeValidatorService {
  constructor() {}

  dateValidator(date: AbstractControl) {
    const birthDate = new Date(date.value)
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }


    if (age < 14) {
      return {dateValidator: {valid: true}};
    }

    return null
  }
}
