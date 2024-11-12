import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class EpouseService {

  constructor(private http: HttpClient) {}

  private apiMariageUrl =
    'http://localhost:9898/sn/uasz/v1/declarationMariage-api/epouses';

  add(epouse: any): Observable<any> {
    return this.http.post<any>(this.apiMariageUrl + '/create', epouse);
  }

  getEpouseById(id: number): Observable<any> {
    return this.http.get<any>(this.apiMariageUrl + '/search/' + id);
  }
  setEpouseById(id: number, newEpouse: any): Observable<String> {
    return this.http.put<String>(this.apiMariageUrl + '/update/' + id, newEpouse);
  }
  getAllEpouse(): Observable<any[]> {
    return this.http.get<any[]>(this.apiMariageUrl + '/read');
  }
  deleteEpouseById(id: number): Observable<String> {
    return this.http.delete<String>(this.apiMariageUrl + '/delete/' + id);
  }
}
