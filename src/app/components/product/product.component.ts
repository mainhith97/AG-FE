import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/shared/interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  res: any;
  data: any;
  id: string;
  user: any;
  res1: any;
  data1: any;
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = params.id;
      this.getDetailProduct(this.id);
    });
  }
  getDetailProduct(id) {
    this.productService.getDetailProduct(id).subscribe(res => {
      this.res = res;
      console.log('done');
      if (this.res.success) {
        this.data = this.res.result;
        this.user = this.res.user;
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
