import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class TemoinDService {

  constructor(private http: HttpClient) {}

  private apiLogUrl =
    'http://localhost:8082/sn/uasz/v1/declaration-deces-api/temoins';

  add(temoin: any): Observable<any> {
    return this.http.post<any>(this.apiLogUrl + '/create', temoin);
  }

  getTemoinById(id: number): Observable<any> {
    return this.http.get<any>(this.apiLogUrl + '/search/' + id);
  }
  setTemoinById(id: number, newTemoin: any): Observable<String> {
    return this.http.put<String>(this.apiLogUrl + '/update/' + id, newTemoin);
  }
  getAllTemoins(): Observable<any[]> {
    return this.http.get<any[]>(this.apiLogUrl + '/read');
  }
  deleteTemoinById(id: number): Observable<String> {
    return this.http.delete<String>(this.apiLogUrl + '/delete/' + id);
  }
}
