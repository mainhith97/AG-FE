import { Injectable } from '@angular/core';
import { ILogin, IRegister, User } from '../shared/interface';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { environment as config } from '../../environments/environment';

const adminToken = localStorage.getItem('adminToken');
console.log(adminToken);
const userToken = localStorage.getItem('userToken');
console.log(userToken);
const farmerToken = localStorage.getItem('farmerToken');
console.log(farmerToken);

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: `Bearer ${userToken}`
  })
};

@Injectable()
export class DataService {

  constructor(
    private http: HttpClient
  ) { }

  apiUrl = config.apiUrl;
  adminPrefix = 'admin';
  userPrefix = 'user';
  farmerPrefix = 'farmer';
// admin login
  postLogin(adminLogin: ILogin): Observable<boolean> {
    return this.http.post<boolean>(`${this.apiUrl}/${this.adminPrefix}/login`, adminLogin)
      .pipe(
        map(response => {
          return response;
        }),
        catchError(this.handleError)
      );
  }
// user login
  postLogin2(userLogin: ILogin): Observable<boolean> {
    return this.http.post<boolean>(`${this.apiUrl}/action/login/`, userLogin)
      .pipe(
        map(response => {
          return response;
        }),
        catchError(this.handleError)
      );
  }
// user đăng ký
  postRegister(userRegister: IRegister): Observable<boolean> {
    userRegister.role = 'distributor';
    return this.http.post<boolean>(`${this.apiUrl}/${this.userPrefix}/`, userRegister)
      .pipe(
        map(response => {
          return response;
        }),
        catchError(this.handleError)
      );
  }
  // farmer đăng ký
  postRegister2(farmerRegister: IRegister): Observable<boolean> {
    farmerRegister.role = 'farmer';
    return this.http.post<boolean>(`${this.apiUrl}/${this.userPrefix}/`, farmerRegister)
      .pipe(
        map(response => {
          return response;
        }),
        catchError(this.handleError)
      );
  }
// lấy hồ sơ user
  getProfile(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${this.userPrefix}/${localStorage.getItem('id')}/`)
      .pipe(
        map(response => {
          return response;
        }),
        catchError(this.handleError)
      );
  }

  // lấy danh sách user
  getListUser(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/user/`)
      .pipe(
        map(response => {
          return response;
        }),
        catchError(this.handleError)
      );
  }
  // lấy danh sách sản phẩm
  getListProduct(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/product/`)
      .pipe(
        map(response => {
          return response;
        }),
        catchError(this.handleError)
      );
  }
  handleError(error: HttpErrorResponse) {
    return throwError(error.error);
  }
}
