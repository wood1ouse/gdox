import { UserService } from './../../user/user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DocumentService } from 'src/app/document.service';

@Component({
  selector: 'app-passport-preview',
  templateUrl: './passport-preview.component.html',
  styleUrls: ['./passport-preview.component.css'],
})
export class PassportPreviewComponent implements OnInit {
  currentDocument!: any;
  constructor(
    private route: ActivatedRoute,
    private documentService: DocumentService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((p) => {
      this.documentService
        .getDocument({
          _id: this.userService.isAuthorized(),
          documentId: p.get('id'),
        })
        .subscribe((document) => {
          console.log(document);

          this.currentDocument = document;
        });
    });
  }
}
