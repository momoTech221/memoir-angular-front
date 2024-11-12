import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RegistreServiceService {
  constructor(private http: HttpClient) {}

  private apiLogUrl =
    'http://localhost:8081/sn/uasz/v1/declarationNaissance-api/registres/';

  add(registre: any): Observable<any> {
    return this.http.post<any>(this.apiLogUrl + 'create', registre);
  }

  getRegistreById(id: number): Observable<any> {
    return this.http.get<any>(this.apiLogUrl + 'search/' + id);
  }
  setRegistreById(id: number, newRegistre: any): Observable<String> {
    return this.http.put<String>(this.apiLogUrl + 'update/' + id, newRegistre);
  }
  getAllRegistres(): Observable<any[]> {
    return this.http.get<any[]>(this.apiLogUrl + 'read');
  }
  deleteRegistreById(id: number): Observable<String> {
    return this.http.delete<String>(this.apiLogUrl + 'delete/' + id);
  }
  getAllAnneeRegistre(): Observable<any[]> {
    return this.http.get<any[]>(this.apiLogUrl + 'allByAneee');
  }
  getIdRegistreByAnnee(annee: string): Observable<any> {
    return this.http.get<any>(this.apiLogUrl + 'getIdByAnnee/' + annee);
  }
}
