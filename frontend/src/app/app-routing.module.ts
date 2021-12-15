import { PassportPreviewComponent } from './doctype-preview/passport-preview/passport-preview.component';
import { DoctypeSwitcherComponent } from './doctype/doctype-switcher/doctype-switcher.component';
import { DoctypeListComponent } from './doctype/doctype-list/doctype-list.component';
import { LoginGuard } from './login/login.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';
import { UserGuard } from './user/user.guard';

const routes: Routes = [
  {path: '', redirectTo:'/login', pathMatch: "full"},
  {path: 'documentlist', component: DoctypeListComponent, pathMatch: 'full'},
  {path: 'documentlist/:doctype', component:DoctypeSwitcherComponent},
  {path: 'login', component: LoginComponent, canActivate: [LoginGuard]},
  {path: 'register', component: RegisterComponent},
  {path: 'user/:id', component: UserComponent, canActivate: [UserGuard]},
  {path: 'preview/Passport/:id', component: PassportPreviewComponent}
  // {path: "**", component: UserComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
