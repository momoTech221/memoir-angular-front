import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CentreService {
  constructor(private http: HttpClient) {}

  private apiMariageUrl =
    'http://localhost:9898/sn/uasz/v1/declarationMariage-api/centres';

  add(centre: any): Observable<any> {
    return this.http.post<any>(this.apiMariageUrl + '/create', centre);
  }

  getCentreById(id: number): Observable<any> {
    return this.http.get<any>(this.apiMariageUrl + '/search/' + id);
  }
  setCentreById(id: number, newCentre: any): Observable<String> {
    return this.http.put<String>(this.apiMariageUrl + '/update/' + id, newCentre);
  }
  getAllCentres(): Observable<any[]> {
    return this.http.get<any[]>(this.apiMariageUrl + '/read');
  }
  deleteCentreById(id: number): Observable<String> {
    return this.http.delete<String>(this.apiMariageUrl + '/delete/' + id);
  }
  getAllCentreName(): Observable<any[]> {
    return this.http.get<any[]>(this.apiMariageUrl + '/allByLibele');
  }
  getIdCentreByName(liblele: string): Observable<any> {
    return this.http.get<any>(this.apiMariageUrl + '/getIdByLibele/' + liblele);
  }
}
