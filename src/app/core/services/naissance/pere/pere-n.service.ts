import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class PereNService {

  constructor(private http: HttpClient) {}

  private apiLogUrl =
    'http://localhost:8081/sn/uasz/v1/declarationNaissance-api/peres';

  add(pere: any): Observable<any> {
    return this.http.post<any>(this.apiLogUrl + '/create', pere);
  }

  getPereById(id: number): Observable<any> {
    return this.http.get<any>(this.apiLogUrl + '/search/' + id);
  }
  setPereById(id: number, newPere: any): Observable<String> {
    return this.http.put<String>(this.apiLogUrl + '/update/' + id, newPere);
  }
  getAllPeres(): Observable<any[]> {
    return this.http.get<any[]>(this.apiLogUrl + '/read');
  }
  deletePereById(id: number): Observable<String> {
    return this.http.delete<String>(this.apiLogUrl + '/delete/' + id);
  }
}
