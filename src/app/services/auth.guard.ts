import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from './token.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router
 ) {}
 canActivate(): boolean {
     if (localStorage.getItem('userToken') == null) {
       return true;
     }
     this.router.navigate(['home']);
     return false;
 }

  //     const currentUser = await this.userService.getOwnUserInfo(token);
  //     if (currentUser) {
  //       return resolve(true);
  //     }

  //     this.router.navigate(['user']);
  //     console.log('true');
  //     return resolve(false);
  //   });
  // }

  // constructor(
  //   private router: Router, private tokenService: TokenService, private userService: UserService
  // ) { }

  // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
  //   const currentUser = this.userService.currentUserValue;
  //   if (currentUser) {
  //     console.log('true');
  //     return true;
  //   }
  //   this.router.navigate(['/login']);
  //   console.log('false');
  //   return false;
  // }
}
