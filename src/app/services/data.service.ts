import { Injectable } from '@angular/core';
import { ILogin, IRegister, User, Profile, Product } from '../shared/interface';
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
  userPrefix = 'user';
  farmerPrefix = 'farmer';
  // login
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
  // edit Profile
  updateProfile(value: Profile): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${this.userPrefix}/${localStorage.getItem('id')}/`, value)
      .pipe(
        map(response => {
          return response;
        }),
        catchError(this.handleError)
      );
  }
  // admin lấy danh sách user
  getListUser(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/user/`)
      .pipe(
        map(response => {
          return response;
        }),
        catchError(this.handleError)
      );
  }
  // admin lấy danh sách sản phẩm
  getListProduct(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/product/`)
      .pipe(
        map(response => {
          return response;
        }),
        catchError(this.handleError)
      );
  }
  // admin lấy lịch sử mua hàng
  getHistory(): Observable<boolean> {
    return this.http.get<boolean>(`${this.apiUrl}/history/`)
      .pipe(
        map(response => {
          return response;
        }),
        catchError(this.handleError)
      );
  }

  // admin change status giao hàng
  changeStatus(id: number): Observable<boolean> {
    // tslint:disable-next-line: object-literal-key-quotes
    const data = { 'status': 'Giao hàng thành công' };
    return this.http.put<boolean>(`${this.apiUrl}/history/${id}/`, data)
      .pipe(
        map(response => {
          return response;
        }),
        catchError(this.handleError)
      );
  }
  // farmer lấy danh sách order
  getListOrder(id: number): Observable<boolean> {
    return this.http.get<boolean>(`${this.apiUrl}/order/${id}/retrieve_by_farmer/`)
      .pipe(
        map(response => {
          return response;
        }),
        catchError(this.handleError)
      );
  }

  // farmer accept order
  acceptOrder(id: number): Observable<boolean> {
    // tslint:disable-next-line: object-literal-key-quotes
    const data = { 'status': 'Chấp nhận' };
    return this.http.put<boolean>(`${this.apiUrl}/order/${id}/`, data)
      .pipe(
        map(response => {
          return response;
        }),
        catchError(this.handleError)
      );
  }
  // farmer decline order
  declineOrder(id: number): Observable<boolean> {
    // tslint:disable-next-line: object-literal-key-quotes
    const data = { 'status': 'Từ chối' };
    return this.http.put<boolean>(`${this.apiUrl}/order/${id}/`, data)
      .pipe(
        map(response => {
          return response;
        }),
        catchError(this.handleError)
      );
  }
  // farmer dem so don hang chua xem
  getUnseenOrder(id: number): Observable<boolean> {
    return this.http.get<boolean>(`${this.apiUrl}/order/${id}/get_unseen_orders/`)
      .pipe(
        map(response => {
          return response;
        }),
        catchError(this.handleError)
      );
  }
  // admin lấy danh sách order
  getOrder(): Observable<boolean> {
    return this.http.get<boolean>(`${this.apiUrl}/order/`)
      .pipe(
        map(response => {
          return response;
        }),
        catchError(this.handleError)
      );
  }

  // farmer lấy danh sách sp
  getListProductbyFarmer(id: number): Observable<boolean> {
    return this.http.get<boolean>(`${this.apiUrl}/product/${id}/list_by_farmer/`)
      .pipe(
        map(response => {
          return response;
        }),
        catchError(this.handleError)
      );
  }

  // farmer lấy lịch sử đặt hàng
  getListHistorybyFarmer(id: number): Observable<boolean> {
    return this.http.get<boolean>(`${this.apiUrl}/history/${id}/list_by_farmer/`)
      .pipe(
        map(response => {
          return response;
        }),
        catchError(this.handleError)
      );
  }
  // admin lấy danh sách comment
  getComment(): Observable<boolean> {
    return this.http.get<boolean>(`${this.apiUrl}/comment/`)
      .pipe(
        map(response => {
          return response;
        }),
        catchError(this.handleError)
      );
  }
  // admin xoa cmt
  remove(id): Observable<boolean> {
    return this.http.delete<boolean>(`${this.apiUrl}/comment/${id}/`)
      .pipe(
        map(response => {
          return response;
        }),
        catchError(this.handleError)
      );
  }
  // farmer lấy danh sách comment
  getListComment(id: number): Observable<boolean> {
    return this.http.get<boolean>(`${this.apiUrl}/comment/${id}/retrieve_by_farmer/`)
      .pipe(
        map(response => {
          return response;
        }),
        catchError(this.handleError)
      );
  }
  // list farmer
  getListFarmer(): Observable<boolean> {
    return this.http.get<boolean>(`${this.apiUrl}/user/list_farmer/`)
      .pipe(
        map(response => {
          return response;
        }),
        catchError(this.handleError)
      );
  }
  // admin create product
    createProduct(product: Product): Observable<boolean> {
    return this.http.post<boolean>(`${this.apiUrl}/product/`, product)
      .pipe(
        map(response => {
          return response;
        }),
        catchError(this.handleError)
      );
  }
  // admin create product
  editProduct(product: Product): Observable<boolean> {
    return this.http.post<boolean>(`${this.apiUrl}/edit-product/`, product)
      .pipe(
        map(response => {
          return response;
        }),
        catchError(this.handleError)
      );
  }
  // xoa gio hang
  removeProduct(id): Observable<boolean> {
    return this.http.delete<boolean>(`${this.apiUrl}/product/${id}/`)
      .pipe(
        map(response => {
          return response;
        }),
        catchError(this.handleError)
      );
  }
  // upload image
  uploadImage(dataForm, name): Observable<boolean> {
    return this.http.post<boolean>(`${this.apiUrl}/product/upload-image?name=${name}`, dataForm)
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
