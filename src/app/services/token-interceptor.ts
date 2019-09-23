import { TokenService } from './token.service';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { UserService } from './user.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  // constructor(private tokenService: TokenService, private router: Router) {}

  // intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any> | HttpResponse<any>> {
  //   const headersConfig = {
  //     'Content-Type': 'application/json',
  //     Accept: 'application/json'
  //   };
  //   const token = this.tokenService.getUserToken();
  //   if (token) {

  //     headersConfig['Authorization'] = `${token}`;
  //   }


  //   const _req = req.clone({ setHeaders: headersConfig });
  //   return next.handle(_req).pipe(
  //     map((res: HttpResponse<any>) => {
  //       if (res.body && !res.body.success) {
  //         this.router.navigate(['login']);
  //       }
  //       return res;
  //     })
  //   );
  // }

  constructor(private userService: UserService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        const currentUser = this.userService.currentUserValue;
        if (currentUser && currentUser.token) {
            request = request.clone({
                setHeaders: {
                  'Content-Type': 'application/json',
                    Authorization: `Bearer ${currentUser.token}`
                }
            });
        }

        return next.handle(request);
    }
}