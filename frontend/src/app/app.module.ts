import { LoginModule } from './login/login.module';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RegisterModule } from './register/register.module';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    RegisterModule,
    LoginModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
