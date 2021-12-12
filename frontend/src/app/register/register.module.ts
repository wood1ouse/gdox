import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register.component';

@NgModule({
  imports: [ReactiveFormsModule, CommonModule, RouterModule],
  exports: [RegisterComponent],
  declarations: [RegisterComponent],
  providers: [],
})

export class RegisterModule {
}
