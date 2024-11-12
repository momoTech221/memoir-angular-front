import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

  getToken() {
    return localStorage.getItem('token');
  }
  setToken(token: string) {
    return localStorage.setItem('token', token);
  }

  removeToken() {
    return localStorage.removeItem('token');
  }

  clearAllData() {
    return localStorage.clear();
  }

  getCurrentUser() {
    return localStorage.getItem('currentUser');
  }
  setCurrentUser(fullName: any) {
    return localStorage.setItem('currentUser', fullName);
  }
  getTypeUser() {
    return localStorage.getItem('type');
  }
  setTypeUser(type: any) {
    return localStorage.setItem('type', type);
  }

  logout() {
    localStorage.clear();
  }
}
