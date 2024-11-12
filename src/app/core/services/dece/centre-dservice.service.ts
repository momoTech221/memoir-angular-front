import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class CentreDServiceService {

  constructor(private http: HttpClient) {}

  private apiLogUrl =
    'http://localhost:8082/sn/uasz/v1/declaration-deces-api/centres';

  add(centre: any): Observable<any> {
    return this.http.post<any>(this.apiLogUrl + '/create', centre);
  }

  getCentreById(id: number): Observable<any> {
    return this.http.get<any>(this.apiLogUrl + '/search/' + id);
  }
  setCentreById(id: number, newCentre: any): Observable<String> {
    return this.http.put<String>(this.apiLogUrl + '/update/' + id, newCentre);
  }
  getAllCentres(): Observable<any[]> {
    return this.http.get<any[]>(this.apiLogUrl + '/read');
  }
  deleteCentreById(id: number): Observable<String> {
    return this.http.delete<String>(this.apiLogUrl + '/delete/' + id);
  }
  getAllCentreName(): Observable<any[]> {
    return this.http.get<any[]>(this.apiLogUrl + '/allByLibele');
  }
  getIdCentreByName(liblele: string): Observable<any> {
    return this.http.get<any>(this.apiLogUrl + '/getIdByLibele/' + liblele);
  }
}
