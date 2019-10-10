import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/shared/interface';

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
  // tslint:disable-next-line: variable-name
  constructor(
    private productService: ProductService
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
