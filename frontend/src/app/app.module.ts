import { DocumentListModule } from './user/document-list/document-list.module';
import { DrivinglicenseModule } from './doctype/drivinglicense/drivinglicense.module';
import { CriminalrecordModule } from './doctype/criminalrecord/criminalrecord.module';
import { PassportModule } from './doctype/passport/passport.module';
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
import { DoctypeListComponent } from './doctype/doctype-list/doctype-list.component';
import { DoctypeSwitcherComponent } from './doctype/doctype-switcher/doctype-switcher.component';
import { DoctypePreviewComponent } from './doctype/doctype-preview/doctype-preview.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserComponent,
    DoctypeListComponent,
    DoctypeSwitcherComponent,
    DoctypePreviewComponent,
  ],
  imports: [
    RegisterModule,
    LoginModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    DocumentListModule,
    CommonModule,
    PassportModule,
    CriminalrecordModule,
    DrivinglicenseModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
