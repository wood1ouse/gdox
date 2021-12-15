import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  constructor(private http: HttpClient) { }

  createDocument(document: any): Observable<any> {


    return this.http.post('http://localhost:4200/documentlist/create', document)
  }
}
