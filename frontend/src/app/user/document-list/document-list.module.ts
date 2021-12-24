import { DocumentListComponent } from './document-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [DocumentListComponent],
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  exports: [DocumentListComponent],
})
export class DocumentListModule {}
