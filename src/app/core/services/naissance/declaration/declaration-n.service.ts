import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class DeclarationNService {

  constructor(private http: HttpClient) {}

  private apiLogUrl =
    'http://localhost:8081/sn/uasz/v1/declarationNaissance-api/declarationNaissances';

  add(declaration: any): Observable<any> {
    return this.http.post<any>(this.apiLogUrl + '/create', declaration);
  }
  
  verifDeclaration(declaration: any): Observable<any> {
    return this.http.get<any>(this.apiLogUrl + '/verifDeclaration', declaration);
  }

  // verifDeclaration(verifDeclaration: any): Observable<any> {
  //   return this.http.get<any>(this.apiLogUrl + '/verifDeclaration',verifDeclaration);
  // }
  getDeclarantionById(id: number): Observable<any> {
    return this.http.get<any>(this.apiLogUrl + '/search/' + id);
  }
  setDeclarantionById(id: number, newDeclarantion: any): Observable<String> {
    return this.http.put<String>(this.apiLogUrl + '/update/' + id, newDeclarantion);
  }
  getAllDeclarantions(): Observable<any[]> {
    return this.http.get<any[]>(this.apiLogUrl + '/read');
  }
  deleteDeclarantionById(id: number): Observable<String> {
    return this.http.delete<String>(this.apiLogUrl + '/delete/' + id);
  }
}
