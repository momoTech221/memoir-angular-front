import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class MereNService {

  constructor(private http: HttpClient) {}

  private apiLogUrl =
    'http://localhost:8081/sn/uasz/v1/declarationNaissance-api/meres';

  add(mere: any): Observable<any> {
    return this.http.post<any>(this.apiLogUrl + '/create', mere);
  }

  getMereById(id: number): Observable<any> {
    return this.http.get<any>(this.apiLogUrl + '/search/' + id);
  }
  setMereById(id: number, newMere: any): Observable<String> {
    return this.http.put<String>(this.apiLogUrl + '/update/' + id, newMere);
  }
  getAllMeres(): Observable<any[]> {
    return this.http.get<any[]>(this.apiLogUrl + '/read');
  }
  deleteMereById(id: number): Observable<String> {
    return this.http.delete<String>(this.apiLogUrl + '/delete/' + id);
  }
}
