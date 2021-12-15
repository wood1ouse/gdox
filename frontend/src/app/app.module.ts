import { PassportModule } from './doctype/passport/passport.module';
import { PassportComponent } from './doctype/passport/passport.component';
import { LoginModule } from './login/login.module';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RegisterModule } from './register/register.module';
import { HeaderComponent } from './ui/header/header.component';
import { UserComponent } from './user/user.component';
import { DocumentListComponent } from './user/document-list/document-list.component';
import { DoctypeListComponent } from './doctype/doctype-list/doctype-list.component';
import { DoctypeSwitcherComponent } from './doctype/doctype-switcher/doctype-switcher.component';
import { CriminalrecordComponent } from './doctype/criminalrecord/criminalrecord.component';
import { DrivinglicenseComponent } from './doctype/drivinglicense/drivinglicense.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserComponent,
    DocumentListComponent,
    DoctypeListComponent,
    DoctypeSwitcherComponent,
    CriminalrecordComponent,
    DrivinglicenseComponent,
  ],
  imports: [
    RegisterModule,
    LoginModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CommonModule,
    PassportModule

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
