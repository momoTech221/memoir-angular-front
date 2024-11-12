import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class MentionMService {

  constructor(private http: HttpClient) {}

  private apiLogUrl =
  'http://localhost:9898/sn/uasz/v1/declarationMariage-api/mentions';

  add(mention: any): Observable<any> {
    return this.http.post<any>(this.apiLogUrl + '/create', mention);
  }

  getMentionById(id: number): Observable<any> {
    return this.http.get<any>(this.apiLogUrl + '/search/' + id);
  }
  setMentionById(id: number, newMention: any): Observable<String> {
    return this.http.put<String>(this.apiLogUrl + '/update/' + id, newMention);
  }
  getAllMentions(): Observable<any[]> {
    return this.http.get<any[]>(this.apiLogUrl + '/read');
  }
  deleteMentionById(id: number): Observable<String> {
    return this.http.delete<String>(this.apiLogUrl + '/delete/' + id);
  }
}
