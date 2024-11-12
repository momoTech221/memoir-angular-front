import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class JugementNService {

  constructor(private http: HttpClient) {}

  private apiLogUrl =
    'http://localhost:8081/sn/uasz/v1/declarationNaissance-api/jugements';

  add(jugement: any): Observable<any> {
    return this.http.post<any>(this.apiLogUrl + '/create', jugement);
  }

  getJugementById(id: number): Observable<any> {
    return this.http.get<any>(this.apiLogUrl + '/search/' + id);
  }
  setJugementById(id: number, newJugement: any): Observable<String> {
    return this.http.put<String>(this.apiLogUrl + '/update/' + id, newJugement);
  }
  getAllJugements(): Observable<any[]> {
    return this.http.get<any[]>(this.apiLogUrl + '/read');
  }
  deleteJugementById(id: number): Observable<String> {
    return this.http.delete<String>(this.apiLogUrl + '/delete/' + id);
  }
}
