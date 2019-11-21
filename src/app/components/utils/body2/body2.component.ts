import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/shared/interface';

@Component({
  selector: 'app-body2',
  templateUrl: './body2.component.html',
  styleUrls: ['./body2.component.scss']
})
export class Body2Component implements OnInit {

  res: any;
  data: any;
  res1: any;
  data1: any;
  count: any;
  arr: any;
  // tslint:disable-next-line: variable-name
  constructor(
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.getListPopular();
    this.sortFunction(this.arr);
  }

  getListPopular() {

    this.productService.getListPopular().subscribe(res => {
      this.res = res;
      if (this.res.success) {
        this.data = this.res.result;
      }
    });
  }
  sortFunction(arr) {
    // tslint:disable-next-line: only-arrow-functions
    return arr.slice().sort(function(a, b) {
      return b.count - a.count;
    }).slice(0, 4);
  }
  Cart(product: Product) {
    this.productService.Cart(product).subscribe(res1 => {
      this.res1 = res1;
      if (this.res1.success) {
        this.data1 = this.res1.response;
        // tslint:disable-next-line: radix
        const newCart = parseInt(localStorage.getItem('giohang')) + 1;
        localStorage.setItem('giohang', newCart.toString());
      }
    });
  }
}
