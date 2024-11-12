import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  constructor(private http: HttpClient) {}

  private apiMailUrl = 'http://localhost:8080/mail/';

  sendPassword(mail: any): Observable<any> {
    return this.http.post<any>(this.apiMailUrl + 'sendPasswordMail', mail);
  }

  sendWithAttachement(mail: any): Observable<any> {
    return this.http.post<any>(this.apiMailUrl + 'sendWithAttachement', mail);
  }
}
