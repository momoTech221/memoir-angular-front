import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private http: HttpClient) {}

  private apiLogUrl = 'http://localhost:8087/sn/uasz/v1/auth-api/roles';

  add(role: any): Observable<any> {
    return this.http.post<any>(this.apiLogUrl + '/create', role);
  }

  getRoleById(id: number): Observable<any> {
    return this.http.get<any>(this.apiLogUrl + '/search/' + id);
  }
  setRoleById(id: number, newRole: any): Observable<String> {
    return this.http.patch<String>(this.apiLogUrl + '/update/' + id, newRole);
  }
  getAllRoles(): Observable<any[]> {
    return this.http.get<any[]>(this.apiLogUrl + '/read');
  }
  deleteRoleById(id: number): Observable<String> {
    return this.http.delete<String>(this.apiLogUrl + '/delete/' + id);
  }
}
