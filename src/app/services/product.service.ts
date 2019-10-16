import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { environment as config } from '../../environments/environment';
import { throwError, Observable } from 'rxjs';
import { ISearch, Product, Request } from '../shared/interface';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Accept: 'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  apiUrl = config.apiUrl;
  productPrefix = 'product';
  userPrefix = 'user';

  // get list type
  getListType(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/type/`)
      .pipe(
        map(response => {
          return response;
        }),
        catchError(this.handleError)
      );
  }
  // get list product by category
  getListProductByType(id: number): Observable<boolean> {
    return this.http.get<boolean>(`${this.apiUrl}/type/${id}/`)
      .pipe(
        map(response => {
          return response;
        }),
        catchError(this.handleError)
      );
  }

  // lấy chi tiết sản phẩm
  getDetailProduct(id: number): Observable<boolean> {
    return this.http.get<boolean>(`${this.apiUrl}/product/${id}/`)
      .pipe(
        map(response => {
          return response;
        }),
        catchError(this.handleError)
      );
  }
  // nhận từ khoá tìm kiếm
  search(searchItem: ISearch): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/action/search/`, searchItem)
      .pipe(
        map(response => {
          return response;
        }),
        catchError(this.handleError)
      );
  }
  // lấy dữ liệu tìm kiếm đc
  getSearchResult(keyword: string): Observable<boolean> {
    return this.http.get<boolean>(`${this.apiUrl}/action/get_search_result/?keyword=${keyword}`)
      .pipe(
        map(response => {
          return response;
        }),
        catchError(this.handleError)
      );
  }

  // lấy sản phâm mới nhất
  getListNewest(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/product/get_list_newest/`)
      .pipe(
        map(response => {
          return response;
        }),
        catchError(this.handleError)
      );
  }
  // thêm vào giỏ hàng
  Cart(product: Product) {

    const option = {
      // tslint:disable-next-line: radix
      user: parseInt(localStorage.getItem('id')),
      product: product.id
    };
    console.log(option);
    return this.http.post<any>(`${this.apiUrl}/cart/`, option)
      .pipe(
        map(response => {
          return response;
        }),
        catchError(this.handleError)
      );
  }
  // danh sach gio hang
  getListCart(): Observable<any> {
    const user = localStorage.getItem('id');
    return this.http.get<any>(`${this.apiUrl}/cart/${user}`)
      .pipe(
        map(response => {
          return response;
        }),
        catchError(this.handleError)
      );
  }
  // xoa gio hang
  remove(id, quantity): Observable<boolean> {
    return this.http.delete<boolean>(`${this.apiUrl}/cart/${id}/`)
    .pipe(
        map(response => {
            return response;
        }),
        catchError(this.handleError)
    );
  }
  // tang giam so luong
  putQuantity(id, quantity, key): Observable<any> {
    let data = null;
    if (key === 'plus') {
      // tslint:disable-next-line: object-literal-key-quotes
      data = {'quantity': quantity + 1};
    } else if (key === 'minus') {
      // tslint:disable-next-line: object-literal-key-quotes
      data = {'quantity': quantity - 1};
    }
    return this.http.put<any>(`${this.apiUrl}/cart/${id}/`, data)
      .pipe(
        map(response => {
          return response;
        }),
        catchError(this.handleError)
      );
  }
  // dat hang
  addToHistory(id, username, totals, product): Observable<boolean> {
    // tslint:disable-next-line: object-literal-key-quotes
    const data = {'user_id': id,
                  // tslint:disable-next-line: object-literal-key-quotes
                  'name': username,
                  // tslint:disable-next-line: object-literal-key-quotes
                  'totals': totals,
                  // tslint:disable-next-line: object-literal-key-quotes
                  'products': product};
    return this.http.post<boolean>(`${this.apiUrl}/history/`, data)
    .pipe(
        map(response => {
            return response;
        }),
        catchError(this.handleError)
    );
  }
  // lich su dat hang
  getHistory(id: number): Observable<boolean> {
    return this.http.get<boolean>(`${this.apiUrl}/history/${id}`)
    .pipe(
        map(response => {
            return response;
        }),
        catchError(this.handleError)
    );
  }
  // post request
  postRequest(user, product, quantity, price, datetime): Observable<any> {
    // tslint:disable-next-line: object-literal-key-quotes
    const data = {'user_id': user,
                  // tslint:disable-next-line: object-literal-key-quotes
                  'product_id': product,
                  // tslint:disable-next-line: object-literal-key-quotes
                  'quantity' : quantity,
                  // tslint:disable-next-line: object-literal-key-quotes
                  'proposed_price': price,
                  // tslint:disable-next-line: object-literal-key-quotes
                  'datetime': datetime
    };
    return this.http.post<any>(`${this.apiUrl}/order/`, data)
      .pipe(
        map(response => {
          return response;
        }),
        catchError(this.handleError)
      );
  }

  // get list order by distributor
  getOrder(id: number): Observable<boolean> {
    return this.http.get<boolean>(`${this.apiUrl}/order/${id}/retrieve_by_distributor/`)
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
