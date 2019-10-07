import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  constructor() {}

  setUserToken(userToken) {
    localStorage.setItem('userToken', userToken);
  }

  setIdUser(id) {
    localStorage.setItem('id', id);
  }

  getIdUser() {
    return localStorage.getItem('id');
  }

  getUserToken() {
    return localStorage.getItem('userToken');
  }
  setAdminToken(adminToken) {
    localStorage.setItem('adminToken', adminToken);
  }

  getAdminToken() {
    return localStorage.getItem('adminToken');
  }

  deleteToken() {
    localStorage.clear();
  }

  deleteUserToken() {
    localStorage.removeItem('userToken');
  }

  getUserPayload() {
    const token = this.getUserToken();

    let payload;
    if (token) {
      payload = token.split('.')[1];
      payload = JSON.parse(window.atob(payload));
    }
    return payload;
  }
}
