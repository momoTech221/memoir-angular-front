import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class TemoinMService {

  constructor(private http: HttpClient) {}

  private apiMariageUrl =
    'http://localhost:9898/sn/uasz/v1/declarationMariage-api/temoins';

  add(temoin: any): Observable<any> {
    return this.http.post<any>(this.apiMariageUrl + '/create', temoin);
  }

  gettemoinById(id: number): Observable<any> {
    return this.http.get<any>(this.apiMariageUrl + '/search/' + id);
  }
  settemoinById(id: number, newTemoin: any): Observable<String> {
    return this.http.put<String>(this.apiMariageUrl + '/update/' + id, newTemoin);
  }
  getAlltemoin(): Observable<any[]> {
    return this.http.get<any[]>(this.apiMariageUrl + '/read');
  }
  deletetemoinById(id: number): Observable<String> {
    return this.http.delete<String>(this.apiMariageUrl + '/delete/' + id);
  }
}
