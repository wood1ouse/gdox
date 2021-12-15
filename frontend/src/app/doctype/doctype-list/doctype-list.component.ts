import { DoctypeListService } from './doctype-list.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctype-list',
  templateUrl: './doctype-list.component.html',
  styleUrls: ['./doctype-list.component.css']
})
export class DoctypeListComponent implements OnInit {
  doctypes: Array<any> = []

  constructor(private doctypeListService: DoctypeListService) { }

  ngOnInit(): void {
    this.doctypeListService.getDoctypes().subscribe(dtypes => {
      this.doctypes = dtypes
    })
  }

}
