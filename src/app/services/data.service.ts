import { Category, Email, Password, UpdatePass } from './../shared/interface';

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
    'Content-Type': 'application/json'
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
  // lấy hồ sơ supplier
  getSupplier(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${this.userPrefix}/${id}/retrieve_supplier/`)
      .pipe(
        map(response => {
          return response;
        }),
        catchError(this.handleError)
      );
  }
  // lấy danh sach supplier
  getListSupplier(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${this.userPrefix}/list_supplier/`)
      .pipe(
        map(response => {
          return response;
        }),
        catchError(this.handleError)
      );
  }
  // lấy danh sach distributor
  getListDistributor(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${this.userPrefix}/list_distributor/`)
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
  // distributor update pass
  updatePass(value: UpdatePass): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${this.userPrefix}/${localStorage.getItem('id')}/change_password/`, value)
      .pipe(
        map(response => {
          return response;
        }),
        catchError(this.handleError)
      );
  }
  // supplier update pass
  supplierUpdatePass(value: UpdatePass): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${this.userPrefix}/${localStorage.getItem('id')}/change_password/`, value)
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
  // admin ban user
  removeUser(id): Observable<boolean> {
    return this.http.delete<boolean>(`${this.apiUrl}/user/${id}/`)
      .pipe(
        map(response => {
          return response;
        }),
        catchError(this.handleError)
      );
  }
  // admin lấy danh sách user bi ban
  getBannedUser(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/user/get_banned_users/`)
      .pipe(
        map(response => {
          return response;
        }),
        catchError(this.handleError)
      );
  }
  // admin khoi phuc user
  activateUser(id): Observable<boolean> {
    return this.http.put<boolean>(`${this.apiUrl}/user/${id}/activate/`, '')
      .pipe(
        map(response => {
          return response;
        }),
        catchError(this.handleError)
      );
  }
  // lấy dữ liệu tìm kiếm user
  getSearchUser(keyword: string): Observable<boolean> {
    return this.http.get<boolean>(`${this.apiUrl}/action/get_search_user/?keyword=${keyword}`)
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
    const data = { 'status': 'Successful delivery' };
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
    const data = { 'status': 'Accepted' };
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
    const data = { 'status': 'Declined' };
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
  removeCmt(id): Observable<boolean> {
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
  // farmer lấy detail comment
  getDetailComment(id: number): Observable<boolean> {
    return this.http.get<boolean>(`${this.apiUrl}/comment/${id}/`)
      .pipe(
        map(response => {
          return response;
        }),
        catchError(this.handleError)
      );
  }
  // farmer post reply comment
  postReply(user, comment, reply): Observable<boolean> {
    // tslint:disable-next-line: object-literal-key-quotes
    const data = {
      // tslint:disable-next-line: object-literal-key-quotes
      'provider_id': user,
      // tslint:disable-next-line: object-literal-key-quotes
      'cmt_id': comment,
      // tslint:disable-next-line: object-literal-key-quotes
      'reply': reply
    };
    return this.http.post<boolean>(`${this.apiUrl}/reply/`, data)
      .pipe(
        map(response => {
          return response;
        }),
        catchError(this.handleError)
      );
  }
  // farmer lấy danh sách reply
  getListReply(id: number): Observable<boolean> {
    return this.http.get<boolean>(`${this.apiUrl}/reply/${id}/retrieve_by_farmer/`)
      .pipe(
        map(response => {
          return response;
        }),
        catchError(this.handleError)
      );
  }
  // admin lấy danh sách reply
  getReply(): Observable<boolean> {
    return this.http.get<boolean>(`${this.apiUrl}/reply/`)
      .pipe(
        map(response => {
          return response;
        }),
        catchError(this.handleError)
      );
  }
  // admin xoa cmt
  removeReply(id): Observable<boolean> {
    return this.http.delete<boolean>(`${this.apiUrl}/reply/${id}/`)
      .pipe(
        map(response => {
          return response;
        }),
        catchError(this.handleError)
      );
  }
  // create product
  createProduct(value): Observable<boolean> {

    const formdt = new FormData();
    formdt.append('image', value.image);
    formdt.append('name', value.name);
    formdt.append('type', value.type);
    formdt.append('provider_id', value.provider_id);
    // formdt.append('in_stock', value.in_stock);
    formdt.append('unit', value.unit);
    formdt.append('price_per_unit', value.price_per_unit);
    formdt.append('verify', value.verify);
    formdt.append('description', value.description);
    formdt.append('detail', value.detail);

    return this.http.post<boolean>(`${this.apiUrl}/product/`, formdt
    );
    // .pipe(
    //   map(response => {
    //     return response;
    //   }),
    //   catchError(this.handleError)
    // );
  }
  // edit product
  editProduct(id, value): Observable<boolean> {
    const formdt = new FormData();
    if (value.image !== null) {
      formdt.append('image', value.image);
    }
    formdt.append('name', value.name);
    formdt.append('type', value.type);
    formdt.append('provider_id', value.provider_id);
    formdt.append('in_stock', value.in_stock);
    formdt.append('unit', value.unit);
    formdt.append('price_per_unit', value.price_per_unit);
    formdt.append('verify', value.verify);
    formdt.append('description', value.description);
    formdt.append('detail', value.detail);
    return this.http.put<boolean>(`${this.apiUrl}/product/${id}/`, formdt)
      .pipe(
        map(response => {
          return response;
        }),
        catchError(this.handleError)
      );
  }
  // xoa sp
  removeProduct(id): Observable<boolean> {
    return this.http.delete<boolean>(`${this.apiUrl}/product/${id}/`)
      .pipe(
        map(response => {
          return response;
        }),
        catchError(this.handleError)
      );
  }

  // farmer create product
  postProduct(value): Observable<boolean> {
    const formdt = new FormData();
    formdt.append('image', value.image);
    formdt.append('name', value.name);
    formdt.append('type', value.type);
    formdt.append('provider_id', value.provider_id);
    // formdt.append('in_stock', value.in_stock);
    formdt.append('unit', value.unit);
    formdt.append('price_per_unit', value.price_per_unit);
    formdt.append('verify', value.verify);
    formdt.append('description', value.description);
    formdt.append('detail', value.detail);

    return this.http.post<boolean>(`${this.apiUrl}/product/`, formdt
    );
  }
  // thong ke cua admin
  getStatistic(): Observable<boolean> {
    return this.http.get<boolean>(`${this.apiUrl}/action/get_statistic/`)
      .pipe(
        map(response => {
          return response;
        }),
        catchError(this.handleError)
      );
  }
  // thong ke cua farmer
  getStatisticbyFarmer(id): Observable<boolean> {
    return this.http.get<boolean>(`${this.apiUrl}/action/${id}/get_statistic_by_farmer/`)
      .pipe(
        map(response => {
          return response;
        }),
        catchError(this.handleError)
      );
  }

  // them type
  postType(value: Category): Observable<boolean> {
    return this.http.post<boolean>(`${this.apiUrl}/type/`, value)
      .pipe(
        map(response => {
          return response;
        }),
        catchError(this.handleError)
      );
  }
  // chi tiet type
  getType(id): Observable<boolean> {
    return this.http.get<boolean>(`${this.apiUrl}/type/${id}/retrieve_type/`)
      .pipe(
        map(response => {
          return response;
        }),
        catchError(this.handleError)
      );
  }
  // edit type
  editType(id, value: Category): Observable<boolean> {
    return this.http.put<boolean>(`${this.apiUrl}/type/${id}/`, value)
      .pipe(
        map(response => {
          return response;
        }),
        catchError(this.handleError)
      );
  }
  // xoa type
  removeType(id): Observable<boolean> {
    return this.http.delete<boolean>(`${this.apiUrl}/type/${id}/`)
      .pipe(
        map(response => {
          return response;
        }),
        catchError(this.handleError)
      );
  }
  // enter email
  postEmail(value: Email): Observable<boolean> {
    return this.http.post<boolean>(`${this.apiUrl}/action/forgot_password/`, value)
      .pipe(
        map(response => {
          return response;
        }),
        catchError(this.handleError)
      );
  }
  // change_password
  changePassword(value: Password): Observable<boolean> {
    return this.http.post<boolean>(`${this.apiUrl}/action/change_password/`, value)
      .pipe(
        map(response => {
          return response;
        }),
        catchError(this.handleError)
      );
  }
  // farmer lấy detail order
  getDetailOrder(id: number): Observable<boolean> {
    return this.http.get<boolean>(`${this.apiUrl}/order/${id}/`)
      .pipe(
        map(response => {
          return response;
        }),
        catchError(this.handleError)
      );
  }
  // post reason
  postReason(user, order, reason): Observable<boolean> {
    // tslint:disable-next-line: object-literal-key-quotes
    const data = {
      // tslint:disable-next-line: object-literal-key-quotes
      'supplier_id': user,
      // tslint:disable-next-line: object-literal-key-quotes
      'order_id': order,
      // tslint:disable-next-line: object-literal-key-quotes
      'reason': reason
    };
    return this.http.post<boolean>(`${this.apiUrl}/reason/`, data)
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
