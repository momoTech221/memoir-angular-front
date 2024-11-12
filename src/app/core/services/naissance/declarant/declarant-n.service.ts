import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class DeclarantNService {

  constructor(private http: HttpClient) {}

  private apiLogUrl =
    'http://localhost:8081/sn/uasz/v1/declarationNaissance-api/declarants';

  add(declarant: any): Observable<any> {
    return this.http.post<any>(this.apiLogUrl + '/create', declarant);
  }

  getDeclarantById(id: number): Observable<any> {
    return this.http.get<any>(this.apiLogUrl + '/search/' + id);
  }
  setDeclarantById(id: number, newDeclarant: any): Observable<String> {
    return this.http.put<String>(this.apiLogUrl + '/update/' + id, newDeclarant);
  }
  getAllDeclarants(): Observable<any[]> {
    return this.http.get<any[]>(this.apiLogUrl + '/read');
  }
  deleteDeclarantById(id: number): Observable<String> {
    return this.http.delete<String>(this.apiLogUrl + '/delete/' + id);
  }
}
