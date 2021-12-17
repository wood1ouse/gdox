import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DrivinglicenseComponent } from './drivinglicense.component';

@NgModule({
  declarations: [DrivinglicenseComponent],
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  exports: [DrivinglicenseComponent],
})
export class DrivinglicenseModule {}
