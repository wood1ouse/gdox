import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';
import { RegisterComponent } from './register.component';

@NgModule({
  imports: [ReactiveFormsModule],
  exports: [RegisterComponent],
  declarations: [RegisterComponent],
  providers: [HttpClientModule],
})

export class RegisterModule {
}
