import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class EpouxService {

  constructor(private http: HttpClient) {}

  private apiMariageUrl =
    'http://localhost:9898/sn/uasz/v1/declarationMariage-api/epoux';

  add(epoux: any): Observable<any> {
    return this.http.post<any>(this.apiMariageUrl + '/create', epoux);
  }

  getepouxById(id: number): Observable<any> {
    return this.http.get<any>(this.apiMariageUrl + '/search/' + id);
  }
  setepouxById(id: number, newEpoux: any): Observable<String> {
    return this.http.put<String>(this.apiMariageUrl + '/update/' + id, newEpoux);
  }
  getAllepoux(): Observable<any[]> {
    return this.http.get<any[]>(this.apiMariageUrl + '/read');
  }
  deleteepouxById(id: number): Observable<String> {
    return this.http.delete<String>(this.apiMariageUrl + '/delete/' + id);
  }
}
