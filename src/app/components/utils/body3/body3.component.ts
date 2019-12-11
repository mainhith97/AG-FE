import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/shared/interface';
import { timeout } from 'q';

@Component({
  selector: 'app-body3',
  templateUrl: './body3.component.html',
  styleUrls: ['./body3.component.scss']
})
export class Body3Component implements OnInit {

  res: any;
  data: any;
  res1: any;
  data1: any;
  res6: any;
  data6: any;
  // tslint:disable-next-line: variable-name
  constructor(
    private productService: ProductService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.getListNewest();
  }

  getListNewest() {

    this.productService.getListNewest().subscribe(res => {
      this.res = res;
      if (this.res.success) {
                this.data = this.res.result;
      }
    });
  }

  // check localstorage
  readLocalStorageValue(key: string) {
    return localStorage.getItem(key);
  }
  Cart(product: Product) {
    if (this.readLocalStorageValue('id')) {
      this.productService.Cart(product).subscribe(res1 => {
        this.res1 = res1;
        if (this.res1.success) {
          this.data1 = this.res1.response;
          // tslint:disable-next-line: radix
          const newCart = parseInt(localStorage.getItem('giohang')) + 1;
          localStorage.setItem('giohang', newCart.toString());
          this.toastr.success('The product has been added to cart!');
        }
      });
    } else {
      this.router.navigate(['login']);
    }

  }
  Waiting(product: Product) {
    if (this.readLocalStorageValue('id')) {
      this.productService.Waiting(product).subscribe(res6 => {
        this.res6 = res6;
        if (this.res6.success) {
          this.data6 = this.res6.response;
          this.router.navigate(['waiting-list']);
        }
      }, error => {
        console.log(error);
        this.toastr.error(error);
      });
    } else {
      this.router.navigate(['login']);
    }
  }
}
