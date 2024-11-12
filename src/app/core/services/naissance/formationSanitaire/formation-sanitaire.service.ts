import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FormationSanitaireService {
  constructor(private http: HttpClient) {}

  private apiLogUrl =
    'http://localhost:8081/sn/uasz/v1/declarationNaissance-api/formationSanitaires';

  addFormationSanitaire(centre: any): Observable<any> {
    return this.http.post<any>(this.apiLogUrl + '/create', centre);
  }

  getFormationSanitaireById(id: number): Observable<any> {
    return this.http.get<any>(this.apiLogUrl + '/search/' + id);
  }

  setFormationSanitaireById(id: number, newFormation: any): Observable<String> {
    return this.http.put<String>(
      this.apiLogUrl + '/update/' + id,
      newFormation
    );
  }
  getAllFormationSanitaires(): Observable<any[]> {
    return this.http.get<any[]>(this.apiLogUrl + '/read');
  }
  deleteFormationSanitaireById(id: number): Observable<String> {
    return this.http.delete<String>(this.apiLogUrl + '/delete/' + id);
  }
  getAllFormationNames(): Observable<any[]> {
    return this.http.get<any[]>(this.apiLogUrl + '/allByLibele');
  }
  getIdFormationByLibele(libele: string): Observable<any> {
    return this.http.get<any>(this.apiLogUrl + '/getIdByLibele/' + libele);
  }
}
