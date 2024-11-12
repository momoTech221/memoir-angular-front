import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class DeclarationMariageService {

  constructor(private http: HttpClient) {}

  private apiMariageUrl =
    'http://localhost:9898/sn/uasz/v1/declarationMariage-api/declarationMariages';

  add(declaration: any): Observable<any> {
    return this.http.post<any>(this.apiMariageUrl + '/create', declaration);
  }

  getDeclarationById(id: number): Observable<any> {
    return this.http.get<any>(this.apiMariageUrl + '/search/' + id);
  }
  setDeclarationById(id: number, newDeclaration: any): Observable<String> {
    return this.http.put<String>(this.apiMariageUrl + '/update/' + id, newDeclaration);
  }
  getAllDeclarations(): Observable<any[]> {
    return this.http.get<any[]>(this.apiMariageUrl + '/read');
  }
  deleteDeclarationById(id: number): Observable<String> {
    return this.http.delete<String>(this.apiMariageUrl + '/delete/' + id);
  }
}
