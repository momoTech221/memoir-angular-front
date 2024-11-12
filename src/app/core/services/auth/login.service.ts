import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  private apiLogUrl = 'http://localhost:8087/sn/uasz/v1/auth-api/';

  log(log: any): Observable<any> {
    return this.http.post<any>(this.apiLogUrl + 'users/login', log);
  }

  register(register: any): Observable<any> {
    return this.http.post<any>(this.apiLogUrl + 'users/register', register);
  }

  addUser(register: any): Observable<any> {
    return this.http.post<any>(this.apiLogUrl + 'users/addUser', register);
  }

  getUserById(id: number): Observable<any> {
    return this.http.get<any>(this.apiLogUrl + 'users/search/' + id);
  }

  getIdUserByEmail(mail: string): Observable<any> {
    return this.http.get<any>(this.apiLogUrl+'users/getUserByEmail/' + mail);
  }

  setUserById(id: number, newUser: any): Observable<String> {
    return this.http.patch<String>(
      this.apiLogUrl + 'users/update/' + id,
      newUser
    );
  }

  setPassword(id: number, newUser: any): Observable<String> {
    return this.http.patch<String>(
      this.apiLogUrl + 'users/setPassword/' + id,
      newUser
    );
  }

  bloquer(id: number): Observable<String> {
    return this.http.patch<String>(this.apiLogUrl + 'users/bloquer/' + id, id);
  }
  debloquer(id: number): Observable<String> {
    return this.http.patch<String>(
      this.apiLogUrl + 'users/debloquer/' + id,
      id
    );
  }

  deleteUserById(id: number): Observable<String> {
    return this.http.delete<String>(this.apiLogUrl + 'users/delete/' + id);
  }

  getAllUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiLogUrl + 'users/read');
  }

  getInactiveUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiLogUrl + 'users/read/inactifs');
  }
  getActiveUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiLogUrl + 'users/read/actifs');
  }
}
