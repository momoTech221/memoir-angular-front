import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class DefuntService {

  constructor(private http: HttpClient) {}

  private apiLogUrl =
    'http://localhost:8082/sn/uasz/v1/declaration-deces-api/defunts';

  add(defunt: any): Observable<any> {
    return this.http.post<any>(this.apiLogUrl + '/create', defunt);
  }

  getDefuntById(id: number): Observable<any> {
    return this.http.get<any>(this.apiLogUrl + '/search/' + id);
  }
  setDefuntById(id: number, newDefunt: any): Observable<String> {
    return this.http.put<String>(this.apiLogUrl + '/update/' + id, newDefunt);
  }
  getAllDefunts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiLogUrl + '/read');
  }
  deleteDefuntById(id: number): Observable<String> {
    return this.http.delete<String>(this.apiLogUrl + '/delete/' + id);
  }
}
