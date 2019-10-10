import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.scss']
})
export class MyCartComponent implements OnInit {
  res: any;
  data: any;
  totals: any;
  cart: any;
  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit() {
    this.getListCart();
    this.cart = this.readLocalStorageValue('giohang');
    console.log(this.cart);
  }

  // check localstorage
  readLocalStorageValue(key: string) {
    return localStorage.getItem(key);
  }
  getListCart() {

    this.productService.getListCart().subscribe(res => {
      this.res = res;
      if (this.res.success) {
        this.data = this.res.result;
        this.totals = this.res.totals;
      }
    });
  }

  remove(id: any, quantity: any) {
    if (confirm('Bạn muốn xoá sản phẩm này?')) {
      this.productService.remove(id, quantity).subscribe(res => {
        this.res = res;
        if (this.res.success) {
          this.getListCart();
          // tslint:disable-next-line: radix
          const newCart = (parseInt(localStorage.getItem('giohang')) - quantity).toString();
          localStorage.setItem('giohang', newCart);
        }
      });
    }
  }
}
