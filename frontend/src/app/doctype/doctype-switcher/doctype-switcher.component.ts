import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Doctypes } from 'src/app/public/doctypes';

@Component({
  selector: 'app-doctype-switcher',
  templateUrl: './doctype-switcher.component.html',
  styleUrls: ['./doctype-switcher.component.css'],
})
export class DoctypeSwitcherComponent implements OnInit {
  Doctypes: any = Doctypes;

  doctype!: string | null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((doctype) => {
      this.doctype = doctype.get('doctype');
    });
  }
}
