import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class DeclarationDService {

  constructor(private http: HttpClient) {}

  private apiLogUrl =
    'http://localhost:8082/sn/uasz/v1/declaration-deces-api/declarationDeces';

  add(declaration: any): Observable<any> {
    return this.http.post<any>(this.apiLogUrl + '/create', declaration);
  }

  getDeclarationById(id: number): Observable<any> {
    return this.http.get<any>(this.apiLogUrl + '/search/' + id);
  }
  setDeclarationById(id: number, newDeclaration: any): Observable<String> {
    return this.http.put<String>(this.apiLogUrl + '/update/' + id, newDeclaration);
  }
  getAllDeclarations(): Observable<any[]> {
    return this.http.get<any[]>(this.apiLogUrl + '/read');
  }
  deleteDeclarationById(id: number): Observable<String> {
    return this.http.delete<String>(this.apiLogUrl + '/delete/' + id);
  }
}
