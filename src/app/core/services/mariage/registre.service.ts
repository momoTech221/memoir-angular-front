import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RegistreService {
  constructor(private http: HttpClient) {}

  private apiMariageUrl =
    'http://localhost:9898/sn/uasz/v1/declarationMariage-api/registres/';

  add(registre: any): Observable<any> {
    return this.http.post<any>(this.apiMariageUrl + 'create', registre);
  }

  getRegistreById(id: number): Observable<any> {
    return this.http.get<any>(this.apiMariageUrl + 'search/' + id);
  }
  setRegistreById(id: number, newRegistre: any): Observable<String> {
    return this.http.put<String>(this.apiMariageUrl + 'update/' + id, newRegistre);
  }
  getAllRegistres(): Observable<any[]> {
    return this.http.get<any[]>(this.apiMariageUrl + 'read');
  }
  deleteRegistreById(id: number): Observable<String> {
    return this.http.delete<String>(this.apiMariageUrl + 'delete/' + id);
  }
  getAllAnneeRegistre(): Observable<any[]> {
    return this.http.get<any[]>(this.apiMariageUrl + 'allByAneee');
  }
  getIdRegistreByAnnee(annee: string): Observable<any> {
    return this.http.get<any>(this.apiMariageUrl + 'getIdByAnnee/' + annee);
  }
}
