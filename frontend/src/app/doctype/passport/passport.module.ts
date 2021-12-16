import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { PassportComponent } from './passport.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

@NgModule({
  declarations: [PassportComponent],
  imports: [ ReactiveFormsModule, CommonModule, BrowserAnimationsModule,
    BsDatepickerModule.forRoot(), RouterModule],
  exports: [PassportComponent]
})
export class PassportModule {}
