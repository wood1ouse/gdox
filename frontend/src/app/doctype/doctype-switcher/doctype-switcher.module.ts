import { PassportModule } from './../passport/passport.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    PassportModule
  ]
})
export class DoctypeSwitcherModule { }
