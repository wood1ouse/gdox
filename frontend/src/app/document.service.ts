import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  constructor(private http: HttpClient) { }

  createDocument(document: any): Observable<any> {
    return this.http.post('documentlist/create', document)
  }

  getDocument(userDoc: any) {
    return this.http.post('document', userDoc)
  }

  deleteDocument(userDoc: any) {
    return this.http.post('document/delete', userDoc)
  }
}
