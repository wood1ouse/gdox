import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css'],
})
export class DocumentListComponent implements OnInit {
  documents: Array<any> = [];

  filteredDocument: Array<any> = [];

  loading: boolean = true;

  searchInputForm: FormGroup = new FormGroup({
    searchValue: new FormControl(''),
  });

  constructor(private authService: AuthService, private userSerice: UserService) {}

  ngOnInit(): void {
    this.authService.getUser(this.userSerice.isAuthorized()).subscribe({
      next: (user) => {
        this.loading = false;
        this.documents = user.documents;
        this.filteredDocument = this.documents;
      },
    });

    this.searchInputForm.get('searchValue')?.valueChanges.subscribe((p) => {
      this.filteredDocument = this.performFilter(p);
    });
  }

  performFilter(filterBy: string) {
    return this.documents.filter((document) => {
      return document.type.toLocaleLowerCase().includes(filterBy.toLocaleLowerCase());
    });
  }
}
