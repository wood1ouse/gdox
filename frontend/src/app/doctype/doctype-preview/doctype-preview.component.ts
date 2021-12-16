import { Doctypes } from 'src/app/public/doctypes';

import { UserService } from './../../user/user.service';
import { DocumentService } from 'src/app/document.service';

import { ActivatedRoute, Router } from '@angular/router';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { jsPDF } from 'jspdf';

@Component({
  selector: 'app-doctype-preview',
  templateUrl: './doctype-preview.component.html',
  styleUrls: ['./doctype-preview.component.css'],
})
export class DoctypePreviewComponent implements OnInit {
  @ViewChild('doc') doc!: ElementRef;

  currentDocument!: any;
  Doctypes: any = Doctypes;
  constructor(
    private route: ActivatedRoute,
    private documentService: DocumentService,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((p) => {
      this.documentService
        .getDocument({
          _id: this.userService.isAuthorized(),
          documentId: p.get('id'),
        })
        .subscribe((document) => {
          this.currentDocument = document;
        });
    });
  }

  downloadAsPdf() {
    const pdfDoc = new jsPDF({orientation: 'p', unit: 'pt'});

    const doc = this.doc.nativeElement;

    pdfDoc.html(doc, {callback: (pdf) => {
      pdf.save(`${this.currentDocument.type}_${this.currentDocument.firstName}_${this.currentDocument.lastName}.pdf`)
    }});

  }

  deleteDocument() {
    this.documentService.deleteDocument({_id: this.userService.isAuthorized(), documentId: this.currentDocument.documentId})
    this.router.navigate([`/user/${this.userService.isAuthorized()}`])
  }
}
