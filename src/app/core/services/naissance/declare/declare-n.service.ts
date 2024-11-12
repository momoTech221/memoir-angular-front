import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class DeclareNService {

  constructor(private http: HttpClient) {}

  private apiLogUrl =
    'http://localhost:8081/sn/uasz/v1/declarationNaissance-api/declares';

  add(declare: any): Observable<any> {
    return this.http.post<any>(this.apiLogUrl + '/create', declare);
  }

  getDeclareById(id: number): Observable<any> {
    return this.http.get<any>(this.apiLogUrl + '/search/' + id);
  }
  setDeclareById(id: number, newDeclare: any): Observable<String> {
    return this.http.put<String>(this.apiLogUrl + '/update/' + id, newDeclare);
  }
  getAllDeclares(): Observable<any[]> {
    return this.http.get<any[]>(this.apiLogUrl + '/read');
  }
  deleteDeclareById(id: number): Observable<String> {
    return this.http.delete<String>(this.apiLogUrl + '/delete/' + id);
  }
}
