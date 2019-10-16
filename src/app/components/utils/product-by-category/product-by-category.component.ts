import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Product } from 'src/app/shared/interface';


@Component({
  selector: 'app-product-by-category',
  templateUrl: './product-by-category.component.html',
  styleUrls: ['./product-by-category.component.scss']
})
export class ProductByCategoryComponent implements OnInit {

  res: any;
  res1: any;
  data: any;
  data1: any;
  id: number;

  constructor(private productService: ProductService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = params.id;
      this.getListProductByType(this.id);
    });
  }
  getListProductByType(id: number) {
    this.productService.getListProductByType(id).subscribe(res => {
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
