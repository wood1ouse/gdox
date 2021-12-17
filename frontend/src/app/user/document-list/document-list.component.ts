import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit {
  documents: Array<any> = []
  loading: boolean = true

  constructor(private authService: AuthService, private userSerice: UserService) { }

  ngOnInit(): void {
    this.authService.getUser(this.userSerice.isAuthorized()).subscribe(user => {
      this.loading = false
      this.documents = user.documents
    })


  }

}

